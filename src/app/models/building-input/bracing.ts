import { ColumnSpacing, Commontabs } from "./buildinginput-common";
import { RoofBaySpacing, WallBaySpacing } from "./girt-spacing";

export class Bracing extends Commontabs{
  UserId: number;
  IpAddress: string;
  BracingId: number;
  LBPBracingLocation: string;
  BuildingNumber: number;
  BuildingInformationId: number;
  RoofBracingType: string;
  RoofBracingLocations: string;
  RoofUnbraceableLocations: string;
  RoofExcludeDiaphragm: number;
  SW1BracingType: string;
  SW1Tiers: number;
  SW1BracingLocations: string;
  SW1UnbraceableLocations: string;
  SW1ExcludeDiaphragm: number
  SW2BracingType: string;
  SW2Tiers: number;
  SW2BracingLocations: string;
  SW2UnbraceableLocations: string;
  SW2ExcludeDiaphragm: number;
  EW3BracingType: string;
  EW3Tiers: number;
  EW3BracingLocations: string;
  EW3UnbraceableLocations: string;
  EW3ExcludeDiaphragm: number;
  EW4BracingType: string;
  EW4Tiers: number;
  EW4BracingLocations: string;
  EW4UnbraceableLocations: string;
  EW4ExcludeDiaphragm: number;
  Purlins: string;
  Girts: string;
  RafterFlangeBrace: string;
  ColumnFlangeBrace: string;
  OverrideFlangeBraceRoof: number;
  OverrideFlangeBraceWall: number;
  ErectionRods: number;
  AllowTorsion: number;
  ErectionBayWidth: number;
  SW1PFrameType: number;
  SW1PFrameHeight: number;
  PortalRafterDepth1: number;
  SW2PFrameType: number;
  SW2PFrameHeight: number;
  PortalRafterDepth2: number;
  SW1FBBCRight: string;
  SW2FBBCRight: string;
  SW1Girts: string;
  SW2Girts: string;
  EW3Girts: string;
  EW4Girts: string;
  EW3PFrameType: number;
  EW3PFrameHeight: number;
  PortalRafterDepth3: number;
  EW4PFrameType: number;
  EW4PFrameHeight: number;
  PortalRafterDepth4: number;
  SideWallPortalFrameData: SideWallPortalFrame;
  EndWallPortalFrameData: EndWallPortalFrame;
  lstXBracingLocation: XBracingAnchorLocate[];
  lstModifyInteriorColumn: ModifyInteriorColumn[];
  IsReset: boolean;
  IsModified: boolean;
}

export class ModifyInteriorColumn {
  ColumnId: number;
  BuildingNumber: number;
  GroupNumber: number;
  BracedBays: string;
}

export class SideWallPortalFrame {
  PortalFrameId: number;
  SW1Height: string;
  SW1HeightValue: number;
  SW1RodTiers: string;
  SW1WebDepthMaxColumn: number;
  SW1WebDepthMaxRafter: number;
  SW2Height: string;
  SW2HeightValue: number;
  SW2RodTiers: string;
  SW2WebDepthMaxColumn: number;
  SW2WebDepthMaxRafter: number;
}

export class EndWallPortalFrame {
  EndWallProtalFrameId: number;
  EW3Height: string;
  EW3HeightValue: number;
  EW3RodTiers: string;
  EW3WebDepthMaxColumn: number;
  EW3WebDepthMaxRafter: number;
  EW4Height: string;
  EW4HeightValue: number;
  EW4RodTiers: string;
  EW4WebDepthMaxColumn: number;
  EW4WebDepthMaxRafter: number;
}

export class XBracingAnchorLocate {
  XBraceAnchorId: number;
  BayNumber: string;
  DistFromLeftCornerLeft: number;
  DistFromLeftColumnLeft: number;
  DistFromLeftCornerRight: number;
  DistFromLeftColumnRight: number;
  LeftSteelLine: string;
  Elevation: string;
  BracingId: number;
  BuildingInformationId: number;
}

