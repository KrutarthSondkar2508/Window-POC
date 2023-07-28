export class Louvers {
  LouverId: number = 0; 
  Category: string;
  Accessory: string;
  ProjectId: number = 0; 
  BuildingId: number = 0; 
  Quantity: number = 0; 
  Elevation: string;
  BayNumber: number = 0; 
  SillHeight: number = 0;
  HeaderHeight: number = 0; 
  Width: number = 0; 
  DistFromLeftCorner: number = 0; 
  DistFromLeftCol: number = 0; 
  TrimColor: string;
  LouverColor: string;
  SubFraming: number = 0; 
  Type: string;
  LouverSize: string;
  LocatedInLiner: boolean;
  IncludeFramedOpening: boolean;
  RunOfLouvers: boolean;
  PartitionNumber: number = 0; 
  BracedBay: number = 0; 
  LouverColorValsparCode: string;
  LouverColorSpecialName: string;
  TrimColorValsparCode: string;
  TrimColorSpecialName: string;
  IpAddress: string = "10.10.10.1";
  isDirty: boolean = false;
}

export class Building {
  ID: number; 
  NAME: string;
  ELEVATION: string;
  ISCOMPLETE: string;
}

export enum ELouvers {
  ID_WALL_PANEL_NONE = "None",      
  ID_WALL_PANEL_PBRREVERSE = "PBR (reverse)",
  ID_WALL_PANEL_PBR = "PBR",
  ID_WALL_PANEL_AVP = "AVP",
  ID_WALL_PANEL_PBU = "PBU",
  ID_WALL_PANEL_SHADOWRIB = "ShadowRib",
  ID_WALL_PANEL_STRIATED = "Striated",
  ID_WALL_PANEL_MESA = "Mesa",
  ID_WALL_PANEL_LTMESA = "Lt.Mesa",
  ID_WALL_PANEL_FLUTED = "Fluted",
  ID_WALL_PANEL_ARCHFLAT = "Arch.Flat",
  ID_WALL_PANEL_LS36 = "LS - 36",
  ID_WALL_PANEL_SANTAFE = "Santa Fe",
  ID_WALL_PANEL_THERMALSAFE = "ThermalSafe",
  ID_WALL_PANEL_TUFFCAST = "Tuff - Cast",
  ID_WALL_PANEL_TUFFWALL = "Tuff Wall",
  ID_WALL_PANEL_72INSULRIB = "7.2 Insul - Rib",
  ID_WALL_PANEL_BYOTHERS = "By Others",
  ID_ACCESSORY_SIZE_2X2 = "2' x 2'",
  ID_ACCESSORY_SIZE_3X2 = "3' x 2'",
  ID_ACCESSORY_SIZE_3X3 = "3' x 3'",
  ID_ACCESSORY_SIZE_4X3 = "4' x 3'",
  ID_ACCESSORY_SIZE_3X4 = "3' x 4'",
  ID_ACCESSORY_SIZE_3X5 = "3' x 5'",
  ID_ACCESSORY_SIZE_4X4 = "4' x 4'",
  ID_ACCESSORY_SIZE_5X4 = "5' x 4'",
  ID_FLORIDA = "Florida",
  ID_FIXED = "Fixed"
}

export class LouversMessages {
  public static readonly louversAddSuccessMsg: string = 'Louvers added successfully.';
  public static readonly louversUpdateSuccessMsg: string = 'Louvers updated successfully.';
  public static readonly louversCopySuccessMsg: string = 'Louvers copied successfully.';

  public static readonly transactionSuccessTitle: string = 'Success';
  public static readonly transactionFailTitle: string = 'Transaction Fail';
  public static readonly transactionFailMsg: string = 'Transaction not completed.';
  public static readonly validationTitle: string = 'Validation Alert!';
  public static readonly requiredFieldMsg: string = 'Please fill required fields.';

  public static readonly louverColor: string = "S200 Polar White";
  public static readonly wallPanelTypeNone: string = "Wall accessories are not allowed on buildings with None specified for the wall panels.";
  public static readonly wallPanelTypeByOthers: string = "Wall accessories (except for Framed Openings) are not allowed on buildings with By Others specified for the wall panels.";
  public static readonly validQuantity: string = "Quantity must be between 1 and 999.";
  public static readonly validBay: string = "Please select a Bay.";
  public static readonly validFeetValue: string = "Please enter a valid value.";
  public static readonly validMinMaxValue: string = "Distance must be greater than or equal to the minimum and lower than or equal to the maximum.";
  public static readonly validDistanceFromLeftColumnValue: string = "Distance From Left Column Value must be greater than or equal to the minimum and lower than or equal to the maximum.";// PMS Bug: SS011-16952 --Accessories Input - Wall (Validation For message)
  public static readonly validDistanceFromFloorValue: string = "Distance from Floor is out of range.";// PMS Bug: SS011-16952 --Accessories Input - Wall (Validation For message)
  public static readonly validateLocate: string = "Please fill all locate.";
  public static readonly numericOnly: string = "Please enter numeric value.";
}

export class APIResponse {
  ID: number = 0; 
  TransStatus: boolean;
  status: string;
  statusCode: number = 0; 
  statusText: string;
  responseContent: any;
}

export class LouversMaster {
  TYPE: string;
  State: string;
  GAUGE: number;
}

export class Size {
  LouverSize: string;
  LouverImage: string;
}
