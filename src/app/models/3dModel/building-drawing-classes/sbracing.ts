import { CGlobal } from "./CGlobal";
import * as BABYLON from 'babylonjs';
import { IBuildingGeometry } from "../imodel/ibuilding-geometry";
import { IBuildingData } from "../ibuildingdata";
import { BuildingDrawingEnum } from "../building-drawing.enum";
import { IFramelines } from "../imodel/iframelines";
import { IColumns } from "../imodel/icolumns";
import { BuildingDrawingColor } from './building-drawing-color';
import { BabylonModelData } from "../babylon-model";

export class SBracing {
  I_BuildingData: IBuildingData;
  building_number: number;
  globals: CGlobal;
  Colors: BuildingDrawingColor;
  constructor(bldgNum: number, globals: CGlobal, iBuildingData: IBuildingData, isDarkBackGround: boolean) {
    this.I_BuildingData = iBuildingData;
    this.building_number = bldgNum;
    this.globals = globals;
    this.Colors = new BuildingDrawingColor(isDarkBackGround);
  }

  GetGridlineCount() {
    let nGridlineCount = 0;
    let pTempDistances = this.GetGridlineDistances(this.building_number, nGridlineCount);
    return pTempDistances.gridline_count;
  }

  GetGridlineDistances(building_number: number, gridline_count: number) {
    // Get building geometry
    let found_building: boolean = false;
    let pBuilding: IBuildingGeometry = this.I_BuildingData.IBuildingGeometry?.find(x => x?.BuildingNumber == building_number);

    // Set initial grid line distances for sidewalls
    gridline_count = 2;
    let pGridlineDistances: number[] = new Array(2);
    pGridlineDistances[0] = 0.0;
    pGridlineDistances[1] = pBuilding?.Width;

    this.I_BuildingData.IGroups?.filter(x => x.BuildingNumber == pBuilding?.BuildingNumber)?.forEach((pGroup) => {
      if (pGroup?.BuildingNumber == pBuilding?.BuildingNumber) {
        let nModuleCount = 1;
        let pModuleSpaces: number[];

        // Get this frameline's module count
        this.I_BuildingData.IColumns.filter(x => x.BuildingNumber == pGroup?.BuildingNumber).forEach((pColumn) => {
          if (pColumn.BuildingNumber == pGroup?.BuildingNumber && pColumn.GroupNumber == pGroup?.GroupNumber)
            nModuleCount++;
        });

        if (nModuleCount > 1) {
          pModuleSpaces = new Array(nModuleCount);

          // Get this frame group's module spacing
          this.I_BuildingData.IModules?.filter(x => x.BuildingNumber == pGroup?.BuildingNumber)?.forEach((pModule) => {
            if (pModule?.BuildingNumber == pGroup?.BuildingNumber && pModule?.GroupNumber == pGroup?.GroupNumber) {
              pModuleSpaces[pModule?.ModuleNumber - 1] = pModule?.Width;
            }
          });

          // Add gridlines to main list
          for (let i = 1; i < nModuleCount; i++) {
            let distanceFromSidewall = 0.0;

            let j = i;
            while (j > 0) {
              distanceFromSidewall += pModuleSpaces[--j];
            }

            let bInserted = false;
            let bSkip = false;
            for (let k = gridline_count - 1; k >= 0 && (!bInserted && !bSkip); k--) {
              if (distanceFromSidewall > pGridlineDistances[k]) {
                let pTempDistances = pGridlineDistances;
                pGridlineDistances = new Array(++gridline_count);

                for (let m = 0; m < gridline_count; m++) {
                  if (m < (k + 1)) { pGridlineDistances[m] = pTempDistances[m]; }
                  else if (m == (k + 1)) { pGridlineDistances[m] = distanceFromSidewall; }
                  else { pGridlineDistances[m] = pTempDistances[m - 1]; }
                }
                bInserted = true;
              }
              else if (distanceFromSidewall == pGridlineDistances[k]) {
                bSkip = true;
              }
            }
          }
        }
      }
    });
    let ReturnData: GridLineDistanceReturnData = new GridLineDistanceReturnData();
    ReturnData.pGridlineDistances = pGridlineDistances;
    ReturnData.gridline_count = gridline_count;
    return ReturnData;
  }


