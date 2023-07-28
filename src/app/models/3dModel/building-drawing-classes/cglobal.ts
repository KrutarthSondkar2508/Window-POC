import { IBuildingData } from '../ibuildingdata';
import { IBays } from '../imodel/ibays';
import { IBracing } from '../imodel/ibracing';
import { BuildingDrawingEnum } from '../building-drawing.enum';
import { IBuildingGeometry } from '../imodel/ibuilding-geometry';
import { ICanopy } from '../imodel/i-canopy';
import * as BABYLON from 'babylonjs';
import { IFramelines } from '../imodel/iframelines';
import { IOSoldierColumns } from '../imodel/io_soldiercolumns';
import { IEndwalls } from '../imodel/iendwalls';
//import { IOFacades } from '../iomodel/io_facades';
import { BuildingLayerEnum } from '../building-layer.enum';
//import { BuildingDrawingColor } from './building-drawing-color';
//import { BuildingGeometry } from '../../bracing/bracing';
//import { Line } from 'babylonjs-gui/legacy/legacy';

export class CGlobal {
  constructor() { }

  Bldg_LayerId;
  Bldg_FutureLayerId;
  Bldg_ExistingLayerId;
  Frame_LayerId;
  Frame_Details_LayerId;
  Bldg_Name_LayerId;

  Markers_LayerId;

  IntClm_FrameLayerId;
  Elev_Top;//cnw
  Mezzanine_LayerId;
  Mezzanine_Joist_LayerId;

  Roof_LayerId;
  Roof_Liner_Panels_LayerId;
  Roof_Vents_LayerId;
  Roof_Point_Load_LayerId;

  A_Wall_LayerId;
  Elev_A;
  Elevation_A_Bracing_Details_LayerId;
  Elevation_A_Canopies_At_Eave_LayerId;
  Elevation_A_Canopies_Below_Eave_LayerId;
  Elevation_A_DBCI_Doors_LayerId;
  Elevation_A_Doors_LayerId;
  Elevation_A_Facades_LayerId;
  Elevation_A_Framed_Openings_LayerId;
  Elevation_A_Gable_Overhangs_LayerId;
  Elevation_A_Glass_Front_Doors_LayerId;
  Elevation_A_Liner_Panels_LayerId;
  Elevation_A_Louvers_LayerId;
  Elevation_A_LTPs_LayerId;
  Elevation_A_Open_Areas_LayerId;
  Elevation_A_Open_Areas_Commonwall_LayerId;
  Elevation_A_Parapets_LayerId;
  Elevation_A_Slide_Doors_LayerId;
  Elevation_A_Support_Beams_LayerId;
  Elevation_A_Windows_LayerId;

  B_Wall_LayerId;
  Elev_B;
  Elevation_B_Bracing_Details_LayerId;
  Elevation_B_Canopies_At_Eave_LayerId;
  Elevation_B_Canopies_Below_Eave_LayerId;
  Elevation_B_DBCI_Doors_LayerId;
  Elevation_B_Doors_LayerId;
  Elevation_B_Facades_LayerId;
  Elevation_B_Framed_Openings_LayerId;
  Elevation_B_Gable_Overhangs_LayerId;
  Elevation_B_Glass_Front_Doors_LayerId;
  Elevation_B_Liner_Panels_LayerId;
  Elevation_B_Louvers_LayerId;
  Elevation_B_LTPs_LayerId;
  Elevation_B_Open_Areas_LayerId;
  Elevation_B_Open_Areas_Commonwall_LayerId;
  Elevation_B_Parapets_LayerId;
  Elevation_B_Slide_Doors_LayerId;
  Elevation_B_Support_Beams_LayerId;
  Elevation_B_Windows_LayerId;

  C_Wall_LayerId;
  Elev_C;
  Elevation_C_Bracing_Details_LayerId;
  Elevation_C_Canopies_At_Eave_LayerId;
  Elevation_C_Canopies_Below_Eave_LayerId;
  Elevation_C_DBCI_Doors_LayerId;
  Elevation_C_Doors_LayerId;
  Elevation_C_Facades_LayerId;
  Elevation_C_Framed_Openings_LayerId;
  Elevation_C_Gable_Overhangs_LayerId;
  Elevation_C_Glass_Front_Doors_LayerId;
  Elevation_C_Liner_Panels_LayerId;
  Elevation_C_Louvers_LayerId;
  Elevation_C_LTPs_LayerId;
  Elevation_C_Open_Areas_LayerId;
  Elevation_C_Open_Areas_Commonwall_LayerId;
  Elevation_C_Parapets_LayerId;
  Elevation_C_Slide_Doors_LayerId;
  Elevation_C_Support_Beams_LayerId;
  Elevation_C_Windows_LayerId;

