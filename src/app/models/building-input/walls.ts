import { Bracing } from "./bracing";
import { Commontabs } from "./buildinginput-common";
import { Color } from "./color";

export class Walls extends Commontabs {
  WallId: number;
  BuildingInformationId: number;
  Type: number;
  TypeName: string;
  Gauge: number;
  Thick: number;
  BaseFraming: number;
  BaseFramingName: string;
  BaseFlash: number;
  BaseFlashName: string;
  BaseClosure: number;
  SealedWall: boolean;
  Washers: boolean;
  Notch: boolean;
  RakeClosure: boolean;
  EaveClosureStrip: boolean;
  FastenerType: number;
  FastenerHeadFinish: number;
  FastenerLength: number;
  Warranty: boolean;
  FactoryAppliedSealant: number;
  ReverseRolled: boolean;
  OutsideMetalClosure: boolean;
  SidelapSealant: boolean;
  FoamTape: boolean;
  ColdStorageBuilding: boolean;
  ExteriorSkinProfile: number;
  ExteriorSkinTexture: number;
  InteriorSkinProfile: number;
  InteriorSkinTexture: number;
  InteriorSkinGauge: number;
  Width: number;
  RValue: number;
  UValue: number;
  NotchWidth: number;
  NotchDepth: number;
  NotchType: number;
  PanelImage: string;
  TrimImage: string;
  UserId: number;
  ExteriorColor: Color;
  InteriorColor: Color;
  TrimCornerFlash?: null | Color; //Update Trim default color
  TrimBaseFlash?: null | Color; //Update Trim default color
  TrimDownspouts?: null | Color; //Update Trim default color
  //fields Added for Trim
  GaugeValue: number;
  IsRefreshWallType: boolean;
  Bracing: Bracing;
  IsModified: boolean;
}

export class CommonProp {
  Id: number;
  Value: string;
  Image: string;
  NotchAlt: string;
}

export class DropDown extends CommonProp {
  PanelTypeId: number;
  Image: string;
  Rvalue: number;
  Uvalue: number;
  MappingId: number;
  IsDefaultSelected: boolean;
}

export class PanelType extends CommonProp {
  ExteriorColor: string;
  ExteriorColorText: string;
  ExteriorColorCode: string;
  ExteriorHashColorCode: string;
  InteriorColor: string;
  InteriorColorText: string;
  InteriorColorCode: string;
  InteriorHashColorCode: string;
  IsDisable_Warranty: string;
  IsHide_ColdStorageBuilding: string;
  IsDisable_ReverseRolled: string;
  IsDisable_SealedWall: string;
  IsDisable_EaveClosureStrip: string;
  IsCheck_EaveClosureStrip: string;
  IsHide_RakeClosure: string;
  IsDisable_RakeClosure: string;
  IsCheck_RakeClosure: string;
  IsHide_FoamTape: string;
  IsCheck_SealedWall: string;
  IsDisable_Notch: string;
  IsCheck_Notch: string;
  IsDisable_Std: string;
  IsCheck_Std: string;
  IsHide_Alt: string;
  IsDisable_Alt: string;
  IsDisable_OutsideMetalClosure: string;
  IsHide_SidelapSealant: string;
  IsCheck_SidelapSealant: string;
  IsHideRUValue: string;
}

export enum WallPanel {
  ID_WALL_PANEL_TUFFCAST = 'Tuff-Cast',
  ID_WALL_PANEL_TUFFWALL = 'Tuff Wall',
  ID_WALL_PANEL_BASE_FRAMING_F73_FORMED_BASE_TRIM = 'F73 Formed Base Trim',
  ID_WALL_PANEL_SHADOWRIB = 'ShadowRib',
  ID_WALL_PANEL_PBU = 'PBU',
  ID_WALL_PANEL_AVP = 'AVP',
  ID_WALL_PANEL_PBR = 'PBR',
  ID_WALL_PANEL_BYOTHERS = 'By Others',
  ID_WALL_PANEL_NONE = 'None',

  ID_WALL_PANEL_CF42_STRIATED = "Striated",
  ID_WALL_PANEL_MESA = "Mesa",
  ID_WALL_PANEL_CF42_FLUTED = "Fluted",
  ID_WALL_PANEL_LS_36 = "LS-36"	,
  ID_WALL_PANEL_CF36A_ARCH_FLAT = "Arch. Flat",
  ID_WALL_PANEL_CF42_SANTA_FE = "Santa Fe",
  ID_WALL_PANEL_LT_MESA = "Lt. Mesa",
  ID_WALL_PANEL_72_INSUL_RIB = "7.2 Insul-Rib",
  ID_WALL_PANEL_THERMALSAFE = "ThermalSafe",
  ID_COLOR_SPECIAL_KEY = "Special",

  ID_KSI_50 = 'KSI - 50',
  ID_KSI_80 = 'KSI - 80',
}

export enum Notch {
  NOTCH_STD_WIDTH = 1.5,
  NOTCH_STD_DEPTH = 1.5,
  NOTCH_ALT_WIDTH = 0.5,
  NOTCH_ALT_DEPTH = 1.5,
  NOTCH_MAP_WIDTH = 2.0,
  NOTCH_MAP_DEPTH = 1.5
}

export enum FASTEN_HEAD_FINISH {
  ID_FASTEN_HEAD_STANDARD = "Standard",
  ID_FASTEN_HEAD_LONGLIFE = "Long-Life",
  ID_FASTEN_HEAD_SS_CAP = "Stainless Steel Cap",
  ID_FASTEN_HEAD_STAINLESS = "Stainless"
}











