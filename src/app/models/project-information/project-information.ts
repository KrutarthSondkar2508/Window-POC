import { Shipping } from "./shipping";
import { Owner } from "./owner";
import { Buyer } from "./buyer";
import { Payment } from "./payment";
export class ProjectInformation {
  ProjectId: number;
  ProjectName: string;
  ProjectStatusId: number;
  RiskCategoryId: number;
  ProjectUseId: number;
  MaterialOriginId: number;
  CityLimit: string;
  InternationalJobsite: boolean = false;
  LocationName: string;
  Address1: string;
  Address2: string;
  City: string;
  Region: string;
  State: string;
  ZipPostalCode: string;
  Country: string;
  QuoteRequestDate: string;
  PriceStatus: string;
  Latitude: string;
  Longitude: string;
  DesignCodeId: number;
  DesignCodeName: string;
  ProjectUseCategoryId: number;
  WindSpeed: number;
  WindExposureId: number;
  IsHurricaneCoastline: boolean;
  LiveLoad: number;
  IsLiveLoadReductionAllowed: boolean;
  GroundSnow: number;
  SnowExposureId: number;
  MinimumSnowLoad: number;
  Elevation: number;
  RainIntensity: number;
  SustainablilityGoalId: number;
  IsClimateControlled: boolean;
  EnergyEfficiencyId: number;
  IsAirInfiltrationRequired: boolean;
  SeismicSa: number;
  SeismicS1: number;
  SeismicSnowLoad: string;
  SeismicSnowPercentage: number;
  SiteClassId: number;
  InputDimensional: string;
  InputEngineering: string;
  OutputDimensional: string;
  OutputEngineering: string;
  CurrencyDimensional: string;
  CustomerNo: string;
  CustomerName: string;
  IsCanadaBasedDesignCode: boolean;
  IsDesignCodeIbc2012Based: boolean;
  RainLoad: number;
  SeismicSa1Dot0: number;
  SeismicSa2Dot0: number;
  WindLoad: number;
  IsUserDefinedSustainability: boolean;
  UserDefinedSustainability: number;
  SiteClass: string;
  CompanyId: number;
  CBBInquiryNumber: string;
  MinAnchorRodDiameter: string;
  TDIRequired: string;
  UsingSystemGeneratedRodPlan: boolean;
  EnteredBy: string;
  UserRoleId: number;
  EnforceSignatureRule: boolean;
  ProjectBuildingType: string;
  PGASeismic: number;
  IsOverrideSeismicSa: boolean = false;
  IsOverrideSeismicS1: boolean = false;
  IsOverrideSeismicSa1Dot0: boolean = false;
  IsOverrideSeismicSa2Dot0: boolean = false;
  IsOverrideWindSpeed: boolean = false;
  IsOverrideWindLoad: boolean = false;
  IsOverrideLiveLoad: boolean = false;
  IsOverrideGroundSnow: boolean = false;
  IsOverrideRainIntensity: boolean = false;
  IsOverrideRainLoad: boolean = false;
  IsOverridePGASeismic: boolean = false;
  Shipping: Shipping;
  Owner: Owner;
  Buyer: Buyer;
  Payment: Payment;
  ProjectStage: string;
  UserType: string;
  WindLoadType: string;
  CanadaCounty: string;
  CanadaCity: string;
  PricingVersion: string;
  IsSeismicForSchools: boolean;
  IsModified: boolean;
  IsPriceReset: boolean;
  CreatedDate: string;
  ExpiryDate: string;
  UserId: string;
  DMUserId: string;
  ShippingPointId: number;
  ShippingPointMileage: number;
  DMEmployeeNumber: number; 
  IsSentToDM: boolean;
  IsSentToEstimator: boolean;
  ShippingLatitude: string;
  ShippingLongitude: string;
  IsShippingCopyFlag: boolean;
}

export class WindExposure {
  WindExposureId: number;
  Name: string;
  SortOrder: number;
  IsDefault: boolean;
  ExposureFactor: number;
}

export class SnowExposure {
  SnowExposureId: number;
  SortOrder: number;
  IsDefault: boolean;
  Name: string;
}

export class SiteClass {
  SiteClassId: number;
  SortOrder: number;
  IsDefault: boolean;
  Name: string;
}

export class RiskCategory {
  RiskCategoryId: number;
  Name: string;
  SortOrder: number;
  IsDefault: boolean;
}

export class BuildingLoad {
  Elevation01: number;
  Elevation02: number;
  Elevation03: number;
  Elevation04: number;
  IsImperial: boolean;
  IsValueUnknown: boolean;
  LoadTypeId: number;
  LoadTypeName: number;
  LoadValueId: number;
  RefDesignCodeId: number;
  Value01: number;
  Value02: number;
  Value03: number;
  Value04: number;
}

export class BuildingDesignCode {
  BuildingLoads: BuildingLoad[];
  //Code: string;
  Description: string;
  DesignCodeId: number;
  Designation: string;
  //Edition: string;
  IsCanadaBased: boolean;
  IsIBC2012Based: boolean;
  USGSRefDesignCodeId: number;
  EDSStandAlone: string;
  BuildingCodeDesc: string;
  IsSnowExposure: boolean;
  IsHawaiiAlaskaDataFound: boolean;
  IsSoilType: boolean;
}

export class Customer {
  CustomerNo: string;
  CustomerName: string;
}
export class MapLocation {
  AddressId: number;
  Address1: string;
  Address2: string;
  City: string;
  Region: string;
  State: string;
  Zipcode: string;
  Country: string;
  Latitude: string;
  Longitude: string;
  County: string;
  CopyFlag: boolean;
}

export class ProjectStatusData {
  ProjectId: number;
  ColumnName: string;
  Status: string;
  RejectReason: string;
}

export class BuildingCodesElevation {
  DesignCodeId: string;
  Elevation: number;
  IsSeaLevelElevation: boolean;
  WindLoad2: number;
  ValidWindLoad: boolean;
  MinRoofSnowLoad: number;
  IsMinRoofSnowLoad: boolean;
}

export class CanadaCodeLoadDetails {
  LiveLoad: number;
  GroundSnowLoad: number;
  RainLoad: number;
  SpectralResponseSs: number;
  SpectralResponseSh: number;
  SpectralResponseS1: number;
  SpectralResponseS2: number;
  RainIntensity: number;
  WindLoad: number;
  PGASeismic: number;
}

export class County {
  State: string;
  CountyName: string;
}
