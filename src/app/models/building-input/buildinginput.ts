import { Bracing } from "./bracing";
import { Endwall, ListEndwall, ListEndwallColumnSpacing } from "./endwall-column-spacing";
import { Frames } from "./frames";
import { Geometry } from "./geometry";
import { GirtsSpacing } from "./girt-spacing";
import { Information } from "./information";
import { Loads } from "./loads";
import { RoofData } from "./roofs";
import { Trim } from "./trim";
import { Walls } from "./walls";


export class Buildinginput {
  InformationData: Information;
  GeometryData: Geometry;
  EndwallData: ListEndwall;
  FramesData: Frames;
  GirtsSpacing: GirtsSpacing;
  TrimData: Trim;
  Bracing: Bracing;
  Project: Project;
  //DeflectionData: Deflections;
  //InsulationData: InsulationMaster;
  WallsData: Walls;
  RoofsData: RoofData;
 // PrimersData: Primers;
  LoadsData: Loads;
}

export class BuildingInputReset {
  modelInformation: Information;
  GeometryInformationId: number;
  modelGeometry: Geometry;
  GirtSpacingId: number;
  UserId: number;
  lstEndWall: Endwall[] = [];
  BracingId: number;
  Bracing: Bracing;
  modelGirtsSpacing = new GirtsSpacing();
  modelListEndwallColumnSpacing = new ListEndwallColumnSpacing();
  lstFrames: Frames;
  ShopCoatId: number; /* Issue 14499 */
  //modelShopCoat = new Primers();
}

export class Project {
  ProjectId: number;
  SeismicSa: number;
  State: string;
  Country: string;
  SeismicS1: number;
  SiteClassId: number;
  WindSpeed: number;
  WindExposureId: number;
  WindLoad: number;
  GroundSnow: number;
  DesignCodeName: string;
  SoilType: string;
  WindLoadType: string;
  lstEndWall: Endwall[];
  modelTrim: Trim;
  RainIntensity: number;
  IsImported:boolean;
  PriceStatus: string;
  IsSentToDM: boolean;
  IsSentToEstimator: boolean;
  UserId: string;
  DMUserId: string;
  InternationalJobsite:boolean;
}

export class BuildingInputResetForCalculation {
  InformationData: Information;
  GeometryData: Geometry;
  EndwallData: ListEndwall;
  FramesData: Frames;
  GirtsSpacing: GirtsSpacing;
  TrimData: Trim;
  Bracing: Bracing;
  Project: Project;
 // DeflectionData: Deflections;
  //InsulationData: InsulationMaster;
  WallsData: Walls;
  RoofsData: RoofData;
  //PrimersData: Primers;
  LoadsData: Loads;
}