  D_Wall_LayerId;
  Elev_D;
  Elevation_D_Bracing_Details_LayerId;
  Elevation_D_Canopies_At_Eave_LayerId;
  Elevation_D_Canopies_Below_Eave_LayerId;
  Elevation_D_DBCI_Doors_LayerId;
  Elevation_D_Doors_LayerId;
  Elevation_D_Facades_LayerId;
  Elevation_D_Framed_Openings_LayerId;
  Elevation_D_Gable_Overhangs_LayerId;
  Elevation_D_Glass_Front_Doors_LayerId;
  Elevation_D_Liner_Panels_LayerId;
  Elevation_D_Louvers_LayerId;
  Elevation_D_LTPs_LayerId;
  Elevation_D_Open_Areas_LayerId;
  Elevation_D_Open_Areas_Commonwall_LayerId;
  Elevation_D_Parapets_LayerId;
  Elevation_D_Slide_Doors_LayerId;
  Elevation_D_Support_Beams_LayerId;
  Elevation_D_Windows_LayerId;

  // Partition Layer IDs
  Partition_LayerId;
  Partition_Sheeting_LayerId;
  Partition_DBCI_Doors_LayerId;
  Partition_Doors_LayerId;
  Partition_Framed_Openings_LayerId;
  Partition_Glass_Front_Doors_LayerId;
  Partition_Liner_Panels_LayerId;
  Partition_Louvers_LayerId;
  Partition_LTPs_LayerId;
  Partition_Open_Areas_LayerId;
  Partition_Open_Areas_Commonwall_LayerId;
  Partition_Slide_Doors_LayerId;
  Partition_Windows_LayerId;

  Hidden_Items_LayerId;

  ewClmsLeft: BABYLON.Vector3[] = new Array(BuildingDrawingEnum.MAX_NUM_EW_CLMS);
  ewClmsRight: BABYLON.Vector3[] = new Array(BuildingDrawingEnum.MAX_NUM_EW_CLMS);
  openClmtopPts: BABYLON.Vector3;// new Array(2);
  bldgPts: BABYLON.Vector3[] = new Array(BuildingDrawingEnum.MAX_NUM_EW_CLMS);//new Array(BuildingDrawingEnum.MAX_NUM_EW_CLMS);
  posA: BABYLON.Vector3 = new BABYLON.Vector3(); //Elev. marker A location 
  posB: BABYLON.Vector3 = new BABYLON.Vector3();; //Elev. marker B location 
  posC: BABYLON.Vector3 = new BABYLON.Vector3();; //Elev. marker C location 
  posD: BABYLON.Vector3 = new BABYLON.Vector3();;

  numRightEwClms: number = 0;
  numLeftEwClms: number = 0;
  cntr: number = 0;

  entColor: number = 256;    // which is BYLAYER


  isBldgOk: boolean = false;
  isAttachmentDwg: boolean = false;

  numBaysFront: number = 1;
  numBaysBack: number = 1;
  numBaysRight: number = 1;
  numBaysLeft: number = 1;

  frontRoofLetter: string = 'E';
  backRoofLetter: string = 'F';
  frontLetter: string = 'A';
  backLetter: string = 'C';
  leftLetter: string = 'B';
  rightLetter: string = 'D';

  PI: number = 3.14159265358979323846;
  byLayer: number = 256;

  frontRoofSlope: number = 1.0;
  backRoofSlope: number = 1.0;
  scaleFactor: number = 0.0625;     // 1/16 scale

  bsArialTextStyle: any = null;
  bsArchTextStyle: any = null;
  bsStdTextStyle: any = null;
  bsDashedLinetype: any = null;
  bsCenterLinetype: any = null;
  bsContinuousLinetype: any = null;

  frontEaveHt: number = 0.0;
  backEaveHt: number = 0.0;

  isLeanto: boolean = false;
  isSngSlp: boolean = false;
  isHighSideFront: boolean = false;

  isLeantoOrSngSlpHighSideFront: boolean = false;
  isLeantoOrSngSlpHighSideBack: boolean = false;

  // DEVELOPMENT
  leftWallHip: boolean = false;;
  rightWallHip: boolean = false;

  run_once: boolean = false;

  //interClmSpacing: number[][] = [new Array(BuildingDrawingEnum.MAX_NUM_FRM_LINES), new Array(BuildingDrawingEnum.MAX_NUM_MODULES)];
  interClmSpacing: number[][] = new Array(BuildingDrawingEnum.MAX_NUM_FRM_LINES).fill(0).map(() => new Array(BuildingDrawingEnum.MAX_NUM_MODULES).fill(0));


  SetDwgScaleFactor(length: number, width: number): void {
    let bldgLength = 0.0;

    // get the longest portion of the bldg
    if (length > width)
      bldgLength = length;
    else
      bldgLength = width;

    // get x ratio numbers between paper size & dwg Extents
    this.scaleFactor = 9.0 / bldgLength;
  }

