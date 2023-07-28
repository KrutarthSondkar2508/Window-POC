import { BuildingDrawingEnum } from '../building-drawing.enum';
import { CGlobal } from './CGlobal';
import * as BABYLON from 'babylonjs';
import { CCanopy } from './ccanopy';
import { BuildingDrawingColor } from './building-drawing-color';
import { BabylonModelData } from '../babylon-model';
import { BuildingLayerEnum } from '../building-layer.enum';
import { IBracing } from '../imodel/ibracing';
import { IBuildingGeometry } from '../imodel/ibuilding-geometry';
import { IEndwalls } from '../imodel/iendwalls';
import { IBays } from '../imodel/ibays';
import { IBuildingData } from '../ibuildingdata';
import { BayWidthReturnData } from '../imodel/i-canopy';

export class CXBracing {
  bldgNum: number = 0;
  elevation: string = "";
  bayNum: number = 0;
  tierCount: number = 0;

  leftBraceWidth: number[] = [];
  leftBraceHeight: number[] = [];
  leftStartHeight: number[] = [];
  leftOffset: number = 0;
  leftRecess: number = 0;

  rightBraceWidth: number[] = [];
  rightBraceHeight: number[] = [];
  rightStartHeight: number[] = [];
  rightOffset: number = 0;
  rightRecess: number = 0;

  leftColumnDistFromLeftCorner: number = 1;
  rightColumnDistFromLeftCorner: number = 1;
  globals: CGlobal;
  canopy: CCanopy;
  buildingDrawingColor: BuildingDrawingColor;
  constructor(bldgNum: number, elevation: string, bayNum: number, globals: CGlobal, isDarkBackGround: boolean) {
    this.bldgNum = bldgNum;
    this.elevation = elevation;
    this.bayNum = bayNum;
    this.globals = globals;
    this.canopy = new CCanopy(this.globals, isDarkBackGround);
    this.leftColumnDistFromLeftCorner = 0;
    this.rightColumnDistFromLeftCorner = 0;
    this.buildingDrawingColor = new BuildingDrawingColor(isDarkBackGround);
  }



