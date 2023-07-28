export enum LoadTypes {
  Wind = 2000,
  Snow = 1000,
  Rain_Load = 3500,
  Rain_Intensity = 3000,
  Seismic = 4000
}
export class BuildingOccupancy {
  Name: string;
  OccupancyGuid: string;
  IsAvailableForCanada: boolean;
  IsDefault: boolean;
}
export class DesignFieldMaxLimit {
  UltimateWindSpeedMax: string;
  RoofLiveLoadMax: string;
  GroundSnowMax: string;
  MinimumRoofSnowLoadMax: string;
  RainIntensityMax: string;
  SpectralResponseSsMax: string;
  SpectralResponseS1Max: string;
  PercentageOfSnowLoadMax: string;
  WindLoadMax: string;
  RainLoadMax: string;
  SeismicSa0Point2Max: string;
  SeismicSa0Point5Max: string;
  SeismicSa2Point0Max: string;
  SeismicSa1Point0Max: string;
}
export interface DesignRoot {
  Latitude: number;
  Longitude: number;
  Elevation: number;
  BuildingDesignCodes: BuildingDesignCode[];
}
export interface BuildingDesignCode {
  Designation: string;
  DesignCodeId: number;
  Code: string;
  Description: string;
  Edition: string;
  IsCanadaBased: boolean;
  IsIBC2012Based: boolean;
  USGSRefDesignCodeId: number;
  BuildingLoads: BuildingLoad[];
}
export interface BuildingLoad {
  LoadTypeName: string;
  LoadTypeId: number;
  LoadValueGuid: string;
  IsValueUnknown: boolean;
  IsImperial: boolean;
  Value01: number;
  Value02: number;
  Value03: number;
  Value04: number;
  Elevation01: number;
  Elevation02: number;
  Elevation03: number;
  Elevation04: number;
  RefDesignCodeId: number;
}
export class MinMaxLimit
{
  SectionText: string;
  Min: number;
  Max: number;
}
export interface IDesignFieldLimit {
  min: string;
  max: string;
}
