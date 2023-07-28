import { CGlobal } from './../building-drawing-classes/cglobal';
import * as BABYLON from 'babylonjs';
import { BuildingDrawingEnum } from './../../3dModel/building-drawing.enum';
import { IBuildingGeometry } from "./../imodel/ibuilding-geometry";
import { IEWRecess } from './../imodel/iewrecess';
import { IGroups } from './../imodel/igroups';
import { CBsDraw } from './../building-drawing-classes/cbs-draw';
import { IEndwalls } from './../imodel/iendwalls';
import { BuildingDrawingColor } from './../building-drawing-classes/building-drawing-color';
import { IBuildingData } from './../ibuildingdata';
import { CCanopy } from './../building-drawing-classes/ccanopy';
import { BayWidthReturnData } from './../imodel/i-canopy';
import { IBays } from './../imodel/ibays';
import { IOSoldierColumns } from './../imodel/io_soldiercolumns';
///import { ICranes } from './../Model/imodel/i-cranes';
import { IFramelines } from './../imodel/iframelines';
import { IModules } from './../imodel/imodules';
import { BabylonModelData } from './../babylon-model';
import { BuildingLayerEnum } from '../building-layer.enum';
//import { Line } from 'babylonjs-gui';
//import { ICranes } from '../imodel/i-cranes';
export class CFrame {

  globals: CGlobal;
  buildingDrawingColor: BuildingDrawingColor;
  constructor(globals: CGlobal, isDarkBackGround: boolean) {
    this.globals = globals;
    this.buildingDrawingColor = new BuildingDrawingColor(isDarkBackGround);
  }

  Draw_Endwalls(
    bldgLength: number,
    bldgWidth: number,
    frontEaveHt: number,
    backEaveHt: number,
    frontDistToRidge: number,
    backDistToRidge: number,
    peakHt: number,
    clmDistY: number,
    elevation: string,
    whichBay: number,
    buildinggeometry: IBuildingGeometry,
    lstIEWRecess: IEWRecess[],
    lstIGroups: IGroups[],
    lstEndWall: IEndwalls[],
    lstIBays: IBays[],
    lstIOSoldierColumns: IOSoldierColumns[],
    babylonModel: BabylonModelData
  ): void {
    let MeshElevation = " - " + elevation;

    let canopy: CCanopy;
    this.globals.entColor = 12;

    let startClm = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let endClm = new BABYLON.Vector3(0.0, 0.0, 0.0);

    // for corner columns
    let startLeftCrnClm = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let endLeftCrnClm = new BABYLON.Vector3(0.0, 0.0, 0.0);

    // column recession
    let left_col_recess: number = 0.0;
    let right_col_recess: number = 0.0;

    let slope: number = 0.0;
    let leftBrcZ: number = 0.0;

    let saveClmHtLeft: number = 0.0;
    let saveClmHtRight: number = 0.0;

    let rafter_peak_height: number = 0.0;
    let rafter_peak_inset: number = 0.0;
    let hip_slope: number = 0.0;
    let draw_hip_framing: boolean = false;
    let bay_width: number = 1;

    let bay_count: number = 0;
    let bay_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);
    let bays: IBays = new IBays();
    if (elevation == this.globals.leftLetter && this.globals.leftWallHip) {
      let eave_height = buildinggeometry?.EaveHeight1 * 12.0;
      let peak_height = buildinggeometry?.PeakHeight * 12.0;
      let roof_height = peak_height - eave_height;
      canopy = new CCanopy(this.globals, this.buildingDrawingColor._isWhiteBackGround);
      var bayWidthData: BayWidthReturnData = canopy.Get_Bay_Widths(buildinggeometry?.BuildingNumber, this.globals.frontLetter, false, lstIBays, lstIOSoldierColumns);
      bay_widths = bayWidthData.bay_widths;
      bay_count = bayWidthData.num_bays;
      bay_width = bay_widths[0] * 12.0;
      hip_slope = (roof_height / bay_width) * 12.0;
      bays = bayWidthData.bays;
    }
    else if (elevation == this.globals.rightLetter && this.globals.rightWallHip) {
      let eave_height = buildinggeometry?.EaveHeight1 * 12.0;
      let peak_height = buildinggeometry?.PeakHeight * 12.0;
      let roof_height = peak_height - eave_height;
      canopy = new CCanopy(this.globals, this.buildingDrawingColor._isWhiteBackGround);
      var bayWidthData: BayWidthReturnData = canopy.Get_Bay_Widths(buildinggeometry?.BuildingNumber, this.globals.backLetter, false, lstIBays, lstIOSoldierColumns);
      bay_widths = bayWidthData.bay_widths;
      bay_count = bayWidthData.num_bays;
      bay_width = bay_widths[0] * 12.0;
      hip_slope = (roof_height / bay_width) * 12.0;
      bays = bayWidthData.bays;
    }

    let numBays: number = 0;

    // get column recess info
    lstIEWRecess?.filter(x => x.BuildingNumber == buildinggeometry?.BuildingNumber)?.forEach((ew_recess) => {
      if (ew_recess?.BuildingNumber == buildinggeometry?.BuildingNumber && ew_recess?.Elevation == elevation) {
        if (ew_recess?.ColumnNumber == whichBay && !ew_recess?.IsFrameColumn)		// left recess
          left_col_recess = ew_recess?.Recess / 12.0;
        if (ew_recess?.ColumnNumber == whichBay + 1 && !ew_recess?.IsFrameColumn)	// right recess
          right_col_recess = ew_recess?.Recess / 12.0;
      }
    });


    let located_in_hip_area: boolean = false;
    let hip_col_recess: number = 0.0;
    if ((elevation == this.globals.leftLetter && this.globals.leftWallHip) || (elevation == this.globals.rightLetter && this.globals.rightWallHip)) {
      located_in_hip_area = true;

      const LEFT_HIP_GROUP_NUMBER = 10;
      const RIGHT_HIP_GROUP_NUMBER = 12;
      let HIP_GROUP_NUMBER = (elevation == this.globals.leftLetter) ? LEFT_HIP_GROUP_NUMBER : RIGHT_HIP_GROUP_NUMBER;

      let found_group: boolean = false;
      lstIGroups?.filter(x => x.BuildingNumber == buildinggeometry?.BuildingNumber)?.forEach((pGroup) => {
        if (!found_group) {
          if (pGroup?.BuildingNumber == buildinggeometry?.BuildingNumber && pGroup?.GroupNumber == HIP_GROUP_NUMBER) {
            found_group = true;
            hip_col_recess = pGroup?.ExtColRecession1;
          }
        }
      });
    }

