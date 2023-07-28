import { Commontabs } from "./buildinginput-common";

export class GirtsSpacing extends Commontabs {
  constructor() {
      super();
    this.RoofBaySpacingScreen = new Array(2);
    this.GirtsSpacingScreen = new GirtSpacing();
    this.PurlinBaySpacingScreen = new PurlinSpacing();
    this.WallBaySpacingScreen = new Array();
  }

  GirtSpacingId: number;
  BuildingInformationId: number;
  SW1Style: number;
  SW2Style: number;
  EW1Style: number;
  EW2Style: number;
  SW1Depth: number;
  SW2Depth: number;
  EW1Depth: number;
  EW2Depth: number;
  SW1Optimize: boolean;
  SW2Optimize: boolean;
  EW1Optimize: boolean;
  EW2Optimize: boolean;
  RoofPurlinOptimize: boolean;
  RoofPurlinStyle: number;
  RoofPurlinDepth: number;
  PurlinDepth: number;
  LBPMinDepth: number;
  LBPMaxDepth: number;
  RoofBaySpacing: number;
  GirtSpacing: string;
  PurlinSpacing: string;
  RoofBaySpacingScreen: RoofBaySpacing[];
  GirtsSpacingScreen: GirtSpacing;
  PurlinBaySpacingScreen: PurlinSpacing;
  WallBaySpacingScreen: WallBaySpacing[];
  UserId: number;
  isValid: number;
  OptimizePurlin: number;
  IsModified: boolean;
  ShopcoatDrpName: string;
  BuildingLength: number;
  AttachmentOffset: number;
  XCoordinate: number;
  YCoordinate: number;
  BuildingType: string;
}

export class StyleDepth {
  Id: number;
  Name: string;
  Value: string;
}
export class Boundary {
  SectionId: number;
  SectionText: string;
  MinValue: number;
  MaxValue: number;
}
export class RoofBaySpacing {
  constructor() {
    this.Elevation = 'S';
  }

  RoofBaySpaceId: number;
  CustomBaySpace: string[];
  Elevation: string;
  UniformNumberOfBays: number;
}

export class GirtSpacing {
  constructor() {
    this.GirtsSpacingId = 0;
    this.SW1 = new SpecifiedGirts();
    this.SW2 = new SpecifiedGirts();
    this.EW1 = new SpecifiedGirts();
    this.EW2 = new SpecifiedGirts();
  }


  GirtsSpacingId: number;
  SW1: SpecifiedGirts;
  SW2: SpecifiedGirts;
  EW1: SpecifiedGirts;
  EW2: SpecifiedGirts;
}

export class SpecifiedGirts {
  constructor() {
    this.Id = 0;
  }

  Id: number;
  EaveHeight: number;
  SpaceRemaining: number;
  Type: string;
  GirtSpacingList: number[];
  Elevation: string;
  HeightStyle: string;
  TypeData: boolean = false;
}

export class PurlinSpacing {
  Id: number;
  Type: string;
  NominalSpacing: number;
}

export class WallBaySpacing {
  WallBaySpacingId: number;
  WallId: string;
  NumberOfSoldier: number;
  Elevation: string;
  WallSpaceList: WallBaySpacingList[];
}

export class WallBaySpacingList {
  RoofBayNumber: number;
  RoofBayWidth: number;
  DistFromLeftColumn: number;
  BaseRecess: number;
}

export class WallBaySpacingListClass {
  RoofBay: number;
  BayWidth: number;
  DistanceRoofBay: string;
  BaseRecesses: string;
}

export class ParentBuildingGirtsSpacing extends GirtsSpacing {
  Elevation: string;
  EaveHeightSideWallOne: number;
  EaveHeightSideWallTwo: number;
  PeakHeight: number;
  RoofBaySpacing: number;
}
