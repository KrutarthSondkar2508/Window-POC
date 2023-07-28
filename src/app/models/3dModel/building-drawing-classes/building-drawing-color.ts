import * as BABYLON from 'babylonjs';
export class BuildingDrawingColor {
  _isWhiteBackGround: boolean;
  BaseColor: BABYLON.Color3;
  BorderColor: BABYLON.Color3;
  SceneclearColor: BABYLON.Color4;
  TextColor: string;

  constructor(isWhiteBackGround: boolean) {
    this._isWhiteBackGround = isWhiteBackGround;
    
    this.BaseColor = (isWhiteBackGround) ? new BABYLON.Color3(1, 1, 1) : new BABYLON.Color3(0, 0, 0);

    //Building BorderColor
    this.BorderColor = (isWhiteBackGround) ? new BABYLON.Color3(1, 1, 1) : new BABYLON.Color3(0, 0, 0);

    //scene color
    this.SceneclearColor = (isWhiteBackGround) ? new BABYLON.Color4(0.2, 0.2, 0.3, 1) : new BABYLON.Color4(1, 1, 1, 1);
    //TextColor
    this.TextColor = (isWhiteBackGround) ? "#000000" : "#FFFFFF";
  }

  //Canopy
  CanopyColor: BABYLON.Color3 = new BABYLON.Color3(0.66, 0.66, 1);
  
  //Roof Bracing
  RoofBracingColor: BABYLON.Color3 = new BABYLON.Color3(0.74, 0.49, 0.49);
  //Bracing Color 204, 102, 102
  BracingColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);
  //SoldierColumns color
  SoldierColumnColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);
  //Roof Bracing
  //Hip Frame
  HipFrameColor: BABYLON.Color3 = new BABYLON.Color3(1, 0.66, 0.66);
  //Open Area
  OpenAreaColor: BABYLON.Color3 = new BABYLON.Color3(0.24, 1, 0);
  //Portal Frame
  PortalFrameColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);
  //Frame color
  FrameColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);
  //Support beam color
  SupportBeamColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);

  //PointLoad color
  PointLoadColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);

  //Interior Columns color
  InteriorColumnColor: BABYLON.Color3 = new BABYLON.Color3(0.8, 0.4, 0.4);

  //Interior Columns color
  WallLTPColor: BABYLON.Color3 = new BABYLON.Color3(0.67, 0.84, 0.90);

  //Framed Opening color
  FramedOpeningColor: BABYLON.Color3 = new BABYLON.Color3(1, 0, 0);

  //Louvers color
  LouversColor: BABYLON.Color3 = new BABYLON.Color3(0, 0, 0.54);

  //Roof Vents
  RoofVents: BABYLON.Color3 = new BABYLON.Color3(0, 0, 1);

  //Slide Doors Color
  SlideDoorsColor: BABYLON.Color3 = new BABYLON.Color3(0, 0, 0.54);

  //Parapet Color
  ParapetColor: BABYLON.Color3 = new BABYLON.Color3(0, 0, 1);

  //Facede Color
  FacedeColor: BABYLON.Color3 = new BABYLON.Color3(0, 0, 1);

  //Windows
  Windows: BABYLON.Color3 = new BABYLON.Color3(0, 0, 1);

  //Windows
  WalkDoor: BABYLON.Color3 = new BABYLON.Color3(0, 0, 0.54);

  //DBCI Door
  DBCIDoor: BABYLON.Color3 = new BABYLON.Color3(204, 0, 0);

  //Roof Liner
  RoofLiner: BABYLON.Color3 = new BABYLON.Color3(0, 0, 1);

  //Crane
  CraneColor: BABYLON.Color3 = new BABYLON.Color3(0.24, 1, 0);

  //Mezzanine
  MezzanineColor: BABYLON.Color3 = new BABYLON.Color3(0.24, 1, 0);

  //Mezzanine Columns
  MezzanineColumns: BABYLON.Color3 = new BABYLON.Color3(0, 0, 1);

  //Wall-Liners 
  WallLinersColor: BABYLON.Color3 = new BABYLON.Color3(0, 1, 1);

  //Partion
  PartitionColor: BABYLON.Color3 = new BABYLON.Color3(1, 0.49, 0);

  //Scaling lines and text
  ScalingColor: BABYLON.Color3 = new BABYLON.Color3(0.7, 0.7, 0.7);
}