  GetBracedBays(gridline_number: number, bay_count: number) {
    let pBracedBays: boolean[] = new Array(bay_count);

    let gridline_count = 0;
    let pGridlineDistances = this.GetGridlineDistances(this.building_number, gridline_count);
    gridline_count = pGridlineDistances.gridline_count;
    if (gridline_number > 0 && gridline_number <= gridline_count - 1) {
      let nTemp = 0;
      let pBracableBays = this.GetBraceableBays(gridline_number, nTemp);
      //console.log("pBracableBays :" + JSON.stringify(pBracableBays));
      for (let i = 0; i < bay_count; i++) {
        if (pBracableBays[i] == 1) {
          let nBayNumber = i + 1;
          pBracedBays[i] = this.isBayBraced(gridline_number, nBayNumber);
        }
        else
          pBracedBays[i] = false;
      }
    }
    return pBracedBays;
  }


  GetBraceableBays(gridline_number: number, braceable_bay_count: number) {
    let nBayCount: number = 0;
    let pBraceableBays: number[];

    braceable_bay_count = 0;

    // get building geometry
    let pBuilding: IBuildingGeometry = this.I_BuildingData.IBuildingGeometry?.find(x => x?.BuildingNumber == this.building_number);

    // get total number of bays
    let sw1: string;
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL)
      sw1 = BuildingDrawingEnum.ID_WALL_A;
    else
      sw1 = BuildingDrawingEnum.ID_WALL_D;
    nBayCount = this.Number_of_Bays(this.building_number, sw1, false); // Need number of framelines so use roof bays.

    // initialize braceable bay integer array
    pBraceableBays = new Array(nBayCount);
    for (let cnt = 0; cnt < nBayCount; cnt++) {
      pBraceableBays[cnt] = 0;
    }

    // get grid line distance from back sidewall
    let nGridlineCount: number = 0;
    let pGridlineDistances = this.GetGridlineDistances(this.building_number, nGridlineCount);
    let distanceFromSidewall = pGridlineDistances.pGridlineDistances[gridline_number - 1];