  Draw(buildingGeometry: IBuildingGeometry, I_BuildingData: IBuildingData, babylonModel: BabylonModelData): void {
    if (this.isBracedBay(this.bldgNum, this.elevation, this.bayNum, I_BuildingData.IBracing)) {
      // portal frame data
      var isPortalFrame: boolean = false;
      var pfHeight: number = 0.0;
      // GET BRACING CONFIGURATION
      let foundBracing: boolean = false;
      let MeshElevation = " - " + this.elevation;
      I_BuildingData.IBracing?.filter(x => x.BuildingNumber == buildingGeometry?.BuildingNumber).forEach((bracing) => {
        if (!foundBracing) {
          if (bracing?.BuildingNumber == buildingGeometry?.BuildingNumber) {
            // Front Wall
            if (this.elevation == this.globals.frontLetter) {
              if (bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
                bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
                bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
                bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                this.tierCount = !isNaN(bracing?.SW1Tiers) ? bracing?.SW1Tiers:1;     //Handle NaN of bracing tiers

                if (bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                  isPortalFrame = true;
                  pfHeight = bracing?.SW1PFrameHeight * 12.0;
                }
              }
            }
            // Back Wall
            else if (this.elevation == this.globals.backLetter) {
              if (bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
                bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
                bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
                bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                this.tierCount = !isNaN(bracing?.SW2Tiers) ? bracing?.SW2Tiers:1;

                if (bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                  isPortalFrame = true;
                  pfHeight = bracing?.SW2PFrameHeight * 12.0;
                }
              }
            }
            // Left Wall
            else if (this.elevation == this.globals.leftLetter) {
              if (bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
                bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
                bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
                bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                this.tierCount = !isNaN(bracing?.EW3Tiers) ? bracing?.EW3Tiers:1;

                if (bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                  isPortalFrame = true;
                  pfHeight = bracing?.EW3PFrameHeight * 12.0;
                }
              }
            }
            // Right Wall
            else if (this.elevation == this.globals.rightLetter) {
              if (bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
                bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
                bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
                bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                this.tierCount = !isNaN(bracing?.EW4Tiers) ? bracing?.EW4Tiers:1;

                if (bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
                  isPortalFrame = true;
                  pfHeight = bracing?.EW4PFrameHeight * 12.0;
                }
              }
            }
            foundBracing = true;
          }
        }

      });
      this.leftBraceWidth = new Array(this.tierCount);
      this.leftBraceHeight = new Array(this.tierCount);
      this.leftStartHeight = new Array(this.tierCount);

      this.rightBraceWidth = new Array(this.tierCount);
      this.rightStartHeight = new Array(this.tierCount);
      this.rightBraceHeight = new Array(this.tierCount);

      if (this.elevation == this.globals.frontLetter || this.elevation == this.globals.backLetter) {
        var bay_count = 0;
        let bay_widths: number[] = new Array(BuildingDrawingEnum.BUILDING_MAX_BAYS);
        var bayWidthData: BayWidthReturnData = this.canopy.Get_Bay_Widths(this.bldgNum, this.elevation, true, I_BuildingData.IBays, I_BuildingData.IOSoldierColumns);
        bay_widths = bayWidthData.bay_widths;
        bay_count = bayWidthData.num_bays;
        for (let bayIndex = 0; bayIndex < this.bayNum - 1; bayIndex++) {
          this.leftColumnDistFromLeftCorner += bay_widths[bayIndex] * 12.0;
          this.rightColumnDistFromLeftCorner += bay_widths[bayIndex] * 12.0;
        }
        this.rightColumnDistFromLeftCorner += bay_widths[this.bayNum - 1] * 12.0;

        for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
          this.leftBraceWidth[tierIndex] = bay_widths[this.bayNum - 1] * 12.0;
          this.rightBraceWidth[tierIndex] = bay_widths[this.bayNum - 1] * 12.0;
        }


        // adjust for end bays
        let found_endwalls: boolean = false;
        let endwalls: IEndwalls = new IEndwalls();
        I_BuildingData.IEndwalls?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((pEndwalls) => {
          if (!found_endwalls) {
            if (pEndwalls?.BuildingNumber == this.bldgNum) {
              found_endwalls = true;
              endwalls = pEndwalls;
            }
          }
        });

        if (!found_endwalls)
          return;

        if (this.elevation == this.globals.frontLetter && this.bayNum == 1) {
          this.leftColumnDistFromLeftCorner += endwalls?.SpecifiedSetback3 * 12.0;
          for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
            this.leftBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback3 * 12.0;
            this.rightBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback3 * 12.0;
          }
        }
        else if (this.elevation == this.globals.frontLetter && this.bayNum == bay_count) {
          this.rightColumnDistFromLeftCorner -= endwalls?.SpecifiedSetback4 * 12.0;
          for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
            this.leftBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback4 * 12.0;
            this.rightBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback4 * 12.0;
          }
        }
        else if (this.elevation == this.globals.backLetter && this.bayNum == 1) {
          this.leftColumnDistFromLeftCorner += endwalls?.SpecifiedSetback4 * 12.0;
          for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
            this.leftBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback4 * 12.0;
            this.rightBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback4 * 12.0;
          }
        }
        else if (this.elevation == this.globals.backLetter && this.bayNum == bay_count) {
          this.rightColumnDistFromLeftCorner -= endwalls?.SpecifiedSetback3 * 12.0;
          for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
            this.leftBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback3 * 12.0;
            this.rightBraceWidth[tierIndex] -= endwalls?.SpecifiedSetback3 * 12.0;
          }
        }
      }
      else {
        let numBays: number = 0;

        let bays: IBays = new IBays();
        I_BuildingData.IBays?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((bays) => {
          if (bays?.BuildingNumber == this.bldgNum && bays?.Elevation == this.elevation && bays?.BayNumber == this.bayNum) {
            for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
              this.leftBraceWidth[tierIndex] = bays?.Width * 12.0;
              this.rightBraceWidth[tierIndex] = bays?.Width * 12.0;
            }
          }
          // get column distances from left corner
          if (bays?.BuildingNumber == this.bldgNum && bays?.Elevation == this.elevation && bays?.BayNumber <= this.bayNum) {
            if (bays?.BayNumber < this.bayNum) {
              this.leftColumnDistFromLeftCorner += bays?.Width * 12.0;
              this.rightColumnDistFromLeftCorner += bays?.Width * 12.0;
            }
            else if (bays?.BayNumber == this.bayNum)
              this.rightColumnDistFromLeftCorner += bays?.Width * 12.0;
            numBays++;
          }
        });
      }

      // get endwall column heights
      let leftColumnHeight: number = 0.0;
      let rightColumnHeight: number = 0.0;
      if (this.elevation == this.globals.leftLetter || this.elevation == this.globals.rightLetter) {
        if (buildingGeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SYMMETRICAL ||
          buildingGeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_NONSYMMETRICAL) {
          // LEFT ENDWALL
          if (this.elevation == this.globals.leftLetter) {
            // left column
            if (this.globals.leftWallHip) {
              leftColumnHeight = buildingGeometry?.EaveHeight1 * 12.0;
            }
            else if (this.leftColumnDistFromLeftCorner <= buildingGeometry?.DistToRidge2 * 12.0)
              leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (this.leftColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
            else {
              let distFromRightCorner = (buildingGeometry?.Width * 12.0) - this.leftColumnDistFromLeftCorner;
              leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope1 / 12.0));
            }

            // right column
            if (this.globals.leftWallHip) {
              rightColumnHeight = buildingGeometry?.EaveHeight1 * 12.0;
            }
            else if (this.rightColumnDistFromLeftCorner <= buildingGeometry?.DistToRidge2 * 12.0)
              rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (this.rightColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
            else {
              let distFromRightCorner = (buildingGeometry?.Width * 12.0) - this.rightColumnDistFromLeftCorner;
              rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope1 / 12.0));
            }
          }
          // RIGHT ENDWALL
          else if (this.elevation == this.globals.rightLetter) {
            // left column
            if (this.globals.rightWallHip) {
              leftColumnHeight = buildingGeometry?.EaveHeight1 * 12.0;
            }
            else if (this.leftColumnDistFromLeftCorner <= buildingGeometry?.DistToRidge1 * 12.0)
              leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (this.leftColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
            else {
              let distFromRightCorner = (buildingGeometry?.Width * 12.0) - this.leftColumnDistFromLeftCorner;
              leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope2 / 12.0));
            }

            // right column
            if (this.globals.rightWallHip) {
              rightColumnHeight = buildingGeometry?.EaveHeight1 * 12.0;
            }
            else if (this.rightColumnDistFromLeftCorner <= buildingGeometry?.DistToRidge1 * 12.0)
              rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (this.rightColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
            else {
              let distFromRightCorner = (buildingGeometry?.Width * 12.0) - this.rightColumnDistFromLeftCorner;
              rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope2 / 12.0));
            }
          }
        }
        else {
          // LEFT ENDWALL
          if (this.elevation == this.globals.leftLetter) {
            // HIGH SIDEWALL == BACK WALL
            if (buildingGeometry?.HighSideWall == this.globals.backLetter) {
              leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) - (this.leftColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
              rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) - (this.rightColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
            }
            // HIGH SIDEWALL == FRONT WALL
            else {
              leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (this.leftColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
              rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (this.rightColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
            }
          }
          // RIGHT ENDWALL
          else if (this.elevation == this.globals.rightLetter) {
            // HIGH SIDEWALL == BACK WALL
            if (buildingGeometry?.HighSideWall == this.globals.frontLetter) {
              leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) - (this.leftColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
              rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) - (this.rightColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
            }
            // HIGH SIDEWALL == FRONT WALL
            else {
              leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (this.leftColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
              rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (this.rightColumnDistFromLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
            }
          }
        }
      }

      // Get Start & Tier Heights
      // SIDEWALL
      if (this.elevation == this.globals.frontLetter || this.elevation == this.globals.backLetter) {
        let tierHeight: number = 0.0;
        let columnHeight: number = 0.0;
        if (this.elevation == this.globals.frontLetter)
          columnHeight = buildingGeometry?.EaveHeight1 * 12.0;
        else
          columnHeight = buildingGeometry?.EaveHeight2 * 12.0;

        // get left/right column framelines
        let left_fl: number = 0;
        let right_fl: number = 0;
        if (this.elevation == this.globals.frontLetter) {
          left_fl = this.bayNum;
          right_fl = this.bayNum + 1;
        }
        else {
          left_fl = (this.globals.numBaysBack - this.bayNum) + 2;
          right_fl = (this.globals.numBaysBack - this.bayNum) + 1;
        }

        let found_ew: boolean = false;
        let ew: IEndwalls = new IEndwalls();
        I_BuildingData.IEndwalls?.filter(x=>x.BuildingNumber==this.bldgNum)?.forEach((objEndWall) => {
          if (!found_ew) {
            if (objEndWall.BuildingNumber == this.bldgNum) {
              found_ew = true;
              ew = objEndWall;
            }
          }
        });

        // get left/right column group numbers
        let left_group: number = 0;
        let right_group: number = 0;
        I_BuildingData.IFramelines?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((fl) => {
          if (fl.BuildingNumber == this.bldgNum) {
            if (fl.FrameLineNumber == left_fl) {
              left_group = fl.GroupNumber;

              if (fl.FrameLineNumber == 1 && ew.Endwall3 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                left_group = 0;
              if (fl.FrameLineNumber == this.globals.numBaysBack + 1 && ew.Endwall4 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                left_group = 0;
            }
            if (fl.FrameLineNumber == right_fl) {
              right_group = fl.GroupNumber;

              if (fl.FrameLineNumber == this.globals.numBaysFront + 1 && ew.Endwall4 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                right_group = 0;
              if (fl.FrameLineNumber == 1 && ew.Endwall3 == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING)
                right_group = 0;
            }
          }
        });

        // get left/right column recesses
        let left_recess: number = 0.0;
        let right_recess: number = 0.0;
        let min_recess: number = 0.0;
        let max_recess: number = 0.0;
        I_BuildingData.IGroups?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((grp) => {
          if (grp.BuildingNumber == this.bldgNum) {
            let recess: number = ((this.elevation == this.globals.frontLetter) ? grp.ExtColRecession1 : grp.ExtColRecession2) * -1;
            if (recess > 0) {
              if (grp.GroupNumber == left_group) {
                left_recess = recess;
              }
              if (grp.GroupNumber == right_group) {
                right_recess = recess;
              }

              if (min_recess == 0.0 || recess < min_recess)
                min_recess = recess;
              if (recess > max_recess)
                max_recess = recess;
            }
          }
        });

        // if endwall bay, and no frame found
        if (left_group == 0 || right_group == 0) {
          // Left Endwall, Left Corner Column
          if (this.elevation == this.globals.backLetter && right_group == 0) {
            let found_recess: boolean = false;
            I_BuildingData.IEWRecess?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((ewr) => {
              if (!found_recess) {
                if (ewr.BuildingNumber == this.bldgNum && ewr.Elevation == this.globals.leftLetter && ewr.ColumnNumber == 1) {
                  right_recess = ewr.Recess * -1;
                  found_recess = true;
                }
              }
            });
          }
          // Left Endwall, Right Corner Column
          if (this.elevation == this.globals.frontLetter && left_group == 0) {
            let prev_col: number = 0;
            I_BuildingData.IEWRecess?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((ewr) => {
              if (ewr.BuildingNumber == this.bldgNum && ewr.Elevation == this.globals.leftLetter && ewr.ColumnNumber > 1 && ewr.ColumnNumber > prev_col) {
                left_recess = ewr.Recess * -1;
              }
              prev_col = ewr.ColumnNumber;
            });
          }

          // Right Endwall, Left Corner Column
          if (this.elevation == this.globals.frontLetter && right_group == 0) {
            let found_recess: boolean = false;
            I_BuildingData.IEWRecess?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((ewr) => {
              if (!found_recess) {
                if (ewr.BuildingNumber == this.bldgNum && ewr.Elevation == this.globals.rightLetter && ewr.ColumnNumber == 1) {
                  right_recess = ewr.Recess * -1;
                  found_recess = true;
                }
              }
            });
          }
          // Right Endwall, Right Corner Column
          if (this.elevation == this.globals.backLetter && left_group == 0) {
            let prev_col: number = 0;
            I_BuildingData.IEWRecess?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((ewr) => {
              if (ewr.BuildingNumber == this.bldgNum && ewr.Elevation == this.globals.rightLetter && ewr.ColumnNumber > 1 && ewr.ColumnNumber > prev_col) {
                left_recess = ewr.Recess * -1;
              }
              prev_col = ewr.ColumnNumber;
            });
          }

          if (left_recess > 0 && left_recess < min_recess)
            min_recess = left_recess;
          if (right_recess > 0 && right_recess < min_recess)
            min_recess = right_recess;

          if (left_recess > 0 && left_recess > max_recess)
            max_recess = left_recess;
          if (right_recess > 0 && right_recess > max_recess)
            max_recess = right_recess;
        }

        // calculate tier heights
        if (!isPortalFrame) {
          if (this.tierCount > 1) {
            tierHeight = ((this.elevation == this.globals.frontLetter) ? buildingGeometry?.EaveHeight1 * 12.0 : buildingGeometry?.EaveHeight2 * 12.0) / this.tierCount;
            if (max_recess > tierHeight) {
              tierHeight -= (max_recess + 24.0 - tierHeight) / this.tierCount;
            }

            for (var i = 0; i < this.tierCount; i++) {
              if (i == 0) {
                this.leftStartHeight[i] = left_recess;
                this.rightStartHeight[i] = right_recess;

                this.leftBraceHeight[i] = tierHeight - left_recess;
                this.rightBraceHeight[i] = tierHeight - right_recess;

              }
              else {
                this.leftStartHeight[i] = this.leftStartHeight[i - 1] + this.leftBraceHeight[i - 1];
                this.rightStartHeight[i] = this.rightStartHeight[i - 1] + this.rightBraceHeight[i - 1];

                this.leftBraceHeight[i] = tierHeight;
                this.rightBraceHeight[i] = tierHeight;
              }
            }
          }
          else {
            let eaveHeight: number = ((this.elevation == this.globals.frontLetter) ? buildingGeometry?.EaveHeight1 * 12.0 : buildingGeometry?.EaveHeight2 * 12.0);
            this.leftBraceHeight[0] = eaveHeight - left_recess;
            this.rightBraceHeight[0] = eaveHeight - right_recess;

            this.leftStartHeight[0] = left_recess;
            this.rightStartHeight[0] = right_recess;
          }
        }
        else {
          let eaveHeight: number = ((this.elevation == this.globals.frontLetter) ? buildingGeometry?.EaveHeight1 * 12.0 : buildingGeometry?.EaveHeight2 * 12.0);
          tierHeight = (eaveHeight - (pfHeight + 6.0)) / this.tierCount;

          for (var i = 0; i < this.tierCount; i++) {
            this.leftBraceHeight[i] = tierHeight;
            this.rightBraceHeight[i] = tierHeight;

            this.leftStartHeight[i] = (pfHeight + 6.0) + (tierHeight * i);
            this.rightStartHeight[i] = (pfHeight + 6.0) + (tierHeight * i);
          }
        }
      }
      // ENDWALL
      else if (this.elevation == this.globals.leftLetter || this.elevation == this.globals.rightLetter) {
        let tierHeight: number = 0.0;

        let left_recess: number = 0.0;
        let right_recess: number = 0.0;
        let max_recess: number = 0.0;

        let bay_count: number = (this.elevation == this.globals.leftLetter) ? this.globals.numBaysLeft : this.globals.numBaysRight;

        // get largest column recess above finish floor
        I_BuildingData.IEWRecess ?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((pRecess) => {
          if (pRecess?.BuildingNumber == this.bldgNum && pRecess?.Elevation == this.elevation) {
            let recess: number = pRecess?.Recess * -1;

            if (pRecess?.ColumnNumber == this.bayNum)
              left_recess = recess;
            else if (pRecess?.ColumnNumber == this.bayNum + 1)
              right_recess = recess;

            if (recess > 0 && recess > max_recess)
              max_recess = left_recess;
          }
        });

        if (!isPortalFrame) {
          tierHeight = this.getEndwallTierHeight(I_BuildingData.IBays, I_BuildingData.IBracing, buildingGeometry);
          if (this.tierCount > 1) {
            if (max_recess > tierHeight) {
              tierHeight -= (max_recess + 24.0 - tierHeight) / this.tierCount;
            }

            for (var i = 0; i < this.tierCount; i++) {
              if (i == 0) {
                this.leftStartHeight[i] = left_recess;
                this.rightStartHeight[i] = right_recess;

                this.leftBraceHeight[i] = tierHeight - left_recess;
                this.rightBraceHeight[i] = tierHeight - right_recess;

              }
              else {
                this.leftStartHeight[i] = this.leftStartHeight[i - 1] + this.leftBraceHeight[i - 1];
                this.rightStartHeight[i] = this.rightStartHeight[i - 1] + this.rightBraceHeight[i - 1];

                this.leftBraceHeight[i] = tierHeight;
                this.rightBraceHeight[i] = tierHeight;

                if (i == this.tierCount - 1) {
                  this.leftBraceHeight[i] += rightColumnHeight - (this.leftStartHeight[i] + tierHeight);
                  this.rightBraceHeight[i] += leftColumnHeight - (this.rightStartHeight[i] + tierHeight);
                }
              }
            }
          }
          else {
            this.leftBraceHeight[0] = rightColumnHeight - left_recess;
            this.rightBraceHeight[0] = leftColumnHeight - right_recess;

            this.leftStartHeight[0] = left_recess;
            this.rightStartHeight[0] = right_recess;
          }
        }
        else {
          let eaveHeight: number = buildingGeometry?.EaveHeight1 * 12.0;
          tierHeight = (eaveHeight - (pfHeight + 6.0)) / this.tierCount;

          for (var i = 0; i < this.tierCount; i++) {
            this.leftBraceHeight[i] = tierHeight;
            this.rightBraceHeight[i] = tierHeight;

            this.leftStartHeight[i] = (pfHeight + 6.0) + (tierHeight * i);
            this.rightStartHeight[i] = (pfHeight + 6.0) + (tierHeight * i);
          }
        }
      }

      // get x-bracing anchor offsets
      //let foundAnchor: boolean = false;
      //I_BuildingData.IXBraceAnchor?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((xbrace_anchor) => {
      //  if (!foundAnchor) {
      //    if (xbrace_anchor?.BuildingNumber == this.bldgNum && xbrace_anchor?.Elevation == this.elevation && xbrace_anchor?.BayNumber == this.bayNum) {
      //      if (xbrace_anchor?.DistFromLeftColLeft > 0) {
      //        this.leftOffset = xbrace_anchor?.DistFromLeftColLeft * 12.0;
      //        this.leftBraceWidth[0] -= this.leftOffset;
      //      }

      //      if (xbrace_anchor?.DistFromLeftColRight > 0) {
      //        this.rightOffset = this.rightBraceWidth[0] - xbrace_anchor?.DistFromLeftColRight * 12.0;
      //        this.rightBraceWidth[0] -= this.rightOffset;
      //      }
      //      foundAnchor = true;
      //    }
      //  }
      //});

      // Get offsets
      //let bldgOffset = new BABYLON.Vector2(buildingGeometry.XCoordinate, buildingGeometry.YCoordinate);
      let bldgOffset = new BABYLON.Vector2(0, 0);
      let rotationangle: BABYLON.Vector3 = new BABYLON.Vector3();
      if (buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
        rotationangle = new BABYLON.Vector3(0, Math.PI / 2, 0);
      }
      let wallOffset: BABYLON.Vector2 = new BABYLON.Vector2();
      // FRONT WALL

      if (this.elevation == BuildingDrawingEnum.ID_WALL_A)
        wallOffset = bldgOffset;
      // BACK WALL
      else if (this.elevation == BuildingDrawingEnum.ID_WALL_C && buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL)
        wallOffset = new BABYLON.Vector2(bldgOffset.x + buildingGeometry?.Length, bldgOffset.y + buildingGeometry?.Width);
      else if (this.elevation == BuildingDrawingEnum.ID_WALL_C && buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL)
        wallOffset = new BABYLON.Vector2(bldgOffset.x + buildingGeometry?.Width, bldgOffset.y + buildingGeometry?.Length);
      // LEFT WALL
      else if (this.elevation == BuildingDrawingEnum.ID_WALL_B && buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL)
        wallOffset = new BABYLON.Vector2(bldgOffset.x, bldgOffset.y + buildingGeometry?.Width);
      else if (this.elevation == BuildingDrawingEnum.ID_WALL_B && buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL)
        wallOffset = new BABYLON.Vector2(bldgOffset.x, bldgOffset.y + buildingGeometry?.Length);
      // RIGHT WALL
      else if (this.elevation == BuildingDrawingEnum.ID_WALL_D && buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL)
        wallOffset = new BABYLON.Vector2(bldgOffset.x + buildingGeometry?.Length, bldgOffset.y);
      else if (this.elevation == BuildingDrawingEnum.ID_WALL_D && buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL)
        wallOffset = new BABYLON.Vector2(bldgOffset.x + buildingGeometry?.Width, bldgOffset.y);

      // Draw the braces
      //AcDbObjectId braceObjId;
      for (let tierIndex = 0; tierIndex < this.tierCount; tierIndex++) {
        let leftBracePtArr: BABYLON.Vector3[] = new Array(2);
        let rightBracePtArr: BABYLON.Vector3[] = new Array(2);

        let startPt: BABYLON.Vector3 = new BABYLON.Vector3();
        let endPt: BABYLON.Vector3 = new BABYLON.Vector3();

        // set left brace point array
        startPt = new BABYLON.Vector3(0.0, 0.0, 0.0);
        endPt = new BABYLON.Vector3(0.0, 0.0, 0.0);
        if (this.elevation == BuildingDrawingEnum.ID_WALL_A) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0 + this.leftColumnDistFromLeftCorner, wallOffset.y * 12.0, this.leftStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0 + this.rightColumnDistFromLeftCorner, wallOffset.y * 12.0, startPt.z + this.leftBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.leftOffset > 0.0)
            startPt.x += this.leftOffset;
        }
        else if (this.elevation == BuildingDrawingEnum.ID_WALL_C) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0 - this.leftColumnDistFromLeftCorner, wallOffset.y * 12.0, this.leftStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0 - this.rightColumnDistFromLeftCorner, wallOffset.y * 12.0, startPt.z + this.leftBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.leftOffset > 0.0)
            startPt.x -= this.leftOffset;
        }
        else if (this.elevation == BuildingDrawingEnum.ID_WALL_B) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 - this.leftColumnDistFromLeftCorner, this.leftStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 - this.rightColumnDistFromLeftCorner, startPt.z + this.leftBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.leftOffset > 0.0)
            startPt.y -= this.leftOffset;
        }
        else if (this.elevation == BuildingDrawingEnum.ID_WALL_D) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 + this.leftColumnDistFromLeftCorner, this.leftStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 + this.rightColumnDistFromLeftCorner, startPt.z + this.leftBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.leftOffset > 0.0)
            startPt.y += this.leftOffset;
        }
        leftBracePtArr[0] = new BABYLON.Vector3(startPt.x, startPt.y, startPt.z);
        leftBracePtArr[1] = new BABYLON.Vector3(endPt.x, endPt.y, endPt.z);

        // set right brace point array
        startPt = new BABYLON.Vector3(0.0, 0.0, 0.0);
        endPt = new BABYLON.Vector3(0.0, 0.0, 0.0);
        if (this.elevation == BuildingDrawingEnum.ID_WALL_A) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0 + this.rightColumnDistFromLeftCorner, wallOffset.y * 12.0, this.rightStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0 + this.leftColumnDistFromLeftCorner, wallOffset.y * 12.0, startPt.z + this.rightBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.rightOffset > 0.0)
            startPt.x -= this.rightOffset;
        }
        else if (this.elevation == BuildingDrawingEnum.ID_WALL_C) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0 - this.rightColumnDistFromLeftCorner, wallOffset.y * 12.0, this.rightStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0 - this.leftColumnDistFromLeftCorner, wallOffset.y * 12.0, startPt.z + this.rightBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.rightOffset > 0.0)
            startPt.x += this.rightOffset;
        }
        else if (this.elevation == BuildingDrawingEnum.ID_WALL_B) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 - this.rightColumnDistFromLeftCorner, this.rightStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 - this.leftColumnDistFromLeftCorner, startPt.z + this.rightBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.rightOffset > 0.0)
            startPt.y += this.rightOffset;
        }
        else if (this.elevation == BuildingDrawingEnum.ID_WALL_D) {
          startPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 + this.rightColumnDistFromLeftCorner, this.rightStartHeight[tierIndex]);
          endPt = new BABYLON.Vector3(wallOffset.x * 12.0, wallOffset.y * 12.0 + this.leftColumnDistFromLeftCorner, startPt.z + this.rightBraceHeight[tierIndex]);
          if (tierIndex == 0 && this.rightOffset > 0.0)
            startPt.y -= this.rightOffset;
        }
        rightBracePtArr[0] = new BABYLON.Vector3(startPt.x, startPt.y, startPt.z);
        rightBracePtArr[1] = new BABYLON.Vector3(endPt.x, endPt.y, endPt.z);


        const BracingLine1 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_BRACING + MeshElevation, { points: this.globals.SwapYZCordinate(rightBracePtArr) }, babylonModel.Scene);
        BracingLine1.color = this.buildingDrawingColor.BracingColor;
        if (buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
          BracingLine1.rotation = rotationangle;
          BracingLine1.position.z = buildingGeometry?.Width * 12;
        }
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(BracingLine1);

        const BracingLine2 = BABYLON.MeshBuilder.CreateLines(BuildingLayerEnum.LAYER_RIGHT_BRACING + MeshElevation, { points: this.globals.SwapYZCordinate(leftBracePtArr) }, babylonModel.Scene);
        BracingLine2.color = this.buildingDrawingColor.BracingColor;
        if (buildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
          BracingLine2.rotation = rotationangle;
          BracingLine2.position.z = buildingGeometry?.Width * 12;
        }
        babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(BracingLine2);
        // draw the braces

      }
    }
  }


  isBracedBay(bldgNum: number, elevation: string, bayNum: number, lstbracing: IBracing[]): boolean {
    // GET ELEVATION'S BRACED BAYS
    let bracedBays: string = "";
    let foundBracing: Boolean = false;
    lstbracing?.filter(x => x.BuildingNumber == bldgNum)?.forEach((bracing) => {
      if (!foundBracing) {
        if (bracing?.BuildingNumber == bldgNum) {
          // Front Wall
          if (elevation == this.globals.frontLetter) {
            if (bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
              bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
              bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
              bracing?.SW1BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
              bracedBays = bracing?.SW1BracingLocations;
            }
          }
          // Back Wall
          else if (elevation == this.globals.backLetter) {
            if (bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
              bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
              bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
              bracing?.SW2BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
              bracedBays = bracing?.SW2BracingLocations;
            }
          }
          // Left Wall
          else if (elevation == this.globals.leftLetter) {
            if (bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
              bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
              bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
              bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
              bracedBays = bracing?.EW3BracingLocations;
            }
          }
          // Right Wall
          else if (elevation == this.globals.rightLetter) {
            if (bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
              bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
              bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE ||
              bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_PFRAME) {
              bracedBays = bracing?.EW4BracingLocations;
            }
          }
          foundBracing = true;
        }
      }
    });

    // CHECK IF BAY IS BRACED
    let bayIsBraced: Boolean = false;
    if (bracedBays != "") {
      let temp: string = "";
      let charIndex: number = 0;
      while (charIndex < bracedBays.length) {
        let tempChar: string = bracedBays.charAt(charIndex);
        let getNextBracedBay: Boolean = false;
        if (tempChar == "," || tempChar == " ") {
          if (tempChar == ",")
            getNextBracedBay = true;
        }
        else
          temp = temp + tempChar;

        if (getNextBracedBay || charIndex == bracedBays.length - 1) {
          //Index add for Get Value
          if (parseFloat(temp) == bayNum)
            return true;
          temp = "";
        }
        charIndex++;
      }
    }
    return false;
  }

  getEndwallTierHeight(lstbays: IBays[], lstbracing: IBracing[], buildingGeometry: IBuildingGeometry): number {
    let tierHeight: number = 0.0;

    let distToLeftCorner: number = 0.0;
    let bayWidth: number = 0.0;

    lstbays?.filter(x => x.BuildingNumber == this.bldgNum)?.forEach((bays) => {
      bayWidth = bays?.Width * 12.0;
      if (bays?.BuildingNumber == this.bldgNum && bays?.Elevation == this.elevation) {
        // GET ELEVATION'S BRACED BAYS
        let bracedBays: string = "";

        let foundBracing: boolean = false;
        lstbracing?.filter(x=>x.BuildingNumber==this.bldgNum)?.forEach((bracing) => {
          if (!foundBracing) {
            if (bracing?.BuildingNumber == this.bldgNum) {
              // Left Wall
              if (this.elevation == this.globals.leftLetter) {
                if (bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
                  bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
                  bracing?.EW3BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE) {
                  bracedBays = bracing?.EW3BracingLocations;
                }
              }
              // Right Wall
              else if (this.elevation == this.globals.rightLetter) {
                if (bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_ROD ||
                  bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_CABLE ||
                  bracing?.EW4BracingType == BuildingDrawingEnum.ID_BRACING_ANGLE) {
                  bracedBays = bracing?.EW4BracingLocations;
                }
              }
              foundBracing = true;
            }
          }
        });

        // CHECK IF BAY IS BRACED
        let bayIsBraced: boolean = false;
        if (bracedBays != "") {
          let temp: string = "";
          let charIndex: number = 0;
          while (charIndex < bracedBays.length) {
            let tempChar: string = bracedBays[charIndex];
            let getNextBracedBay: boolean = false;
            if (tempChar == "," || tempChar == " ") {
              if (tempChar == ",")
                getNextBracedBay = true;
            }
            else
              temp = temp + tempChar;

            if (getNextBracedBay || charIndex == bracedBays.length - 1) {
              if (parseFloat(temp) == bays?.BayNumber)
                bayIsBraced = true;;
              temp = "";
            }
            charIndex++;
          }
        }

        // IF BAY IS BRACED, GET TIER HEIGHT
        if (bayIsBraced) {
          let leftColumnHeight: number = 0.0;
          let rightColumnHeight: number = 0.0;

          let bayTierHeight: number = 0.0;

          if (buildingGeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SYMMETRICAL || buildingGeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_NONSYMMETRICAL) {
            // LEFT ENDWALL
            if (this.elevation == this.globals.leftLetter) {
              // left column
              if (distToLeftCorner <= buildingGeometry?.DistToRidge2 * 12.0)
                leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (distToLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
              else {
                let distFromRightCorner: number = (buildingGeometry?.Width * 12.0) - distToLeftCorner;
                leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope1 / 12.0));
              }
              // right column
              if ((distToLeftCorner + bayWidth) <= buildingGeometry?.DistToRidge2 * 12.0)
                rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + ((distToLeftCorner + bayWidth) * (buildingGeometry?.RoofSlope2 / 12.0));
              else {
                let distFromRightCorner: number = (buildingGeometry?.Width * 12.0) - (distToLeftCorner + bayWidth);
                rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope1 / 12.0));
              }
            }
            // RIGHT ENDWALL
            else if (this.elevation == this.globals.rightLetter) {
              // left column
              if (distToLeftCorner <= buildingGeometry?.DistToRidge1 * 12.0)
                leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (distToLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
              else {
                let distFromRightCorner: number = (buildingGeometry?.Width * 12.0) - distToLeftCorner;
                leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope2 / 12.0));
              }
              // right column
              if ((distToLeftCorner + bayWidth) <= buildingGeometry?.DistToRidge1 * 12.0)
                rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + ((distToLeftCorner + bayWidth) * (buildingGeometry?.RoofSlope1 / 12.0));
              else {
                let distFromRightCorner: number = (buildingGeometry?.Width * 12.0) - (distToLeftCorner + bayWidth);
                rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (distFromRightCorner * (buildingGeometry?.RoofSlope2 / 12.0));
              }
            }
          }
          else {
            // LEFT ENDWALL
            if (this.elevation == this.globals.leftLetter) {
              // HIGH SIDEWALL == BACK WALL
              if (buildingGeometry?.HighSideWall == this.globals.backLetter) {
                leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) - (distToLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
                rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) - ((distToLeftCorner + bayWidth) * (buildingGeometry?.RoofSlope1 / 12.0));
              }
              // HIGH SIDEWALL == FRONT WALL
              else {
                leftColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + (distToLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
                rightColumnHeight = (buildingGeometry?.EaveHeight2 * 12.0) + ((distToLeftCorner + bayWidth) * (buildingGeometry?.RoofSlope2 / 12.0));
              }
            }
            // RIGHT ENDWALL
            else if (this.elevation == this.globals.rightLetter) {
              // HIGH SIDEWALL == BACK WALL
              if (buildingGeometry?.HighSideWall == this.globals.frontLetter) {
                leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + (distToLeftCorner * (buildingGeometry?.RoofSlope1 / 12.0));
                rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) + ((distToLeftCorner + bayWidth) * (buildingGeometry?.RoofSlope1 / 12.0));
              }
              // HIGH SIDEWALL == FRONT WALL
              else {
                leftColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) - (distToLeftCorner * (buildingGeometry?.RoofSlope2 / 12.0));
                rightColumnHeight = (buildingGeometry?.EaveHeight1 * 12.0) - ((distToLeftCorner + bayWidth) * (buildingGeometry?.RoofSlope2 / 12.0));
              }
            }
          }
          bayTierHeight = Math.min((leftColumnHeight / this.tierCount), (rightColumnHeight / this.tierCount));
          if (bayTierHeight < tierHeight || tierHeight == 0.0)
            tierHeight = bayTierHeight;
        }
        distToLeftCorner += bayWidth;
      }
    });// - end while( bays != bays_tail )
    return tierHeight;
  }


}