    if (elevation == this.globals.leftLetter &&
      (buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
        buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO)) {
      numBays = this.globals.numBaysLeft;

      // if it's the first bay, set stuff.....
      if (whichBay == 1) {
        // set clm start and end points
        startLeftCrnClm.x = 0.0;
        startLeftCrnClm.y = bldgWidth;
        startLeftCrnClm.z = 0.0 - left_col_recess;

        endLeftCrnClm.x = 0.0;
        endLeftCrnClm.y = bldgWidth;
        endLeftCrnClm.z = backEaveHt;
      }

      if (clmDistY <= backDistToRidge)//bays under back roof
      {
        slope = this.globals.backRoofSlope;

        if (located_in_hip_area) { right_col_recess = hip_col_recess / 12.0; }

        // set clm start and end points
        startClm.x = 0.0;
        startClm.y = bldgWidth - clmDistY;
        startClm.z = 0.0 - right_col_recess;

        endClm.x = 0.0;
        endClm.y = bldgWidth - clmDistY;

        if (!this.globals.leftWallHip) {
          endClm.z = backEaveHt + (Math.tan(slope) * clmDistY);
        }
        else {
          endClm.z = backEaveHt;
          rafter_peak_height = backEaveHt + ((buildinggeometry?.RoofSlope2 / 12.0) * clmDistY);
          if (clmDistY == backDistToRidge)
            rafter_peak_inset = bay_width / 12.0;
          else
            rafter_peak_inset = (rafter_peak_height - backEaveHt) / (hip_slope / 12.0);
          draw_hip_framing = true;
        }

        // reset the previous clm ht
        saveClmHtLeft = endClm.z;
      }
      else if (clmDistY > backDistToRidge && ((clmDistY - bays.Width) >= backDistToRidge))//bays under front roof
      {
        slope = this.globals.frontRoofSlope;

        if (located_in_hip_area) { right_col_recess = hip_col_recess / 12.0; }

        // set clm start and stop points
        startClm.x = 0.0;
        startClm.y = bldgWidth - clmDistY;
        startClm.z = 0.0 - right_col_recess;

        endClm.x = 0.0;
        endClm.y = bldgWidth - clmDistY;

        if (!this.globals.leftWallHip) {
          endClm.z = frontEaveHt + (Math.tan(slope) * (bldgWidth - clmDistY));
        }
        else {
          endClm.z = frontEaveHt;
          rafter_peak_height = frontEaveHt + ((buildinggeometry?.RoofSlope1 / 12.0) * (bldgWidth - clmDistY));
          rafter_peak_inset = (rafter_peak_height - frontEaveHt) / (hip_slope / 12.0);

          if (clmDistY != buildinggeometry?.Width) {
            draw_hip_framing = true;
          }
        }

        // reset the previous clm ht
        saveClmHtLeft = endClm.z;
      }
      else //bays that are located in crossover from back roof to front roof //NKS
      {
        slope = this.globals.frontRoofSlope;

        if (located_in_hip_area) { right_col_recess = hip_col_recess / 12.0; }

        // set clm start and stop points
        startClm.x = 0.0;
        startClm.y = bldgWidth - clmDistY;
        startClm.z = 0.0 - right_col_recess;

        endClm.x = 0.0;
        endClm.y = bldgWidth - clmDistY;

        if (!this.globals.leftWallHip) {
          endClm.z = frontEaveHt + (Math.tan(slope) * (bldgWidth - clmDistY));
        }
        else {
          endClm.z = frontEaveHt;
          rafter_peak_height = frontEaveHt + ((buildinggeometry?.RoofSlope1 / 12.0) * (bldgWidth - clmDistY));
          rafter_peak_inset = (rafter_peak_height - frontEaveHt) / (hip_slope / 12.0);
          draw_hip_framing = true;
        }

        // reset the previous clm ht
        saveClmHtLeft = endClm.z;

      }
      this.globals.ewClmsLeft[this.globals.numLeftEwClms] = new BABYLON.Vector3();
      this.globals.ewClmsLeft[this.globals.numLeftEwClms].x = endClm.x;
      this.globals.ewClmsLeft[this.globals.numLeftEwClms].y = endClm.y;
      this.globals.ewClmsLeft[this.globals.numLeftEwClms++].z = endClm.z;
    }
    else if (elevation == this.globals.rightLetter &&
      (buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
        buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO)) {
      numBays = this.globals.numBaysRight;

      // if it's the first bay, set stuff.....
      if (whichBay == 1) {
        // set clm start and end points
        startLeftCrnClm.x = bldgLength;
        startLeftCrnClm.y = 0.0;
        startLeftCrnClm.z = 0.0 - left_col_recess;

        endLeftCrnClm.x = bldgLength;
        endLeftCrnClm.y = 0.0;
        endLeftCrnClm.z = frontEaveHt;
      }

      if (clmDistY <= frontDistToRidge) {
        slope = this.globals.frontRoofSlope;

        if (located_in_hip_area) { right_col_recess = hip_col_recess / 12.0; }

        // set clm start and end points
        startClm.x = bldgLength;
        startClm.y = clmDistY;
        startClm.z = 0.0 - right_col_recess;

        endClm.x = bldgLength;
        endClm.y = clmDistY;

        if (!this.globals.rightWallHip) {
          endClm.z = frontEaveHt + (Math.tan(slope) * clmDistY);
        }
        else {
          endClm.z = frontEaveHt;
          rafter_peak_height = frontEaveHt + ((buildinggeometry?.RoofSlope1 / 12.0) * clmDistY);
          if (clmDistY == frontDistToRidge)
            rafter_peak_inset = bay_width / 12.0;
          else
            rafter_peak_inset = (rafter_peak_height - frontEaveHt) / (hip_slope / 12.0);
          draw_hip_framing = true;
        }

        // reset the previous clm ht
        saveClmHtRight = endClm.z;
      }
      else if (clmDistY > frontDistToRidge && ((clmDistY - bays?.Width) >= frontDistToRidge))//bays under front roof
      {
        slope = this.globals.backRoofSlope;

        if (located_in_hip_area) { right_col_recess = hip_col_recess / 12.0; }

        // set clm start and end points
        startClm.x = bldgLength;
        startClm.y = clmDistY;
        startClm.z = 0.0 - right_col_recess;

        endClm.x = bldgLength;
        endClm.y = clmDistY;

        if (!this.globals.rightWallHip) {
          endClm.z = backEaveHt + (Math.tan(slope) * (bldgWidth - clmDistY));
        }
        else {
          endClm.z = backEaveHt;
          rafter_peak_height = backEaveHt + ((buildinggeometry?.RoofSlope2 / 12.0) * (bldgWidth - clmDistY));
          rafter_peak_inset = (rafter_peak_height - backEaveHt) / (hip_slope / 12.0);

          if (clmDistY != buildinggeometry?.Width) {
            draw_hip_framing = true;
          }
        }

        if (saveClmHtRight == 0.0 && numBays == 1)
          leftBrcZ = frontEaveHt;

        // reset the previous clm ht
        saveClmHtRight = endClm.z;
      }
      else {
        slope = this.globals.backRoofSlope;

        if (located_in_hip_area) { right_col_recess = hip_col_recess / 12.0; }

        // set clm start and stop points
        startClm.x = bldgLength;
        startClm.y = clmDistY;
        startClm.z = 0.0 - right_col_recess;

        endClm.x = bldgLength;
        endClm.y = clmDistY;

        if (!this.globals.rightWallHip) {
          endClm.z = backEaveHt + (Math.tan(slope) * (bldgWidth - clmDistY));
        }
        else {
          endClm.z = backEaveHt;
          rafter_peak_height = backEaveHt + ((buildinggeometry?.RoofSlope2 / 12.0) * (bldgWidth - clmDistY));
          rafter_peak_inset = (rafter_peak_height - backEaveHt) / (hip_slope / 12.0);
          draw_hip_framing = true;
        }

        // reset the previous clm ht
        saveClmHtLeft = endClm.z;
      }
      this.globals.ewClmsRight[this.globals.numLeftEwClms] = new BABYLON.Vector3();
      this.globals.ewClmsRight[this.globals.numLeftEwClms].x = endClm.x;
      this.globals.ewClmsRight[this.globals.numLeftEwClms].y = endClm.y;
      this.globals.ewClmsRight[this.globals.numLeftEwClms++].z = endClm.z;
    }
    else if (elevation == this.globals.leftLetter &&
      (buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE ||
        buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_LEANTO)) {
      numBays = this.globals.numBaysLeft;

      // if it's the first bay, set stuff.....
      if (whichBay == 1) {
        // set clm start and end points
        startLeftCrnClm.x = 0.0;
        startLeftCrnClm.y = bldgWidth;
        startLeftCrnClm.z = 0.0 - left_col_recess;

        endLeftCrnClm.x = 0.0;
        endLeftCrnClm.y = bldgWidth;
        endLeftCrnClm.z = backEaveHt;
      }

      // set initial clm start and end points
      startClm.x = 0.0;
      startClm.y = bldgWidth - clmDistY;
      startClm.z = 0.0 - right_col_recess;

      endClm.x = 0.0;
      endClm.y = bldgWidth - clmDistY;

      if (buildinggeometry?.HighSideWall == this.globals.backLetter) {
        slope = this.globals.frontRoofSlope;

        // reset the clm ht
        endClm.z = backEaveHt - (Math.tan(slope) * clmDistY);
      }
      else {
        slope = this.globals.backRoofSlope;

        // reset clm z ht
        endClm.z = backEaveHt + (Math.tan(slope) * clmDistY);
      }
      this.globals.ewClmsLeft[this.globals.numLeftEwClms] = new BABYLON.Vector3();
      this.globals.ewClmsLeft[this.globals.numLeftEwClms].x = endClm.x;
      this.globals.ewClmsLeft[this.globals.numLeftEwClms].y = endClm.y;
      this.globals.ewClmsLeft[this.globals.numLeftEwClms++].z = endClm.z;
    }
    else if (elevation == this.globals.rightLetter &&
      (buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE ||
        buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_LEANTO)) {
      numBays = this.globals.numBaysRight;

      // if it's the first bay, set stuff.....
      if (whichBay == 1) {
        // set clm start and end points
        startLeftCrnClm.x = bldgLength;
        startLeftCrnClm.y = 0.0;
        startLeftCrnClm.z = 0.0 - left_col_recess;

        endLeftCrnClm.x = bldgLength;
        endLeftCrnClm.y = 0.0;
        endLeftCrnClm.z = frontEaveHt;
      }

      // set the clm location
      startClm.x = bldgLength;
      startClm.y = clmDistY;
      startClm.z = 0.0 - right_col_recess;

      endClm.x = bldgLength;
      endClm.y = clmDistY;

      if (buildinggeometry?.HighSideWall == this.globals.backLetter) {
        slope = this.globals.frontRoofSlope;

        // reset clm z ht
        endClm.z = frontEaveHt + (Math.tan(slope) * clmDistY);
      }
      else {
        slope = this.globals.backRoofSlope;

        // reset clm z ht
        endClm.z = frontEaveHt - (Math.tan(slope) * clmDistY);
      }
      this.globals.ewClmsRight[this.globals.numLeftEwClms] = new BABYLON.Vector3();
      this.globals.ewClmsRight[this.globals.numLeftEwClms].x = endClm.x;
      this.globals.ewClmsRight[this.globals.numLeftEwClms].y = endClm.y;
      this.globals.ewClmsRight[this.globals.numLeftEwClms++].z = endClm.z;
    }


