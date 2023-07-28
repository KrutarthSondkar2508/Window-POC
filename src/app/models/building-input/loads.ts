import { Commontabs } from "./buildinginput-common";

export class Loads extends Commontabs {
  ProjectId: number;
  BuildingNumber: number;
  WindEnclosure: string;
  AccessoryEnclosure: string;
  OAEnclosure: string;
  Occupancy: string;
  ThermalFactor: string;
  UnobstructedFlow: number;
  WindLoad: number;
  BelowWindMin: number;
  FrameLive: number;
  FrameSnow: number;
  FrameWind: number;
  FrameSeismic: number;
  FrameCrane: number;
  FrameTotalWind: number;
  FrameTotalSeismic: number;
  FrameTotalGravity: number;
  FramePortalWind: number;
  FramePortalSeismic: number;
  DeflectionWindSpeed: number;
  Escarpment: Escarpment = new Escarpment();
  lstPointLoads: PointLoads[] = [];
  UseSeismicDesignCategory: string;
  UserId: number;
  IsModified: boolean;
}

export class Escarpment {
  EscarpmentId: number;
  ProjectId: number;
  BuildingNumber: number;
  HillHeight: number;
  Lh: number;
  CrestDistance: number;
  CrestUpwind: number;
  FlatUpwindTerrain: number;
  HillTallerBy2: number;
  UpperHalfOfHill: number;
  RidgeOfHill: number;
  TempString1: string;
  TempString2: string;
  TempDouble1: number;
  TempDouble2: number;
  TempInteger1: number;
  TempInteger2: number;
  Answers: number;
  QuestionsAnswered: number;
  Kzt: number;
}

export class PointLoads {
  PointLoadId: number;
  ProjectId: number;
  BuildingNumber: number;
  BayNumber: number;
  DistFromWall: number;
  DistFromFrame: number;
  Type: string;
  Load: number;
  Description: string;
  UnitLocation: string;
  InsideLength: number;
  InsideWidth: number;
  UnitDimension: number;
  CutPurlins: number;
  UnitLength: number;
  UnitWidth: number;
  UnitHeight: number;
  NumBeams: number;
  BeamByManufacturer: number;
  Number: number;
  IsCopy: number;
  OverlapOverride: number;
  StrAction: string;
  UserId: number;
}

export class CodesLoadsParameter {
  BuildingCode: string;
  DesignCodeId: string;
  Longitude: number;
  Latitude: number;
  IsCanadaValue: number;
  JobsiteState: string;
  JobsiteCity: string;
  JobsiteCounty: string;
}
export class Occupancy {
  OccupancyId: number;
  SortOrder: number;
  OccupancyValue: string;
  BuildingCode: string;
  IsActive: number;
}
export class ThermalFactor {
  ThermalFactorId: number;
  SortOrder: number;
  ThermalFactorValue: string;
  BuildingCode: string;
}

export enum LoadsEnum {
  ID_POINT_LOAD_SECONDARY = "Secondary",
  ID_POINT_LOAD_PRIMARY = "Primary",
  ID_CODE_1998_ASCE7 = "1998 ASCE7",
  ID_CODE_2001_FLORIDA = "2001 Florida",
  ID_CODE_2000_IBC = "IBC-2000",
  ID_CODE_2003_INDIANA = "2003 Indiana",
  ID_CODE_2003_KENTUCKY = "2003 Kentucky",
  ID_CODE_2003_MINNESOTA = "2003 Minnesota",
  ID_CODE_2002_NEWYORK = "2002 New York",
  ID_CODE_2002_NORTHCAROLINA = "2002 North Carolina",
  ID_CODE_2002_OHIO = "2002 Ohio",
  ID_CODE_2002_WISCONSIN = "2002 Wisconsin",
  ID_CODE_2002_ASCE7 = "2002 ASCE7",
  ID_CODE_2004_FLORIDA_06AMD = "2004 Florida with 2006 Amendments",
  ID_CL_BUILDINGCODE_2015_MARYLAND = "MDBC-2015",
  ID_CL_BUILDINGCODE_2012_IBC = "IBC-2012",
  ID_EXPOSURE_B = "B",
  ID_EXPOSURE_C = "C",
  ID_EXPOSURE_D = "D",
  ID_THERMAL_HEATED = 'Heated',
  ID_THERMAL_ALL_OTHERS = 'All Others (Heated)',//ABS-644
  ID_OCCUPANCY_ASCE7_LOW_HAZARD = 'I - Low Hazard',
  ID_OCCUPANCY_IBC2003_NORMAL = 'II - Normal',
  ID_OCCUPANCY_IBC2012_HIGH = 'III - High',
  ID_SUPP_BEAMS_INSIDE = "Inside",
  ID_SUPP_BEAMS_OUTSIDE = "Outside",
  ID_NOT_APPLICABLE = "N/A",
  ID_WALL_A = "A",
  ID_ENDWALL = "Endwall",
  ID_WALL_D = "D",
  ID_SIDEWALL = "Sidewall",
  COUNTRY_CANADA = "Canada"
}