export class FixedBaseBracingColumn {
  globals: CGlobal;
  I_BuildingData: IBuildingData;
  buildingDrawingColor: BuildingDrawingColor;
  constructor(globals: CGlobal, buildingData: IBuildingData, isDarkBackGround:boolean) {
    this.globals = globals;
    this.I_BuildingData = buildingData;
    this.buildingDrawingColor = new BuildingDrawingColor(isDarkBackGround);
  }
  Draw(building_number: number, elevation: string, bay_number: number, right_side: boolean, pBuilding: IBuildingGeometry, babylonModel: BabylonModelData,) {
    let canopy = new CCanopy(this.globals, this.buildingDrawingColor._isWhiteBackGround);
    let MeshElevation = " - " + elevation;
    // get bay info
    let bay_count = 0;
    var bayWidthData: BayWidthReturnData = canopy.Get_Bay_Widths(building_number, elevation, true, this.I_BuildingData.IBays, this.I_BuildingData.IOSoldierColumns);
    let bay_widths = bayWidthData.bay_widths;
    let dist_from_left_corner = 0.0;
    let bay_width = 0.0;
    for (let count = 0; count <= bay_number - 1; count++) {
      if (count < bay_number - 1)
        dist_from_left_corner += bay_widths[count];
      else
        bay_width = bay_widths[count];
    }

    //let bay_offset: BABYLON.Vector2 = new BABYLON.Vector2(pBuilding.XCoordinate, pBuilding.YCoordinate);
    let bay_offset: BABYLON.Vector2 = new BABYLON.Vector2(0, 0);

    let bay_height = 0.0;
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
      if (elevation == BuildingDrawingEnum.ID_WALL_A) {
        bay_offset.x += dist_from_left_corner;
        bay_height = pBuilding?.EaveHeight1;
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_C) {
        bay_offset.x += pBuilding?.Length - dist_from_left_corner;
        bay_offset.y += pBuilding?.Width;
        bay_height = pBuilding?.EaveHeight2;
      }
    }
    else {
      if (elevation == BuildingDrawingEnum.ID_WALL_D) {
        bay_offset.x += pBuilding?.Width;
        bay_offset.y += dist_from_left_corner;
        bay_height = pBuilding?.EaveHeight1;
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_B) {
        bay_offset.y += pBuilding?.Length - dist_from_left_corner;
        bay_height = pBuilding?.EaveHeight2;
      }
    }