    let Prim: CBsDraw = new CBsDraw(this.globals);
    let foundEndwalls: boolean = false;
    let objendwall: IEndwalls = new IEndwalls();
    lstEndWall?.forEach((endwall) => {
      if (!foundEndwalls) {
        if (endwall?.BuildingNumber == buildinggeometry?.BuildingNumber) {
          foundEndwalls = true;
          objendwall = endwall;
        }
      }
    });
    // Left Endwall
    if (elevation == this.globals.leftLetter) {
      let is_frame_column: boolean = false;
      lstIEWRecess?.filter(x => x.BuildingNumber == buildinggeometry?.BuildingNumber)?.forEach((recess) => {
        if (recess?.BuildingNumber == buildinggeometry?.BuildingNumber && recess?.Elevation == this.globals.leftLetter) {
          if (whichBay == 1) {
            if (recess?.ColumnNumber == 1) {
              if (recess?.IsFrameColumn)
                is_frame_column = true;
              else if (objendwall.Endwall3 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                is_frame_column = true;
            }
          }
          else if (whichBay == this.globals.numBaysLeft) {
            if (recess?.ColumnNumber == this.globals.numBaysLeft + 1) {
              if (recess?.IsFrameColumn)
                is_frame_column = true;
              else if (objendwall.Endwall3 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                is_frame_column = true;
            }
          }
        }
      });
      // Draw the left corner column, if first bay
      if (whichBay == 1 && !is_frame_column && !located_in_hip_area) {
        const lines31 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_LEFT_CORNER_COLUMN_FIRST_BAY + MeshElevation, { points: Prim.Draw_Line(startLeftCrnClm, endLeftCrnClm) }, babylonModel.Scene);
        lines31.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines31);

        //startClm.y = startClm.y + 2;
        startClm.x = startClm.x + 1;
        this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], startClm, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor);
        startClm.x = startClm.x - 1;
      }

      //  Draw the right corner column, if last bay
      else if (whichBay == this.globals.numBaysLeft && !is_frame_column && !located_in_hip_area) {

        const lines32 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_RIGHT_CORNER_COLUMN_LAST_BAY + MeshElevation, { points: Prim.Draw_Line(startClm, endClm) }, babylonModel.Scene);
        lines32.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines32);

        //startClm.y = startClm.y + 2;
        //startClm.x = startClm.x + 1;
        //this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], startClm, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor);

      }
      // Draw the right-hand column, if not the last bay
      if (whichBay < this.globals.numBaysLeft) {

        const lines34 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_RIGHT_COLUMN_BAY + MeshElevation, { points: Prim.Draw_Line(startClm, endClm) }, babylonModel.Scene);
        lines34.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines34);

        //startClm.y = startClm.y + 2;
        startClm.x = startClm.x + 1;
        this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], startClm, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor);
        startClm.x = startClm.x - 1;
      }

      // Draw hip rafter
      if (this.globals.leftWallHip && !is_frame_column && draw_hip_framing == true) {

        let rafter_start: BABYLON.Vector3 = new BABYLON.Vector3(endClm.x, endClm.y, endClm.z);
        let rafter_end: BABYLON.Vector3 = new BABYLON.Vector3(rafter_start.x + rafter_peak_inset, rafter_start.y, rafter_peak_height);

        const lines35 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_RAFTER_1 + MeshElevation, { points: Prim.Draw_Line(rafter_start, rafter_end) }, babylonModel.Scene);
        lines35.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines35);
        // draw rafter details
        let rafter_det_start: BABYLON.Vector3 = new BABYLON.Vector3(rafter_start.x, rafter_start.y, rafter_start.z);
        let rafter_det_end: BABYLON.Vector3 = new BABYLON.Vector3(rafter_end.x, rafter_end.y, rafter_end.z);
        rafter_det_start.x += 1.0;
        rafter_det_start.z += (hip_slope / 12.0);
        rafter_det_start.z -= Math.sqrt(1.0 + ((hip_slope / 12.0) * (hip_slope / 12.0)));
        rafter_det_end.z -= Math.sqrt(1.0 + ((hip_slope / 12.0) * (hip_slope / 12.0)));
        const lines36 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_RAFTER_2 + MeshElevation, { points: Prim.Draw_Line(rafter_det_start, rafter_det_end) }, babylonModel.Scene);
        lines36.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines36);
        const lines37 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_RAFTER_3 + MeshElevation, { points: Prim.Draw_Line(rafter_end, rafter_det_end) }, babylonModel.Scene);
        lines37.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines37);
        // draw column details
        let col_det_start: BABYLON.Vector3 = new BABYLON.Vector3(startClm.x, startClm.y, startClm.z);
        let col_det_end: BABYLON.Vector3 = new BABYLON.Vector3(rafter_start.x, rafter_start.y, rafter_start.z);
        col_det_start.x += 1.0;
        col_det_end.x += 1.0;
        col_det_end.z += 1.0 * (hip_slope / 12.0);
        const lines38 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(col_det_start, col_det_end) }, babylonModel.Scene);
        lines38.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines38);
        const lines39 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(startClm, col_det_start) }, babylonModel.Scene);
        lines39.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines39);
        col_det_start = new BABYLON.Vector3(endClm.x, endClm.y, endClm.z);
        col_det_start.z = rafter_det_start.z;
        const lines40 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_ENDWALL_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(col_det_start, rafter_det_start) }, babylonModel.Scene);
        lines40.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines40);
      }
    }
    // Right Endwall
    else {
      let is_frame_column: boolean = false;
      lstIEWRecess?.filter(x => x.BuildingNumber == buildinggeometry?.BuildingNumber)?.forEach((recess) => {
        if (recess?.BuildingNumber == buildinggeometry?.BuildingNumber && recess?.Elevation == this.globals.rightLetter) {
          if (whichBay == 1) {
            if (recess?.ColumnNumber == 1) {
              if (recess?.IsFrameColumn)
                is_frame_column = true;
              else if (objendwall.Endwall4 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                is_frame_column = true;
            }
          }
          else if (whichBay == this.globals.numBaysRight) {
            if (recess?.ColumnNumber == this.globals.numBaysRight + 1) {
              if (recess?.IsFrameColumn)
                is_frame_column = true;
              else if (objendwall.Endwall4 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                is_frame_column = true;
            }
          }
        }
      });


      // Draw the left corner column, if first bay
      if (whichBay == 1 && !is_frame_column && !located_in_hip_area) {
        const lines41 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_LEFT_CORNER_COLUMN_FIRST_BAY + MeshElevation, { points: Prim.Draw_Line(startLeftCrnClm, endLeftCrnClm) }, babylonModel.Scene);
        lines41.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines41);

        //startClm.x = startClm.x - 2;

        //this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], startClm, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor);

      }

      // Draw the right corner column, if last bay
      else if (whichBay == this.globals.numBaysRight && !is_frame_column && !located_in_hip_area) {
        const lines42 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_RIGHT_CORNER_COLUMN_LAST_BAY + MeshElevation, { points: Prim.Draw_Line(startClm, endClm) }, babylonModel.Scene);
        lines42.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines42);

        //startClm.x = startClm.x - 3;

        //this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], startClm, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor);

      }

      // Draw the right-hand column, if not the last bay
      if (whichBay < this.globals.numBaysRight) {
        const lines43 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_RIGHT_COLUMN_BAY + MeshElevation, { points: Prim.Draw_Line(startClm, endClm) }, babylonModel.Scene);
        lines43.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines43);

        startClm.x = startClm.x - 3;

        this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], startClm, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor);
        startClm.x = startClm.x + 3;
      }
      // Draw hip rafter
      if (this.globals.rightWallHip && !is_frame_column && draw_hip_framing == true) {
        let rafter_start: BABYLON.Vector3 = new BABYLON.Vector3(endClm.x, endClm.y, endClm.z);
        let rafter_end: BABYLON.Vector3 = new BABYLON.Vector3(rafter_start.x - rafter_peak_inset, rafter_start.y, rafter_peak_height);

        const lines45 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_RAFTER_1 + MeshElevation, { points: Prim.Draw_Line(rafter_start, rafter_end) }, babylonModel.Scene);
        lines45.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines45);
        // draw rafter details
        let rafter_det_start: BABYLON.Vector3 = new BABYLON.Vector3(rafter_start.x, rafter_start.y, rafter_start.z);
        let rafter_det_end: BABYLON.Vector3 = new BABYLON.Vector3(rafter_end.x, rafter_end.y, rafter_end.z);
        rafter_det_start.x -= 1.0;
        rafter_det_start.z += (hip_slope / 12.0);
        rafter_det_start.z -= Math.sqrt(1.0 + ((hip_slope / 12.0) * (hip_slope / 12.0)));
        rafter_det_end.z -= Math.sqrt(1.0 + ((hip_slope / 12.0) * (hip_slope / 12.0)));
        const lines46 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_RAFTER_2 + MeshElevation, { points: Prim.Draw_Line(rafter_det_start, rafter_det_end) }, babylonModel.Scene);
        lines46.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines46);
        const lines47 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_RAFTER_3 + MeshElevation, { points: Prim.Draw_Line(rafter_end, rafter_det_end) }, babylonModel.Scene);
        lines47.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines47);

        // draw column details
        let col_det_start: BABYLON.Vector3 = new BABYLON.Vector3(startClm.x, startClm.y, startClm.z);
        let col_det_end: BABYLON.Vector3 = new BABYLON.Vector3(rafter_start.x, rafter_start.y, rafter_start.z);
        col_det_start.x -= 1.0;
        col_det_end.x -= 1.0;
        col_det_end.z += 1.0 * (hip_slope / 12.0);
        const lines48 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(col_det_start, col_det_end) }, babylonModel.Scene);
        lines48.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines48);
        const lines49 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(startClm, col_det_start) }, babylonModel.Scene);
        lines49.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines49);
        col_det_start = new BABYLON.Vector3(endClm.x, endClm.y, endClm.z);
        col_det_start.z = rafter_det_start.z;
        const lines50 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_ENDWALL_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(col_det_start, rafter_det_start) }, babylonModel.Scene);
        lines50.color = this.buildingDrawingColor.RoofBracingColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines50);
      }


    }

  }

  Draw_Roof_Bracing(
    startX: number,
    width: number,
    buildinggeometry: IBuildingGeometry,
    babylonModel: BabylonModelData) {
    let Prim: CBsDraw = new CBsDraw(this.globals);

    let btmLeft = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let btmRight = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let topRight = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let topLeft = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let startY: number = 0.0;
    let startZ: number = 0.0;
    let length: number = 0.0;
    let peakHt: number = this.globals.frontEaveHt + (buildinggeometry?.DistToRidge1 * this.globals.frontRoofSlope);

    // if it's a sng slope, set to back eave height
    if (buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE ||
      buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_LEANTO)
      peakHt = this.globals.backEaveHt;

    length = (buildinggeometry?.DistToRidge1 > 0.0) ? buildinggeometry?.DistToRidge1 : buildinggeometry?.DistToRidge2;
    startY = 0.0;
    startZ = this.globals.frontEaveHt;

    btmLeft.set(startX, startY, startZ);
    btmRight.set(startX + width, startY, startZ);
    topRight.set(startX + width, startY + length, peakHt);
    topLeft.set(startX, startY + length, peakHt);

    const RoofBracing1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_FRONT_ROOF_BRACING_1, { points: Prim.Draw_Line(btmLeft, topRight) }, babylonModel.Scene);
    RoofBracing1.color = this.buildingDrawingColor.RoofBracingColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(RoofBracing1);
    const RoofBracing2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_FRONT_ROOF_BRACING_2, { points: Prim.Draw_Line(btmRight, topLeft) }, babylonModel.Scene);
    RoofBracing2.color = this.buildingDrawingColor.RoofBracingColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(RoofBracing2);
    if (buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
      buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO) {
      length = buildinggeometry?.DistToRidge2;
      startY = buildinggeometry?.DistToRidge1;
      startZ = peakHt;

      btmLeft.set(startX, startY, startZ);
      btmRight.set(startX + width, startY, startZ);
      topRight.set(startX + width, startY + length, this.globals.backEaveHt);
      topLeft.set(startX, startY + length, this.globals.backEaveHt);

      const RoofBracing3 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BACK_ROOF_BRACING_1, { points: Prim.Draw_Line(btmLeft, topRight) }, babylonModel.Scene);
      RoofBracing3.color = this.buildingDrawingColor.RoofBracingColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(RoofBracing3);
      const RoofBracing4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BACK_ROOF_BRACING_2, { points: Prim.Draw_Line(btmRight, topLeft) }, babylonModel.Scene);
      RoofBracing4.color = this.buildingDrawingColor.RoofBracingColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(RoofBracing4);
    }
    return 0;

  }

  //BWX - BsDraw.cpp 29602
  DrawHipFrames(building_number: number, elevation: string, buildinggeometry: IBuildingGeometry, I_BuildingData: IBuildingData, babylonModel: BabylonModelData) {
    let Prim: CBsDraw = new CBsDraw(this.globals);
    let canopy: CCanopy;

    let rafter_peak_height: number = 0.0;
    let rafter_peak_inset: number = 0.0;
    let half_width: number = buildinggeometry?.Width / 2.0;

    let front_rafter_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let front_rafter_end: BABYLON.Vector3 = new BABYLON.Vector3();
    let front_rafter_det_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let front_rafter_det_end: BABYLON.Vector3 = new BABYLON.Vector3();

    let front_col_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let front_col_end: BABYLON.Vector3 = new BABYLON.Vector3();
    let front_col_det_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let front_col_det_end: BABYLON.Vector3 = new BABYLON.Vector3();

    let back_rafter_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let back_rafter_end: BABYLON.Vector3 = new BABYLON.Vector3();
    let back_rafter_det_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let back_rafter_det_end: BABYLON.Vector3 = new BABYLON.Vector3();

    let back_col_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let back_col_end: BABYLON.Vector3 = new BABYLON.Vector3();
    let back_col_det_start: BABYLON.Vector3 = new BABYLON.Vector3();
    let back_col_det_end: BABYLON.Vector3 = new BABYLON.Vector3();

    let bay_count: number = 0;
    let bay_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);

    let x_offset: number = 0.0;
    let y_offset: number = 0.0;
    let z_offset: number = 0.0;

    // for hip angle:  x = rise; y = run
    let hip_angle = 0.0;

    let slope: number = 0.0;
    let run: number = 0.0;
    let rise: number = 0.0;
    let hip_slope: number = 0.0;

    let column_recess: number = 0.0;
    let int_column_recess: number = 0.0;

    let MeshElevation = " - " + elevation;

    // Get hip-frame group number
    const LEFT_HIP_FRAME_GROUP: number = 11;
    const RIGHT_HIP_FRAME_GROUP: number = 13;
    let HIP_FRAME_GROUP: number = (elevation == this.globals.leftLetter) ? LEFT_HIP_FRAME_GROUP : RIGHT_HIP_FRAME_GROUP;

    // Get modules
    let module_count: number = 0;
    let module_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);
    I_BuildingData.IModules?.filter(x => x.BuildingNumber == building_number)?.forEach((pModule) => {
      if (pModule?.BuildingNumber == building_number && pModule?.GroupNumber == HIP_FRAME_GROUP) {
        module_count++;
        module_widths[pModule?.ModuleNumber - 1] = pModule?.Width;
      }
    });

    // Get exterior/interior column recession
    let found_group: boolean = false;
    I_BuildingData.IGroups?.filter(x => x.BuildingNumber == building_number)?.forEach((pGroup) => {
      if (pGroup?.BuildingNumber == building_number && pGroup?.GroupNumber == HIP_FRAME_GROUP && !found_group) {
        found_group = true;
        column_recess = pGroup?.ExtColRecession1;
        int_column_recess = pGroup?.IntColRecession;
      }

    });

    if (elevation == this.globals.leftLetter) {
      canopy = new CCanopy(this.globals, this.buildingDrawingColor._isWhiteBackGround);
      let BayWidthData: BayWidthReturnData = canopy.Get_Bay_Widths(building_number, this.globals.frontLetter, false, I_BuildingData.IBays, I_BuildingData.IOSoldierColumns);
      bay_widths = BayWidthData.bay_widths;
      bay_count = BayWidthData.num_bays;

      hip_angle = Math.atan(bay_widths[0] / half_width);

      run = Math.sqrt((bay_widths[0] * bay_widths[0]) + (half_width * half_width));
      rise = buildinggeometry?.PeakHeight - buildinggeometry?.EaveHeight1;
      slope = Math.sqrt((run * run) + (rise * rise));
      hip_slope = 12.0 * (rise / run);

      // front rafter
      front_rafter_start.set(0.0, 0.0, buildinggeometry?.EaveHeight1);
      front_rafter_end.set(bay_widths[0], half_width, buildinggeometry?.PeakHeight);

      // front rafter details
      x_offset = Math.sin(hip_angle);
      y_offset = Math.cos(hip_angle);
      run = Math.sqrt((x_offset * x_offset) + (y_offset * y_offset));
      rise = (hip_slope / 12.0) * run;
      slope = Math.sqrt(((hip_slope / 12.0) * (hip_slope / 12.0)) + 1.0);
      z_offset = (buildinggeometry?.EaveHeight1 + rise) - slope;
      front_rafter_det_start.set(x_offset, y_offset, z_offset);
      front_rafter_det_end.set(bay_widths[0], half_width, buildinggeometry?.PeakHeight - slope);

      // front column
      front_col_start.set(0.0, 0.0, -column_recess / 12.0);
      front_col_end.set(0.0, 0.0, buildinggeometry?.EaveHeight1);

      // front column details
      front_col_det_start.set(x_offset, y_offset, -column_recess / 12.0);
      front_col_det_end.set(x_offset, y_offset, buildinggeometry?.EaveHeight1 + rise);

      // back rafter
      back_rafter_start.set(0.0, buildinggeometry?.Width, buildinggeometry?.EaveHeight2);
      back_rafter_end.set(bay_widths[0], half_width, buildinggeometry?.PeakHeight);

      // back rafter details
      x_offset = Math.sin(hip_angle);
      y_offset = Math.cos(hip_angle);
      run = Math.sqrt((x_offset * x_offset) + (y_offset * y_offset));
      rise = (hip_slope / 12.0) * run;
      slope = Math.sqrt(((hip_slope / 12.0) * (hip_slope / 12.0)) + 1.0);
      z_offset = (buildinggeometry?.EaveHeight2 + rise) - slope;
      back_rafter_det_start.set(x_offset, buildinggeometry?.Width - y_offset, z_offset);
      back_rafter_det_end.set(bay_widths[0], half_width, buildinggeometry?.PeakHeight - slope);

      // back column
      back_col_start.set(0.0, buildinggeometry?.Width, -column_recess / 12.0);
      back_col_end.set(0.0, buildinggeometry?.Width, buildinggeometry?.EaveHeight2);

      // back column details
      back_col_det_start.set(x_offset, buildinggeometry?.Width - y_offset, -column_recess / 12.0);
      back_col_det_end.set(x_offset, buildinggeometry?.Width - y_offset, buildinggeometry?.EaveHeight2 + rise);
    }
    else if (elevation == this.globals.rightLetter) {
      canopy = new CCanopy(this.globals, this.buildingDrawingColor._isWhiteBackGround);
      let BayWidthData: BayWidthReturnData = canopy.Get_Bay_Widths(building_number, this.globals.backLetter, false, I_BuildingData.IBays, I_BuildingData.IOSoldierColumns);
      bay_widths = BayWidthData.bay_widths;
      bay_count = BayWidthData.num_bays;

      hip_angle = Math.atan(bay_widths[0] / half_width);

      run = Math.sqrt((bay_widths[0] * bay_widths[0]) + (half_width * half_width));
      rise = buildinggeometry?.PeakHeight - buildinggeometry?.EaveHeight2;
      slope = Math.sqrt((run * run) + (rise * rise));
      hip_slope = 12.0 * (rise / run);

      // front rafter
      front_rafter_start.set(buildinggeometry?.Length, 0.0, buildinggeometry?.EaveHeight1);
      front_rafter_end.set(buildinggeometry?.Length - bay_widths[0], half_width, buildinggeometry?.PeakHeight);

      // front rafter details
      x_offset = Math.sin(hip_angle);
      y_offset = Math.cos(hip_angle);
      run = Math.sqrt((x_offset * x_offset) + (y_offset * y_offset));
      rise = (hip_slope / 12.0) * run;
      slope = Math.sqrt(((hip_slope / 12.0) * (hip_slope / 12.0)) + 1.0);
      z_offset = (buildinggeometry?.EaveHeight1 + rise) - slope;
      front_rafter_det_start.set(buildinggeometry?.Length - x_offset, y_offset, z_offset);
      front_rafter_det_end.set(buildinggeometry?.Length - bay_widths[0], half_width, buildinggeometry?.PeakHeight - slope);

      // front column
      front_col_start.set(buildinggeometry?.Length, 0.0, -column_recess / 12.0);
      front_col_end.set(buildinggeometry?.Length, 0.0, buildinggeometry?.EaveHeight1);

      // front column details
      front_col_det_start.set(buildinggeometry?.Length - x_offset, y_offset, -column_recess / 12.0);
      front_col_det_end.set(buildinggeometry?.Length - x_offset, y_offset, buildinggeometry?.EaveHeight1 + rise);

      // back rafter
      back_rafter_start.set(buildinggeometry?.Length, buildinggeometry?.Width, buildinggeometry?.EaveHeight2);
      back_rafter_end.set(buildinggeometry?.Length - bay_widths[0], half_width, buildinggeometry?.PeakHeight);

      // back rafter details
      x_offset = Math.sin(hip_angle);
      y_offset = Math.cos(hip_angle);
      run = Math.sqrt((x_offset * x_offset) + (y_offset * y_offset));
      rise = (hip_slope / 12.0) * run;
      slope = Math.sqrt(((hip_slope / 12.0) * (hip_slope / 12.0)) + 1.0);
      z_offset = (buildinggeometry?.EaveHeight2 + rise) - slope;
      back_rafter_det_start.set(buildinggeometry?.Length - x_offset, buildinggeometry?.Width - y_offset, z_offset);
      back_rafter_det_end.set(buildinggeometry?.Length - bay_widths[0], half_width, buildinggeometry?.PeakHeight - slope);

      // back column
      back_col_start.set(buildinggeometry?.Length, buildinggeometry?.Width, -column_recess / 12.0);
      back_col_end.set(buildinggeometry?.Length, buildinggeometry?.Width, buildinggeometry?.EaveHeight2);

      // back column details
      back_col_det_start.set(buildinggeometry?.Length - x_offset, buildinggeometry?.Width - y_offset, -column_recess / 12.0);
      back_col_det_end.set(buildinggeometry?.Length - x_offset, buildinggeometry?.Width - y_offset, buildinggeometry?.EaveHeight2 + rise);
    }


    // Draw front rafter
    const HipFrame1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_RAFTER_1 + MeshElevation, { points: Prim.Draw_Line(front_rafter_start, front_rafter_end) }, babylonModel.Scene);
    HipFrame1.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame1);
    const HipFrame2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_RAFTER_2 + MeshElevation, { points: Prim.Draw_Line(front_rafter_det_start, front_rafter_det_end) }, babylonModel.Scene);
    HipFrame2.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame2);
    const HipFrame3 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_RAFTER_3 + MeshElevation, { points: Prim.Draw_Line(front_rafter_end, front_rafter_det_end) }, babylonModel.Scene);
    HipFrame3.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame3);

    // Draw front column
    const HipFrame4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(front_col_det_start, front_col_det_end) }, babylonModel.Scene);// vertical
    HipFrame4.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame4);
    const HipFrame5 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(front_col_start, front_col_det_start) }, babylonModel.Scene);// base
    HipFrame5.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame5);
    const HipFrame6 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(new BABYLON.Vector3(front_col_start.x, front_col_start.y, front_rafter_det_start.z), front_rafter_det_start) }, babylonModel.Scene); // stiffener
    HipFrame6.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame6);

    // Draw back rafter
    const HipFrame7 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_RAFTER_1 + MeshElevation, { points: Prim.Draw_Line(back_rafter_start, back_rafter_end) }, babylonModel.Scene);
    HipFrame7.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame7);
    const HipFrame8 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_RAFTER_2 + MeshElevation, { points: Prim.Draw_Line(back_rafter_det_start, back_rafter_det_end) }, babylonModel.Scene);
    HipFrame8.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame8);
    const HipFrame9 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_RAFTER_3 + MeshElevation, { points: Prim.Draw_Line(back_rafter_end, back_rafter_det_end) }, babylonModel.Scene);
    HipFrame9.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame9);

    // Draw back column
    const HipFrame10 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(back_col_det_start, back_col_det_end) }, babylonModel.Scene);// vertical
    HipFrame10.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame10);
    const HipFrame11 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(back_col_start, back_col_det_start) }, babylonModel.Scene);// base
    HipFrame11.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame11);
    const HipFrame12 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(new BABYLON.Vector3(back_col_start.x, back_col_start.y, back_rafter_det_start.z), back_rafter_det_start) }, babylonModel.Scene); // stiffener
    HipFrame12.color = this.buildingDrawingColor.HipFrameColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame12);

    // Draw Interior Columns
    {
      let column_offset: number = 0.0;
      for (let module_index = 0; module_index < module_count - 1; module_index++) {
        column_offset += module_widths[module_index];

        let col_btm: BABYLON.Vector3 = new BABYLON.Vector3();
        let col_top: BABYLON.Vector3 = new BABYLON.Vector3();
        let det_btm: BABYLON.Vector3 = new BABYLON.Vector3();
        let det_top: BABYLON.Vector3 = new BABYLON.Vector3();

        let col_x_offset = column_offset * Math.sin(hip_angle);
        let col_y_offset = column_offset * Math.cos(hip_angle);
        let det_x_offset = (4.0 / 12.0) * Math.sin(hip_angle);
        let det_y_offset = (4.0 / 12.0) * Math.cos(hip_angle);
        let det_z_offset = (4.0 / 12.0) * (hip_slope / 12.0);

        let col_height = this.globals.frontEaveHt + (col_y_offset * (buildinggeometry?.RoofSlope1 / 12.0));

        let color_save = this.globals.entColor;
        this.globals.entColor = 11;
        if (elevation == this.globals.leftLetter) {
          // Draw Front Interior Column
          col_btm.set(col_x_offset, col_y_offset, -int_column_recess / 12.0);
          col_top.set(col_x_offset, col_y_offset, col_height);
          const HipFrame13 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(col_btm, col_top) }, babylonModel.Scene);
          HipFrame13.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame13);

          det_btm.set(col_btm.x - det_x_offset, col_btm.y - det_y_offset, col_btm.z);
          det_top.set(col_top.x - det_x_offset, col_top.y - det_y_offset, col_top.z - det_z_offset);
          const HipFrame14 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame14.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame14);

          det_btm.set(col_btm.x + det_x_offset, col_btm.y + det_y_offset, col_btm.z);
          det_top.set(col_top.x + det_x_offset, col_top.y + det_y_offset, col_top.z + det_z_offset);
          const HipFrame15 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame15.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame15);

          // Draw Back Interior Column
          col_btm.set(col_x_offset, buildinggeometry?.Width - col_y_offset, -int_column_recess / 12.0);
          col_top.set(col_x_offset, buildinggeometry?.Width - col_y_offset, col_height);
          const HipFrame16 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(col_btm, col_top) }, babylonModel.Scene);
          HipFrame16.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame16);

          det_btm.set(col_btm.x - det_x_offset, col_btm.y + det_y_offset, col_btm.z);
          det_top.set(col_top.x - det_x_offset, col_top.y + det_y_offset, col_top.z - det_z_offset);
          const HipFrame17 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame17.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame17);

          det_btm.set(col_btm.x + det_x_offset, col_btm.y - det_y_offset, col_btm.z);
          det_top.set(col_top.x + det_x_offset, col_top.y - det_y_offset, col_top.z + det_z_offset);
          const HipFrame18 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame18.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame18);
        }
        else {
          // Draw Front Interior Column
          col_btm.set(buildinggeometry?.Length - col_x_offset, col_y_offset, -int_column_recess / 12.0);
          col_top.set(buildinggeometry?.Length - col_x_offset, col_y_offset, col_height);
          const HipFrame19 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(col_btm, col_top) }, babylonModel.Scene);
          HipFrame19.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame19);

          det_btm.set(col_btm.x + det_x_offset, col_btm.y - det_y_offset, col_btm.z);
          det_top.set(col_top.x + det_x_offset, col_top.y - det_y_offset, col_top.z - det_z_offset);
          const HipFrame20 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame20.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame20);

          det_btm.set(col_btm.x - det_x_offset, col_btm.y + det_y_offset, col_btm.z);
          det_top.set(col_top.x - det_x_offset, col_top.y + det_y_offset, col_top.z + det_z_offset);
          const HipFrame21 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame21.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame21);

          // Draw Back Interior Column
          col_btm.set(buildinggeometry?.Length - col_x_offset, buildinggeometry?.Width - col_y_offset, -int_column_recess / 12.0);
          col_top.set(buildinggeometry?.Length - col_x_offset, buildinggeometry?.Width - col_y_offset, col_height);
          const HipFrame22 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_1 + MeshElevation, { points: Prim.Draw_Line(col_btm, col_top) }, babylonModel.Scene);
          HipFrame22.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame22);

          det_btm.set(col_btm.x + det_x_offset, col_btm.y + det_y_offset, col_btm.z);
          det_top.set(col_top.x + det_x_offset, col_top.y + det_y_offset, col_top.z - det_z_offset);
          const HipFrame23 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_2 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame23.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame23);

          det_btm.set(col_btm.x - det_x_offset, col_btm.y - det_y_offset, col_btm.z);
          det_top.set(col_top.x - det_x_offset, col_top.y - det_y_offset, col_top.z + det_z_offset);
          const HipFrame24 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_3 + MeshElevation, { points: Prim.Draw_Line(det_btm, det_top) }, babylonModel.Scene);
          HipFrame24.color = this.buildingDrawingColor.HipFrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(HipFrame24);
        }
        this.globals.entColor = color_save;
      }
    }
  }

  //BWX - BsDraw.cpp 7279
  GetFramelineInfo(bldgNum: number, framelineNumber: number, lstIFramelines: IFramelines[], lstIGroups: IGroups[]) {
    let isATapered: boolean = false;
    let isCTapered: boolean = false;

    let IsGroupFound: boolean = false;

    var framelines: IFramelines = lstIFramelines?.find(x => x.BuildingNumber == bldgNum && x.FrameLineNumber == framelineNumber);
    var frameindex: number = lstIFramelines?.findIndex(x => x.BuildingNumber == bldgNum && x.FrameLineNumber == framelineNumber);

    if (frameindex != -1 && frameindex != lstIFramelines.length) {
      lstIGroups?.forEach((groups) => {
        if (framelines?.GroupNumber == groups?.GroupNumber &&
          framelines?.BuildingNumber == groups?.BuildingNumber &&
          !IsGroupFound) {
          isATapered = (groups?.ColType1 == BuildingDrawingEnum.ID_COL_TAPERED) ? true : false;
          isCTapered = (groups?.ColType2 == BuildingDrawingEnum.ID_COL_TAPERED) ? true : false;
          IsGroupFound = true;
        }
      });
    }
    let Data: ReturnData = new ReturnData();
    Data.isATapered = isATapered;
    Data.isCTapered = isCTapered;
    return Data;
  }

  //BWX - BsDraw.cpp 27626
  GetFrameClmRecess(whichBldg: number, whichFrmLine: number, whichClm: number, lstIFramelines: IFramelines[], lstIGroup: IGroups[]): number//BW-1283
  {
    let recess: number = 0.0;
    let grpNum: number = 0;


    lstIFramelines?.forEach((framelines) => {
      if (framelines?.FrameLineNumber == whichFrmLine &&
        framelines?.BuildingNumber == whichBldg) {
        grpNum = framelines?.GroupNumber;
      }

    });

    lstIGroup?.forEach((groups) => {
      // if the number coming in matches with this frmline group
      if (groups?.GroupNumber == grpNum &&
        groups?.BuildingNumber == whichBldg) {
        if (whichClm == 1)
          recess = groups?.ExtColRecession1; //front wall (SW1) column extentsion/recession
        else
          recess = groups?.ExtColRecession2; //back wall (SW2) column extentsion/recession
      }

    });
    return (recess * -1);
  }

  //BWX - BsDraw.cpp 11143
  Draw_Frame(
    m_d_Width: number,
    m_dEH_A1: number,
    m_dEH_C2: number,
    m_dDist_Peak_A: number,
    m_dDist_Peak_B: number,
    m_dPeak_Ht: number,
    m_dLocation: number,
    m_selev_A: string,
    isATapered: boolean,
    isCTapered: boolean,
    col_ext1: number,
    col_ext2: number,
    frame_offset: number,
    buildinggeometry: IBuildingGeometry,
    bay_number: number,
    babylonModel: BabylonModelData,
    EndWallType: string
  ) {
    // FRONT COLUMN 
    let Col_1_OF_Base: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_1_OF_Top: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_1_IF_Base: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_1_IF_Top: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_1_KS_Start: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_1_KS_End: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    // REAR COLUMN 
    let Col_2_OF_Base: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_2_OF_Top: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_2_IF_Base: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_2_IF_Top: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_2_KS_Start: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Col_2_KS_End: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    // FRONT RAFTER 
    let Raf_1_OF_Start: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Raf_1_OF_End: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Raf_1_IF_Start: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Raf_1_IF_End: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    // REAR RAFTER 
    let Raf_2_OF_Start: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Raf_2_OF_End: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Raf_2_IF_Start: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Raf_2_IF_End: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);

    let baseColWidth: number = (m_d_Width / 200) + 0.75;
    let frontPitchTan: number = 0.0;
    let rearPitchTan: number = 0.0;
    if (m_dDist_Peak_A > 0.0)
      frontPitchTan = (m_dPeak_Ht - m_dEH_A1) / m_dDist_Peak_A;
    if (m_dDist_Peak_B > 0.0)
      rearPitchTan = (m_dPeak_Ht - m_dEH_C2) / m_dDist_Peak_B;

    // FRONT COLUMN - OUTER FLANGE
    Col_1_OF_Base.x = m_dLocation + frame_offset;
    Col_1_OF_Base.z = col_ext1 / 12.0;
    Col_1_OF_Top.x = Col_1_OF_Base.x;
    Col_1_OF_Top.y = Col_1_OF_Base.y;
    Col_1_OF_Top.z = m_dEH_A1;
    // FRONT COLUMN - INNER FLANGE
    Col_1_IF_Base.x = Col_1_OF_Base.x;
    Col_1_IF_Base.y = baseColWidth;
    Col_1_IF_Base.z = col_ext1 / 12.0;
    Col_1_IF_Top.x = Col_1_IF_Base.x;
    // FRONT COLUMN - KNEE STIFFINER
    Col_1_KS_Start.x = Col_1_OF_Base.x;
    Col_1_KS_Start.y = Col_1_OF_Base.y;
    Col_1_KS_End.x = Col_1_KS_Start.x;

    // REAR COLUMN - OUTER FLANGE
    Col_2_OF_Base.x = m_dLocation + frame_offset;
    Col_2_OF_Base.y = m_d_Width;
    Col_2_OF_Base.z = col_ext2 / 12.0;
    Col_2_OF_Top.x = Col_2_OF_Base.x;
    Col_2_OF_Top.y = Col_2_OF_Base.y;
    Col_2_OF_Top.z = m_dEH_C2;
    // REAR COLUMN - INNER FLANGE
    Col_2_IF_Base.x = Col_2_OF_Base.x;
    Col_2_IF_Base.y = m_d_Width - baseColWidth;
    Col_2_IF_Base.z = col_ext2 / 12.0;
    Col_2_IF_Top.x = Col_2_IF_Base.x;
    // REAR COLUMN - KNEE STIFFINER
    Col_2_KS_Start.x = Col_2_OF_Base.x;
    Col_2_KS_Start.y = Col_2_OF_Base.y;
    Col_2_KS_End.x = Col_2_KS_Start.x;

    // FRONT RAFTER
    Raf_1_OF_Start.x = Col_1_OF_Top.x;
    Raf_1_OF_Start.z = Col_1_OF_Top.z;
    Raf_1_OF_End.x = Raf_1_OF_Start.x;
    Raf_1_OF_End.y = m_dDist_Peak_A;
    Raf_1_OF_End.z = m_dPeak_Ht;
    Raf_1_IF_Start.x = Raf_1_OF_Start.x;
    Raf_1_IF_End.x = Raf_1_IF_Start.x;
    Raf_1_IF_End.z = Raf_1_OF_End.z - 2.25;
    // REAR RAFTER
    Raf_2_OF_Start.x = Col_2_OF_Top.x;
    Raf_2_OF_Start.y = Col_2_OF_Top.y;
    Raf_2_OF_Start.z = Col_2_OF_Top.z;
    Raf_2_OF_End.x = Raf_2_OF_Start.x;
    Raf_2_OF_End.y = m_dDist_Peak_A;
    Raf_2_OF_End.z = m_dPeak_Ht;
    Raf_2_IF_Start.x = Raf_2_OF_Start.x;
    Raf_2_IF_End.x = Raf_2_IF_Start.x;
    Raf_2_IF_End.z = Raf_2_OF_End.z - 2.25;

    // DRAW THE FRAME
    let Prim: CBsDraw = new CBsDraw(this.globals);
    if (bay_number < this.globals.numBaysFront) { // add Static value bays->bay_number < globals.numBaysFront 
      // RIDGED BUILDING
      if (buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
        buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO) {
        // FRONT COLUMN - OUTER FLANGE
        const Framelines = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_OF_Top) }, babylonModel.Scene);
        Framelines.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines);
        // FRONT COLUMN - INNER FLANGE
        if (!isATapered) {
          Col_1_IF_Top.y = Col_1_IF_Base.y;
          Col_1_IF_Top.z = m_dEH_A1 + (baseColWidth * frontPitchTan);

          // FRONT COLUMN - KNEE STIFFENER
          let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          kneeStiffStart.x = Col_1_OF_Top.x;
          kneeStiffStart.y = Col_1_OF_Top.y;
          kneeStiffStart.z = Col_1_IF_Top.z - (2.25 / Math.cos(Math.atan(frontPitchTan)));
          kneeStiffEnd.x = kneeStiffStart.x;
          kneeStiffEnd.y = Col_1_IF_Top.y;
          kneeStiffEnd.z = kneeStiffStart.z;

          const Framelines1 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
          Framelines1.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines1);
          Raf_1_IF_Start.z = kneeStiffEnd.z;
        }
        else {
          Col_1_IF_Top.y = baseColWidth * 2.0;
          Col_1_IF_Top.z = m_dEH_A1 + ((baseColWidth * 2) * frontPitchTan) - (2.25 / Math.cos(Math.atan(frontPitchTan)));

          // FRONT COLUMN - KNEE STIFFENER
          let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          kneeStiffStart.x = Col_1_OF_Top.x;
          kneeStiffStart.y = Col_1_OF_Top.y;
          kneeStiffStart.z = Col_1_IF_Top.z;
          kneeStiffEnd.x = kneeStiffStart.x;
          kneeStiffEnd.y = Col_1_IF_Top.y;
          kneeStiffEnd.z = kneeStiffStart.z;

          const Framelines2 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
          Framelines2.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines2);
          // FRONT COLUMN - KNEE PLATE
          let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          kneePlateStart.x = Col_1_IF_Top.x;
          kneePlateStart.y = Col_1_IF_Top.y;
          kneePlateStart.z = Col_1_IF_Top.z;
          kneePlateEnd.x = kneePlateStart.x;
          kneePlateEnd.y = kneePlateStart.y;
          kneePlateEnd.z = m_dEH_A1 + ((baseColWidth * 2) * frontPitchTan);

          const Framelines3 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_PLATE_ELEV_A, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
          Framelines3.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines3);
          Raf_1_IF_Start.z = Col_1_IF_Top.z;
        }

        const Framelines4 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_IF_Base, Col_1_IF_Top) }, babylonModel.Scene);
        Framelines4.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines4);
        // FRONT COLUMN - BASE PLATE


        const Framelines5 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_BASE_PLATE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_IF_Base) }, babylonModel.Scene);
        Framelines5.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines5);

        Col_1_OF_Base.x =  Col_1_OF_Base.x - 1;
        Col_1_OF_Base.y =  Col_1_OF_Base.y + 1;

        this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_1_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);


        // REAR COLUMN - OUTER FLANGE

        const Framelines6 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_OF_Top) }, babylonModel.Scene);
        Framelines6.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines6);
        // REAR COLUMN - INNER FLANGE
        if (!isCTapered) {
          Col_2_IF_Top.y = Col_2_IF_Base.y;
          Col_2_IF_Top.z = m_dEH_C2 + (baseColWidth * rearPitchTan);

          // REAR COLUMN - KNEE STIFFENER
          let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          kneeStiffStart.x = Col_2_OF_Top.x;
          kneeStiffStart.y = Col_2_OF_Top.y;
          kneeStiffStart.z = Col_2_IF_Top.z - (2.25 / Math.cos(Math.atan(rearPitchTan)));
          kneeStiffEnd.x = kneeStiffStart.x;
          kneeStiffEnd.y = Col_2_IF_Top.y;
          kneeStiffEnd.z = kneeStiffStart.z;


          const Framelines7 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
          Framelines7.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines7);
          Raf_2_IF_Start.z = kneeStiffEnd.z;
        }
        else {
          Col_2_IF_Top.y = m_d_Width - (baseColWidth * 2.0);
          Col_2_IF_Top.z = m_dEH_C2 + ((baseColWidth * 2) * rearPitchTan) - (2.25 / Math.cos(Math.atan(rearPitchTan)));

          // REAR COLUMN - KNEE STIFFENER
          let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          kneeStiffStart.x = Col_2_OF_Top.x;
          kneeStiffStart.y = Col_2_OF_Top.y;
          kneeStiffStart.z = Col_2_IF_Top.z;
          kneeStiffEnd.x = kneeStiffStart.x;
          kneeStiffEnd.y = Col_2_IF_Top.y;
          kneeStiffEnd.z = kneeStiffStart.z;

          const Framelines8 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
          Framelines8.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines8);
          // REAR COLUMN - KNEE PLATE
          let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
          kneePlateStart.x = Col_2_IF_Top.x;
          kneePlateStart.y = Col_2_IF_Top.y;
          kneePlateStart.z = Col_2_IF_Top.z;
          kneePlateEnd.x = Col_2_IF_Top.x;
          kneePlateEnd.y = Col_2_IF_Top.y;
          kneePlateEnd.z = m_dEH_C2 + ((baseColWidth * 2) * rearPitchTan);

          const Framelines9 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_PLATE_ELEV_C, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
          Framelines9.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines9);
          Raf_2_IF_Start.z = Col_2_IF_Top.z;
        }

        const Framelines10 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_IF_Base, Col_2_IF_Top) }, babylonModel.Scene);
        Framelines10.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines10);
        // REAR COLUMN - BASE PLATE

        const Framelines11 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_BASE_PLATE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_IF_Base) }, babylonModel.Scene);
        Framelines11.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines11);

        Col_2_OF_Base.y = /*buildinggeometry.ElevationA == BuildingDrawingEnum.ID_SIDEWALL ?*/ Col_2_OF_Base.y - 3 /*: Col_2_OF_Base.y*/;
        Col_2_OF_Base.x = Col_2_OF_Base.x - 1;
        this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_2_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);

        // FRONT RAFTER - OUTER FLANGE
        const Framelines12 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_RAFTER_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Raf_1_OF_Start, Raf_1_OF_End) }, babylonModel.Scene);
        Framelines12.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines12);
        // FRONT RAFTER - INNER FLANGE
        Raf_1_IF_Start.y = Col_1_IF_Top.y;
        Raf_1_IF_End.y = m_dDist_Peak_A;
        const Framelines13 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_RAFTER_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Raf_1_IF_Start, Raf_1_IF_End) }, babylonModel.Scene);
        Framelines13.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines13);
        // REAR RAFTER - OUTER FLANGE
        const Framelines14 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_RAFTER_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Raf_2_OF_Start, Raf_2_OF_End) }, babylonModel.Scene);
        Framelines14.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines14);
        // REAR RAFTER - INNER FLANGE
        Raf_2_IF_Start.y = Col_2_IF_Top.y;
        Raf_2_IF_End.y = m_dDist_Peak_A;
        const Framelines15 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_RAFTER_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Raf_2_IF_Start, Raf_2_IF_End) }, babylonModel.Scene);
        Framelines15.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines15);
        // PEAK PLATE
        const Framelines16 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_PEAK_PLATE, { points: Prim.Draw_Line(Raf_1_IF_End, Raf_1_OF_End) }, babylonModel.Scene);
        Framelines16.color = this.buildingDrawingColor.FrameColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines16);
      }
      // SINGLE SLOPE BUILDING
      else if (buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE) {
        // HIGH SIDEWALL == FRONT WALL
        if (buildinggeometry?.HighSideWall == this.globals.frontLetter) {
          // FRONT COLUMN - OUTER FLANGE

          const Framelines17 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_OF_Top) }, babylonModel.Scene);
          Framelines17.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines17);
          // FRONT COLUMN - INNER FLANGE
          if (!isATapered) {
            Col_1_IF_Top.y = Col_1_IF_Base.y;
            Col_1_IF_Top.z = m_dEH_A1 - (baseColWidth * rearPitchTan);

            // FRONT COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_1_OF_Top.x;
            kneeStiffStart.y = Col_1_OF_Top.y;
            kneeStiffStart.z = Col_1_IF_Top.z - (2.25 / Math.cos(Math.atan(rearPitchTan)));
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_1_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;

            const Framelines18 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines18.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines18);
            Raf_2_IF_End.z = kneeStiffEnd.z;
          }
          else {
            Col_1_IF_Top.y = Col_1_IF_Base.y * 2.0;
            Col_1_IF_Top.z = m_dEH_A1 - ((baseColWidth * 2) * rearPitchTan) - (2.25 / Math.cos(Math.atan(rearPitchTan)));

            // FRONT COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_1_OF_Top.x;
            kneeStiffStart.y = Col_1_OF_Top.y;
            kneeStiffStart.z = Col_1_IF_Top.z;
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_1_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;

            const Framelines19 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines19.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines19);
            // FRONT COLUMN - KNEE PLATE
            let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneePlateStart.x = Col_1_IF_Top.x;
            kneePlateStart.y = Col_1_IF_Top.y;
            kneePlateStart.z = Col_1_IF_Top.z;
            kneePlateEnd.x = kneePlateStart.x;
            kneePlateEnd.y = kneePlateStart.y;
            kneePlateEnd.z = m_dEH_A1 - ((baseColWidth * 2) * rearPitchTan);

            const Framelines20 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_PLATE_ELEV_A, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
            Framelines20.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines20);
            Raf_2_IF_End.z = Col_1_IF_Top.z;
          }

          const Framelines21 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_IF_Base, Col_1_IF_Top) }, babylonModel.Scene);
          Framelines21.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines21);
          // FRONT COLUMN - BASE PLATE
          const Framelines22 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_BASE_PLATE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_IF_Base) }, babylonModel.Scene);
          Framelines22.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines22);

          //Col_1_OF_Base.y = Col_1_OF_Base.y + 2;
          //Col_1_OF_Base.x = Col_1_OF_Base.x - 1;
          this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_1_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);


          // REAR COLUMN - OUTER FLANGE
          const Framelines23 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_OF_Top) }, babylonModel.Scene);
          Framelines23.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines23);
          // REAR COLUMN - INNER FLANGE
          if (!isCTapered) {
            Col_2_IF_Top.y = Col_2_IF_Base.y;
            Col_2_IF_Top.z = m_dEH_C2 + (baseColWidth * rearPitchTan);

            // REAR COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_2_OF_Top.x;
            kneeStiffStart.y = Col_2_OF_Top.y;
            kneeStiffStart.z = Col_2_IF_Top.z - (2.25 / Math.cos(Math.atan(rearPitchTan)));
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_2_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines24 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines24.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines24);
            Raf_2_IF_Start.z = kneeStiffEnd.z;
          }
          else {
            Col_2_IF_Top.y = m_d_Width - (baseColWidth * 2.0);
            Col_2_IF_Top.z = m_dEH_C2 + ((baseColWidth * 2) * rearPitchTan) - (2.25 / Math.cos(Math.atan(rearPitchTan)));

            // REAR COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_2_OF_Top.x;
            kneeStiffStart.y = Col_2_OF_Top.y;
            kneeStiffStart.z = Col_2_IF_Top.z;
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_2_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines26 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines26.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines26);
            // REAR COLUMN - KNEE PLATE
            let kneeStiffStartKNEEPLATE: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEndKNEEPLATE: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStartKNEEPLATE.x = Col_2_IF_Top.x;
            kneeStiffStartKNEEPLATE.y = Col_2_IF_Top.y;
            kneeStiffStartKNEEPLATE.z = Col_2_IF_Top.z;
            kneeStiffEndKNEEPLATE.x = Col_2_IF_Top.x;
            kneeStiffEndKNEEPLATE.y = Col_2_IF_Top.y;
            kneeStiffEndKNEEPLATE.z = m_dEH_C2 + ((baseColWidth * 2) * rearPitchTan);

            const Framelines27 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_PLATE_ELEV_C, { points: Prim.Draw_Line(kneeStiffStartKNEEPLATE, kneeStiffEndKNEEPLATE) }, babylonModel.Scene);
            Framelines27.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines27);
            Raf_2_IF_Start.z = Col_2_IF_Top.z;
          }
          const Framelines28 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_IF_Base, Col_2_IF_Top) }, babylonModel.Scene);
          Framelines28.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines28);
          // REAR COLUMN - BASE PLATE
          const Framelines29 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_BASE_PLATE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_IF_Base) }, babylonModel.Scene);
          Framelines29.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines29);

          //Col_2_OF_Base.y = Col_2_OF_Base.y + 2;
          this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_2_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);

          // REAR RAFTER - OUTER FLANGE
          const Framelines30 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_RAFTER_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Raf_2_OF_Start, Raf_2_OF_End) }, babylonModel.Scene);
          Framelines30.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines30);
          // REAR RAFTER - INNER FLANGE
          Raf_2_IF_Start.y = Col_2_IF_Top.y;
          Raf_2_IF_End.y = Col_1_IF_Top.y;

          const Framelines31 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_RAFTER_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Raf_2_IF_Start, Raf_2_IF_End) }, babylonModel.Scene);
          Framelines31.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines31);
        }
        // HIGH SIDEWALL == REAR WALL
        if (buildinggeometry?.HighSideWall == this.globals.backLetter) {
          // FRONT COLUMN - OUTER FLANGE
          const Framelines32 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_OF_Top) }, babylonModel.Scene);
          Framelines32.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines32);
          // FRONT COLUMN - INNER FLANGE
          if (!isATapered) {
            Col_1_IF_Top.y = Col_1_IF_Base.y;
            Col_1_IF_Top.z = m_dEH_A1 + (baseColWidth * frontPitchTan);

            // FRONT COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_1_OF_Top.x;
            kneeStiffStart.y = Col_1_OF_Top.y;
            kneeStiffStart.z = Col_1_IF_Top.z - (2.25 / Math.cos(Math.atan(frontPitchTan)));
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_1_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines33 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines33.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines33);
            Raf_1_IF_End.z = kneeStiffEnd.z;
          }
          else {
            Col_1_IF_Top.y = Col_1_IF_Base.y * 2.0;
            Col_1_IF_Top.z = m_dEH_A1 + ((baseColWidth * 2) * frontPitchTan) - (2.25 / Math.cos(Math.atan(frontPitchTan)));

            // FRONT COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_1_OF_Top.x;
            kneeStiffStart.y = Col_1_OF_Top.y;
            kneeStiffStart.z = Col_1_IF_Top.z;
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_1_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines34 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines34.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines34);
            // FRONT COLUMN - KNEE PLATE
            let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneePlateStart.x = Col_1_IF_Top.x;
            kneePlateStart.y = Col_1_IF_Top.y;
            kneePlateStart.z = Col_1_IF_Top.z;
            kneePlateEnd.x = kneePlateStart.x;
            kneePlateEnd.y = kneePlateStart.y;
            kneePlateEnd.z = m_dEH_A1 + ((baseColWidth * 2) * frontPitchTan);
            const Framelines35 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_PLATE_ELEV_A, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
            Framelines35.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines35);
            Raf_1_IF_End.z = Col_1_IF_Top.z;
          }
          const Framelines36 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_IF_Base, Col_1_IF_Top) }, babylonModel.Scene);
          Framelines36.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines36);
          // FRONT COLUMN - BASE PLATE
          const Framelines37 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_BASE_PLATE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_IF_Base) }, babylonModel.Scene);
          Framelines37.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines37);

          //Col_1_OF_Base.y = Col_1_OF_Base.y + 2;
          this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_1_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);

          // REAR COLUMN - OUTER FLANGE
          const Framelines38 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_OF_Top) }, babylonModel.Scene);
          Framelines38.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines38);
          // REAR COLUMN - INNER FLANGE
          if (!isCTapered) {
            Col_2_IF_Top.y = Col_2_IF_Base.y;
            Col_2_IF_Top.z = m_dEH_C2 - (baseColWidth * frontPitchTan);

            // REAR COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_2_OF_Top.x;
            kneeStiffStart.y = Col_2_OF_Top.y;
            kneeStiffStart.z = Col_2_IF_Top.z - (2.25 / Math.cos(Math.atan(frontPitchTan)));
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_2_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines39 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines39.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines39);
            Raf_1_IF_Start.z = kneeStiffEnd.z;
          }
          else {
            Col_2_IF_Top.y = m_d_Width - (baseColWidth * 2.0);
            Col_2_IF_Top.z = m_dEH_C2 - ((baseColWidth * 2) * frontPitchTan) - (2.25 / Math.cos(Math.atan(frontPitchTan)));

            // REAR COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_2_OF_Top.x;
            kneeStiffStart.y = Col_2_OF_Top.y;
            kneeStiffStart.z = Col_2_IF_Top.z;
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_2_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines40 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines40.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines40);
            // REAR COLUMN - KNEE PLATE
            let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneePlateStart.x = Col_2_IF_Top.x;
            kneePlateStart.y = Col_2_IF_Top.y;
            kneePlateStart.z = Col_2_IF_Top.z;
            kneePlateEnd.x = Col_2_IF_Top.x;
            kneePlateEnd.y = Col_2_IF_Top.y;
            kneePlateEnd.z = m_dEH_C2 - ((baseColWidth * 2) * frontPitchTan);
            const Framelines41 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_PLATE_ELEV_C, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
            Framelines41.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines41);
            Raf_1_IF_Start.z = Col_2_IF_Top.z;
          }
          const Framelines42 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_IF_Base, Col_2_IF_Top) }, babylonModel.Scene);
          Framelines42.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines42);
          // REAR COLUMN - BASE PLATE
          const Framelines43 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_BASE_PLATE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_IF_Base) }, babylonModel.Scene);
          Framelines43.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines43);

          //Col_2_OF_Base.y = Col_2_OF_Base.y + 2;
          this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_2_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);

          // FRONT RAFTER - OUTER FLANGE
          const Framelines44 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_RAFTER_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Raf_1_OF_Start, Raf_1_OF_End) }, babylonModel.Scene);
          Framelines44.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines44);
          // FRONT RAFTER - INNER FLANGE
          Raf_1_IF_Start.y = Col_2_IF_Top.y;
          Raf_1_IF_End.y = Col_1_IF_Top.y;
          const Framelines45 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_RAFTER_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Raf_1_IF_Start, Raf_1_IF_End) }, babylonModel.Scene);
          Framelines45.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines45);
        }
      }
      // LEAN-TO BUILDING
      else {
        // HIGH SIDEWALL == FRONT WALL
        if (buildinggeometry?.HighSideWall == this.globals.frontLetter) {
          // REAR COLUMN - OUTER FLANGE
          const Framelines46 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_OF_Top) }, babylonModel.Scene);
          Framelines46.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines46);
          // REAR COLUMN - INNER FLANGE
          if (!isCTapered) {
            Col_2_IF_Top.y = Col_2_IF_Base.y;
            Col_2_IF_Top.z = m_dEH_C2 + (baseColWidth * rearPitchTan);

            // REAR COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_2_OF_Top.x;
            kneeStiffStart.y = Col_2_OF_Top.y;
            kneeStiffStart.z = Col_2_IF_Top.z - (2.25 / Math.cos(Math.atan(rearPitchTan)));
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_2_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines47 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines47.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines47);
            Raf_2_IF_Start.z = kneeStiffEnd.z;
          }
          else {
            Col_2_IF_Top.y = m_d_Width - (baseColWidth * 2.0);
            Col_2_IF_Top.z = m_dEH_C2 + ((baseColWidth * 2) * rearPitchTan) - (2.25 / Math.cos(Math.atan(rearPitchTan)));

            // REAR COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_2_OF_Top.x;
            kneeStiffStart.y = Col_2_OF_Top.y;
            kneeStiffStart.z = Col_2_IF_Top.z;
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_2_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines48 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines48.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines48);
            // REAR COLUMN - KNEE PLATE
            let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneePlateStart.x = Col_2_IF_Top.x;
            kneePlateStart.y = Col_2_IF_Top.y;
            kneePlateStart.z = Col_2_IF_Top.z;
            kneePlateEnd.x = Col_2_IF_Top.x;
            kneePlateEnd.y = Col_2_IF_Top.y;
            kneePlateEnd.z = m_dEH_C2 + ((baseColWidth * 2) * rearPitchTan);
            const Framelines49 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_KNEE_PLATE_ELEV_C, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
            Framelines49.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines49);
            Raf_2_IF_Start.z = Col_2_IF_Top.z;
          }
          const Framelines50 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Col_2_IF_Base, Col_2_IF_Top) }, babylonModel.Scene);
          Framelines50.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines50);
          // REAR COLUMN - BASE PLATE
          const Framelines51 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_COLUMN_BASE_PLATE_ELEV_C, { points: Prim.Draw_Line(Col_2_OF_Base, Col_2_IF_Base) }, babylonModel.Scene);
          Framelines51.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines51);

          //Col_2_OF_Base.y = Col_2_OF_Base.y + 2;
          this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_2_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);

          // REAR RAFTER - OUTER FLANGE
          const Framelines52 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_RAFTER_OUTER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Raf_2_OF_Start, Raf_2_OF_End) }, babylonModel.Scene);
          Framelines52.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines52);
          // REAR RAFTER - INNER6FLANGE
          Raf_2_IF_Start.y = Col_2_IF_Top.y;

          const Framelines53 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_REAR_RAFTER_INNER_FLANGE_ELEV_C, { points: Prim.Draw_Line(Raf_2_IF_Start, Raf_2_IF_End) }, babylonModel.Scene);
          Framelines53.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines53);
        }
        // HIGH SIDEWALL == REAR WALL
        if (buildinggeometry?.HighSideWall == this.globals.backLetter) {
          // FRONT COLUMN - OUTER FLANGE
          const Framelines54 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_OF_Top) }, babylonModel.Scene);
          Framelines54.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines54);
          // FRONT COLUMN - INNER FLANGE
          if (!isATapered) {
            Col_1_IF_Top.y = Col_1_IF_Base.y;
            Col_1_IF_Top.z = m_dEH_A1 + (baseColWidth * frontPitchTan);

            // FRONT COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_1_OF_Top.x;
            kneeStiffStart.y = Col_1_OF_Top.y;
            kneeStiffStart.z = Col_1_IF_Top.z - (2.25 / Math.cos(Math.atan(frontPitchTan)));
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_1_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines55 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines55.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines55);
            Raf_1_IF_Start.z = kneeStiffEnd.z;
          }
          else {
            Col_1_IF_Top.y = Col_1_IF_Base.y * 2.0;
            Col_1_IF_Top.z = m_dEH_A1 + ((baseColWidth * 2) * frontPitchTan) - (2.25 / Math.cos(Math.atan(frontPitchTan)));

            // FRONT COLUMN - KNEE STIFFENER
            let kneeStiffStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneeStiffEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneeStiffStart.x = Col_1_OF_Top.x;
            kneeStiffStart.y = Col_1_OF_Top.y;
            kneeStiffStart.z = Col_1_IF_Top.z;
            kneeStiffEnd.x = kneeStiffStart.x;
            kneeStiffEnd.y = Col_1_IF_Top.y;
            kneeStiffEnd.z = kneeStiffStart.z;
            const Framelines56 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A, { points: Prim.Draw_Line(kneeStiffStart, kneeStiffEnd) }, babylonModel.Scene);
            Framelines56.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines56);
            // FRONT COLUMN - KNEE PLATE
            let kneePlateStart: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            let kneePlateEnd: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
            kneePlateStart.x = Col_1_IF_Top.x;
            kneePlateStart.y = Col_1_IF_Top.y;
            kneePlateStart.z = Col_1_IF_Top.z;
            kneePlateEnd.x = kneePlateStart.x;
            kneePlateEnd.y = kneePlateStart.y;
            kneePlateEnd.z = m_dEH_A1 + ((baseColWidth * 2) * frontPitchTan);
            const Framelines57 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_KNEE_PLATE_ELEV_A, { points: Prim.Draw_Line(kneePlateStart, kneePlateEnd) }, babylonModel.Scene);
            Framelines57.color = this.buildingDrawingColor.FrameColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines57);
            Raf_1_IF_Start.z = Col_1_IF_Top.z;
          }
          const Framelines58 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Col_1_IF_Base, Col_1_IF_Top) }, babylonModel.Scene);
          Framelines58.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines58);
          // FRONT COLUMN - BASE PLATE
          const Framelines59 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_COLUMN_BASE_PLATE_ELEV_A, { points: Prim.Draw_Line(Col_1_OF_Base, Col_1_IF_Base) }, babylonModel.Scene);
          Framelines59.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines59);

          //Col_1_OF_Base.y = Col_1_OF_Base.y + 2;
          this.globals.draw2DBuildingColumns(babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex], Col_1_OF_Base, babylonModel.Scene, buildinggeometry.ElevationA, this.buildingDrawingColor.BorderColor, true);

          // FRONT RAFTER - OUTER FLANGE
          Raf_1_OF_End.y = m_d_Width;
          const Framelines60 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_RAFTER_OUTER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Raf_1_OF_Start, Raf_1_OF_End) }, babylonModel.Scene);
          Framelines60.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines60);
          // FRONT RAFTER - INNER FLANGE
          Raf_1_IF_Start.y = Col_1_IF_Top.y;
          Raf_1_IF_End.y = m_d_Width;
          const Framelines61 = BABYLON.MeshBuilder.CreateLines(EndWallType + BuildingLayerEnum.LAYER_FRAMES_FRONT_RAFTER_INNER_FLANGE_ELEV_A, { points: Prim.Draw_Line(Raf_1_IF_Start, Raf_1_IF_End) }, babylonModel.Scene);
          Framelines61.color = this.buildingDrawingColor.FrameColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Framelines61);
        }
      }
    }
    //to prevent multiple partitions and cranes from being drawn since we are in the frame loop( because we are using frame info )