  SetWallLetters(isRotated: boolean): void {
    if (!isRotated) {
      this.frontLetter = 'A';
      this.backLetter = 'C';
      this.leftLetter = 'B';
      this.rightLetter = 'D';
      this.frontRoofLetter = 'E';
      this.backRoofLetter = 'F';
    }
    else {
      this.frontLetter = 'D';
      this.backLetter = 'B';
      this.leftLetter = 'A';
      this.rightLetter = 'C';
      this.frontRoofLetter = 'E';
      this.backRoofLetter = 'F';
    }
  }

  //use int,double and string 
  SwapInt(temp_1: any, temp_2: any): number {
    let swapper;

    swapper = temp_1;
    temp_1 = temp_2;
    temp_2 = swapper;
    return 0;
  }


  GetNumberOfBays(lstbays: IBays[], elev: string, whichBldg: number): number {
    let retVal = 0;

    for (var i = 0; i < lstbays.length; i++) {
      if (lstbays[i].BuildingNumber == whichBldg && lstbays[i].Elevation == elev)
        retVal++;

      else if (lstbays[i].BuildingNumber == whichBldg && lstbays[i].Elevation == elev)
        retVal++;

      else if (lstbays[i].BuildingNumber == whichBldg && lstbays[i].Elevation == elev)
        retVal++;

      else if (lstbays[i].BuildingNumber == whichBldg && lstbays[i].Elevation == elev)
        retVal++;
    }

    return retVal;
  }

  // function to scale numbers 

  Scale(num: number, isScale: boolean): number {
    return num = (isScale) ? (num / this.scaleFactor * 12.0) : (num * this.scaleFactor / 12.0); //set scale and unscale parameter
  }

  // put entities on elevation plane layers
  SetEntityLayerId(whichWall: string, Buildinggeometryexisting: number): void {
    let retVal = null;

    if (whichWall == 'A')
      retVal = this.A_Wall_LayerId;
    else if (whichWall == 'B')
      retVal = this.B_Wall_LayerId;
    else if (whichWall == 'C')
      retVal = this.C_Wall_LayerId;
    else if (whichWall == 'D')
      retVal = this.D_Wall_LayerId;
    else if (whichWall == 'E' || whichWall == 'F')
      retVal = this.Roof_LayerId;
    else {
      if (Buildinggeometryexisting == 1)
        retVal = this.Bldg_ExistingLayerId;
      else if (Buildinggeometryexisting == 2)
        retVal = this.Bldg_FutureLayerId;
      else
        retVal = this.Bldg_LayerId;
    }

    return retVal;
  }

  SetOALayerId(whichWall: string, Buildinggeometryexisting: number): void {
    let retVal = null;

    if (whichWall == 'A')
      retVal = this.Elevation_A_Open_Areas_LayerId;
    else if (whichWall == 'B')
      retVal = this.Elevation_B_Open_Areas_LayerId;
    else if (whichWall == 'C')
      retVal = this.Elevation_C_Open_Areas_LayerId;
    else if (whichWall == 'D')
      retVal = this.Elevation_D_Open_Areas_LayerId;
    else if (whichWall == 'P')
      retVal = this.Partition_Open_Areas_LayerId;
    else {
      if (Buildinggeometryexisting == 1)
        retVal = this.Bldg_ExistingLayerId;
      else if (Buildinggeometryexisting == 2)
        retVal = this.Bldg_FutureLayerId;
      else
        retVal = this.Bldg_LayerId;
    }

    return retVal;
  }

  SetOACommonWallLayerId(whichWall: string, Buildinggeometryexisting: number): void {
    let retVal = null;

    if (whichWall == 'A')
      retVal = this.Elevation_A_Open_Areas_Commonwall_LayerId;
    else if (whichWall == 'B')
      retVal = this.Elevation_B_Open_Areas_Commonwall_LayerId;
    else if (whichWall == 'C')
      retVal = this.Elevation_C_Open_Areas_Commonwall_LayerId;
    else if (whichWall == 'D')
      retVal = this.Elevation_D_Open_Areas_Commonwall_LayerId;
    else if (whichWall == 'P')
      retVal = this.Partition_Open_Areas_Commonwall_LayerId;
    else {
      if (Buildinggeometryexisting == 1)
        retVal = this.Bldg_ExistingLayerId;
      else if (Buildinggeometryexisting == 2)
        retVal = this.Bldg_FutureLayerId;
      else
        retVal = this.Bldg_LayerId;
    }

    return retVal;
  }

