import { BuildingDrawingEnum } from '../../3dModel/building-drawing.enum';
import { IBays } from '../../3dModel/imodel/ibays';
import { IBuildingGeometry } from "../../3dModel/imodel/ibuilding-geometry";
import { CBsDraw } from '../building-drawing-classes/cbs-draw';
import { CGlobal } from '../building-drawing-classes/cglobal';
import * as BABYLON from 'babylonjs';
import { IOSoldierColumns } from '../../3dModel/imodel/io_soldiercolumns';
import { IEndwalls } from '../../3dModel/imodel/iendwalls';
import { BabylonModelData } from '../babylon-model';
import { IOOpenArea } from '../../3dModel/imodel/IO_OpenAreas';
import { IBuildingData } from '../IBuildingData';
import { BuildingLayerEnum } from '../building-layer.enum';
import { BuildingDrawingColor } from './building-drawing-color';
import * as MeshWriter from "meshwriter";
import { CalculationHelperService } from '../../../services/common/calculation-helper.service';

export class CDraw_Building {
  globals: CGlobal;
  buildingDrawingColor: BuildingDrawingColor;
  calculationHelper: CalculationHelperService;
  returnVector3: BABYLON.Vector3[] = [];

  constructor(globals: CGlobal, isDarkBackGround: boolean, calculationHelper: CalculationHelperService) {
    this.globals = globals;
    this.buildingDrawingColor = new BuildingDrawingColor(isDarkBackGround);
    this.calculationHelper = calculationHelper;
  }

  Draw_Building(m_d_Length: number, m_d_Width: number, m_dEH_A1: number, m_dEH_C2: number
    , m_dDist_Peak_A: number, m_dPeak_Ht: number, m_selev_A: string, leftEWPlaza: boolean,
    rightEWPlaza: boolean, iBay: IBays[], buildingGeometry: IBuildingGeometry, babylonModel: BabylonModelData): any {

    let wantDim: boolean = true;
    let Prim: CBsDraw = new CBsDraw(this.globals);
    let LowerLeft = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let UpperRight = new BABYLON.Vector3(0.0, 0.0, 0.0);


    let dim_A: number = 0.0;
    let dim_B: number = 0.0;
    let Ht_A: number = 0.0;
    let Ht_B: number = 0.0;

    // Hip Offsets
    let peak_offset_left: number = 0.0;
    let peak_offset_right: number = 0.0;
    if (this.globals.leftWallHip || this.globals.rightWallHip) {
      let found_left_frameline: boolean = !this.globals.leftWallHip;
      let found_right_frameline: boolean = !this.globals.rightWallHip;

      iBay?.filter(x => x.BuildingNumber == buildingGeometry?.BuildingNumber).forEach((bays) => {
        if (!found_left_frameline || !found_right_frameline) {
          if (bays?.BuildingNumber == buildingGeometry?.BuildingNumber && bays?.Elevation == this.globals.frontLetter) {
            if (this.globals.leftWallHip && bays?.BayNumber == 1) {
              found_left_frameline = true;
              peak_offset_left = bays?.Width;
            }
            else if (this.globals.rightWallHip && bays?.BayNumber == this.globals.numBaysFront) {
              found_right_frameline = true;
              peak_offset_right = bays?.Width;
            }
          }
        }
      });
    }
    // draw the slab
    LowerLeft.x = 0.0;
    LowerLeft.y = 0.0;
    LowerLeft.z = 0.0;

    dim_A = m_d_Length;
    dim_B = m_d_Width;

    UpperRight.x = dim_A;
    UpperRight.y = 0.0;
    UpperRight.z = 0.0;


    const lines21 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BUILDING_BASELINE_ELEV_A, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines21.color = this.buildingDrawingColor.BaseColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines21);
    //console.log("Elev - A:", LowerLeft, UpperRight);
    //this.returnVector3.push(Object.assign({}, LowerLeft));
    //this.returnVector3.push(Object.assign({}, UpperRight));


    LowerLeft.x = 0;
    LowerLeft.y = 0;
    LowerLeft.z = 0.0;

    UpperRight.x = 0;
    UpperRight.y = dim_B;
    UpperRight.z = 0.0;