    // get frame groups on this grid line
    let nGridlineGroupCount = 0;
    let pGridlineGroups: number[];
    this.I_BuildingData.IGroups?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pGroup) => {
      if (pGroup?.BuildingNumber == this.building_number) {
        this.I_BuildingData.IModules?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pModule) => {
          if (pModule?.BuildingNumber == this.building_number && pModule?.GroupNumber == pGroup?.GroupNumber) {
            // get module distance from sidewall
            let nModuleNumber = pModule?.ModuleNumber;
            let moduleDistanceFromSidewall = 0.0;

            this.I_BuildingData.IModules?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pTemp) => {
              if (pTemp?.BuildingNumber == this.building_number && pTemp?.GroupNumber == pGroup?.GroupNumber && pTemp?.ModuleNumber < nModuleNumber) {
                moduleDistanceFromSidewall += pTemp?.Width;
              }
            });

            // if module starts at specified gridline, add it to the array
            if (distanceFromSidewall == moduleDistanceFromSidewall) {
              let pTempGroups: number[] = pGridlineGroups;
              pGridlineGroups = new Array(++nGridlineGroupCount);
              if (pTempGroups != null) {
                for (let i = 0; i < nGridlineGroupCount - 1; i++) {
                  pGridlineGroups[i] = pTempGroups[i];
                }
              }
              pGridlineGroups[nGridlineGroupCount - 1] = pGroup?.GroupNumber;
            }
          }
        });
      }
    });

    // for each frame line, if the frame line to the right is in the same group, then the bay is braceable (if a TRE crane is present)
    for (let i = 0; i < nGridlineGroupCount; i++) {
      let nGroupNumber = pGridlineGroups[i];
      this.I_BuildingData.IFramelines?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pFrameline) => {
        let bBraceableBay = false;

        if (pFrameline?.BuildingNumber == this.building_number && pFrameline?.GroupNumber == nGroupNumber) {
          let found_right_frameline = false;
          this.I_BuildingData.IFramelines?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pTemp) => {
            if (pTemp?.BuildingNumber == this.building_number && pTemp?.FrameLineNumber == pFrameline?.FrameLineNumber + 1) {
              if (pTemp?.GroupNumber == nGroupNumber) {
                bBraceableBay = true;
              }
              found_right_frameline = true;
            }
          });
        }
        if (bBraceableBay) {
          pBraceableBays[pFrameline?.FrameLineNumber - 1] = 1;
          braceable_bay_count++;
        }
      });
    }
    //console.log("Return :" + JSON.stringify(pBraceableBays));
    return pBraceableBays;
  }


  Number_of_Bays(Building: number, elev: string, include_soldier_columns: boolean) {
    let count = 0;

    this.I_BuildingData.IBays?.filter(x => x.BuildingNumber == Building)?.forEach((bays) => {
      if (bays?.BuildingNumber == Building && bays?.Elevation == elev) {
        count++;
      }
    });

    if (include_soldier_columns) {
      this.I_BuildingData.IOSoldierColumns?.filter(x => x.BuildingNumber == Building)?.forEach((soldier_columns) => {
        if (soldier_columns?.BuildingNumber == Building && soldier_columns?.Elevation == elev)
          count++;
      })
    }
    return (count);
  }


  isBayBraced(gridline_number: number, bay_number: number) {
    let tRerurn: boolean = false;
    let pFrameline_left: IFramelines;
    let pFrameline_right: IFramelines;

    this.I_BuildingData.IFramelines?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pFrameline?) => {
      if (pFrameline?.BuildingNumber == this.building_number) {
        if (pFrameline?.FrameLineNumber == bay_number)
          pFrameline_left = pFrameline;
        else if (pFrameline?.FrameLineNumber == bay_number + 1)
          pFrameline_right = pFrameline;
      }
    });

    if (pFrameline_left != null && pFrameline_right != null) {
      if (pFrameline_left.GroupNumber == pFrameline_right.GroupNumber) {
        // get gridline_count & gridline_spacing
        let gridline_count = 0;
        let ReturnData = this.GetGridlineDistances(this.building_number, gridline_count);
        let pGridlineDistances = ReturnData.pGridlineDistances;
        if (gridline_number > 0 && gridline_number < ReturnData.gridline_count) {
          let gridline_distance = pGridlineDistances[gridline_number - 1];

          this.I_BuildingData.IModules?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pModule) => {
            if (pModule?.BuildingNumber == this.building_number && pModule?.GroupNumber == pFrameline_left.GroupNumber) {
              let module_end_distance = pModule?.Width;
              this.I_BuildingData.IModules?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pModuleTemp) => {
                if (pModuleTemp?.BuildingNumber == this.building_number && pModuleTemp?.GroupNumber == pModule?.GroupNumber && pModuleTemp?.ModuleNumber < pModule?.ModuleNumber) {
                  module_end_distance += pModuleTemp?.Width;
                }
              });

              if (module_end_distance == gridline_distance) {
                let found_columns = false;
                let pColumns: IColumns;
                this.I_BuildingData.IColumns?.filter(x => x.BuildingNumber == this.building_number)?.forEach((Columns) => {
                  if (Columns?.BuildingNumber == this.building_number && Columns?.GroupNumber == pModule?.GroupNumber && Columns?.ColumnNumber == pModule?.ModuleNumber) {
                    found_columns = true;
                    pColumns = Columns;
                  }
                });

                if (found_columns) {
                  let s: string = pColumns.BracedBays;
                  let delim = ",";

                  let token: string;
                  s = s.replace(" ", "");
                  let pos = 0;
                  while ((pos = s.indexOf(delim)) != -1) {
                    token = s.substr(0, pos);
                    let strBayNumber = token;
                    let nBayNumber = +strBayNumber;

                    if (nBayNumber == bay_number) {
                      tRerurn = true;
                    }
                    s = s.substr(pos + 1, s.length);
                  }
                  let strBayNumber: string = s;
                  let nBayNumber = +strBayNumber;

                  if (nBayNumber == bay_number) {
                    tRerurn = true;
                  }
                }
              }
            }

          });
        }
      }
    }
    return tRerurn;
  }


  isColumnOnGridline(distance_from_sidewall: number, gridline_number: number) {
    // get gridline_count & gridline_spacing
    let gridline_count = 0;
    let ReturnData = this.GetGridlineDistances(this.building_number, gridline_count);
    let pGridlineDistances = ReturnData.pGridlineDistances;
    if (gridline_number > 0 && gridline_number < ReturnData.gridline_count) {
      let gridline_distance = pGridlineDistances[gridline_number - 1];
      return ((distance_from_sidewall == gridline_distance) ? true : false);
    }
    return false;
  }

  // Returns 0 if the two are equal within the fudge_val
  // Returns -1 if first_val is less than the second_val
  // Returns 1 if the first_val is greater than the second_val
  CompareDoubles(first_val: number, second_val: number, fudge_val: number = 0) {
    if (first_val < (second_val - fudge_val))
      return -1;
    else if (first_val > (second_val + fudge_val))
      return 1;
    else
      return 0;
  }



  GetGridlineDistance(gridline_number) {
    let distance = 0.0;

    let nGridlineCount = 0;
    let ReturnData = this.GetGridlineDistances(this.building_number, nGridlineCount);
    let pGridlineDistances = ReturnData.pGridlineDistances;
    if (gridline_number > 0 && gridline_number <= ReturnData.gridline_count) {
      distance = pGridlineDistances[gridline_number - 1];
    }
    return distance;
  }

  Draw(gridline_number: number, bay_number: number, start_height: number, bracing_height: number, include_pipe_strut: boolean, babylonModel: BabylonModelData) {
    // get the building
    let pBuilding: IBuildingGeometry = this.I_BuildingData.IBuildingGeometry?.find(x => x?.BuildingNumber == this.building_number);
    //pBuilding.XCoordinate = 0;
    //pBuilding.YCoordinate = 0;
    let rotationangle = new BABYLON.Vector3(0, Math.PI / 2, 0);
    // get the bay data
    let bay_x = 0.0;
    let bay_width = 0.0;
    this.I_BuildingData.IBays?.filter(x => x.BuildingNumber == this.building_number)?.forEach((pBay) => {
      if (pBay?.BuildingNumber == this.building_number && pBay?.Elevation == this.globals.frontLetter) {
        if (pBay?.BayNumber < bay_number)
          bay_x += pBay?.Width;
        else if (pBay?.BayNumber == bay_number)
          bay_width = pBay?.Width;
      }

    });



    // get the gridline location
    let gridline_offset = this.GetGridlineDistance(gridline_number);
    let gridline_x1 = bay_x;
    let gridline_x2 = bay_x + bay_width;
    let gridline_y = (pBuilding?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) ? pBuilding?.Width - gridline_offset : gridline_offset;

    let LowerLeft = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let UpperRight = new BABYLON.Vector3(0.0, 0.0, 0.0);

    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
      LowerLeft.set(gridline_x1 * 12.0, gridline_y * 12.0, start_height * 12.0);
      UpperRight.set(gridline_x2 * 12.0, gridline_y * 12.0, (start_height + bracing_height) * 12.0);
    }
    else {
      LowerLeft.set(gridline_y * 12.0, gridline_x1 * 12.0, start_height * 12.0);
      UpperRight.set(gridline_y * 12.0, gridline_x2 * 12.0, (start_height + bracing_height) * 12.0);
    }

    let bldg_offset: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    LowerLeft.x += bldg_offset.x * 12.0;
    LowerLeft.y += bldg_offset.y * 12.0;
    UpperRight.x += bldg_offset.x * 12.0;
    UpperRight.y += bldg_offset.y * 12.0;

    let left_brace: BABYLON.Vector3[] = new Array(2);
    left_brace[0] = new BABYLON.Vector3(LowerLeft.x, LowerLeft.y, LowerLeft.z);
    left_brace[1] = new BABYLON.Vector3(UpperRight.x, UpperRight.y, UpperRight.z);

    let right_brace: BABYLON.Vector3[] = new Array(2);
    right_brace[0] = new BABYLON.Vector3(UpperRight.x, UpperRight.y, LowerLeft.z);
    right_brace[1] = new BABYLON.Vector3(LowerLeft.x, LowerLeft.y, UpperRight.z);


    const pLine_left = BABYLON.Mesh.CreateLines("pLine_left", this.globals.SwapYZCordinate(left_brace), babylonModel.Scene, false);
    pLine_left.color = this.Colors.BracingColor;
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
      pLine_left.rotation = rotationangle;
      pLine_left.position.z = pBuilding?.Width * 12;
    }
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(pLine_left);

    const pLine_right = BABYLON.Mesh.CreateLines("pLine_right", this.globals.SwapYZCordinate(right_brace), babylonModel.Scene, false);
    pLine_right.color = this.Colors.BracingColor;
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
      pLine_right.rotation = rotationangle;
      pLine_right.position.z = pBuilding?.Width * 12;
    }
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(pLine_right);

    // Draw pipe strut
    if (include_pipe_strut) {
      let pipe_strut: BABYLON.Vector3[] = new Array(2);
      pipe_strut[0] = new BABYLON.Vector3(LowerLeft.x, LowerLeft.y, UpperRight.z + 6.0);
      pipe_strut[1] = new BABYLON.Vector3(UpperRight.x, UpperRight.y, UpperRight.z + 6.0);

      const pLine_strut = BABYLON.Mesh.CreateLines("pLine_strut", this.globals.SwapYZCordinate(pipe_strut), babylonModel.Scene, false);
      pLine_strut.color = this.Colors.BracingColor;
      if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
        pLine_strut.rotation = rotationangle;
        pLine_strut.position.z = pBuilding?.Width * 12;
      }
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(pLine_strut);
    }
  }

}


export class GridLineDistanceReturnData {
  pGridlineDistances: number[];
  gridline_count: number;
}