//    //cnw ===================== Draw Cranes ======================
//    // 9-1-07 for NBS-931
//    this.globals.run_once = true;
//    let xstart: number = 0;
//    let xend: number = 0;
//    let P_elev: string;
//    // Adesk:: UInt16 tempcolor = globals.entColor;
//    // globals.entColor = 3;//set our temp crane color
//    let ptArr: BABYLON.Vector3[] = [];
//    let roofpoint1: number = 0;//cnw, our connection points for roof
//    let roofpoint2: number = 0;

//    lstICranes?.forEach((cranes) => {
//      if (cranes?.BuildingNumber == buildinggeometry?.BuildingNumber && cranes?.ModuleNumber > 0) {
//        if (cranes?.CenterlineOfRunwayBeamToSteelLine < buildinggeometry?.DistToRidge2)
//          roofpoint1 = (buildinggeometry?.EaveHeight2 + (cranes?.CenterlineOfRunwayBeamToSteelLine * (buildinggeometry?.RoofSlope2 / 12))) * 12;
//        else
//          roofpoint1 = (buildinggeometry?.EaveHeight1 + ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * (buildinggeometry?.RoofSlope1 / 12))) * 12;



//        if ((cranes?.CenterlineOfRunwayBeamToSteelLine + cranes?.CenterlineToCenterlineOfRails) < buildinggeometry?.DistToRidge2)
//          roofpoint2 = (buildinggeometry?.EaveHeight2 + ((cranes?.CenterlineOfRunwayBeamToSteelLine + cranes?.CenterlineToCenterlineOfRails) * (buildinggeometry?.RoofSlope2 / 12))) * 12;
//        else
//          roofpoint2 = (buildinggeometry?.EaveHeight1 + ((buildinggeometry?.Width - (cranes?.CenterlineOfRunwayBeamToSteelLine + cranes?.CenterlineToCenterlineOfRails)) * (buildinggeometry?.RoofSlope1 / 12))) * 12;