  SetLinerLayerId(whichWall: string, Buildinggeometryexisting: number): void {
    let retVal = null;

    if (whichWall == 'A')
      retVal = this.Elevation_A_Liner_Panels_LayerId;
    else if (whichWall == 'B')
      retVal = this.Elevation_B_Liner_Panels_LayerId;
    else if (whichWall == 'C')
      retVal = this.Elevation_C_Liner_Panels_LayerId;
    else if (whichWall == 'D')
      retVal = this.Elevation_D_Liner_Panels_LayerId;
    else if (whichWall == 'P')
      retVal = this.Partition_Liner_Panels_LayerId;
    else if (whichWall == 'E' || whichWall == 'F')
      retVal = this.Roof_Liner_Panels_LayerId;
    else {
      if (Buildinggeometryexisting == 1)
        retVal = this.Bldg_ExistingLayerId;
      else if (Buildinggeometryexisting == 2)
        retVal = this.Bldg_FutureLayerId;
      else
        retVal = this.Bldg_LayerId;
    }

    return retVal;
  }

  // see if the accessory is located properly
  ValidateLocation(elev: string, bayNum: number): boolean {
    return (elev.length == 0 || bayNum == 0) ? false : true;
  }


  // ******* is the bay you're currently working with braced *************
  // *********************************************************************

  IsBayBraced(lstIBracing: IBracing[], whichBldg: number, whichElev: string, whichBay: number, numOfTiers: number) {
    let retVal = false;
    let bayToBrace = 0;

    //char tempstring[_MAX_PATH];
    //* tempstring = '\0';
    for (let BracingCnt = 0; BracingCnt < lstIBracing.length; BracingCnt++) {

      if (whichBldg == lstIBracing[BracingCnt].BuildingNumber) {
        // if it's the front elev & there is bracing on it
        if (whichElev == this.frontLetter &&
          !(lstIBracing[BracingCnt].SW1BracingLocations.length == 0)) {
          // parse the bay nums in string
          let ptr = [];
          ptr = (lstIBracing[BracingCnt].SW1BracingLocations.split(","));
          //strcpy(tempstring, bracing -> sw1_bracing_locations);
          //ptr = strtok(tempstring, ",");

          if (ptr.length != 0) {
            // if bay to brace == the calling bay
            for (let i = 0; i < ptr.length; i++) {
              bayToBrace = parseInt(ptr[i]);
              if (bayToBrace == whichBay) {
                if (
                  lstIBracing[BracingCnt].SW1BracingType != BuildingDrawingEnum.ID_BRACING_DIAPHRAGM) {
                  retVal = true;
                  numOfTiers = lstIBracing[BracingCnt].SW1Tiers;
                  break;
                }
              }
            }
          }
        }
        // if it's the back elev & there is bracing on it
        else if (whichElev == this.backLetter &&
          !(lstIBracing[BracingCnt].SW2BracingLocations.length == 0)) {
          // parse the bay nums in string
          //strcpy(tempstring, bracing -> sw2_bracing_locations);
          //ptr = strtok(tempstring, ",");
          let ptr = [];
          ptr = (lstIBracing[BracingCnt].SW2BracingLocations.split(","));
          if (ptr.length != 0) {
            // if bay to brace == the calling bay
            for (let i = 0; i < ptr.length; i++) {
              bayToBrace = parseInt(ptr[i]);
              if (bayToBrace == whichBay) {
                if (
                  lstIBracing[BracingCnt].SW2BracingType != BuildingDrawingEnum.ID_BRACING_DIAPHRAGM) {
                  retVal = true;
                  numOfTiers = lstIBracing[BracingCnt].SW2Tiers;
                  break;
                }
              }
            }
          }

        }
        // if it's the left elev & there is bracing on it
        else if (whichElev == this.leftLetter &&
          !(lstIBracing[BracingCnt].EW3BracingLocations.length == 0)) {
          // parse the bay nums in string
          //strcpy(tempstring, bracing -> sw2_bracing_locations);
          //ptr = strtok(tempstring, ",");
          let ptr = [];
          ptr = (lstIBracing[BracingCnt].EW3BracingLocations.split(","));
          if (ptr.length != 0) {
            // if bay to brace == the calling bay
            for (let i = 0; i < ptr.length; i++) {
              bayToBrace = parseInt(ptr[i]);
              if (bayToBrace == whichBay) {
                if (
                  lstIBracing[BracingCnt].EW3BracingType != BuildingDrawingEnum.ID_BRACING_DIAPHRAGM) {
                  retVal = true;
                  numOfTiers = lstIBracing[BracingCnt].EW3Tiers;
                  break;
                }
              }
            }
          }

        }
        // if it's the right elev & there is bracing on it
        else if (whichElev == this.rightLetter &&
          !(lstIBracing[BracingCnt].EW4BracingLocations.length == 0)) {
          // parse the bay nums in string
          //strcpy(tempstring, bracing -> sw2_bracing_locations);
          //ptr = strtok(tempstring, ",");
          let ptr = [];
          ptr = (lstIBracing[BracingCnt].EW4BracingLocations.split(","));
          if (ptr.length != 0) {
            // if bay to brace == the calling bay
            for (let i = 0; i < ptr.length; i++) {
              bayToBrace = parseInt(ptr[i]);
              if (bayToBrace == whichBay) {
                if (
                  lstIBracing[BracingCnt].EW4BracingType != BuildingDrawingEnum.ID_BRACING_DIAPHRAGM) {
                  retVal = true;
                  numOfTiers = lstIBracing[BracingCnt].EW4Tiers;
                  break;
                }
              }
            }
          }
        }
        // if it's the roof elev & there is bracing on it
        else if ((whichElev == this.frontRoofLetter ||
          whichElev == this.backRoofLetter) &&
          !(lstIBracing[BracingCnt].RoofBracingLocations.length == 0)) {
          // parse the bay nums in string
          let ptr = [];
          ptr = (lstIBracing[BracingCnt].RoofBracingLocations.split(","));
          if (ptr.length != 0)
            for (let i = 0; i < ptr.length; i++) {
              bayToBrace = parseInt(ptr[i]);
              if (bayToBrace == whichBay) {
                if (
                  lstIBracing[BracingCnt].RoofBracingLocations != BuildingDrawingEnum.ID_BRACING_DIAPHRAGM) {
                  retVal = true;
                  numOfTiers = 2
                  break;
                }
              }
            }
        }
      }


    }

    return retVal;
  }




