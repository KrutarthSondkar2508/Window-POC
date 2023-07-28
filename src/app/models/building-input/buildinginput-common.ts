import { Color } from "./color";

export class BuildingInputAccessories {
  objBuildingInformation: BaseBuildingInformation;
  objGeometryInformation: BaseGeometry;
  objEndWall: BaseEndwall;
  objColumnBaySpacing: BaseColumnSpacing;
  objGirtsBaySpacing: BaseGirtsBaySpacing;
  objWall: BaseWall;
  objRoof: BaseRoof;
  objLoad: BaseLoads;
  objInsulation: BaseInsulation;
  objTrim: BaseTrim;
  objProjectInfo: BaseProjectInfo;
}

export class BaseProjectInfo {
  ProjectQuote: boolean;
  RainIntensity: number;
  DesignCodeName: string;
}

export class BaseBuildingInformation {
  ProjectId: number;
  BuildingInformationId: number;
  BuildingLabel: string;
  BuildingName: string;
  Elevation: string;
  FrameType: string;
  AttachmentElevation: string;
  HighSideWallElevation: string;
}

export class BaseGeometry {
  GeometryInformationId: number;
  BuildingInformationId: number;
  BuildingWidth: number;
  BuildingLength: number;
  StartColumn: number;
  StopColumn: number;
  DistanceToRidgeSideWallOne: number;
  DistanceToRidgeSideWallTwo: number;
  EaveHeightSideWallOne: number;
  EaveHeightSideWallTwo: number;
  RoofSlopeSideWallOne: number;
  RoofSlopeSideWallTwo: number;
  PeakHeight: number;
}

export class BaseEndwall {
  lstEndWall: EndWallMain[];
}

export class EndWallMain {
  EndWallID: number;
  BuildingNo: number;
  ElevationType: string;
  EndWallNo: number;
  BayCount: number;
  FrameType: string;
  ColumnSpacingType: string;
}

export class BaseColumnSpacing {
  lstColumnBaySpacing: ColumnSpacing[];
}

export class ColumnSpacing {
  Elevation: string;
  BayNumber: number;
  Width: number;
}

export class BaseGirtsBaySpacing {
  BuildingId: number;
  RoofPurlinDepth: number;
  RoofPurlinOptimize: boolean;
  lstBays: BaseBay[];
  lstSoldierColumns: BaseSoldierColumns[];
}

export class BaseBay {
  Elevation: string;
  BayNumber: number;
  Width: number;
}

export class BaseSoldierColumns {
  Elevation: string;
  RoofBayNumber: number;
  DistFromLeftColumn: number;
}

export class BaseWall {
  constructor() {
    this.InteriorColor = new Color();
  }
  BuildingId: number;
  InteriorColor: Color;
  TypeName: string;
  WallPanel: string;
}

export class BaseRoof {
  constructor() {
    this.ExteriorColor = new Color();
  }
  BuildingId: number;
  Type: string;
  Gauge: number;
  NotByStar: string;
  Clip: string;
  ThermalBlockType: string;
  ExteriorColor: Color;
  ThermalBlock: string
  SnowRetentionRp1: number;
  SnowRetentionRp2: number;
  SquareFeet: number;
}

export class BaseLoads {
  BuildingNumber: number = 0;
  GroundSnowLoad: number = 0;
}

export class BaseInsulation {
  BuildingNumber: number = 0;
  ElevationOnRoof: number = 0;
  Facing: string = '';
  insulation_by_brand: boolean = false;
}

export class BaseTrim {
  constructor() {
    this.Gutters = new Color();
    this.Downspouts = new Color();
  }
  BuildingNumber: number = 0;
  SW1TrimOption: string;
  SW2TrimOption: string;
  EW3TrimOption: string;
  EW4TrimOption: string;
  SW1NorthernGutter: number;
  SW2NorthernGutter: number;
  EW3NorthernGutter: number;
  EW4NorthernGutter: number;
  SW1GutterSize: number;
  SW2GutterSize: number;
  EW3GutterSize: number;
  EW4GutterSize: number;
  SW1IncludeElbows: number;
  SW2IncludeElbows: number;
  EW3IncludeElbows: number;
  EW4IncludeElbows: number;
  Gutters: Color;
  Downspouts: Color;
}
 export class Commontabs {
  buildingtabname: string;
}