//        if (buildinggeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL)
//          P_elev = "A";
//        else
//          P_elev = "D";//cnw elevation for bays, was originally B when i wrote it changed as a quick fix for NBS-1401

//        //in this section i will find the xstart and xstop for the crane
//        //this will define the x values for any elevation
//        let lstIBaylenght: number = lstIBay.length;
//        for (let bayCount = 0; bayCount < lstIBay.length; bayCount++) {
//          if (lstIBay[bayCount].BuildingNumber == buildinggeometry?.BuildingNumber) {
//            for (bayCount = bayCount; bayCount < lstIBay.length; bayCount++) {
//              if (bayCount != lstIBay.length - 1) {
//                if (lstIBay[bayCount].Elevation == P_elev) {
//                  if (lstIBay[bayCount].BayNumber == cranes?.StartFrameline) {
//                    for (bayCount = bayCount; bayCount < lstIBay.length; bayCount) {
//                      if (bayCount != lstIBay.length - 1) {
//                        if (lstIBay[bayCount].BayNumber == cranes?.StopFrameline) {
//                          bayCount = lstIBay.length - 1;
//                          break;
//                        } else {
//                          xend += lstIBay[bayCount].Width;
//                          bayCount++;
//                          if (lstIBay[bayCount].Elevation != P_elev) {
//                            bayCount = lstIBay.length - 1;
//                            break;
//                          }
//                          if (cranes?.IncludeSeperateSupportCol)//ID_CRANE_TOP_RUNNING
//                          {
//                            roofpoint1 = 0;//cnw, if we are in here, we want columns and not hangers
//                            roofpoint2 = 0;//the zero takes it to the floor, instead of the roof