    const lines22 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BUILDING_BASELINE_ELEV_B, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines22.color = this.buildingDrawingColor.BaseColor;
    //console.log("Elev - B:", LowerLeft, UpperRight);
    //this.returnVector3.push(Object.assign({}, LowerLeft));
    //this.returnVector3.push(Object.assign({}, UpperRight));


    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines22);
    LowerLeft.x = dim_A;
    LowerLeft.y = dim_B;
    LowerLeft.z = 0.0;

    Ht_A = m_dEH_A1;
    Ht_B = m_dEH_C2

    UpperRight.x = 0;
    UpperRight.y = dim_B;
    UpperRight.z = 0.0;
    const lines23 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BUILDING_BASELINE_ELEV_C, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines23.color = this.buildingDrawingColor.BaseColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines23);
    //console.log("Elev - C:", LowerLeft, UpperRight);
    //this.returnVector3.push(Object.assign({}, LowerLeft));
    //this.returnVector3.push(Object.assign({}, UpperRight));


    LowerLeft.x = dim_A;
    LowerLeft.y = dim_B;
    LowerLeft.z = 0.0;

    Ht_A = m_dEH_A1;
    Ht_B = m_dEH_C2;

    UpperRight.x = dim_A;
    UpperRight.y = 0;
    UpperRight.z = 0.0;
    const lines24 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BUILDING_BASELINE_ELEV_D, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines24.color = this.buildingDrawingColor.BaseColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines24);
    //console.log("Elev - D:", LowerLeft, UpperRight);
    //this.returnVector3.push(Object.assign({}, LowerLeft));
    //this.returnVector3.push(Object.assign({}, UpperRight));



    // ****************************
    // ***** Draw Front Wall ******

    // Front left Corner
    LowerLeft.x = 0.0;
    LowerLeft.y = 0.0;
    LowerLeft.z = 0.0;

    UpperRight.x = 0.0;
    UpperRight.y = 0.0;
    UpperRight.z = leftEWPlaza ? (m_dPeak_Ht + 3) : Ht_A;

    const lines = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_FRONT_LEFT_CORNER_ELEV_A, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines.color = this.buildingDrawingColor.BorderColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines);


    // Front right corner
    LowerLeft.x = dim_A;
    LowerLeft.y = 0.0;
    LowerLeft.z = 0.0;

    UpperRight.x = dim_A;
    UpperRight.y = 0.0;
    UpperRight.z = rightEWPlaza ? (m_dPeak_Ht + 3) : Ht_A;

    const lines1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_FRONT_RIGHT_CORNER_ELEV_A, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines1.color = this.buildingDrawingColor.BorderColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines1);

    // **************************
    // **** Draw Back Wall ******

    // Back left Corner floor to eave
    LowerLeft.x = 0.0;
    LowerLeft.y = dim_B;
    LowerLeft.z = 0.0;

    UpperRight.x = 0.0;
    UpperRight.y = dim_B;
    UpperRight.z = leftEWPlaza ? (m_dPeak_Ht + 3) : Ht_B;

    const lines2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BACK_RIGHT_CORNER_ELEV_C, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines2.color = this.buildingDrawingColor.BorderColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines2);
  
    // Back right corner floor to eave
    LowerLeft.x = dim_A;
    LowerLeft.y = dim_B;
    LowerLeft.z = 0.0;

    UpperRight.x = dim_A;
    UpperRight.y = dim_B;
    UpperRight.z = rightEWPlaza ? (m_dPeak_Ht + 3) : Ht_B;

    const lines3 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_BACK_LEFT_CORNER_ELEV_C, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines3.color = this.buildingDrawingColor.BorderColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines3);
    
    if (leftEWPlaza) {
      LowerLeft.x = 0.0;
      LowerLeft.y = 0.0;
      LowerLeft.z = m_dPeak_Ht + 3;

      UpperRight.x = 0.0;
      UpperRight.y = dim_B;
      UpperRight.z = m_dPeak_Ht + 3;

      const lines4 = BABYLON.MeshBuilder.CreateLines("line4", { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines4.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines4);
    }

    if (rightEWPlaza) {
      LowerLeft.x = dim_A;
      LowerLeft.y = 0.0;
      LowerLeft.z = m_dPeak_Ht + 3;

      UpperRight.x = dim_A;
      UpperRight.y = dim_B;
      UpperRight.z = m_dPeak_Ht + 3;

      const lines4 = BABYLON.MeshBuilder.CreateLines("line6", { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines4.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines4);
    }
    // ***********************************
    // ******** Draw gable Lines *********

    if (buildingGeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
      buildingGeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO) {
      // LEFT Elev - A Roof 
      LowerLeft.x = 0.0;
      LowerLeft.y = 0.0;
      LowerLeft.z = Ht_A;

      UpperRight.x = peak_offset_left;
      UpperRight.y = m_dDist_Peak_A;
      UpperRight.z = m_dPeak_Ht;

      const lines4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_LEFT_ELEV_A, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines4.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines4);
      console.log(BuildingLayerEnum.LAYER_ROOF_LEFT_ELEV_A, LowerLeft, UpperRight);
      this.returnVector3.push(Object.assign({}, LowerLeft));
      this.returnVector3.push(Object.assign({}, UpperRight));



      // LEFT Elev - C Roof 
      LowerLeft.x = 0.0;
      LowerLeft.y = dim_B;
      LowerLeft.z = m_dEH_C2;

      UpperRight.x = peak_offset_left;
      UpperRight.y = m_dDist_Peak_A;
      UpperRight.z = m_dPeak_Ht;

      const lines5 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_LEFT_ELEV_C, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines5.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines5);
      console.log(BuildingLayerEnum.LAYER_ROOF_LEFT_ELEV_C, LowerLeft, UpperRight);
      this.returnVector3.push(Object.assign({}, UpperRight ));
      this.returnVector3.push(Object.assign({}, LowerLeft));

      // Draw Left Hip Eave Line
      if (this.globals.leftWallHip) {
        LowerLeft.x = 0.0;
        LowerLeft.y = dim_B;
        LowerLeft.z = m_dEH_C2;

        UpperRight.x = 0.0;
        UpperRight.y = 0.0;
        UpperRight.z = Ht_A;

        const lines6 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_LEFT_HIP_EAVE_LINE, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
        lines6.color = this.buildingDrawingColor.BorderColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines6);
      }

      // RIGHT Elev - A Roof 
      LowerLeft.x = dim_A;
      LowerLeft.y = 0.0;
      LowerLeft.z = Ht_A;

      UpperRight.x = dim_A - peak_offset_right;
      UpperRight.y = m_dDist_Peak_A;
      UpperRight.z = m_dPeak_Ht;

      const lines7 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_RIGHT_ELEV_A, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines7.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines7);
      console.log(BuildingLayerEnum.LAYER_ROOF_RIGHT_ELEV_A, LowerLeft, UpperRight);
      this.returnVector3.push(Object.assign({}, LowerLeft));
      this.returnVector3.push(Object.assign({}, UpperRight));

      // RIGHT Elev - C Roof 
      LowerLeft.x = dim_A;
      LowerLeft.y = dim_B;
      LowerLeft.z = Ht_B;

      UpperRight.x = dim_A - peak_offset_right;
      UpperRight.y = m_dDist_Peak_A;
      UpperRight.z = m_dPeak_Ht;

      const lines8 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_RIGHT_ELEV_C, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines8.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines8);
      console.log(BuildingLayerEnum.LAYER_ROOF_RIGHT_ELEV_C, LowerLeft, UpperRight);
      this.returnVector3.push(Object.assign({}, UpperRight ));
      this.returnVector3.push(Object.assign({}, LowerLeft));

      // Draw Right Hip Eave Line
      if (this.globals.rightWallHip) {
        LowerLeft.x = dim_A;
        LowerLeft.y = 0.0;
        LowerLeft.z = Ht_A;

        UpperRight.x = dim_A;
        UpperRight.y = dim_B;
        UpperRight.z = Ht_B;

        //Prim.Draw_Line(LowerLeft, UpperRight);
        const lines9 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_HIP_EAVE_LINE, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
        lines9.color = this.buildingDrawingColor.BorderColor;
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines9);
      }
    }
    else    // must be a lean-to or single slope
    {
      // left endwall sng slope line
      LowerLeft.x = 0.0;
      LowerLeft.y = 0.0;
      LowerLeft.z = Ht_A;

      UpperRight.x = 0.0;
      UpperRight.y = dim_B;
      UpperRight.z = Ht_B;

      const lines10 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_LEFT_ENDWALL_SINGLE_SLOPE_LINE, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines10.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines10);

      // right endwall sng slope line
      LowerLeft.x = dim_A;
      LowerLeft.y = 0.0;
      LowerLeft.z = Ht_A;

      UpperRight.x = dim_A;
      UpperRight.y = dim_B;
      UpperRight.z = Ht_B;

      const lines11 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_RIGHT_ENDWALL_SINGLE_SLOPE_LINE, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines11.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines11);
    }



    // ***************************************
    // ******** Draw Roof Ridge Line *********

    if (buildingGeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE &&
      buildingGeometry?.FrameType != BuildingDrawingEnum.ID_FRAME_LEANTO) {
      LowerLeft.x = peak_offset_left;
      LowerLeft.y = m_dDist_Peak_A;
      LowerLeft.z = m_dPeak_Ht;

      UpperRight.x = dim_A - peak_offset_right;
      UpperRight.y = m_dDist_Peak_A;
      UpperRight.z = m_dPeak_Ht;

      const lines12 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ROOF_RIDGE_LINE, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
      lines12.color = this.buildingDrawingColor.BorderColor;
      babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines12);
      //console.log(BuildingLayerEnum.LAYER_ROOF_RIDGE_LINE, LowerLeft, UpperRight);
      //this.returnVector3.push(Object.assign({}, LowerLeft));
      //this.returnVector3.push(Object.assign({}, UpperRight));
    }



    // ***************************
    // ***** draw Eave Line ******

    //  Elev A eave line
    LowerLeft.x = 0.0;
    LowerLeft.y = 0.0;
    LowerLeft.z = Ht_A;

    UpperRight.x = dim_A;
    UpperRight.y = 0.0;
    UpperRight.z = Ht_A;

    const lines13 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_EAVE_LINE_ELEV_A, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines13.color = this.buildingDrawingColor.BorderColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines13);
    console.log(BuildingLayerEnum.LAYER_EAVE_LINE_ELEV_A, LowerLeft, UpperRight);
    this.returnVector3.push(Object.assign({}, LowerLeft));
    this.returnVector3.push(Object.assign({}, UpperRight));

    // Elev C Eave Line
    LowerLeft.x = 0.0;
    LowerLeft.y = dim_B;
    LowerLeft.z = Ht_B;

    UpperRight.x = dim_A;
    UpperRight.y = dim_B;
    UpperRight.z = Ht_B;

    const lines14 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_EAVE_LINE_ELEV_C, { points: Prim.Draw_Line(LowerLeft, UpperRight) }, babylonModel.Scene);
    lines14.color = this.buildingDrawingColor.BorderColor;
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(lines14);
    console.log(BuildingLayerEnum.LAYER_EAVE_LINE_ELEV_C, LowerLeft, UpperRight);
    this.returnVector3.push(Object.assign({}, LowerLeft));
    this.returnVector3.push(Object.assign({}, UpperRight));

    //return 0;
    return { ddd: this.returnVector3 } ;
  }



  DrawSoldierColumns(building_number: number, objIBuildingGeometry: IBuildingGeometry, I_BuildingData: IBuildingData, babylonModel: BabylonModelData) {
    let found_building: boolean = false;
    if (objIBuildingGeometry?.BuildingNumber == building_number) {
      found_building = true;

      // get building number and offset
      let nBuildingNumber = objIBuildingGeometry?.BuildingNumber;
      let bldg_offset: BABYLON.Vector2 = new BABYLON.Vector2(0.00, 0.00);
      //Off set commented by Govind Mali for Multi building 
      //bldg_offset.x = objIBuildingGeometry.XCoordinate;
      //bldg_offset.y = objIBuildingGeometry.YCoordinate;

      // get building's front and back elevation letters
      let strFrontLetter: string = (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) ? BuildingDrawingEnum.ID_WALL_A : BuildingDrawingEnum.ID_WALL_D;
      let strBackLetter: string = (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) ? BuildingDrawingEnum.ID_WALL_C : BuildingDrawingEnum.ID_WALL_B;

      // get endwall setbacks
      let dEndwallSetbackLeft: number = 0.0;
      let dEndwallSetbackRight: number = 0.0;
      let pEndwalls: IEndwalls = I_BuildingData.IEndwalls?.find(x => x.BuildingNumber == nBuildingNumber);

      if (pEndwalls != null) {

        if (this.globals.IsFrameInEndwall(nBuildingNumber, true, I_BuildingData.IEndwalls))
          dEndwallSetbackLeft = pEndwalls?.SpecifiedSetback3;
        if (this.globals.IsFrameInEndwall(nBuildingNumber, false, I_BuildingData.IEndwalls))
          dEndwallSetbackRight = pEndwalls?.SpecifiedSetback4;
      }

      I_BuildingData.IBays?.forEach((pBay) => {
        if (pBay?.BuildingNumber == nBuildingNumber && (pBay?.Elevation == strFrontLetter || pBay?.Elevation == strBackLetter)) {
          let nRoofBayNumber = pBay?.BayNumber;
          let strElevation: string = pBay?.Elevation;

          // get bay width and offset from left corner, and number of roof bays
          let nBaysRemaining = pBay?.BayNumber - 1;
          let nRoofBayCount = 0;
          let dBayWidth = pBay?.Width;
          let dBayOffset = 0.0;
          let MeshElevation = " - " + strElevation;
          I_BuildingData.IBays?.forEach((pTempBay) => {
            if (pTempBay?.BuildingNumber == nBuildingNumber && pTempBay?.Elevation == strElevation && pTempBay?.BayNumber < nRoofBayNumber) {
              dBayOffset += pTempBay?.Width;
              nBaysRemaining--;
            }
            if (pTempBay?.BuildingNumber == nBuildingNumber && pTempBay?.Elevation == strElevation) {
              nRoofBayCount++;
            }
          });

          // get this bay's soldier column spacing
          let nSoldierColumnCount = 0;
          let pSoldierColumnSpacing = [];
          I_BuildingData.IOSoldierColumns?.forEach((pSoldierColumn) => {
            if (pSoldierColumn?.BuildingNumber == nBuildingNumber && pSoldierColumn?.Elevation == strElevation && pSoldierColumn?.RoofBayNumber == nRoofBayNumber) {
              let dColumnOffset = pSoldierColumn?.DistFromLeftColumn;

              let pTempSoldierColumnSpacing = pSoldierColumnSpacing;
              pSoldierColumnSpacing = new Array(nSoldierColumnCount + 1);
              for (let count = 0; count < nSoldierColumnCount; count++) {
                pSoldierColumnSpacing[count] = pTempSoldierColumnSpacing[count];
              }
              pSoldierColumnSpacing[nSoldierColumnCount++] = dColumnOffset;
            }
          });

          // sort soldier column spacing array
          if (nSoldierColumnCount > 0) {
            for (let count = 0; count < (nSoldierColumnCount - 1); count++) {
              for (let ColumnCount = 0; ColumnCount < nSoldierColumnCount - count - 1; ColumnCount++) {
                if (pSoldierColumnSpacing[ColumnCount] > pSoldierColumnSpacing[ColumnCount + 1]) {
                  let temp = pSoldierColumnSpacing[ColumnCount];
                  pSoldierColumnSpacing[ColumnCount] = pSoldierColumnSpacing[ColumnCount + 1];
                  pSoldierColumnSpacing[ColumnCount + 1] = temp;
                }
              }
            }
          }

          // draw soldier columns and roof bracing
          if (nSoldierColumnCount > 0) {
            const COLUMN_DEPTH = 1.0;	// 1 foot
            const RAFTER_LENGTH = 10.0;	// 10 feet
            let dColumnOffset = 0.0;
            let dPreviousOffset = dBayOffset;
            let dColumnRise = 0.0;
            let dRafterRise = 0.0;

            for (let count = 0; count < nSoldierColumnCount; count++) {
              dColumnOffset = pSoldierColumnSpacing[count];

              let pSoldierColumn: IOSoldierColumns = I_BuildingData?.IOSoldierColumns.find(x => x.BuildingNumber == nBuildingNumber &&
                x.Elevation == strElevation && x.RoofBayNumber == nRoofBayNumber && x.DistFromLeftColumn == dColumnOffset);

              let col_btm: BABYLON.Vector3 = new BABYLON.Vector3(), col_top: BABYLON.Vector3 = new BABYLON.Vector3(), col_det_btm: BABYLON.Vector3 = new BABYLON.Vector3(), col_det_top: BABYLON.Vector3 = new BABYLON.Vector3(),
                raf_btm: BABYLON.Vector3 = new BABYLON.Vector3(), raf_top: BABYLON.Vector3 = new BABYLON.Vector3(), brace_1_btm: BABYLON.Vector3 = new BABYLON.Vector3(), brace_1_top: BABYLON.Vector3 = new BABYLON.Vector3(), brace_2_btm: BABYLON.Vector3 = new BABYLON.Vector3(), brace_2_top: BABYLON.Vector3 = new BABYLON.Vector3();
              if (strElevation == strFrontLetter) {
                // gabled building
                if (objIBuildingGeometry?.RoofSlope1 > 0.0) {
                  dColumnRise = COLUMN_DEPTH * (objIBuildingGeometry?.RoofSlope1 / 12.0);
                  dRafterRise = RAFTER_LENGTH * (objIBuildingGeometry?.RoofSlope1 / 12.0);
                }
                // single-slope building
                else {
                  dColumnRise = COLUMN_DEPTH * (-objIBuildingGeometry?.RoofSlope2 / 12.0);
                  dRafterRise = RAFTER_LENGTH * (-objIBuildingGeometry?.RoofSlope2 / 12.0);
                }

                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                  col_btm.x = dBayOffset + dColumnOffset;
                  col_btm.y = 0.0;

                  raf_top.x = col_btm.x;
                  raf_top.y = RAFTER_LENGTH;

                  brace_1_btm.x = dPreviousOffset;
                  brace_1_btm.y = 0.0;

                  brace_2_top.x = dPreviousOffset;
                  brace_2_top.y = RAFTER_LENGTH;
                }
                else {
                  col_btm.x = objIBuildingGeometry?.Width;
                  col_btm.y = dBayOffset + dColumnOffset;

                  raf_top.x = objIBuildingGeometry?.Width - RAFTER_LENGTH;
                  raf_top.y = col_btm.y;

                  brace_1_btm.x = objIBuildingGeometry?.Width;
                  brace_1_btm.y = dPreviousOffset;

                  brace_2_top.x = objIBuildingGeometry?.Width - RAFTER_LENGTH;
                  brace_2_top.y = dPreviousOffset;
                }
              }
              else if (strElevation == strBackLetter) {
                // gabled building
                if (objIBuildingGeometry?.RoofSlope2 > 0.0) {
                  dColumnRise = COLUMN_DEPTH * (objIBuildingGeometry?.RoofSlope2 / 12.0);
                  dRafterRise = RAFTER_LENGTH * (objIBuildingGeometry?.RoofSlope2 / 12.0);
                }
                // single-slope building
                else {
                  dColumnRise = COLUMN_DEPTH * (-objIBuildingGeometry?.RoofSlope1 / 12.0);
                  dRafterRise = RAFTER_LENGTH * (-objIBuildingGeometry?.RoofSlope1 / 12.0);
                }

                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                  col_btm.x = objIBuildingGeometry?.Length - (dBayOffset + dColumnOffset);
                  col_btm.y = objIBuildingGeometry?.Width;

                  raf_top.x = col_btm.x;
                  raf_top.y = objIBuildingGeometry?.Width - RAFTER_LENGTH;

                  brace_1_btm.x = objIBuildingGeometry?.Length - dPreviousOffset;
                  brace_1_btm.y = objIBuildingGeometry?.Width;

                  brace_2_top.x = objIBuildingGeometry?.Length - dPreviousOffset;
                  brace_2_top.y = objIBuildingGeometry?.Width - RAFTER_LENGTH;
                }
                else {
                  col_btm.x = 0.0;
                  col_btm.y = objIBuildingGeometry?.Length - (dBayOffset + dColumnOffset);

                  raf_top.x = RAFTER_LENGTH;
                  raf_top.y = col_btm.y;

                  brace_1_btm.x = 0.0;
                  brace_1_btm.y = objIBuildingGeometry?.Length - dPreviousOffset;

                  brace_2_top.x = RAFTER_LENGTH;
                  brace_2_top.y = objIBuildingGeometry?.Length - dPreviousOffset;
                }
              }
              col_btm.z = 0.0 - (pSoldierColumn?.BaseRecess / 12.0);
              col_top.x = col_btm.x;
              col_top.y = col_btm.y;
              col_top.z = (strElevation == strFrontLetter) ? objIBuildingGeometry?.EaveHeight1 : objIBuildingGeometry?.EaveHeight2;

              raf_btm.x = col_top.x;
              raf_btm.y = col_top.y;
              raf_btm.z = col_top.z;
              raf_top.z = col_top.z + dRafterRise;

              brace_1_btm.z = col_top.z;
              brace_1_top.x = raf_top.x;
              brace_1_top.y = raf_top.y;
              brace_1_top.z = raf_top.z;

              brace_2_btm.x = col_top.x;
              brace_2_btm.y = col_top.y;
              brace_2_btm.z = col_top.z;
              brace_2_top.z = raf_top.z;

              // set column details, and adjust bracing for end bays
              col_det_btm.x = col_btm.x;
              col_det_btm.y = col_btm.y;
              col_det_btm.z = col_btm.z;

              col_det_top.x = col_top.x;
              col_det_top.y = col_top.y;
              col_det_top.z = col_top.z;
              col_det_top.z += dColumnRise;
              if (strElevation == strFrontLetter) {
                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {

                  col_det_btm.y += COLUMN_DEPTH;
                  col_det_top.y += COLUMN_DEPTH;

                  brace_1_btm.x += (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackLeft : 0.0;
                  brace_2_top.x += (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackLeft : 0.0;
                }
                else {
                  col_det_btm.x -= COLUMN_DEPTH;
                  col_det_top.x -= COLUMN_DEPTH;

                  brace_1_btm.y += (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackLeft : 0.0;
                  brace_2_top.y += (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackLeft : 0.0;
                }
              }
              else if (strElevation == strBackLetter) {
                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                  col_det_btm.y -= COLUMN_DEPTH;
                  col_det_top.y -= COLUMN_DEPTH;

                  brace_1_btm.x -= (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackRight : 0.0;
                  brace_2_top.x -= (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackRight : 0.0;
                }
                else {
                  col_det_btm.x += COLUMN_DEPTH;
                  col_det_top.x += COLUMN_DEPTH;

                  brace_1_btm.y -= (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackRight : 0.0;
                  brace_2_top.y -= (nRoofBayNumber == 1 && count == 0) ? dEndwallSetbackRight : 0.0;
                }
              }

              // adjust polets for building offset
              col_btm.x += bldg_offset.x;
              col_btm.y += bldg_offset.y;
              col_top.x += bldg_offset.x;
              col_top.y += bldg_offset.y;

              col_det_btm.x += bldg_offset.x;
              col_det_btm.y += bldg_offset.y;
              col_det_top.x += bldg_offset.x;
              col_det_top.y += bldg_offset.y;

              raf_btm.x += bldg_offset.x;
              raf_btm.y += bldg_offset.y;
              raf_top.x += bldg_offset.x;
              raf_top.y += bldg_offset.y;

              brace_1_btm.x += bldg_offset.x;
              brace_1_btm.y += bldg_offset.y;
              brace_1_top.x += bldg_offset.x;
              brace_1_top.y += bldg_offset.y;

              brace_2_btm.x += bldg_offset.x;
              brace_2_btm.y += bldg_offset.y;
              brace_2_top.x += bldg_offset.x;
              brace_2_top.y += bldg_offset.y;

              let ptArr: BABYLON.Vector3[] = new Array();
              //Rotation If Elevation A is Endwall
              let rotationangle: BABYLON.Vector3 = new BABYLON.Vector3();
              if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                rotationangle = new BABYLON.Vector3(0, Math.PI / 2, 0);
              }
              ptArr.push(new BABYLON.Vector3(col_btm.x * 12.0, col_btm.y * 12.0, col_btm.z * 12.0));
              ptArr.push(new BABYLON.Vector3(col_top.x * 12.0, col_top.y * 12.0, col_top.z * 12.0));

              const SoldierColumns = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
              SoldierColumns.color = this.buildingDrawingColor.SoldierColumnColor;
              if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                SoldierColumns.rotation = rotationangle;
                SoldierColumns.position.z = objIBuildingGeometry?.Width * 12;
              }
              babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns);

              ptArr = [];
              ptArr.push(new BABYLON.Vector3(col_btm.x * 12.0, col_btm.y * 12.0, col_btm.z * 12.0));
              ptArr.push(new BABYLON.Vector3(col_det_btm.x * 12.0, col_det_btm.y * 12.0, col_det_btm.z * 12.0));
              ptArr.push(new BABYLON.Vector3(col_det_top.x * 12.0, col_det_top.y * 12.0, col_det_top.z * 12.0));
              ptArr.push(new BABYLON.Vector3(col_top.x * 12.0, col_top.y * 12.0, col_top.z * 12.0));

              const SoldierColumns1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS_DEPTH + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
              SoldierColumns1.color = this.buildingDrawingColor.SoldierColumnColor;
              if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                SoldierColumns1.rotation = rotationangle;
                SoldierColumns1.position.z = objIBuildingGeometry?.Width * 12;
              }
              babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns1);

              // draw the rafter
              ptArr = [];
              ptArr.push(new BABYLON.Vector3(raf_btm.x * 12.0, raf_btm.y * 12.0, raf_btm.z * 12.0));
              ptArr.push(new BABYLON.Vector3(raf_top.x * 12.0, raf_top.y * 12.0, raf_top.z * 12.0));
              const SoldierColumns2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS_RAFTER + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
              SoldierColumns2.color = this.buildingDrawingColor.SoldierColumnColor;
              if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                SoldierColumns2.rotation = rotationangle;
                SoldierColumns2.position.z = objIBuildingGeometry?.Width * 12;
              }
              babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns2);

              // draw brace 1
              ptArr = [];
              ptArr.push(new BABYLON.Vector3(brace_1_btm.x * 12.0, brace_1_btm.y * 12.0, brace_1_btm.z * 12.0));
              ptArr.push(new BABYLON.Vector3(brace_1_top.x * 12.0, brace_1_top.y * 12.0, brace_1_top.z * 12.0));
              const SoldierColumns3 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS_BRACE_1 + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
              SoldierColumns3.color = this.buildingDrawingColor.SoldierColumnColor;
              if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                SoldierColumns3.rotation = rotationangle;
                SoldierColumns3.position.z = objIBuildingGeometry?.Width * 12;
              }
              babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns3);

              // draw brace 2
              ptArr = [];
              ptArr.push(new BABYLON.Vector3(brace_2_btm.x * 12.0, brace_2_btm.y * 12.0, brace_2_btm.z * 12.0));
              ptArr.push(new BABYLON.Vector3(brace_2_top.x * 12.0, brace_2_top.y * 12.0, brace_2_top.z * 12.0));
              const SoldierColumns4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS_BRACE_2 + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
              SoldierColumns4.color = this.buildingDrawingColor.SoldierColumnColor;
              if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                SoldierColumns4.rotation = rotationangle;
                SoldierColumns4.position.z = objIBuildingGeometry?.Width * 12;
              }
              babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns4);

              // if last soldier column in bay, draw right-side bracing
              if (count == nSoldierColumnCount - 1) {
                if (strElevation == strFrontLetter) {
                  if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                    brace_1_btm.x = dBayOffset + dColumnOffset;
                    brace_1_top.x = dBayOffset + dBayWidth;

                    brace_2_btm.x = brace_1_top.x;
                    brace_2_top.x = brace_1_btm.x;
                  }
                  else {
                    brace_1_btm.y = dBayOffset + dColumnOffset;
                    brace_1_top.y = dBayOffset + dBayWidth;

                    brace_2_btm.y = brace_1_top.y;
                    brace_2_top.y = brace_1_btm.y;
                  }
                }
                else if (strElevation == strBackLetter) {
                  if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                    brace_1_btm.x = objIBuildingGeometry?.Length - dBayOffset - dColumnOffset;
                    brace_1_top.x = objIBuildingGeometry?.Length - (dBayOffset + dBayWidth);

                    brace_2_btm.x = brace_1_top.x;
                    brace_2_top.x = brace_1_btm.x;
                  }
                  else {
                    brace_1_btm.y = objIBuildingGeometry?.Length - dBayOffset - dColumnOffset;
                    brace_1_top.y = objIBuildingGeometry?.Length - (dBayOffset + dBayWidth);

                    brace_2_btm.y = brace_1_top.y;
                    brace_2_top.y = brace_1_btm.y;
                  }
                }

                // adjust bracing for end bays
                if (strElevation == strFrontLetter) {
                  if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                    brace_1_top.x -= (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackRight : 0.0;
                    brace_2_btm.x -= (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackRight : 0.0;
                  }
                  else {
                    brace_1_top.y -= (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackRight : 0.0;
                    brace_2_btm.y -= (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackRight : 0.0;
                  }
                }
                else if (strElevation == strBackLetter) {
                  if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                    brace_1_top.x += (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackLeft : 0.0;
                    brace_2_btm.x += (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackLeft : 0.0;
                  }
                  else {
                    brace_1_top.y += (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackLeft : 0.0;
                    brace_2_btm.y += (nRoofBayNumber == nRoofBayCount) ? dEndwallSetbackLeft : 0.0;
                  }
                }
                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
                  brace_1_btm.x += bldg_offset.x;
                  brace_1_top.x += bldg_offset.x;
                  brace_2_btm.x += bldg_offset.x;
                  brace_2_top.x += bldg_offset.x;
                }
                else {
                  brace_1_btm.y += bldg_offset.y;
                  brace_1_top.y += bldg_offset.y;
                  brace_2_btm.y += bldg_offset.y;
                  brace_2_top.y += bldg_offset.y;
                }


                // draw brace 1
                ptArr = [];
                ptArr.push(new BABYLON.Vector3(brace_1_btm.x * 12.0, brace_1_btm.y * 12.0, brace_1_btm.z * 12.0));
                ptArr.push(new BABYLON.Vector3(brace_1_top.x * 12.0, brace_1_top.y * 12.0, brace_1_top.z * 12.0));
                const SoldierColumns4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS_BRACE_3 + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
                SoldierColumns4.color = this.buildingDrawingColor.SoldierColumnColor;
                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                  SoldierColumns4.rotation = rotationangle;
                  SoldierColumns4.position.z = objIBuildingGeometry?.Width * 12;
                }
                babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns4);


                // draw brace 2
                ptArr = [];
                ptArr.push(new BABYLON.Vector3(brace_2_btm.x * 12.0, brace_2_btm.y * 12.0, brace_2_btm.z * 12.0));
                ptArr.push(new BABYLON.Vector3(brace_2_top.x * 12.0, brace_2_top.y * 12.0, brace_2_top.z * 12.0));
                const SoldierColumns5 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_SOLDIER_COLUMNS_BRACE_4 + MeshElevation, { points: this.globals.SwapYZCordinate(ptArr) }, babylonModel.Scene);
                SoldierColumns5.color = this.buildingDrawingColor.SoldierColumnColor;
                if (objIBuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
                  SoldierColumns5.rotation = rotationangle;
                  SoldierColumns5.position.z = objIBuildingGeometry?.Width * 12;
                }
                babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(SoldierColumns5);
              }
              dPreviousOffset += dColumnOffset;
            }

          }
        }
      });
    }
  }

  DrawSupportBeam(
    elevation: string,
    startClm: number,
    stopClm: number,
    beamHt: number,
    bldgWidth: number,
    bldgLength: number,
    buildinggeometry: IBuildingGeometry,
    lstIEndwalls: IEndwalls[],
    lstIOOpenAreas: IOOpenArea[],
    lstIBays: IBays[],
    lstIOSoldierColumns: IOSoldierColumns[],
    babylonModelData: BabylonModelData,
    isFromSuppotBeam: boolean,
    drawType: string = ''
  ) {
    let Prim: CBsDraw = new CBsDraw(this.globals);
    let startBeam: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let endBeam: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let tempBeam: BABYLON.Vector3 = new BABYLON.Vector3(0.0, 0.0, 0.0);

    let isEwOpen: boolean = false;
    let isLeftEwFullOpen: boolean = false;
    let isRightEwFullOpen: boolean = false;

    isLeftEwFullOpen = this.IsWallFullOpen(elevation, buildinggeometry?.BuildingNumber, buildinggeometry?.Width, lstIEndwalls, lstIOOpenAreas);

    isRightEwFullOpen = this.IsWallFullOpen(elevation, buildinggeometry?.BuildingNumber, buildinggeometry?.Width, lstIEndwalls, lstIOOpenAreas);

    if (elevation == this.globals.frontLetter) {
      startBeam.x = this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false);
      startBeam.y = 0.0;
      startBeam.z = beamHt;

      endBeam.x = startBeam.x + this.GetSBeamLength(elevation, startClm, stopClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false);
      endBeam.y = startBeam.y;
      endBeam.z = startBeam.z;
    }
    else if (elevation == this.globals.backLetter) {
      startBeam.x = bldgLength - this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false);
      startBeam.y = bldgWidth;
      startBeam.z = beamHt;

      endBeam.x = (startBeam.x - this.GetSBeamLength(elevation, startClm, stopClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false));
      endBeam.y = startBeam.y;
      endBeam.z = startBeam.z;
    }
    else if (elevation == this.globals.leftLetter) {
      startBeam.x = 0.0;
      startBeam.y = bldgWidth - this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false);
      startBeam.z = beamHt;

      endBeam.x = startBeam.x;
      endBeam.y = (startBeam.y - this.GetSBeamLength(elevation, startClm, stopClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false));
      endBeam.z = startBeam.z;

      if (!isFromSuppotBeam && lstIOOpenAreas != null && (lstIOOpenAreas.find(x => x.OpeningType == BuildingDrawingEnum.ID_OPEN_FULL))) {
        if (!this.globals.leftWallHip)
          startBeam.z = this.globals.backEaveHt + (this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false)
            * Math.tan(this.globals.backRoofSlope)) - 2;

        // Support beam that lie of both end of ridge
        if (startBeam.y > bldgWidth - buildinggeometry?.DistToRidge2 && endBeam.y < bldgWidth - buildinggeometry?.DistToRidge2) {
          tempBeam.x = startBeam.x;
          tempBeam.y = bldgWidth - buildinggeometry?.DistToRidge2
          tempBeam.z = startBeam.z;
          if (!this.globals.leftWallHip)
            tempBeam.z = startBeam.z + ((startBeam.y - tempBeam.y) * Math.tan(this.globals.backRoofSlope));

          const SupportBeam = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_SUPPORTBEAM + " - " + elevation, { points: Prim.Draw_Line(startBeam, tempBeam) }, babylonModelData.Scene);
          SupportBeam.color = this.buildingDrawingColor.SupportBeamColor;
          babylonModelData.lstBuildingMeshContainer[babylonModelData.MeshContainerIndex].addChild(SupportBeam);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(SupportBeam.uniqueId, babylonModelData.lstBuildingMeshContainer[babylonModelData.MeshContainerIndex])
          startBeam.x = tempBeam.x;
          startBeam.y = tempBeam.y;
          startBeam.z = tempBeam.z;

          if (!this.globals.leftWallHip)
            endBeam.z = startBeam.z - ((startBeam.y - endBeam.y) * Math.tan(this.globals.frontRoofSlope));
        }
        else if (startBeam.y > bldgWidth - buildinggeometry?.DistToRidge2) {
          if (!this.globals.leftWallHip)
            endBeam.z = startBeam.z + ((startBeam.y - endBeam.y) * Math.tan(this.globals.backRoofSlope)); // support beam for bays after ridge
        }
        else {
          if (!this.globals.leftWallHip) {
            startBeam.z = this.globals.frontEaveHt + ((bldgWidth - this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false)) * Math.tan(this.globals.frontRoofSlope)) - 2;
            endBeam.z = startBeam.z - ((startBeam.y - endBeam.y) * Math.tan(this.globals.frontRoofSlope)); // support beam for bays before ridge
          }
        }
      }

      if (isLeftEwFullOpen) {
        isEwOpen = true;
      }
    }
    else if (elevation == this.globals.rightLetter) {
      startBeam.x = bldgLength;
      startBeam.y = this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false);
      startBeam.z = beamHt;

      endBeam.x = startBeam.x;
      endBeam.y = startBeam.y + this.GetSBeamLength(elevation, startClm, stopClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false);
      endBeam.z = startBeam.z;

      if (!isFromSuppotBeam && lstIOOpenAreas != null && (lstIOOpenAreas.find(x => x.OpeningType == BuildingDrawingEnum.ID_OPEN_FULL))) {
        if (!this.globals.rightWallHip)
          startBeam.z = this.globals.frontEaveHt + (this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false) * Math.tan(this.globals.frontRoofSlope)) - 2;

        // Support beam that lie of both end of ridge
        if (endBeam.y > bldgWidth - buildinggeometry?.DistToRidge2 && startBeam.y < bldgWidth - buildinggeometry?.DistToRidge2) {
          tempBeam.x = startBeam.x;
          tempBeam.y = bldgWidth - buildinggeometry?.DistToRidge2;

          tempBeam.z = startBeam.z;
          if (!this.globals.rightWallHip)
            tempBeam.z = startBeam.z + ((tempBeam.y - startBeam.y) * Math.tan(this.globals.frontRoofSlope));

          const SuppoerBeam1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_SUPPORTBEAM + " - " + elevation, { points: Prim.Draw_Line(startBeam, tempBeam) }, babylonModelData.Scene);
          SuppoerBeam1.color = this.buildingDrawingColor.SupportBeamColor;
          babylonModelData.lstBuildingMeshContainer[babylonModelData.MeshContainerIndex].addChild(SuppoerBeam1);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(SuppoerBeam1.uniqueId, babylonModelData.lstBuildingMeshContainer[babylonModelData.MeshContainerIndex])
          startBeam.x = tempBeam.x;
          startBeam.y = tempBeam.y;
          startBeam.z = tempBeam.z;

          if (!this.globals.rightWallHip)
            endBeam.z = startBeam.z - ((endBeam.y - startBeam.y) * Math.tan(this.globals.backRoofSlope));
        }
        else if (startBeam.y < bldgWidth - buildinggeometry?.DistToRidge2) {
          if (!this.globals.rightWallHip)
            endBeam.z = startBeam.z + ((endBeam.y - startBeam.y) * Math.tan(this.globals.frontRoofSlope)); // support beam for bays before ridge
        }
        else {
          if (!this.globals.rightWallHip) {
            startBeam.z = this.globals.backEaveHt + ((bldgWidth - this.GetXDistToClm(elevation, startClm, buildinggeometry?.BuildingNumber, lstIBays, lstIOSoldierColumns, false)) * Math.tan(this.globals.backRoofSlope)) - 2;
            endBeam.z = startBeam.z - ((endBeam.y - startBeam.y) * Math.tan(this.globals.backRoofSlope)); // support beam for bays after ridge
          }
        }
      }

      if (isRightEwFullOpen) {
        isEwOpen = true;
      }
    }

    const SupportBeam2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_SUPPORTBEAM + " - " + elevation, { points: Prim.Draw_Line(startBeam, endBeam) }, babylonModelData.Scene);
    SupportBeam2.color = this.buildingDrawingColor.SupportBeamColor;
    babylonModelData.lstBuildingMeshContainer[babylonModelData.MeshContainerIndex].addChild(SupportBeam2);
    if (drawType != '')
      this.globals.SetPositionCurrentMeshZero(SupportBeam2.uniqueId, babylonModelData.lstBuildingMeshContainer[babylonModelData.MeshContainerIndex])
    return 0;
  }

  // Check Endwall is full open or not
  IsWallFullOpen(whichWall: string, whichBldg: number, bldgWidth: number, lstIEndwalls: IEndwalls[], lstIOOpenAreas: IOOpenArea[]) {
    let retVal: boolean = false;

    if (whichWall == this.globals.leftLetter || whichWall == this.globals.rightLetter) {

      lstIEndwalls?.filter(x => x.BuildingNumber == whichBldg)?.forEach((endwalls) => {
        if (endwalls?.BuildingNumber == whichBldg) {
          if (this.globals.leftLetter == whichWall &&
            (endwalls?.OpenFor3 == BuildingDrawingEnum.ID_OPEN_FOR_WIND ||
              endwalls?.OpenFor3 == BuildingDrawingEnum.ID_OPEN_FOR_GLASS ||
              endwalls?.OpenFor3 == BuildingDrawingEnum.ID_OPEN_FOR_OTHER ||
              endwalls?.OpenFor3 == BuildingDrawingEnum.ID_OPEN_FOR_MASONRY))
            retVal = true;

          else if (this.globals.rightLetter == whichWall &&
            (endwalls?.OpenFor4 == BuildingDrawingEnum.ID_OPEN_FOR_WIND ||
              endwalls?.OpenFor4 == BuildingDrawingEnum.ID_OPEN_FOR_GLASS ||
              endwalls?.OpenFor4 == BuildingDrawingEnum.ID_OPEN_FOR_OTHER ||
              endwalls?.OpenFor4 == BuildingDrawingEnum.ID_OPEN_FOR_MASONRY))
            retVal = true;
        }
      });
    }

    if (!retVal) {
      lstIOOpenAreas?.filter(x => x.BuildingNumber == whichBldg)?.forEach((openareas) => {
        if (openareas?.BuildingNumber == whichBldg) {
          if (openareas?.Elevation == whichWall &&
            openareas?.OpeningType == BuildingDrawingEnum.ID_OPEN_FULL &&
            openareas?.OpeningWidth == bldgWidth)
            retVal = true;
        }
      });
    }
    return retVal;
  }

  GetXDistToClm(whichWall: string, whichClm: number, bldgNumber: number, lstIBays: IBays[], lstIOSoldierColumns: IOSoldierColumns[], include_soldier_columns: boolean = true,): number {
    return this.globals.Get_Dist_to_Bay(bldgNumber, whichWall, whichClm, include_soldier_columns, lstIBays, lstIOSoldierColumns);
  }

  GetSBeamLength(whichWall: string, startClm: number, stopClm: number, bldgNumber: number, lstIBays: IBays[], lstIOSoldierColumns: IOSoldierColumns[], include_soldier_columns: boolean = true,): number {
    return this.globals.Get_Total_Width_of_Bays(bldgNumber, whichWall, startClm, stopClm - 1, include_soldier_columns, lstIBays, lstIOSoldierColumns);
  }
}
