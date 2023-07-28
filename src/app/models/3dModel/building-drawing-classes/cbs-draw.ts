import { CDraw_Building } from './../building-drawing-classes/cdraw-Building';
import { CGlobal } from './../building-drawing-classes/CGlobal';
import * as BABYLON from 'babylonjs';
import { ICanopy } from '../imodel/i-canopy';
//import { ICanopy } from './../imodel/i-canopy';

export class CBsDraw {
  Check_LayerId: any = null;
  lineType: any = null;
  blockid: any = null;

  building_number: number = 0;

  m_dCanopy_Ht_1: number = 0.0;
  m_dCanopy_Ht_2: number = 0.0;
  col_ext1: number; 
  col_ext2: number;
  frame_offset: number; 

  globals: CGlobal;

  // Drawing objects
  db: CDraw_Building;

  constructor(globals: CGlobal) {
    this.globals = globals;
  }


  MidPoint(pt1: BABYLON.Vector3, pt2: BABYLON.Vector3): BABYLON.Vector3 {
    let newPt: BABYLON.Vector3 = new BABYLON.Vector3();

    newPt.x = (pt1.x + pt2.x) / 2.0;
    newPt.y = (pt1.y + pt2.y) / 2.0;
    newPt.z = (pt1.z + pt2.z) / 2.0;

    return newPt;
  }

  Draw_Line(LowerLeft: BABYLON.Vector3, UpperRight: BABYLON.Vector3): BABYLON.Vector3[] {
    let ptArr: BABYLON.Vector3[] = [];
    // converting to inches  * 12.0
    ptArr.push(new BABYLON.Vector3((LowerLeft.x * 12.0), (LowerLeft.z * 12.0), (LowerLeft.y * 12.0)));
    ptArr.push(new BABYLON.Vector3((UpperRight.x * 12.0), (UpperRight.z * 12.0), (UpperRight.y * 12.0)));

    return ptArr;
  }

  DrawRectangle(
    LowerLeft: BABYLON.Vector3,
    UpperRight: BABYLON.Vector3,
    Direction: number,
    calcBox: number): BABYLON.Vector3[] {
    // converting to inches 
    LowerLeft.x = LowerLeft.x * 12.0;
    LowerLeft.y = LowerLeft.y * 12.0;
    LowerLeft.z = LowerLeft.z * 12.0;

    UpperRight.x = UpperRight.x * 12.0;
    UpperRight.y = UpperRight.y * 12.0;
    UpperRight.z = UpperRight.z * 12.0;

    let ptArr: BABYLON.Vector3[] = [];


    if (LowerLeft.x == UpperRight.x) //When drawing in the Y plane and X is vertical
    {
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, LowerLeft.y));
      ptArr.push(new BABYLON.Vector3(UpperRight.x, UpperRight.z, LowerLeft.y));
      ptArr.push(new BABYLON.Vector3(UpperRight.x, UpperRight.z, UpperRight.y));
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, UpperRight.y));
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, LowerLeft.y));
    }

    if (Direction == 1) //When drawing in the Y plane and X is sloped
    {
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, LowerLeft.y));
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, UpperRight.y));
      ptArr.push(new BABYLON.Vector3(UpperRight.x, UpperRight.z, UpperRight.y));
      ptArr.push(new BABYLON.Vector3(UpperRight.x, UpperRight.z, LowerLeft.y));
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, LowerLeft.y));
    }
    else {
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, LowerLeft.y));
      ptArr.push(new BABYLON.Vector3(UpperRight.x, LowerLeft.z, LowerLeft.y));
      ptArr.push(new BABYLON.Vector3(UpperRight.x, UpperRight.z, UpperRight.y));
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, UpperRight.z, UpperRight.y));
      ptArr.push(new BABYLON.Vector3(LowerLeft.x, LowerLeft.z, LowerLeft.y));
    }
    return ptArr;
  }

  IsCanopyOnLastBay(whichBldg: number, whichElev: string, lastFrmLineNumber: number, proj: number, ht: number, canopy: ICanopy[]): boolean {
    let retVal: boolean = false;
    proj = 0.0;
    ht = 0.0;
    canopy.forEach(function (objcanopy) {
      if (objcanopy?.BuildingNumber == whichBldg &&
        objcanopy?.StopCol == lastFrmLineNumber &&
        objcanopy?.Elevation == whichElev &&
        objcanopy?.AtEave == true)
      {
        retVal = true;
        proj = objcanopy?.Projection;
        ht = objcanopy?.HeightLocation;
      }
    });

    return retVal;
  }

  IsCanopyHtAtEave(whichBldg: number, whichElev: string, whichClm: number, eaveHt: number, canopy: ICanopy[]): boolean {
    let retVal: boolean = false;
    canopy.forEach(function (objcanopy) {
      if (objcanopy?.BuildingNumber == whichBldg &&
        (objcanopy?.StartCol == whichClm || objcanopy?.StopCol == whichClm) &&
        objcanopy?.Elevation == whichElev) {
        if (objcanopy?.HeightLocation == eaveHt)
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
      if (objcanopy?.BuildingNumber == whichBldg &&
        objcanopy?.StartCol == 1 &&
        objcanopy?.Elevation == whichElev &&
        objcanopy?.AtEave)
      {
        retVal = true;
        proj = objcanopy?.Projection;
        ht = objcanopy?.HeightLocation;
      }
    });
    return retVal;
  }
  isLeftGableDrawn: boolean;
  isRightGableDrawn: boolean;
}