  FeetToInches(feet: number): number {
    return feet * 12.0;
  }

  InchesToFeet(inches: number): number {
    return inches / 12.0;
  }


  GetCanopyHt(dOffset: number, buildingGeometry: IBuildingGeometry): number {
    let dHt: number;

    //if (dOffset < 0)
    //  dOffset = fabs(dOffset);

    if (dOffset == buildingGeometry.Width)
      dHt = buildingGeometry.EaveHeight2;
    else if (dOffset == 0)
      dHt = buildingGeometry.EaveHeight1;
    else {
      //if (buildingGeometry.DistToRidge1< dOffset) {
      //  dHt = this.InchesToFeet(this.FeetToInches(buildingGeometry.PeakHeight ) - ((this.FeetToInches(dOffset - buildingGeometry.DistToRidge1)) * tan(buildingGeometry.RoofSlope2  / 12)));
      //}
      //else {
      //  dHt = buildingGeometry.PeakHeight  - ((buildingGeometry.DistToRidge1 - dOffset) * tan(buildingGeometry.RoofSlope1 / 12));
      //}
    }
    return dHt;
  }

  // is there a gable overhang on the given endwall
  IsGableOHOnEndwall(whichBldg: number, whichEndwall: string, projection: any, lstCanopy: ICanopy[]): any {
    let retVal: boolean = false;

    projection = 0.0;
    if (lstCanopy.length != 0) {
      for (let canopy of lstCanopy) {
        if (canopy.BuildingNumber == whichBldg) {
          if (canopy.Elevation == whichEndwall) {
            if (canopy.Type == BuildingDrawingEnum.ID_CANOPY_GABLE_OVERHANG
              || canopy.Type == BuildingDrawingEnum.ID_CANOPY_PURLIN_EXTENSION
              || canopy.Type == BuildingDrawingEnum.ID_CANOPY_ROOF_EXTENSION) {
              projection = canopy.Projection
              retVal = true;
            }
          }
        }
      }
    }
    var ReturnData: any = {
      IsGable: retVal,
      projectionValue: projection
    }
    return ReturnData;
  }

  IsCanopyOnLastBay(whichBldg: number, whichElev: string, lastFrmLineNumber: number, proj: number, ht: number, canopy: ICanopy[]): any {
    let retVal: boolean = false;
    proj = 0.0;
    ht = 0.0;
    canopy.forEach(function (objcanopy) {
      if (objcanopy.BuildingNumber == whichBldg &&
        objcanopy.StopCol == lastFrmLineNumber &&
        objcanopy.Elevation == whichElev &&
        objcanopy.AtEave == true) {
        retVal = true;
        proj = objcanopy.Projection;
        ht = objcanopy.HeightLocation;
      }
    });
    var ReturnData: any = {
      isCanLast: retVal,
      projectionValue: proj
    }
    return ReturnData;
  }



  IsCanopyHtAtEave(whichBldg: number, whichElev: string, whichClm: number, eaveHt: number, canopy: ICanopy[]): boolean {
    let retVal: boolean = false;
    canopy.forEach(function (objcanopy) {
      if (objcanopy.BuildingNumber == whichBldg &&
        (objcanopy.StartCol == whichClm || objcanopy.StopCol == whichClm) &&
        objcanopy.Elevation == whichElev) {
        if (objcanopy.HeightLocation == eaveHt)
          retVal = true;
      }
    });
    return retVal;
  }



