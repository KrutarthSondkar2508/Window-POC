import { Commontabs } from "./buildinginput-common";
import { Color } from "./color";


export class Trim extends Commontabs{
  TrimOption: TrimOption;
  ColorOption: ColorSelection;
  UserId: number;
}

export class TrimOption{
  TrimId: number;
  BuildingNumber: number;
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
  SW1Drops: number;
  SW2Drops: number;
  EW3Drops: number;
  EW4Drops: number;
  SW1DropHeight: number;
  SW2DropHeight: number;
  EW3DropHeight: number;
  EW4DropHeight: number;
  IsSW1MatchEavaHeight: number;
  IsSW2MatchEavaHeight: number;
  IsEW3MatchEavaHeight: number;
  IsEW4MatchEavaHeight: number;
  AdditionalGutterSupports: number;
  TrimProfile: string;
  GroundSnow: number;
  ParentEaveHeight1: number;
  ParentEaveHeight2: number;
  ParentElevationType: string;
  AttachmentElevation: string;
  SW1GutterDesignSize: number;
  SW2GutterDesignSize: number;
  EW3GutterDesignSize: number;
  EW4GutterDesignSize: number;
  CanopyData: ListCanopyUpdate;
  IsModified: boolean;
}

export class ListCanopyUpdate {
  lstCanopyUpdate: CanopyUpdate[];
}

export class CanopyUpdate {
  AccessoriesCanopyId: number = 0;
  BuildingNumber: number = 0;
  GutterColor: string = "";
  GutterColorValsparText: string = "";
  GutterColorSpecialName: string = "";
  GutterColorValsparCode: string = "";
  GutterColorValsparHashCode: string = "";
  DownspoutColor: string = "";
  DownspoutColorValsparText: string = "";
  DownspoutColorSpecialName: string = "";
  DownspoutColorValsparCode: string = "";
  DownspoutColorValsparHashCode: string = "";
  GutterType: number = 0;
  GutterSize: number = 0;
  DownspoutDrops: number = 0;
  AtEave: number = 0;
  IncludeElbow: string = "";
  Gutter: string = "";
  ReturnDownspout: number = 0;
  ModifiedBy: number = 0;
  ModifiedDate: string = "";
}

export class ColorSelection {

  constructor() {
    this.EaveFlash = new Color();
    this.GableFlash = new Color();
    this.CornerFlash = new Color();
    this.BaseFlash = new Color();
    this.Gutters = new Color();
    this.Downspouts = new Color();
    this.AllOtherFlash = new Color();
    this.RoofToRoof = new Color();
    this.RoofToWall = new Color();
    this.WalkDoors = new Color();
  }

  TrimColorSelectionId: number;
  BuildingNumber: number;
  EaveFlash: Color;
  GableFlash: Color;
  CornerFlash: Color;
  BaseFlash: Color;
  Gutters: Color;
  Downspouts: Color;
  AllOtherFlash: Color;
  RoofToRoof: Color;
  RoofToWall: Color;
  WalkDoors: Color;
  RoofGuarantee: string;
  WallGuarantee: string;
  PerforationGuarantee: number = 0;

  AllTrimSameColor: number;
}

export enum TrimProfile {
  Edgecraft = 'Edgecraft',
  Sculptured = 'Sculptured'
}

export enum TrimProfileImage {
  Edgecraft = '../../../assets/img/add-building-info/trim_profile_edgecraft.png',
  Classic = '../../../assets/img/add-building-info/trim_profile_classic.PNG',
  ClassicLarge = '../../../assets/img/add-building-info/trim_classic_std_large.png',
  ClassicStandard = '../../../assets/img/add-building-info/trim_classic_std_std.png',
  NorthenStandard = '../../../assets/img/add-building-info/trim_classic_northern_std.png',
  NorthenLarge = '../../../assets/img/add-building-info/trim_classic_northern_large.png',
  Sculptured = '../../../assets/img/add-building-info/trim_profile_sculptured.png',
}

export class TrimTypeModel {
  id: string;
  name: string;
  isDisabled: boolean;
}

export enum TrimType {
  GUTTER_DOWNSPOUTS = "Gutters and Downspouts",
  BOX_EAVE_TRIM = "Box Eave Trim",
  FLAT_EAVE_TRIM = "Flat Eave Trim",
  DF_METAL_TRIM = "Die-Formed Metal Eave Closure",
  RAKE = "Rake Trim",
  ROOF_TO_ROOF = "Roof to Roof Tie-in Trim",
  // ROOF_TO_WALL = "Roof to Wall Tie -in -Trim", //	SS011-20988
  ROOF_TO_WALL = "Roof to Wall Tie-in Trim",
  NO_TRIM = "No Trim"
}

export enum EndWallTrimType {
  RAKE = "Rake Trim",
  ROOF_TO_ROOF = "Roof to Roof Tie-in Trim",
  // ROOF_TO_WALL = "Roof to Wall Tie -in -Trim", //	SS011-20988
  ROOF_TO_WALL = "Roof to Wall Tie-in Trim",
  NO_TRIM = "No Trim"
}



export enum RoofType {
  PBR = "PBR",
  LS_36 = "LS-36",
  CFR = "CFR",
  BYOTHERS = "By Others",
  NOT_BY_MANUFACTURER = "Not by Manufacturer",
  NONE = "None"
}




export enum WallType {
  PBR = "PBR",
  Striated = "Striated",
  Mesa = "Mesa",
  Fluted = "Fluted",
  LS_36 = "LS-36",
  Arch_Flat = "Arch. Flat",
  Santa_Fe = "Santa Fe",
  Lt_Mesa = "Lt. Mesa",
  INSUL_RIB_72 = "7.2 Insul-Rib",
  THERMALSAFE = "ThermalSafe",
  TUFFCAST = "Tuff-Cast",
  TUFFWALL = "Tuff Wall",
  BYOTHERS = "By Others",
  NONE = "None"
}


export enum BaseFlash {
  WALL_PANEL_BASE_FLASH_NONE = "None"
}

export enum BaseFraming {
  WALL_PANEL_BASE_FRAMING_F73_FORMED_BASE_TRIM = "F73 Formed Base Trim",
  WALL_PANEL_BASE_FRAMING_EXTRUDED_ALUMINUM_BASE = "Extruded Aluminum Base Edge"
}

export class CAD_Landscape {
  x_coordinate: number;
  y_coordinate: number;
  z_coordinate: number;
  screen_size: number;
  rotation: number;
}