//                            ptArr = [];
//                            //this draws the first column on the back sidewall
//                            ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12), (cranes?.ColBaseToTopOfRail * 12) - 18));//top point for column
//                            ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12), roofpoint1));//bottom point for column
//                            const Craneline = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//                            Craneline.color = this.buildingDrawingColor.CraneColor;
//                            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline);

//                            //draw crane columns, the end columns on the back sidewall
//                            ptArr = [];
//                            ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12), (cranes?.ColBaseToTopOfRail * 12) - 18));//top point for column
//                            ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12), roofpoint1));//bottom point for column
//                            const Craneline1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//                            //const Craneline1 = BABYLON.MeshBuilder.CreateLines("Craneline1", { points: ptArr}, babylonModel.Scene);
//                            Craneline1.color = this.buildingDrawingColor.CraneColor;
//                            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline1);

//                            //this draws the first column on the front sidewall
//                            ptArr = [];
//                            ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12), (cranes?.ColBaseToTopOfRail * 12) - 18));//top point for column
//                            ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12), roofpoint2));//bottom point for column
//                            const Craneline2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//                            //const Craneline2 = BABYLON.MeshBuilder.CreateLines("Craneline2", { points: ptArr }, babylonModel.Scene);
//                            Craneline2.color = this.buildingDrawingColor.CraneColor;
//                            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline2);
//                            //draw crane columns, the end columns on the front sidewall
//                            ptArr = [];
//                            ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12), (cranes?.ColBaseToTopOfRail * 12) - 18));//top point for column
//                            ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12), roofpoint2));//bottom point for column
//                            const Craneline4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//                            //const Craneline4 = BABYLON.MeshBuilder.CreateLines("Craneline4", { points: ptArr}, babylonModel.Scene);
//                            Craneline4.color = this.buildingDrawingColor.CraneColor;
//                            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline4);
//                          }
//                        }
//                      }
//                    }
//                  } else {
//                    xstart += lstIBay[bayCount].Width;
//                    xend = xstart;
//                  }
//                }
//                // if (bayCount != lstIBay.length - 1){
//                // bayCount++;
//                // }
//              }
//            }