  IsCanopyOnFirstBay(whichBldg: number, whichElev: string, proj: number, ht: number, canopy: ICanopy[]) {
    let retVal: boolean = false;
    proj = 0.0;
    ht = 0.0;
    canopy.forEach(function (objcanopy) {
      if (objcanopy.BuildingNumber == whichBldg &&
        objcanopy.StartCol == 1 &&
        objcanopy.Elevation == whichElev &&
        objcanopy.AtEave == true) {
        retVal = true;
        proj = objcanopy.Projection;
        ht = objcanopy.HeightLocation;
      }
    });
    var ReturnData: any = {
      isCan1stBay: retVal,
      projectionValue: proj
    }
    return ReturnData;
  }


  isLeftGableDrawn: boolean[] = new Array(99);
  isRightGableDrawn: boolean[] = new Array(99);


  CalcBuildingXy(UpperRight: BABYLON.Vector3, buildinggeometry: IBuildingGeometry) {
    let LowLeftPt: BABYLON.Vector3 = new BABYLON.Vector3(buildinggeometry.XCoordinate, buildinggeometry.YCoordinate, 0.0);

    this.bldgPts[this.cntr] = LowLeftPt;
    this.cntr += 1;
    if (buildinggeometry.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
      this.bldgPts[this.cntr].x = UpperRight.y;
      this.bldgPts[this.cntr].y = UpperRight.x;
    }
    else
      this.bldgPts[this.cntr] = UpperRight;

    this.bldgPts[this.cntr].x += (buildinggeometry.XCoordinate * 12);
    this.bldgPts[this.cntr].y += (buildinggeometry.YCoordinate * 12);
    this.cntr += 1;
    return;
  }


  GetFrmLineGrpNum(whichBldg: number, whichFrmLine: number, lstFrameLines: IFramelines[]) {
    let retVal = 0;

    lstFrameLines?.forEach((framelines) => {
      if (framelines?.FrameLineNumber == whichFrmLine &&
        framelines?.BuildingNumber == whichBldg) {
        retVal = framelines?.GroupNumber;
      }
    });
    return retVal;
  }

  Get_Dist_to_Bay(building_number: number, elevation: string, bay_number: number, include_soldier_columns: boolean, lstIBays: IBays[], lstIOSoldierColumns: IOSoldierColumns[]) {
    let bay_width = -1.0;
    let curr_dist = 0.0;
    let bay_counter = 0;
    for (let bays_temp of lstIBays) {
      if (bays_temp?.BuildingNumber == building_number &&
        bays_temp?.Elevation == elevation) {
        let last_soldier_location = 0.0;
        if (include_soldier_columns) {
          lstIOSoldierColumns.forEach((soldier_columns_temp) => {
            if (soldier_columns_temp.BuildingNumber == building_number &&
              soldier_columns_temp.Elevation == elevation &&
              soldier_columns_temp.RoofBayNumber == bays_temp?.BayNumber) {
              bay_counter++;
              if (bay_counter == bay_number) {
                bay_width = soldier_columns_temp.DistFromLeftColumn - last_soldier_location;
                return curr_dist + last_soldier_location;
              }
            }
          });
        }
        bay_counter++;
        if (bay_counter == bay_number) {
          bay_width = bays_temp?.Width - last_soldier_location;
          return curr_dist + last_soldier_location;
        }
        curr_dist += bays_temp?.Width;
      }
    };
    return -1.0;
  }



  Get_Total_Width_of_Bays(building_number: number, elevation: string, start_bay: number, stop_bay: number, include_soldier_columns: boolean, lstIBays: IBays[], lstIOSoldierColumns: IOSoldierColumns[]) {
    let ret_val: number = 0.0;
    let bay_counter: number = 0;
    lstIBays?.forEach((bays_temp) => {
      if (bay_counter != stop_bay) {
        if (bays_temp?.BuildingNumber == building_number &&
          bays_temp?.Elevation == elevation) {
          let last_soldier_location = 0.0;
          if (include_soldier_columns) {
            lstIOSoldierColumns.forEach((soldier_columns_temp) => {
              if (bay_counter != stop_bay) {
                if (soldier_columns_temp.BuildingNumber == building_number &&
                  soldier_columns_temp.Elevation == elevation &&
                  soldier_columns_temp.RoofBayNumber == bays_temp?.BayNumber) {
                  bay_counter++;
                  if (bay_counter >= start_bay &&
                    bay_counter <= stop_bay) {
                    ret_val += soldier_columns_temp.DistFromLeftColumn - last_soldier_location;
                  }
                  last_soldier_location = soldier_columns_temp.DistFromLeftColumn;
                }
              }
            });
          }
          bay_counter++;
          if (bay_counter >= start_bay &&
            bay_counter <= stop_bay)
            ret_val += bays_temp?.Width - last_soldier_location;
        }
      }
    });
    return ret_val;
  }



