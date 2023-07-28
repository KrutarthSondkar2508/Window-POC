import { BuildingDrawingEnum } from './../../3dModel/building-drawing.enum';
import { IBuildingData } from "./../ibuildingdata";
import { IBays } from "./../imodel/ibays";
import { IBuildingGeometry } from "./../iModel/ibuilding-geometry";
import { BayWidthReturnData, ICanopy } from "./../imodel/i-canopy";
import { IOSoldierColumns } from "./../imodel/io_soldiercolumns";
import { CBsDraw } from './../building-drawing-classes/cbs-draw';
import { CGlobal } from './../building-drawing-classes/cglobal';
import { BuildingDrawingColor } from './../building-drawing-classes/building-drawing-color';
import * as BABYLON from 'babylonjs';
import { BabylonModelData } from "./../babylon-model";
import { BuildingLayerEnum } from '../building-layer.enum';

export class CCanopy {
  globals: CGlobal;
  buildingDrawingColor: BuildingDrawingColor;
  constructor(globals: CGlobal, isDarkBackGround:boolean) {
    this.globals = globals;
    this.buildingDrawingColor = new BuildingDrawingColor(isDarkBackGround);
  }
  Draw_Canopy(
    m_dA1_Len: number,
    m_dD4_Len: number,
    m_dC2_Len: number,
    m_dB3_Len: number,
    m_sElevation: string,
    m_dCanopy_Beg: number,
    m_dCanopy_End: number,
    m_dCanopy_Proj: number,
    m_dCanopy_Ht_1: number,
    m_dCanopy_Ht_2: number,
    pBuilding: IBuildingGeometry,
    canopy: ICanopy,
    I_BuildingData: IBuildingData,
    babylonModel: BabylonModelData,
    drawType:string='') {
    let Prim: CBsDraw = new CBsDraw(this.globals);
    
    let LowerLeft = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let UpperRight = new BABYLON.Vector3(0.0, 0.0, 0.0);
    let projLeft: number = 0.0;
    let projRight: number = 0.0;

    let canProjFront: number = 0.0;
    let canProjBack: number = 0.0;
    let canHtFront: number = 0.0;
    let canHtBack: number = 0.0;
    let slopeAdd1: number = 0.0;
    let slopeAdd2: number = 0.0;
    let tempHt: number = 0.0;
    let tempHtAtEave: number = 0.0; //for rectangle points at box canopy

    let isLeftGoh: boolean = false;
    let isRightGoh: boolean = false;
    let isCanLastBay: boolean = false;
    let isCan1stBay: boolean = false;
    let isCanHtAtEave: boolean = false;

    // get building geometry
    let found_building: boolean = false;
    if (pBuilding?.BuildingNumber == canopy?.BuildingNumber)
      found_building = true;

    // merge canopies around corners
    let merge_left: boolean = false;
    let merge_right: boolean = false;
    let left_extension: number = 0.0;
    let right_extension: number = 0.0;
    let at_eave: boolean = false;
    {
      if (canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_STRUCTURAL_AT_EAVE ||
        canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_STRUCTURAL_BELOW_EAVE_HT ||
        canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_SLIMLINE_BELOW_EAVE_HT) {

        // get hip data
        let left_hip_angle_tan_opp: number = 0.0;
        let right_hip_angle_tan_opp: number = 0.0;

        let bay_count: number = 0;
        let bay_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);
        var bayWidthData: BayWidthReturnData = this.Get_Bay_Widths(canopy?.BuildingNumber, this.globals?.frontLetter, false, I_BuildingData.IBays, I_BuildingData.IOSoldierColumns);
        bay_widths = bayWidthData.bay_widths;
        bay_count = bayWidthData.num_bays;
        if (this.globals?.leftWallHip) {
          left_hip_angle_tan_opp = bay_widths[0] / (pBuilding?.Width / 2.0);
        }
        if (this.globals?.rightWallHip) {
          right_hip_angle_tan_opp = bay_widths[bay_count - 1] / (pBuilding?.Width / 2.0);
        }
        I_BuildingData.ICanopy?.filter(x=>x.BuildingNumber==pBuilding.BuildingNumber)?.forEach((pTempCanopy) => {
          if (pTempCanopy?.BuildingNumber == canopy?.BuildingNumber && pTempCanopy?.Type == canopy?.Type && pTempCanopy?.Elevation != canopy?.Elevation) {
            if (canopy?.Elevation == this.globals?.frontLetter) {
              if (pTempCanopy?.Elevation == this.globals?.leftLetter && this.globals?.leftWallHip) {
                if (canopy?.StartCol == 1 && pTempCanopy?.StopCol == this.globals?.numBaysLeft + 1) {
                  merge_left = true;

                  if (this.globals?.leftWallHip)
                    left_extension = canopy?.Projection * left_hip_angle_tan_opp;
                  else
                    left_extension = canopy?.Projection;
                }
              }
              else if (pTempCanopy?.Elevation == this.globals?.rightLetter && this.globals?.rightWallHip) {
                if (canopy?.StopCol == this.globals?.numBaysFront + 1 && pTempCanopy?.StartCol == 1) {
                  merge_right = true;

                  if (this.globals?.rightWallHip)
                    right_extension = canopy?.Projection * right_hip_angle_tan_opp;
                  else
                    right_extension = canopy?.Projection;
                }
              }
            }
            else if (canopy?.Elevation == this.globals?.leftLetter && this.globals?.leftWallHip) {
              if (pTempCanopy?.Elevation == this.globals?.backLetter) {
                if (canopy?.StartCol == 1 && pTempCanopy?.StopCol == this.globals?.numBaysBack + 1) {
                  merge_left = true;

                  if (this.globals?.leftWallHip)
                    left_extension = canopy?.Projection / left_hip_angle_tan_opp;
                  else
                    left_extension = canopy?.Projection;
                }
              }
              else if (pTempCanopy?.Elevation == this.globals?.frontLetter) {
                if (canopy?.StopCol == this.globals?.numBaysLeft + 1 && pTempCanopy?.StartCol == 1) {
                  merge_right = true;

                  if (this.globals?.leftWallHip)
                    right_extension = canopy?.Projection / left_hip_angle_tan_opp;
                  else
                    right_extension = canopy?.Projection;
                }
              }
            }
            else if (canopy?.Elevation == this.globals?.backLetter) {
              if (pTempCanopy?.Elevation == this.globals?.rightLetter && this.globals?.rightWallHip) {
                if (canopy?.StartCol == 1 && pTempCanopy?.StopCol == this.globals?.numBaysRight + 1) {
                  merge_left = true;

                  if (this.globals?.rightWallHip)
                    left_extension = canopy?.Projection * right_hip_angle_tan_opp;
                  else
                    left_extension = canopy?.Projection;
                }
              }
              else if (pTempCanopy?.Elevation == this.globals?.leftLetter && this.globals?.leftWallHip) {
                if (canopy?.StopCol == this.globals?.numBaysBack + 1 && pTempCanopy?.StartCol == 1) {
                  merge_right = true;

                  if (this.globals?.leftWallHip)
                    right_extension = canopy?.Projection * left_hip_angle_tan_opp;
                  else
                    right_extension = canopy?.Projection;
                }
              }
            }
            else if (canopy?.Elevation == this.globals?.rightLetter && this.globals?.rightWallHip) {
              if (pTempCanopy?.Elevation == this.globals?.frontLetter) {
                if (canopy?.StartCol == 1 && pTempCanopy?.StopCol == this.globals?.numBaysFront + 1) {
                  merge_left = true;

                  if (this.globals?.rightWallHip)
                    left_extension = canopy?.Projection / right_hip_angle_tan_opp;
                  else
                    left_extension = canopy?.Projection;
                }
              }
              else if (pTempCanopy?.Elevation == this.globals?.backLetter) {
                if (canopy?.StopCol == this.globals?.numBaysRight + 1 && pTempCanopy?.StartCol == 1) {
                  merge_right = true;

                  if (this.globals?.rightWallHip)
                    right_extension = canopy?.Projection / right_hip_angle_tan_opp;
                  else
                    right_extension = canopy?.Projection;
                }
              }
            }
          }
        });
      }
    }