//          }
//        }

//        //cnw draw the back sidewall beam for the crane
//        //beam long part
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));

//        const Craneline5 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline5.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline5);
//        //beam long part
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));



//        const Craneline6 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline6.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline6);
//        //end cap
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC



//        const Craneline7 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline7.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline7);
//        //end cap
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC



//        const Craneline8 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline8.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline8);
//        //cnw end of draw back swc beam




//        //cnw draw the front sidewall beam for the crane
//        //beam long part
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));



//        const Craneline9 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline9.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline9);
//        //beam long part
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));



//        const Craneline10 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline10.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline10);
//        //end cap
//        ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC
//        ptArr.push(new BABYLON.Vector3(xstart * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC



//        const Craneline11 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline11.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline11);
//        //end cap
//        //ptArr = [];
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12) - 18));//bottom two points SWC
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) + 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC
//        ptArr.push(new BABYLON.Vector3(xend * 12, ((buildinggeometry?.Width - cranes?.CenterlineOfRunwayBeamToSteelLine - cranes?.CenterlineToCenterlineOfRails) * 12) - 2, (cranes?.ColBaseToTopOfRail * 12)));//top two points SWC



//        const Craneline12 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CRANE, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
//        Craneline12.color = this.buildingDrawingColor.CraneColor;
//        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Craneline12);
//        //cnw end of draw front swa beam
//      }
//      xend = 0; xstart = 0;//for multiple cranes in a building, these need to be reset
//    });