  CompareDoubles(first_val: number, second_val: number, fudge_val: number = 0.003): number {
    if (first_val < (second_val - fudge_val))
      return -1;
    else if (first_val > (second_val + fudge_val))
      return 1;
    else
      return 0;
  }
  IsFrameInEndwall(buildingNumber: number, leftEndwall: boolean, lstIEndwalls: IEndwalls[]) {
    lstIEndwalls?.forEach((ew) => {
      if (ew?.BuildingNumber == buildingNumber) {
        let ew_type: string = (leftEndwall) ? ew?.Endwall3 : ew?.Endwall4;
        if (ew_type == BuildingDrawingEnum.ID_ENDWALL_EXPANDABLE_FRAME ||
          ew_type == BuildingDrawingEnum.ID_ENDWALL_TYPE_NON_EXPANDABLE_FRAME)
          return true;
      }
    });



    return false;
  }



  BayHasFBBCBracing(building_num: number, wall: string, bay: number, isRightBrace: number, I_BuildingData: IBuildingData, tempBuildingGeometry: IBuildingGeometry) {
    isRightBrace = 0;

    let isFBBC = 0;

    let bracingLoc: string;
    let FBBCRight: string;

    let bracingType = "";

    let tempBracing: IBracing = I_BuildingData.IBracing?.find(x => x?.BuildingNumber == building_num);

    if (tempBracing != null && tempBracing != undefined && tempBuildingGeometry != null && tempBuildingGeometry != undefined) {
      if (tempBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
        if (wall == BuildingDrawingEnum.ID_WALL_A)//if ( m_walla.GetCheck() == 1 )
        {
          bracingLoc = tempBracing?.SW1BracingLocations;
          FBBCRight = tempBracing?.SW1FBBCRight;
          bracingType = tempBracing?.SW1BracingType;
        }
        else if (wall == BuildingDrawingEnum.ID_WALL_B)//if ( m_wallb.GetCheck() == 1 )
          return 0;
        else if (wall == BuildingDrawingEnum.ID_WALL_C)//if ( m_wallc.GetCheck() == 1 )
        {
          bracingLoc = tempBracing?.SW2BracingLocations;
          FBBCRight = tempBracing?.SW2FBBCRight;
          bracingType = tempBracing?.SW2BracingType;
        }
        else if (wall == BuildingDrawingEnum.ID_WALL_D)//if ( m_walld.GetCheck() == 1 )
          return 0;
      }
      else if (tempBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
        if (wall == BuildingDrawingEnum.ID_WALL_A)//if ( m_walla.GetCheck() == 1 )
          return 0;
        else if (wall == BuildingDrawingEnum.ID_WALL_B)//if ( m_wallb.GetCheck() == 1 )
        {
          bracingLoc = tempBracing?.SW2BracingLocations;
          FBBCRight = tempBracing?.SW2FBBCRight;
          bracingType = tempBracing?.SW2BracingType;
        }
        else if (wall == BuildingDrawingEnum.ID_WALL_C)//if ( m_wallc.GetCheck() == 1 )
          return 0;
        else if (wall == BuildingDrawingEnum.ID_WALL_D)//if ( m_walld.GetCheck() == 1 )
        {
          bracingLoc = tempBracing?.SW1BracingLocations;
          FBBCRight = tempBracing?.SW1FBBCRight;
          bracingType = tempBracing?.SW1BracingType;
        }
      }

      if (bracingType == BuildingDrawingEnum.ID_BRACING_FBBC) {
        let ptr: string[];
        let tempInt = 0;

        ptr = bracingLoc.split(",");
        for (let cnt = 0; cnt < ptr.length; cnt++) {
          tempInt = parseInt(ptr[cnt]);

          if (tempInt == bay) {
            isFBBC = 1;
            break;
          }
        }

        tempInt = 0;
        ptr = FBBCRight.split(",");
        for (let cnt = 0; cnt < ptr.length; cnt++) {
          tempInt = parseInt(ptr[cnt]);

          if (tempInt == bay) {
            isRightBrace = 1;
            break;
          }
        }
      }
    }
    var ReturnData = {
      isFBBC: isFBBC,
      isRightBrace: isRightBrace
    }
    return ReturnData;
  }



  //IsFacadeOnFirstBay(whichBldg: number, whichElev: string, facades: IOFacades): boolean {
  //  if (facades?.BuildingNumber == whichBldg &&
  //    facades?.StartCol == 1 &&
  //    facades?.Elevation == whichElev) {
  //    return true;
  //  }
  //  return false;
  //}



  //IsFacadeOnLastBay(whichBldg: number, whichElev: string, lastFrmLineNum: number, facades: IOFacades): boolean {

  //  if (facades?.BuildingNumber == whichBldg &&
  //    facades?.StopCol == lastFrmLineNum &&
  //    facades?.Elevation == whichElev) {
  //    return true;
  //  }
  //  return false;
  //}


  SwapYZCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector3[] {
    let tempptArr: BABYLON.Vector3[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector3(objptArr.x, objptArr.z, objptArr.y));
    });
    return tempptArr;
  }
  SwapXZCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector3[] {
    let tempptArr: BABYLON.Vector3[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector3(objptArr.z, objptArr.y, objptArr.x));
    });
    return tempptArr;
  }
  ConvertXYCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector2[] {
    let tempptArr: BABYLON.Vector2[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector2(objptArr.x, objptArr.y));
    });
    return tempptArr;
  }
  ConvertXZCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector2[] {
    let tempptArr: BABYLON.Vector2[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector2(objptArr.x, objptArr.z));
    });
    return tempptArr;
  }
  ConvertYZCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector2[] {
    let tempptArr: BABYLON.Vector2[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector2(objptArr.y, objptArr.z));
    });
    return tempptArr;
  }
  ConvertYXCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector2[] {
    let tempptArr: BABYLON.Vector2[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector2(objptArr.y, objptArr.x));
    });
    return tempptArr;
  }
  ConvertZXCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector2[] {
    let tempptArr: BABYLON.Vector2[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector2(objptArr.z, objptArr.x));
    });
    return tempptArr;
  }
  ConvertZYCordinate(ptArray: BABYLON.Vector3[]): BABYLON.Vector2[] {
    let tempptArr: BABYLON.Vector2[] = new Array();
    ptArray.forEach((objptArr) => {
      tempptArr.push(new BABYLON.Vector2(objptArr.z, objptArr.y));
    });
    return tempptArr;
  }

  draw2DColumns(babylonModel: BABYLON.Mesh, columnOffset: BABYLON.Vector2, scene: BABYLON.Scene, type: BuildingDrawingEnum,
    color: BABYLON.Color3, BuildingGeometry: IBuildingGeometry = null) {
    const points = [
      new BABYLON.Vector3(25, 0, 0),
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(12.5, 0, 0),
      new BABYLON.Vector3(12.5, 25, 0),
      new BABYLON.Vector3(0, 25, 0),
      new BABYLON.Vector3(25, 25, 0)
    ]

    const line1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.MEZZANINE_2D_COLUMNS, { points: points }, scene);
    if (type == BuildingDrawingEnum.ID_ENDWALL) {
      line1.position.x = (columnOffset.y) * 12;
      line1.position.y = 0;
      //line1.position.z = Math.abs(((BuildingGeometry.Width - (width)) - columnOffset.x)) * 12;
      line1.position.z = Math.abs(((BuildingGeometry.Width) - columnOffset.x)) * 12;
    }
    else {
      line1.position.x = columnOffset.x * 12.0;
      line1.position.y = 0;
      line1.position.z = columnOffset.y * 12.0;
    }
    line1.rotation = new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, 0);
    line1.color = color;
    line1.isVisible = false;
    babylonModel.addChild(line1);
  }

  draw2DBuildingColumns(babylonModel: BABYLON.Mesh, columnOffset: BABYLON.Vector3, scene: BABYLON.Scene, type: string, color: BABYLON.Color3, isFrameLine: boolean = false) {
    const points = [
      new BABYLON.Vector3(25, 0, 0),
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(12.5, 0, 0),
      new BABYLON.Vector3(12.5, 25, 0),
      new BABYLON.Vector3(0, 25, 0),
      new BABYLON.Vector3(25, 25, 0)
    ]

    const line1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.Building_2D_COLUMNS, { points: points }, scene,);
    line1.position.x = columnOffset.x * 12.0;
    line1.position.y = 0;
    line1.position.z = columnOffset.y * 12.0;
    //line1.rotation = type == BuildingDrawingEnum.ID_SIDEWALL ? (isFrameLine ? new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, Math.PI / 2) : new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, 0)) : (isFrameLine ? new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, 0) : new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, Math.PI / 2));
    line1.rotation = isFrameLine ? new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, Math.PI / 2) : new BABYLON.Vector3(Math.PI / 2, Math.PI / 2, 0);
    line1.color = color;
    line1.isVisible = false;
    babylonModel.addChild(line1);
  }
  SetPositionCurrentMesh(Id: Number, mesh: BABYLON.Mesh, position: BABYLON.Vector3, rotation: BABYLON.Vector3) {
    let data = mesh.getChildMeshes().find((x => x.uniqueId == Id));
    if (data) {
      data.position = position;
      data.rotation = rotation;
    }
  }
    SetPositionCurrentMeshZero(Id: Number, mesh: BABYLON.Mesh) {
      let data = mesh.getChildMeshes().find((x => x.uniqueId == Id));
      if (data) {
        data.position = new BABYLON.Vector3(0, 0, 0);
        data.rotation = new BABYLON.Vector3(0, 0, 0);
      }
  }
  
}