export class GirtBracing {
  SW1Girts: string;
  SW2Girts: string;
  EW3Girts: string;
  EW4Girts: string;
}

export class BracingNotes {
  key: string;
  value: string;
}

export class BuildingGeometry {
  BuildingNumber: number;
  BuildingType: string;
  FrameType: string;
  HighSideWall: string;
  Width: number;
  RoofSlope1: number;
  EaveHeight1: number = 30;
  RoofSlope2: number;
  EaveHeight2: number = 40;
  Length: number;
  PeakHeight: number;
  AttachedToBuildingNumber: number;
  DistToRidge2: number;
  DistToRidge1: number;
  AttachmentElevation: string;
  Elevation: string;
}

export class BoxData {
  id: number;
  imageSrc: string;
  isSelected: boolean;
  isWallBaySpacing: boolean;
  bayNumber: number;
  distFromLeftColumn: number;
  width: number;
  isdisable: boolean;
  boxWidth: string
}

export class EndWalls {
  BuildingNumber: number;
  Endwall3: string = "Hipped Endwall";
  Endwall4: string = "Hipped Endwall";
  PortalColumnDepth3: number = 0;
  PortalRfterDepth3: number = 0;
  PortalColumnDepth4: number = 0;
  PortalRfterDepth4: number = 0;
  BayCount4: number = 0;
  BayCount3: number = 0;
  GirtType3: string;
  GirtType4: string;
  SpecifiedSetback3: number;
  SpecifiedSetback4: number;
  EW1ColumnSpacingType: string;
  EW2ColumnSpacingType: string;
  lstEndWallColumnSpacing3: ColumnSpacing[];
  lstEndWallColumnSpacing4: ColumnSpacing[];

}

export class SideWalls {
  PortalColumnDepth1: number;
  PortalColumnDepth2: number;
  PortalRfterDepth1: number;
  PortalRfterDepth2: number;
  PurlinDepth: number = 5;
  LpbBracingLocation: string;
  BuildingNumber: number;
  GirtType1: string;
  GirtType2: string;
  RoofBaySpacing: number;
  GirtDepth1: number;
  GirtDepth2: number;
  WallBaySpacingScreen: WallBaySpacing[];
  RoofBaySpacingScreen: RoofBaySpacing[];
}

export class CodeLoads {
  windLoadType: string;
  WindLoad: number;
  SeismicZone: string;
  AcceleratedZone: string;
  VelocityZone: string;
  BuildingCode: string;
  SiteDataAvailable: boolean;
  sd1Override: number;
  SpectralResponseS1: number;
  SoilType: String;
  WindLoadType: string;
  SpectralResponseSS: number;
  GroundSnowLoad: number;
}

export class Collaterals {
  WindLoad: number;
  Occupancy: string;
  BuildingNumber: number;
}

export class JobSite {
  ForQuote: number;
}

export class SoldierColumn {
  BuildingNumber: number;
  Elevation: string;
  RoofBayNumber: number;
  DistanceFromColumnLeft: number;
  RoofBayWidth: number;
}

export class RoofPanels {
  Type: string;
  BuildingNumber: number;
}

export class TranslucentPanels {
  Elevation: string;
  BuildingNumber: number;
}

export class WallPanel {
  Type: string;
  BuildingNumber: number;
  ReverseRolled: boolean;
  BaseFraming: string;
}

export class Mazz {
  BuildingNumber: number;
}

export class Cran {
  BuildingNumber: number;
}

export class RoofSpacing {
  BuildingInformationId: number;
  BracedBay: string;
  BayNo: number;
  GroupNo: number;
}

export class Shape {
  type: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  strokeWidth: number;
  BuildingInformationId: number;
  bayNumber: number;
}

export class Bay {
  width: number;
  bayNumber: number;
}