    let isGableOnEndwallResult = this.globals.IsGableOHOnEndwall(pBuilding?.BuildingNumber, this.globals?.leftLetter, projLeft, I_BuildingData.ICanopy);
    isLeftGoh = isGableOnEndwallResult.IsGable;
    projLeft = isGableOnEndwallResult.projectionValue;

    let isGableOnEndwallResult1 = this.globals.IsGableOHOnEndwall(pBuilding?.BuildingNumber, this.globals?.rightLetter, projRight, I_BuildingData.ICanopy);
    isRightGoh = isGableOnEndwallResult1.IsGable;
    projRight = isGableOnEndwallResult1.projectionValue;
    if (canopy?.Type != BuildingDrawingEnum.ID_CANOPY_GABLE_OVERHANG && canopy?.Type != BuildingDrawingEnum.ID_CANOPY_PURLIN_EXTENSION && canopy?.Type != BuildingDrawingEnum.ID_CANOPY_ROOF_EXTENSION) {
      if (m_sElevation == this.globals?.frontLetter) {
        if ((this.globals?.isSngSlp || this.globals?.isLeanto) &&
          (canopy?.HeightLocation == this.globals?.frontEaveHt ||
            canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_BOX_AT_EAVE) &&
          !this.globals?.isLeantoOrSngSlpHighSideBack) {
          tempHt = this.globals?.frontEaveHt + (m_dCanopy_Proj * Math.tan(this.globals?.backRoofSlope));
          tempHtAtEave = this.globals?.frontEaveHt + (m_dCanopy_Proj * Math.tan(this.globals?.backRoofSlope));
        }
        else {
          tempHt = m_dCanopy_Ht_2;
          tempHtAtEave = this.globals?.frontEaveHt - (m_dCanopy_Proj * Math.tan(this.globals?.frontRoofSlope));
        }
        if (canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_BOX_AT_EAVE) // draw box canopy
        {
          LowerLeft.set(m_dCanopy_Beg, 0.0, m_dCanopy_Ht_1);	//start bottom rectangle
          UpperRight.set(m_dCanopy_End, -m_dCanopy_Proj, m_dCanopy_Ht_1);

          //const linesCanopy1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene);
          //linesCanopy1.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy1);
          let ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
          let ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy10 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy10.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])

          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy11 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])

          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy12 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy12.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy13 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])

          LowerLeft.set(m_dCanopy_Beg, 0.0, this.globals?.frontEaveHt);	//start top rectangle
          UpperRight.set(m_dCanopy_End, -m_dCanopy_Proj, tempHtAtEave);

          //const linesCanopy2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
          //linesCanopy2.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy2);
          ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
          ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy14 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy14.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy14);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy14.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy15 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy15.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy15);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy15.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy16 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy16.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy16);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy16.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])

          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy17 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy17.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy17);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy17.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])

          LowerLeft.set(m_dCanopy_Beg, -m_dCanopy_Proj, m_dCanopy_Ht_1);	//start front rectangle
          UpperRight.set(m_dCanopy_End, -m_dCanopy_Proj, tempHtAtEave);

          //const linesCanopy3 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
          //linesCanopy3.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy3);
          ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
          ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy18 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy18.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy18);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy18.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])

          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy19 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy19.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy19);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy19.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy20 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy20.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy20);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy20.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy21 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy21.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy21);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy21.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }
        else {
          LowerLeft.set(m_dCanopy_Beg, 0.0, m_dCanopy_Ht_1);
          UpperRight.set(m_dCanopy_End, -m_dCanopy_Proj, tempHt);

          if (merge_left || merge_right) {
            let UpperLeft: BABYLON.Vector3 = new BABYLON.Vector3();
            let LowerRight: BABYLON.Vector3 = new BABYLON.Vector3();

            UpperLeft.set(LowerLeft.x, UpperRight.y, UpperRight.z);
            LowerRight.set(UpperRight.x, LowerLeft.y, LowerLeft.z);

            if (merge_left)
              UpperLeft.x -= left_extension;
            if (merge_right)
              UpperRight.x += right_extension;

            if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
              let tempPoint: BABYLON.Vector3 = LowerLeft;
              LowerLeft.x = pBuilding?.Width - tempPoint.y;
              LowerLeft.y = tempPoint.x;

              tempPoint = LowerRight;
              LowerRight.x = pBuilding?.Width - tempPoint.y;
              LowerRight.y = tempPoint.x;

              tempPoint = UpperLeft;
              UpperLeft.x = pBuilding?.Width - tempPoint.y;
              UpperLeft.y = tempPoint.x;

              tempPoint = UpperRight;
              UpperRight.x = pBuilding?.Width - tempPoint.y;
              UpperRight.y = tempPoint.x;
            }

            LowerLeft.x += pBuilding?.XCoordinate;
            LowerLeft.y += pBuilding?.YCoordinate;
            LowerRight.x += pBuilding?.XCoordinate;
            LowerRight.y += pBuilding?.YCoordinate;
            UpperLeft.x += pBuilding?.XCoordinate;
            UpperLeft.y += pBuilding?.YCoordinate;
            UpperRight.x += pBuilding?.XCoordinate;
            UpperRight.y += pBuilding?.YCoordinate;

            let ptArr: BABYLON.Vector3[] = new Array(5);
            ptArr[0] = new BABYLON.Vector3(LowerLeft.x * 12.0, LowerLeft.y * 12.0, LowerLeft.z * 12.0);
            ptArr[1] = new BABYLON.Vector3(LowerRight.x * 12.0, LowerRight.y * 12.0, LowerRight.z * 12.0);
            ptArr[2] = new BABYLON.Vector3(UpperRight.x * 12.0, UpperRight.y * 12.0, UpperRight.z * 12.0);
            ptArr[3] = new BABYLON.Vector3(UpperLeft.x * 12.0, UpperLeft.y * 12.0, UpperLeft.z * 12.0);
            ptArr[4] = ptArr[0];


            const linesCanopy4 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy?.Elevation, { points: this.globals?.SwapYZCordinate(ptArr) }, babylonModel.Scene);
            linesCanopy4.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy4);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy4.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          }
          else {
            //const linesCanopy5 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
            //linesCanopy5.color = this.buildingDrawingColor.CanopyColor;
            //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy5);
            let ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
            let ptrTemp = [];
            ptrTemp.push(ptr[0])
            ptrTemp.push(ptr[1])
            const linesCanopy10 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy10.color = this.buildingDrawingColor.CanopyColor;;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
            ptrTemp = [];
            ptrTemp.push(ptr[1])
            ptrTemp.push(ptr[2])
            const linesCanopy11 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
            ptrTemp = [];
            ptrTemp.push(ptr[2])
            ptrTemp.push(ptr[3])
            const linesCanopy12 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy12.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
            ptrTemp = [];
            ptrTemp.push(ptr[3])
            ptrTemp.push(ptr[4])
            const linesCanopy13 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy13.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          }
        }
      }
      else if (m_sElevation == this.globals?.backLetter) {
        if ((this.globals?.isSngSlp || this.globals?.isLeanto) &&
          (canopy?.HeightLocation == this.globals?.backEaveHt ||
            canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_BOX_AT_EAVE) &&
          !this.globals?.isLeantoOrSngSlpHighSideFront) {
          tempHt = this.globals?.backEaveHt + (m_dCanopy_Proj * Math.tan(this.globals?.frontRoofSlope));
          tempHtAtEave = this.globals?.backEaveHt + (m_dCanopy_Proj * Math.tan(this.globals?.frontRoofSlope));
        }
        else {
          tempHt = m_dCanopy_Ht_2;
          tempHtAtEave = this.globals?.backEaveHt - (m_dCanopy_Proj * Math.tan(this.globals?.backRoofSlope));
        }
        if (canopy?.Type == BuildingDrawingEnum.ID_CANOPY_TYPE_BOX_AT_EAVE) // draw box canopy
        {
          LowerLeft.set(pBuilding?.Length - m_dCanopy_Beg, m_dD4_Len, m_dCanopy_Ht_1);	//start bottom rectangle
          UpperRight.set(pBuilding?.Length - m_dCanopy_End, m_dD4_Len + m_dCanopy_Proj, m_dCanopy_Ht_1);

          //const linesCanopy6 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
          //linesCanopy6.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy6);

          let ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
          let ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy10 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy10.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy11 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy12 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy12.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy13 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy13.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          LowerLeft.set(pBuilding?.Length - m_dCanopy_Beg, m_dD4_Len, this.globals?.backEaveHt);	//start top rectangle
          UpperRight.set(pBuilding?.Length - m_dCanopy_End, m_dD4_Len + m_dCanopy_Proj, tempHtAtEave);

          //const linesCanopy7 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
          //linesCanopy7.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy7);
          ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
          ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy14 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy14.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy14);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy14.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy15 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy15.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy15);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy15.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy16 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy16.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy16);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy16.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy17 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy17.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy17);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy17.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          LowerLeft.set(pBuilding?.Length - m_dCanopy_Beg, m_dD4_Len + m_dCanopy_Proj, m_dCanopy_Ht_1);	//start front rectangle
          UpperRight.set(pBuilding?.Length - m_dCanopy_End, m_dD4_Len + m_dCanopy_Proj, tempHtAtEave);

          //const linesCanopy8 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
          //linesCanopy8.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy8);
          ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);
          ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy18 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy18.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy18);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy18.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy19 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy19.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy19);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy19.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy20 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy20.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy20);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy20.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy21 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy21.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy21);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy21.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }
        else {
          LowerLeft.set(pBuilding?.Length - m_dCanopy_Beg, m_dD4_Len, m_dCanopy_Ht_1);
          UpperRight.set(pBuilding?.Length - m_dCanopy_End, m_dD4_Len + m_dCanopy_Proj, tempHt);

          if (merge_left || merge_right) {
            let UpperLeft: BABYLON.Vector3 = new BABYLON.Vector3();
            let LowerRight: BABYLON.Vector3 = new BABYLON.Vector3();

            UpperLeft.set(LowerLeft.x, UpperRight.y, UpperRight.z);
            LowerRight.set(UpperRight.x, LowerLeft.y, LowerLeft.z);

            if (merge_left)
              UpperLeft.x += left_extension;
            if (merge_right)
              UpperRight.x -= right_extension;

            if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
              let tempPoint: BABYLON.Vector3 = LowerLeft;
              LowerLeft.x = pBuilding?.Width - tempPoint.y;
              LowerLeft.y = tempPoint.x;

              tempPoint = LowerRight;
              LowerRight.x = pBuilding?.Width - tempPoint.y;
              LowerRight.y = tempPoint.x;

              tempPoint = UpperLeft;
              UpperLeft.x = pBuilding?.Width - tempPoint.y;
              UpperLeft.y = tempPoint.x;

              tempPoint = UpperRight;
              UpperRight.x = pBuilding?.Width - tempPoint.y;
              UpperRight.y = tempPoint.x;
            }

            LowerLeft.x += pBuilding?.XCoordinate;
            LowerLeft.y += pBuilding?.YCoordinate;
            LowerRight.x += pBuilding?.XCoordinate;
            LowerRight.y += pBuilding?.YCoordinate;
            UpperLeft.x += pBuilding?.XCoordinate;
            UpperLeft.y += pBuilding?.YCoordinate;
            UpperRight.x += pBuilding?.XCoordinate;
            UpperRight.y += pBuilding?.YCoordinate;


            let ptArr: BABYLON.Vector3[] = new Array(5);
            ptArr[0] = new BABYLON.Vector3(LowerLeft.x * 12.0, LowerLeft.y * 12.0, LowerLeft.z * 12.0);
            ptArr[1] = new BABYLON.Vector3(LowerRight.x * 12.0, LowerRight.y * 12.0, LowerRight.z * 12.0);
            ptArr[2] = new BABYLON.Vector3(UpperRight.x * 12.0, UpperRight.y * 12.0, UpperRight.z * 12.0);
            ptArr[3] = new BABYLON.Vector3(UpperLeft.x * 12.0, UpperLeft.y * 12.0, UpperLeft.z * 12.0);
            ptArr[4] = ptArr[0];

            const linesCanopy9 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy?.Elevation, { points: this.globals?.SwapYZCordinate(ptArr) }, babylonModel.Scene);
            linesCanopy9.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy9);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy9.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          }
          else {
            //const linesCanopy10 = BABYLON.MeshBuilder.CreateLines("linesCanopy10", { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene, false);
            //linesCanopy10.color = this.buildingDrawingColor.CanopyColor;
            //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
            let ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0);  //Change Logic convertr rectangle to line 
            let ptrTemp = [];
            ptrTemp.push(ptr[0])
            ptrTemp.push(ptr[1])
            const linesCanopy10 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy10.color = this.buildingDrawingColor.CanopyColor;;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
            ptrTemp = [];
            ptrTemp.push(ptr[1])
            ptrTemp.push(ptr[2])
            const linesCanopy11 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
            ptrTemp = [];
            ptrTemp.push(ptr[2])
            ptrTemp.push(ptr[3])
            const linesCanopy12 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy12.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
            ptrTemp = [];
            ptrTemp.push(ptr[3])
            ptrTemp.push(ptr[4])
            const linesCanopy13 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
            linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
            babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
            if (drawType != '')
              this.globals.SetPositionCurrentMeshZero(linesCanopy13.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          }
        }
      }
      else if (m_sElevation == this.globals?.leftLetter) {
        if (merge_left || merge_right) {
          let UpperLeft: BABYLON.Vector3 = new BABYLON.Vector3();
          let LowerRight: BABYLON.Vector3 = new BABYLON.Vector3();

          LowerLeft.set(-m_dCanopy_Proj, pBuilding?.Width - m_dCanopy_Beg, m_dCanopy_Ht_2);
          LowerRight.set(-m_dCanopy_Proj, pBuilding?.Width - m_dCanopy_End, m_dCanopy_Ht_2);
          UpperLeft.set(0.0, pBuilding?.Width - m_dCanopy_Beg, m_dCanopy_Ht_1);
          UpperRight.set(0.0, pBuilding?.Width - m_dCanopy_End, m_dCanopy_Ht_1);

          if (merge_left)
            LowerLeft.y += left_extension;
          if (merge_right)
            LowerRight.y -= right_extension;

          if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
            let tempPoint: BABYLON.Vector3 = LowerLeft;
            LowerLeft.x = pBuilding?.Width - tempPoint.y;
            LowerLeft.y = tempPoint.x;

            tempPoint = LowerRight;
            LowerRight.x = pBuilding?.Width - tempPoint.y;
            LowerRight.y = tempPoint.x;

            tempPoint = UpperLeft;
            UpperLeft.x = pBuilding?.Width - tempPoint.y;
            UpperLeft.y = tempPoint.x;

            tempPoint = UpperRight;
            UpperRight.x = pBuilding?.Width - tempPoint.y;
            UpperRight.y = tempPoint.x;
          }

          LowerLeft.x += pBuilding?.XCoordinate;
          LowerLeft.y += pBuilding?.YCoordinate;
          LowerRight.x += pBuilding?.XCoordinate;
          LowerRight.y += pBuilding?.YCoordinate;
          UpperLeft.x += pBuilding?.XCoordinate;
          UpperLeft.y += pBuilding?.YCoordinate;
          UpperRight.x += pBuilding?.XCoordinate;
          UpperRight.y += pBuilding?.YCoordinate;


          let ptArr: BABYLON.Vector3[] = new Array(5);
          ptArr[0] = new BABYLON.Vector3(LowerLeft.x * 12.0, LowerLeft.y * 12.0, LowerLeft.z * 12.0);
          ptArr[1] = new BABYLON.Vector3(LowerRight.x * 12.0, LowerRight.y * 12.0, LowerRight.z * 12.0);
          ptArr[2] = new BABYLON.Vector3(UpperRight.x * 12.0, UpperRight.y * 12.0, UpperRight.z * 12.0);
          ptArr[3] = new BABYLON.Vector3(UpperLeft.x * 12.0, UpperLeft.y * 12.0, UpperLeft.z * 12.0);
          ptArr[4] = ptArr[0];

          const linesCanopy11 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy?.Elevation, { points: this.globals?.SwapYZCordinate(ptArr) }, babylonModel.Scene);
          linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }
        else {
          LowerLeft.set(-m_dCanopy_Proj, pBuilding?.Width - m_dCanopy_Beg, m_dCanopy_Ht_2);
          UpperRight.set(0.0, pBuilding?.Width - m_dCanopy_End, m_dCanopy_Ht_1);

          //const linesCanopy12 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 1, 0) }, babylonModel.Scene, false);
          //linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
          let ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 1, 0);
          let ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy10 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy10.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy11 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy12 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy12.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy13 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy13.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }
      }
      else if (m_sElevation == this.globals?.rightLetter) {
        if (merge_left || merge_right) {
          let UpperLeft: BABYLON.Vector3 = new BABYLON.Vector3();
          let LowerRight: BABYLON.Vector3 = new BABYLON.Vector3();

          LowerLeft.set(pBuilding?.Length + m_dCanopy_Proj, m_dCanopy_Beg, m_dCanopy_Ht_2);
          LowerRight.set(pBuilding?.Length + m_dCanopy_Proj, m_dCanopy_End, m_dCanopy_Ht_2);
          UpperLeft.set(pBuilding?.Length, m_dCanopy_Beg, m_dCanopy_Ht_1);
          UpperRight.set(pBuilding?.Length, m_dCanopy_End, m_dCanopy_Ht_1);

          if (merge_left)
            LowerLeft.y -= left_extension;
          if (merge_right)
            LowerRight.y += right_extension;

          if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
            let tempPoint: BABYLON.Vector3 = LowerLeft;
            LowerLeft.x = pBuilding?.Width - tempPoint.y;
            LowerLeft.y = tempPoint.x;

            tempPoint = LowerRight;
            LowerRight.x = pBuilding?.Width - tempPoint.y;
            LowerRight.y = tempPoint.x;

            tempPoint = UpperLeft;
            UpperLeft.x = pBuilding?.Width - tempPoint.y;
            UpperLeft.y = tempPoint.x;

            tempPoint = UpperRight;
            UpperRight.x = pBuilding?.Width - tempPoint.y;
            UpperRight.y = tempPoint.x;
          }

          LowerLeft.x += pBuilding?.XCoordinate;
          LowerLeft.y += pBuilding?.YCoordinate;
          LowerRight.x += pBuilding?.XCoordinate;
          LowerRight.y += pBuilding?.YCoordinate;
          UpperLeft.x += pBuilding?.XCoordinate;
          UpperLeft.y += pBuilding?.YCoordinate;
          UpperRight.x += pBuilding?.XCoordinate;
          UpperRight.y += pBuilding?.YCoordinate;


          let ptArr: BABYLON.Vector3[] = new Array(5);
          ptArr[0] = new BABYLON.Vector3(LowerLeft.x * 12.0, LowerLeft.y * 12.0, LowerLeft.z * 12.0);
          ptArr[1] = new BABYLON.Vector3(LowerRight.x * 12.0, LowerRight.y * 12.0, LowerRight.z * 12.0);
          ptArr[2] = new BABYLON.Vector3(UpperRight.x * 12.0, UpperRight.y * 12.0, UpperRight.z * 12.0);
          ptArr[3] = new BABYLON.Vector3(UpperLeft.x * 12.0, UpperLeft.y * 12.0, UpperLeft.z * 12.0);
          ptArr[4] = ptArr[0];

          const linesCanopy13 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy?.Elevation, { points: this.globals?.SwapYZCordinate(ptArr) }, babylonModel.Scene);
          linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy13.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }
        else {
          LowerLeft.set(pBuilding?.Length + m_dCanopy_Proj, m_dCanopy_Beg, m_dCanopy_Ht_2);
          UpperRight.set(pBuilding?.Length, m_dCanopy_End, m_dCanopy_Ht_1);

          //const linesCanopy13 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE + " - " + canopy.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 1, 0) }, babylonModel.Scene, false);
          //linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
          //babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
          let ptr = Prim.DrawRectangle(LowerLeft, UpperRight, 1, 0);
          let ptrTemp = [];
          ptrTemp.push(ptr[0])
          ptrTemp.push(ptr[1])
          const linesCanopy10 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_1 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy10.color = this.buildingDrawingColor.CanopyColor;;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy10);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy10.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[1])
          ptrTemp.push(ptr[2])
          const linesCanopy11 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_2 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy11.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy11);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy11.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[2])
          ptrTemp.push(ptr[3])
          const linesCanopy12 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_3 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy12.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy12);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy12.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
          ptrTemp = [];
          ptrTemp.push(ptr[3])
          ptrTemp.push(ptr[4])
          const linesCanopy13 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_RECTANGLE_4 + " - " + canopy?.Elevation, ptrTemp, babylonModel.Scene, false);
          linesCanopy13.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy13);
        }
      }
    }
    else if (canopy?.Type == BuildingDrawingEnum.ID_CANOPY_GABLE_OVERHANG || canopy?.Type == BuildingDrawingEnum.ID_CANOPY_PURLIN_EXTENSION || canopy?.Type == BuildingDrawingEnum.ID_CANOPY_ROOF_EXTENSION) {
      if (canopy?.Elevation == this.globals?.leftLetter && isLeftGoh /*&& !this.globals.isLeftGableDrawn[pBuilding.BuildingNumber]*/) {
        let isCanLastBayResult  = this.globals.IsCanopyOnLastBay(pBuilding?.BuildingNumber, this.globals?.backLetter, this.globals?.numBaysBack + 1, canProjBack, canHtBack, I_BuildingData.ICanopy);
        isCanLastBay = isCanLastBayResult.IsCanLast;
        canProjBack = isCanLastBayResult.projectionValue;
        isCanHtAtEave = this.globals.IsCanopyHtAtEave(pBuilding?.BuildingNumber, this.globals?.backLetter, this.globals?.numBaysBack + 1, this.globals?.backEaveHt, I_BuildingData.ICanopy);

        slopeAdd1 = canProjBack * Math.tan(this.globals?.backRoofSlope);

        if (!isCanHtAtEave) {
          canProjBack = 0.0;
          slopeAdd1 = 0.0;
          slopeAdd2 = 0.0;
        }

        if (this.globals?.isLeanto || this.globals?.isSngSlp) {
          let isCan1stBayResult  = this.globals.IsCanopyOnFirstBay(pBuilding?.BuildingNumber, this.globals?.frontLetter, canProjFront, canHtFront, I_BuildingData.ICanopy);
          isCan1stBay = isCan1stBayResult.isCan1stBay;
          canProjFront = isCan1stBayResult.projectionValue;
          slopeAdd2 = canProjFront * Math.tan(this.globals?.backRoofSlope);

          LowerLeft.set(-projLeft, pBuilding?.Width + canProjBack, pBuilding?.EaveHeight2 - slopeAdd1);
          UpperRight.set(0.0, -canProjFront, pBuilding?.EaveHeight1 + slopeAdd2);
        }
        else {
          LowerLeft.set(-projLeft, pBuilding?.Width + canProjBack, pBuilding?.EaveHeight2 - slopeAdd1);
          UpperRight.set(0.0, pBuilding?.DistToRidge1, pBuilding?.PeakHeight);
        }


        if (!this.globals?.isLeantoOrSngSlpHighSideBack) {
          const linesCanopy14 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_PURLIN_1 + " - " + canopy?.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene);
          linesCanopy14.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy14);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy14.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }



        let isCan1stBayResult  = this.globals.IsCanopyOnFirstBay(pBuilding?.BuildingNumber, this.globals?.frontLetter, canProjFront, canHtFront, I_BuildingData.ICanopy);
        isCan1stBay = isCan1stBayResult.isCan1stBay;
        canProjFront = isCan1stBayResult.projectionValue;
        isCanHtAtEave = this.globals.IsCanopyHtAtEave(pBuilding?.BuildingNumber, this.globals?.frontLetter, 1, this.globals?.frontEaveHt, I_BuildingData.ICanopy);

        slopeAdd1 = canProjFront * Math.tan(this.globals?.frontRoofSlope);

        if (!isCanHtAtEave) {
          canProjFront = 0.0;
          slopeAdd1 = 0.0;
          slopeAdd2 = 0.0;
        }

        if (this.globals?.isLeanto || this.globals?.isSngSlp) {
          slopeAdd2 = canProjBack * Math.tan(this.globals?.frontRoofSlope);

          LowerLeft.set(-projLeft, -canProjFront, pBuilding?.EaveHeight1 - slopeAdd1);
          UpperRight.set(0.0, pBuilding?.Width + canProjBack, pBuilding?.EaveHeight2 + slopeAdd2);
        }
        else {
          LowerLeft.set(-projLeft, -canProjFront, pBuilding?.EaveHeight1 - slopeAdd1);
          UpperRight.set(0.0, pBuilding?.DistToRidge1, pBuilding?.PeakHeight);
        }

        if (!this.globals?.isLeantoOrSngSlpHighSideFront) {
          const linesCanopy15 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_PURLIN_2 + " - " + canopy?.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene);
          linesCanopy15.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy15);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy15.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }


        this.globals.isLeftGableDrawn[pBuilding?.BuildingNumber] = true;
      }


      if (canopy?.Elevation == this.globals?.rightLetter && isRightGoh && !this.globals?.isRightGableDrawn[pBuilding?.BuildingNumber]) {
        let isCan1stBayResult   = this.globals.IsCanopyOnFirstBay(pBuilding?.BuildingNumber, this.globals?.backLetter, canProjBack, canHtBack, I_BuildingData.ICanopy);
        isCan1stBay = isCan1stBayResult.isCan1stBay;
        canProjBack = isCan1stBayResult.projectionValue;
        isCanHtAtEave = this.globals.IsCanopyHtAtEave(pBuilding?.BuildingNumber, this.globals?.backLetter, 1, this.globals?.backEaveHt, I_BuildingData.ICanopy);

        slopeAdd1 = canProjBack * Math.tan(this.globals?.backRoofSlope);

        if (!isCanHtAtEave) {
          canProjBack = 0.0;
          slopeAdd1 = 0.0;
          slopeAdd2 = 0.0;
        }

        if (this.globals?.isLeanto || this.globals?.isSngSlp) {
          let isCanLastBayResult   = this.globals.IsCanopyOnLastBay(pBuilding?.BuildingNumber, this.globals?.frontLetter, this.globals?.numBaysFront + 1, canProjFront, canHtFront, I_BuildingData.ICanopy);
          isCanLastBay = isCanLastBayResult.isCanLastBay;
          canProjFront = isCanLastBayResult.projectionValue;
          slopeAdd2 = canProjFront * Math.tan(this.globals?.backRoofSlope);

          LowerLeft.set(pBuilding?.Length + projRight, pBuilding?.Width + canProjBack, pBuilding?.EaveHeight2 - slopeAdd1);
          UpperRight.set(pBuilding?.Length, -canProjFront, pBuilding?.EaveHeight1 + slopeAdd2);
        }
        else {
          LowerLeft.set(pBuilding?.Length + projRight, pBuilding?.Width + canProjBack, pBuilding?.EaveHeight2 - slopeAdd1);
          UpperRight.set(pBuilding?.Length, pBuilding?.DistToRidge1, pBuilding?.PeakHeight);
        }

        if (!this.globals?.isLeantoOrSngSlpHighSideBack) {
          const linesCanopy16 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_PURLIN_1 + " - " + canopy?.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene);
          linesCanopy16.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy16);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy16.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }


        let isCanLastBayResult = this.globals.IsCanopyOnLastBay(pBuilding?.BuildingNumber, this.globals?.frontLetter, this.globals?.numBaysFront + 1, canProjFront, canHtFront, I_BuildingData.ICanopy);
        isCanLastBay = isCanLastBayResult.isCanLastBay;
        canProjFront = isCanLastBayResult.projectionValue;
        isCanHtAtEave = this.globals.IsCanopyHtAtEave(pBuilding?.BuildingNumber, this.globals?.frontLetter, this.globals?.numBaysFront + 1, this.globals?.frontEaveHt, I_BuildingData.ICanopy);

        slopeAdd1 = canProjFront * Math.tan(this.globals?.frontRoofSlope);

        if (!isCanHtAtEave) {
          canProjFront = 0.0;
          slopeAdd1 = 0.0;
          slopeAdd2 = 0.0;
        }

        if (this.globals?.isLeanto || this.globals?.isSngSlp) {
          slopeAdd2 = canProjBack * Math.tan(this.globals?.frontRoofSlope);

          LowerLeft.set(pBuilding?.Length + projRight, -canProjFront, pBuilding?.EaveHeight1 - slopeAdd1);
          UpperRight.set(pBuilding?.Length, pBuilding?.Width + canProjBack, pBuilding?.EaveHeight2 + slopeAdd2);
        }
        else {
          LowerLeft.set(pBuilding?.Length + projRight, -canProjFront, pBuilding?.EaveHeight1 - slopeAdd1);
          UpperRight.set(pBuilding?.Length, pBuilding?.DistToRidge1, pBuilding?.PeakHeight);
        }

        if (!this.globals?.isLeantoOrSngSlpHighSideFront) {
          const linesCanopy18 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_ACCESSORIES_CANOPY_PURLIN_2 + " - " + canopy?.Elevation, { points: Prim.DrawRectangle(LowerLeft, UpperRight, 0, 0) }, babylonModel.Scene);
          linesCanopy18.color = this.buildingDrawingColor.CanopyColor;
          babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(linesCanopy18);
          if (drawType != '')
            this.globals.SetPositionCurrentMeshZero(linesCanopy18.uniqueId, babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex])
        }


        this.globals.isRightGableDrawn[pBuilding?.BuildingNumber] = true;
      }
    }
    return 0;
  }

  Get_Bay_Widths(building_number: number, elevation: string, include_soldier_columns: boolean, lstBays: IBays[], lstSoldierColumns: IOSoldierColumns[]) {
    //include_soldier_columns is by default set true in vc++
    let bay_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);
    let Bays: IBays = new IBays();
    if (include_soldier_columns) {
      let ReturnData = this.Get_Bay_Widths_Include_Soldier_Columns(building_number, elevation, lstSoldierColumns, lstBays);
      return ReturnData;
    }
    else {
      let num_bays = 0;
      lstBays?.filter(x => x.BuildingNumber == building_number)?.forEach((objBays) => {
        if (objBays?.BuildingNumber == building_number &&
          objBays?.Elevation == elevation) {
          bay_widths[num_bays] = objBays?.Width;
          num_bays++;
          Bays = objBays;
        }
      });
      let ReturnData: BayWidthReturnData = new BayWidthReturnData();
      ReturnData.bay_widths = bay_widths;
      ReturnData.num_bays = num_bays;
      ReturnData.bays = Bays;
      return ReturnData;
    }
  }


  Get_Bay_Widths_Include_Soldier_Columns(building_number: number, elevation: string, lstSoldierColumns: IOSoldierColumns[], lstBays: IBays[]) {
    let num_bays = 0;
    let bay_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);
    let Bays: IBays = new IBays();
    lstBays?.filter(x => x.BuildingNumber == building_number)?.forEach((objBays) => {
      if (objBays?.BuildingNumber == building_number &&
        objBays?.Elevation == elevation) {
        let last_soldier_location: number = 0.0;

        if (lstSoldierColumns != null && lstSoldierColumns != undefined) {
          lstSoldierColumns?.filter(x => x.BuildingNumber == building_number).forEach((objSoldierColumns) => {
            if (objSoldierColumns?.BuildingNumber == building_number &&
              objSoldierColumns?.Elevation == elevation &&
              objSoldierColumns?.RoofBayNumber == objBays?.BayNumber) {
              bay_widths[num_bays] = objSoldierColumns?.DistFromLeftColumn - last_soldier_location;
              num_bays++;
              last_soldier_location = objSoldierColumns?.DistFromLeftColumn;
            }
          });
        }
        bay_widths[num_bays] = objBays?.Width - last_soldier_location;
        num_bays++;
        Bays = objBays;
      }

    })
    let ReturnData: BayWidthReturnData = new BayWidthReturnData();
    ReturnData.bay_widths = bay_widths;
    ReturnData.num_bays = num_bays;
    ReturnData.bays = Bays;
    return ReturnData;
  }

}