    // check for frame-in-endwall
    let frame_endwall = false;
    let frame_setback = 0.0;
    if (bay_number == 1 || bay_number == bay_count) {
      let pEndwalls = this.I_BuildingData.IEndwalls?.find(x => x.BuildingNumber == building_number);

      let type = "";

      type = pEndwalls?.Endwall3;
      let left_frame_endwall = (type == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING || type == BuildingDrawingEnum.ID_ENDWALL_TYPE_NON_EXPANDABLE_FRAME || type == BuildingDrawingEnum.ID_ENDWALL_EXPANDABLE_FRAME);

      type = pEndwalls?.Endwall4;
      let right_frame_endwall = (type == BuildingDrawingEnum.ID_ENDWALL_RIGID_BEARING || type == BuildingDrawingEnum.ID_ENDWALL_TYPE_NON_EXPANDABLE_FRAME || type == BuildingDrawingEnum.ID_ENDWALL_EXPANDABLE_FRAME);

      // sidewall 1
      if (left_frame_endwall && (elevation == BuildingDrawingEnum.ID_WALL_A || elevation == BuildingDrawingEnum.ID_WALL_D) && bay_number == 1) {
        bay_width -= pEndwalls?.SpecifiedSetback3;
        frame_setback = pEndwalls?.SpecifiedSetback3;
      }
      if (right_frame_endwall && (elevation == BuildingDrawingEnum.ID_WALL_A || elevation == BuildingDrawingEnum.ID_WALL_D) && bay_number == bay_count) {
        bay_width -= pEndwalls?.SpecifiedSetback4;
      }

      // sidewall 2
      if (right_frame_endwall && (elevation == BuildingDrawingEnum.ID_WALL_C || elevation == BuildingDrawingEnum.ID_WALL_B) && bay_number == 1) {
        bay_width -= pEndwalls?.SpecifiedSetback4;
        frame_setback = pEndwalls?.SpecifiedSetback4;
      }
      if (left_frame_endwall && (elevation == BuildingDrawingEnum.ID_WALL_C || elevation == BuildingDrawingEnum.ID_WALL_B) && bay_number == bay_count) {
        bay_width -= pEndwalls?.SpecifiedSetback3;
      }

      frame_endwall = (left_frame_endwall || right_frame_endwall);
    }
    if (frame_endwall && bay_number == 1) {
      if (elevation == BuildingDrawingEnum.ID_WALL_A) {
        bay_offset.x += frame_setback;
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_C) {
        bay_offset.x -= frame_setback;
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_D) {
        bay_offset.y += frame_setback;
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_B) {
        bay_offset.y -= frame_setback;
      }
    }

