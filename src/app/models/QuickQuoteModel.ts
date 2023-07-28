export class TableOfTable {
  TableOfTableId: number;
  DisplayId: string;
  DisplayText: string;
  SortOrder: number;
  IsActive: number;
  IsDefault: number;
  IsCanadian: number;
  Category: string;
  Width: number;
  Height: number;
}
export class GeometryMeasures {
  eaveHeight: number;
  sidewallSize: number;
  leftEndwallSize: number;
  rightEndwallSize: number;
}
export class FrameStylesMeasure {
  ewbFrameStyle: string;
  ewdFrameStyle: string;
}

export enum Category {
  ClipType = "ClipType",
  FrameType = "FrameType",
  GirtType = "GirtType",
  PenalType = "PenalType",
  SiteClass = "SiteClass",
  SnowExposure = "SnowExposure",
  Thickness = "Thickness",
  TrimStyle = "TrimStyle",
  WalkDoorActiveLeaves = "WalkDoorActiveLeaves",
  WalkDoorColor = "WalkDoorColor",
  WalkDoorSize = "WalkDoorSize",
  WalkDoorStyle = "WalkDoorStyle",
  WalkDoorType = "WalkDoorType",
  WindExposure = "WindExposure",
  WindowFrameColor = "WindowFrameColor",
  WindowSize = "WindowSize",
  InsulationFacing = "InsulationFacing",
  InsulationStarter = "InsulationStarter",
  InsulationTab = "InsulationTab",
  InsulationThickness = "InsulationThickness",
  InsulationType = "InsulationType",
  InsulationWidth = "InsulationWidth",
  LouverColor = "LouverColor",
  LouverSize = "LouverSize",
  LouverType = "LouverType",
  RoofVentColor = "RoofVentColor",
  RoofVentSize = "RoofVentSize",
  WindowGlass = "WindowGlass",
  FramedOpeningSizes ="FramedOpeningSizes",
}

export enum Surface {
   SWA = "SWA",
   SWC = "SWC",
   EWB = "EWB",
   EWD = "EWD",
}
export enum Shape {
  Symmetrical = "Symmetrical",
  SingleSlope = "SingleSlope",
}
export enum RoofPanelType {
  PBR26 = "PBR - 26 GA.",
  DOUBLELOCK24 = "DoubleLok - 24 GA.",
  ULTRADEK24 = "UltraDek - 24 GA.",
  PBR24 = "PBR - 24 GA.",
}
