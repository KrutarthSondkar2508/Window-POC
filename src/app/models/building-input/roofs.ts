import { Bracing } from "./bracing";
import { Commontabs } from "./buildinginput-common";
import { Color } from "./color";

export interface RoofAPIResponse {
  objResponse: {
    ID: number;
    TransStatus: boolean;
    responseContent: [];
    status: string;
    statusCode: number;
    statusText: any
  };
}

export interface RoofMasterListData {
  Category: string;
  CategoryValue: string;
  SubCategory: string;
  tbl: any;
}
export interface RoofTypeData {
  Category: string;
  ListId: string;
  ListValue: string;
}
export class RoofData extends Commontabs {
  UserId: number;
  IpAddress: string;
  RoofId: number;
  Type: string;
  Width: string;
  ULRating: boolean;
  Thick?: null | string;
  Profile: string;
  Gauge: number;
  InteriorSkinProfile?: null | string;
  InteriorSkinGauge: number;
  InteriorSkinTexture?: null | string;
  IncludeToolKit: number;
  ProvideHandTools: number;
  ColdStorageBuilding: number;
  FactoryAppliedSealant: number;
  FastenerType: string;
  FastenerHeadFinish: string;
  FastenerLength: string;
  Warranty?: null | string;
  WeathertightnessTerm?: null | string;
  HasSnowRetentionSystem: number;
  SnowRetentionRp1: number;
  SnowRetentionRp2: number;
  SnowRetentionRp3: number;
  SnowRetentionRp4: number;
  ThermalBlockType?: null | string;
  FMRating: number;
  EaveIcing: number;
  WideTape: number;
  Clip?: null | string;
  NotByStar?: null | string;
  StructScrews?: null | string;
  StitchScrews?: null | string;
  Material?: null | string;
  ThermalBlock: number;
  MetalRibClosure: number;
  SealedRoof: number;
  RidgePan: number;
  AlignmentStrip: number;
  ULLetter: number;
  EavePanelExtension: number;
  IsBuyout: boolean;
  SquareFeet: number;
  ThermalBlockThickness?: null | string;
  ProvideBlocks: number;
  RoofFirst: number;
  InsulationClips: number;
  Weathertightness: number;
  SealedEave: number;
  ThickInsulation: number;
  RTSSystem: number;
  RTSFinish?: null | string;
  RTSPanelType?: null | string;
  RTSThickness: number;
  RTSSpacing: number;
  RTSPanelGauge: number;
  SeamerRental: number;
  BURLoad: number;
  IMPAccLoads: number;
  StainlessSteelCaps: number;
  NonhandedErection: number;
  Direction: number;
  FastenerVender?: null | string;
  ExteriorSkinTexture?: null | string;
  RoofNavNumber?: null | string;
  WindRating?: null | string
  HASS5CLAMPS: number;
  IMPPlant: number;
  IMPLoads: number;
  IncludeSnowClipPerPanel?: null | number;
  SnowClipQuantity: number;
  ColorStripQuantity?: null | number;
  Rp1SnowLoad: number;
  Rp2SnowLoad: number;
  Rp3SnowLoad: number;
  Rp4SnowLoad: number;
  BuildingInformationId: number;
  ExteriorColor: Color;
  InteriorColor: Color;
  TrimEaveFlash?: null | Color; //Update Trim default color
  TrimGableFlash?: null | Color; //Update Trim default color
  TrimGutters?: null | Color; //Update Trim default color
  FinishWarranty: boolean;
  IsRefreshRoofType: boolean;
  Bracing: Bracing;
  IsModified: boolean;
}
export class PanelThicknessChoice {
  PanelTypeThicknessChoiceId: number;
  DISPLAYTEXT: string;
  Width: number
  Category: string;
  IsWallPanel: number
  IsRoofPanel: number
  SortOrder: number
  IsDefault: number
}