    // get bracing column data
    const web_depth = 1.5;					// 1'-6
    let column_height = bay_height - 1.5;

    let column_offset: BABYLON.Vector2 = new BABYLON.Vector2((!right_side) ? 0.0 : bay_width - web_depth, 0.0);

    // set line data
    let lower_left: BABYLON.Vector3 = new BABYLON.Vector3();
    let upper_left: BABYLON.Vector3 = new BABYLON.Vector3();
    let upper_right: BABYLON.Vector3 = new BABYLON.Vector3();
    let lower_right: BABYLON.Vector3 = new BABYLON.Vector3();

    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_SIDEWALL) {
      if (elevation == BuildingDrawingEnum.ID_WALL_A) {
        lower_left.set((bay_offset.x + column_offset.x) * 12.0, bay_offset.y * 12.0, (!right_side) ? 12.0 : 0.0);
        upper_left.set((bay_offset.x + column_offset.x) * 12.0, bay_offset.y * 12.0, column_height * 12.0);
        upper_right.set((bay_offset.x + column_offset.x + web_depth) * 12.0, bay_offset.y * 12.0, column_height * 12.0);
        lower_right.set((bay_offset.x + column_offset.x + web_depth) * 12.0, bay_offset.y * 12.0, (!right_side) ? 0.0 : 12.0);
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_C) {
        lower_left.set((bay_offset.x - column_offset.x) * 12.0, bay_offset.y * 12.0, (!right_side) ? 12.0 : 0.0);
        upper_left.set((bay_offset.x - column_offset.x) * 12.0, bay_offset.y * 12.0, column_height * 12.0);
        upper_right.set((bay_offset.x - (column_offset.x + web_depth)) * 12.0, bay_offset.y * 12.0, column_height * 12.0);
        lower_right.set((bay_offset.x - (column_offset.x + web_depth)) * 12.0, bay_offset.y * 12.0, (!right_side) ? 0.0 : 12.0);
      }
    }
    else {
      if (elevation == BuildingDrawingEnum.ID_WALL_D) {
        lower_left.set(bay_offset.x * 12.0, (bay_offset.y + column_offset.x) * 12.0, (!right_side) ? 12.0 : 0.0);
        upper_left.set(bay_offset.x * 12.0, (bay_offset.y + column_offset.x) * 12.0, column_height * 12.0);
        upper_right.set(bay_offset.x * 12.0, (bay_offset.y + column_offset.x + web_depth) * 12.0, column_height * 12.0);
        lower_right.set(bay_offset.x * 12.0, (bay_offset.y + column_offset.x + web_depth) * 12.0, (!right_side) ? 0.0 : 12.0);
      }
      else if (elevation == BuildingDrawingEnum.ID_WALL_B) {
        lower_left.set(bay_offset.x * 12.0, (bay_offset.y - column_offset.x) * 12.0, (!right_side) ? 12.0 : 0.0);
        upper_left.set(bay_offset.x * 12.0, (bay_offset.y - column_offset.x) * 12.0, column_height * 12.0);
        upper_right.set(bay_offset.x * 12.0, (bay_offset.y - (column_offset.x + web_depth)) * 12.0, column_height * 12.0);
        lower_right.set(bay_offset.x * 12.0, (bay_offset.y - (column_offset.x + web_depth)) * 12.0, (!right_side) ? 0.0 : 12.0);
      }
    }

    let ptArr_col: BABYLON.Vector3[] = new Array(2), ptArr_col_detail: BABYLON.Vector3[] = new Array(4), ptArr_bkt1: BABYLON.Vector3[] = new Array(2), ptArr_bkt2: BABYLON.Vector3[] = new Array(2);

    if (!right_side) {
      ptArr_col[0] = new BABYLON.Vector3(lower_left.x, lower_left.y, lower_left.z);
      ptArr_col[1] = new BABYLON.Vector3(upper_left.x, upper_left.y, upper_left.z);

      ptArr_col_detail[0] = new BABYLON.Vector3(upper_left.x, upper_left.y, upper_left.z);
      ptArr_col_detail[1] = new BABYLON.Vector3(upper_right.x, upper_right.y, upper_right.z);
      ptArr_col_detail[2] = new BABYLON.Vector3(lower_right.x, lower_right.y, lower_right.z);
      ptArr_col_detail[3] = new BABYLON.Vector3(lower_left.x, lower_left.y, lower_left.z);
    }
    else {
      ptArr_col[0] = new BABYLON.Vector3(lower_right.x, lower_right.y, lower_right.z);
      ptArr_col[1] = new BABYLON.Vector3(upper_right.x, upper_right.y, upper_right.z);

      ptArr_col_detail[0] = new BABYLON.Vector3(upper_right.x, upper_right.y, upper_right.z);
      ptArr_col_detail[1] = new BABYLON.Vector3(upper_left.x, upper_left.y, upper_left.z);
      ptArr_col_detail[2] = new BABYLON.Vector3(lower_left.x, lower_left.y, lower_left.z);
      ptArr_col_detail[3] = new BABYLON.Vector3(lower_right.x, lower_right.y, lower_right.z);
    }

    let rotationangle: BABYLON.Vector3 = new BABYLON.Vector3();
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
      rotationangle = new BABYLON.Vector3(0, Math.PI / 2, 0);
    }

    const FBBracing = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_FIXED_BAY_BRACING_1 + MeshElevation, this.globals.SwapYZCordinate(ptArr_col), babylonModel.Scene, false);
    FBBracing.color = this.buildingDrawingColor.BracingColor;
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
      FBBracing.rotation = rotationangle;
      FBBracing.position.z = pBuilding?.Width * 12;
    }
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(FBBracing);

    const FBBracing2 = BABYLON.Mesh.CreateLines(BuildingLayerEnum.LAYER_FIXED_BAY_BRACING_2 + MeshElevation, this.globals.SwapYZCordinate(ptArr_col_detail), babylonModel.Scene, false);
    FBBracing.color = this.buildingDrawingColor.BracingColor;
    if (pBuilding?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
      FBBracing2.rotation = rotationangle;
      FBBracing2.position.z = pBuilding?.Width * 12;
    }
    babylonModel.lstBuildingMeshContainer[babylonModel.MeshContainerIndex].addChild(FBBracing2);
  }

}
