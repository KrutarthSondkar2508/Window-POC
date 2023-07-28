import { Commontabs } from "./buildinginput-common";

export class Geometry extends Commontabs {
  GeometryInformationId: number;
  BuildingInformationId: number;
  BuildingWidth: number;
  BuildingAWidth: number;
  BuildingLength: number;
  BuildingALength: number;
  Category: string;
  DistanceToRidgeSideWallOne: number;
  DistanceToRidgeSideWallTwo: number;
  EaveHeightSideWallOne: number;
  EaveHeightSideWallTwo: number;
  RoofSlopeSideWallOne: number;
  RoofSlopeSideWallTwo: number;
  PeakHeight: number;
  XDirection: string;
  XDistance: number;
  YDirection: string;
  YDistance: number;
  AttachmentOffset: number;
  StartColumn: number;
  StopColumn: number;
  XCoordinate: number;
  YCoordinate: number;
  UserId: number;
  CommonWall: string;
  IsModified: boolean;
}


export class Shape {
  type: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  FrameType: string;
  DistanceToRidgeA: number;
  DistanceToRidgeB: number;
  DistanceToRidgeC: number;
  DistanceToRidgeD: number;
  BuildingInformationId: number;
}
export class Point {
  x: number;
  y: number;
}
export class TwoDimension {
  BuildingInformationId: number

  ParentBuildingId: number

  BuildingLabel: string

  BuildingLength: number

  BuildingName: string

  BuildingType: string

  BuildingWidth: number

  Direction: string

  DistanceToRidgeSideWallA: number

  DistanceToRidgeSideWallB: number

  DistanceToRidgeSideWallC: number

  DistanceToRidgeSideWallD: number

  EaveHeightSideWallA: number

  EaveHeightSideWallB: number

  EaveHeightSideWallC: number

  EaveHeightSideWallD: number

  Elevation: string

  FrameType: string

  XDistance: number

  YDistance: number

  StopColumn: number

  StartColumn: number

  AttachmentElevation: string

  AttachmentOffset: number

  BaySideWall: number

  BayEWB: number

  BayEWD: number

  SpecifiedSetback3: number

  SpecifiedSetback4: number

  XCoordinate: number

  YCoordinate: number

  XDirection: string
  YDirection: string
}

export class MinMax {
  SectionText: string;
  MinValue: number;
  MaxValue: number;
}

export class Bays {
  BuildingId: number;
  Elevation: string;
  BayNumber: number;
  BayWidth: number;
}

export class RoofSlope {
  RoofSlopeId: number;
  IsActive: number;
  SortOrder: number;
  Slope: number;
}
export class EaveHeight {
  EaveHeightId: number;
  IsActive: number;
  SortOrder: number;
  Height: string;
}
export class SideWallLength {
  SidewallLengthId: number;

  IsActive: boolean

  Length: string;

  SortOrder: number;
}
export class SidewallConfigurationChoice {

  SidewallBayConfigurationChoiceId: number;

  SidewallLengthId: number;

  SidewallBayConfigurationId: number;

  IsActive: boolean;

  SortOrder: number;
  BayConfiguration: string;
}