////cnw ================ end Draw Cranes =========================

    return 0;
  }

  GetInterClmYDist(bldgNum: number, lstModules: IModules[]) {
    let yAdd = 0.0;
    let index = 0;
    let grpNum = 0;

    for (let cnt = 0; cnt < lstModules.length; cnt++) {
      if (bldgNum == lstModules[cnt].BuildingNumber) {
        this.globals.interClmSpacing[lstModules[cnt].GroupNumber][index++] = (lstModules[cnt].Width + yAdd);
        yAdd += lstModules[cnt].Width;
        grpNum = lstModules[cnt].GroupNumber;
      }
      // if next is different grp, reset counter and accumulator
      if ((lstModules.length - 1) != cnt && grpNum != lstModules[cnt + 1].GroupNumber) {
        yAdd = 0.0;
        index = 0;
      }
    }
    return 0;
  }



  DoesFrmGetInterClm(bldgNum: number, frmGrpNum: number, lstModules: IModules[]) {
    let retVal = false;

    lstModules?.filter(x => x.BuildingNumber == bldgNum)?.forEach((modules) => {
      if (bldgNum == modules?.BuildingNumber &&
        frmGrpNum == modules?.GroupNumber && !retVal) {
        retVal = true;
      }
    });
    return retVal;
  }


  GetNumInterClmOnFrm(bldgNum: number, frmGrpNum: number, lstModules: IModules[]) {
    let retVal = 0;
    lstModules?.filter(x=>x.BuildingNumber==bldgNum)?.forEach((modules) => {
      if (bldgNum == modules?.BuildingNumber &&
        frmGrpNum == modules?.GroupNumber) {
        retVal++;
      }
    });
    return retVal - 1;
  }


  DrawInterClms(
    bldgWidth: number,
    frontEaveHt: number,
    backEaveHt: number,
    frontDistToRidge: number,
    backDistToRidge: number,
    clmDistY: number,
    whichFrmLine: number,
    bldgNum: number,
    buildinggeometry: IBuildingGeometry,
    I_BuildingData: IBuildingData,
    babylonModel: BabylonModelData) {
    let startClm: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let endClm: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let Prim: CBsDraw = new CBsDraw(this.globals);
    let zLeft = 0, zRight = 0;
    let grpNum = this.globals.GetFrmLineGrpNum(bldgNum, whichFrmLine, I_BuildingData.IFramelines);
    I_BuildingData.IGroups?.filter(x=>x.BuildingNumber==bldgNum).forEach((groups) => {
      // if the number coming in matches with this frmline group
      if (groups?.GroupNumber == grpNum &&
        groups?.BuildingNumber == bldgNum) {
        startClm.z = (groups?.IntColRecession / -12);
      }
    });

    let numBays = 0;

    if (buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
      buildinggeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO) {
      numBays = this.globals.numBaysLeft;

      if (clmDistY <= backDistToRidge) {
        // set clm start and end points
        startClm.x = this.GetInterClmXDist(bldgNum, whichFrmLine, I_BuildingData.IBays);
        startClm.y = bldgWidth - clmDistY;

        // adjust for frame in endwall
        if (whichFrmLine == 1 || whichFrmLine == this.globals.numBaysFront + 1) {
          // get endwalls
          let endwall: IEndwalls = I_BuildingData.IEndwalls?.find(x => x.BuildingNumber == bldgNum);

          if (whichFrmLine == 1)
            startClm.x += endwall?.SpecifiedSetback3;
          else
            startClm.x -= endwall?.SpecifiedSetback4;
        }

        endClm.x = startClm.x;
        endClm.y = bldgWidth - clmDistY;
        endClm.z = backEaveHt + (Math.tan(this.globals.backRoofSlope) * clmDistY);

        //NKS - Need to draw interior clms to match with CecoPro sketch....Draw the end lines of clm at an offset of 6"
        zLeft = backEaveHt + (Math.tan(this.globals.backRoofSlope) * (clmDistY - .25));

        if (clmDistY + .5 <= backDistToRidge)
          zRight = backEaveHt + (Math.tan(this.globals.backRoofSlope) * (clmDistY + .25));
        else
          zRight = frontEaveHt + (Math.tan(this.globals.frontRoofSlope) * (bldgWidth - clmDistY - .25));
        //NKS
      }
      else {
        // set clm start and stop points
        startClm.x = this.GetInterClmXDist(bldgNum, whichFrmLine, I_BuildingData.IBays);
        startClm.y = bldgWidth - clmDistY;
        //  startClm.z = 0.0 ;

        // adjust for frame in endwall
        if (whichFrmLine == 1 || whichFrmLine == this.globals.numBaysFront + 1) {
          // get endwalls
          let endwall: IEndwalls = I_BuildingData.IEndwalls?.find(x => x.BuildingNumber == bldgNum);

          if (whichFrmLine == 1)
            startClm.x += endwall?.SpecifiedSetback3;
          else
            startClm.x -= endwall?.SpecifiedSetback4;
        }

        endClm.x = startClm.x;
        endClm.y = bldgWidth - clmDistY;
        endClm.z = frontEaveHt + (Math.tan(this.globals.frontRoofSlope) * (bldgWidth - clmDistY));

        //NKS - Need to draw interior clms to match with CecoPro sketch....Draw the end lines of clm at an offset of 6"
        zRight = frontEaveHt + (Math.tan(this.globals.frontRoofSlope) * (bldgWidth - clmDistY - .25));

        if (clmDistY - .5 <= backDistToRidge)
          zLeft = backEaveHt + (Math.tan(this.globals.backRoofSlope) * (clmDistY - .25));
        else
          zLeft = frontEaveHt + (Math.tan(this.globals.frontRoofSlope) * (bldgWidth - clmDistY + .25));
        //NKS
      }
    }
    else if (buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE ||
      buildinggeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_LEANTO) {
      // set initial clm start and end points
      startClm.x = this.GetInterClmXDist(bldgNum, whichFrmLine, I_BuildingData.IBays);
      startClm.y = bldgWidth - clmDistY;

      endClm.x = startClm.x;
      endClm.y = bldgWidth - clmDistY;

      if (buildinggeometry?.HighSideWall == this.globals.backLetter) {
        endClm.z = backEaveHt - (Math.tan(this.globals.frontRoofSlope) * clmDistY);

        //NKS - Need to draw interior clms to match with CecoPro sketch....Draw the end lines of clm at an offset of 6"
        zLeft = backEaveHt - (Math.tan(this.globals.frontRoofSlope) * (clmDistY - .25));
        zRight = backEaveHt - (Math.tan(this.globals.frontRoofSlope) * (clmDistY + .25));
        //NKS
      }
      else {
        endClm.z = backEaveHt + (Math.tan(this.globals.backRoofSlope) * clmDistY);

        //NKS - Need to draw interior clms to match with CecoPro sketch....Draw the end lines of clm at an offset of 6"
        zLeft = backEaveHt + (Math.tan(this.globals.backRoofSlope) * (clmDistY - .25));
        zRight = backEaveHt + (Math.tan(this.globals.backRoofSlope) * (clmDistY + .25));
        //NKS
      }
    }

    const Line1 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_INTER_COLUMNS_1, Prim.Draw_Line(startClm, endClm), babylonModel.Scene, false);
    Line1.color = this.buildingDrawingColor.InteriorColumnColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Line1);
    const Line2 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_INTER_COLUMNS_2, Prim.Draw_Line(new BABYLON.Vector3(startClm.x, startClm.y + 0.25, startClm.z), new BABYLON.Vector3(startClm.x, startClm.y + 0.25, zLeft)), babylonModel.Scene,false);
    Line2.color = this.buildingDrawingColor.InteriorColumnColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Line2);
    const Line3 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_INTER_COLUMNS_3, Prim.Draw_Line(new BABYLON.Vector3(startClm.x, startClm.y - 0.25, startClm.z), new BABYLON.Vector3(startClm.x, startClm.y - 0.25, zRight)), babylonModel.Scene, false);
    Line3.color = this.buildingDrawingColor.InteriorColumnColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(Line3);
    return 0;
  }

  GetInterClmXDist(bldgNum: number, whichFrmLine: number, lstBays: IBays[]) {
    let dist = 0.0;
    lstBays?.filter(x => x.BuildingNumber == bldgNum)?.forEach((bays) => {
      if (bays?.Elevation == this.globals.frontLetter &&
        bays?.BuildingNumber == bldgNum &&
        bays?.BayNumber < whichFrmLine) {
        dist += bays?.Width;
      }
    });
    return dist;
  }

  //Draw Crane
  
}


export class ReturnData {
  isATapered: boolean;
  isCTapered: boolean;
}
