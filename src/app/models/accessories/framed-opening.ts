export class FramedOpening {
  FramedOpeningId: number;
  ProjectId: number;
  BuildingNumber: number;
  Elevation: string;
  BayNumber: number;
  Material: string;
  Type: string;
  Width: number;
  Height: number;
  DistFromLeftCorner: number;
  DistFromLeftCol: number;
  SillHeight: number;
  HeaderHeight: number;
  HeaderType: string;
  JambType: string;
  CeeDepth: number;
  InsideFlangeWidth: number;
  InsideFlangeThick: number;
  OutsideFlangeWidth: number;
  OutsideFlangeThick: number;
  WebDepth: number;
  WebThick: number;
  DoubleJambs: boolean;
  FourSided: boolean;
  TrimOnly: boolean;
  PanelCredit: boolean;
  Clearance: number;
  Weight: number;
  Price: number;
  IsPriced: boolean;
  ErrorCode: number;
  ClosureTrim: number;
  ClosureTrimSize: number;
  ClosureTrimColor: string;
  DoNotCutGirts: boolean;
  OverheadDoor: boolean;
  Quantity: number;
  PreGalvanizedFraming: boolean;
  FullCoverHeadTrim: boolean;
  DoubleHeader: boolean;
  DoNotCutPanel: boolean;
  LocatedInLiner: boolean;
  LeftSteelLine: boolean;
  PartitionNumber: number;
  ClipAttachment: string;
  ClosureTrimColorValsparCode: string;
  ClosureTrimColorSpecialName: string;
  IpAddress: string;
  ForVerticalLiftDoor: boolean;
  RequireFlanges: boolean;
  isDirty: boolean = false;
  BracingBay: number;
}

export class APIResponse {
  ID: number = 0;
  TransStatus: boolean;
  status: string;
  statusCode: number = 0;
  statusText: string;
  responseContent: any;
}

export class FramedOpeningMessages {
  public static readonly transactionSuccessTitle: string = 'Success!';
  public static readonly framedOpeningAddSuccessMsg: string = 'Framed Opening added successfully.';
  public static readonly framedOpeningUpdateSuccessMsg: string = 'Framed Opening updated successfully.';
  public static readonly framedOpeningCopySuccessMsg: string = 'Framed Opening copied successfully.';
  public static readonly transactionFailTitle: string = 'Transaction Fail!';
  public static readonly transactionFailMsg: string = 'Transaction not completed.';
  public static readonly validationTitle: string = 'Validation Alert!';
  public static readonly requiredFieldMsg: string = 'Please fill required fields.';

  public static readonly validQuantity: string = "Quantity must be between 1 and 999.";
  public static readonly validWidth: string = "Please enter a valid width.";
  public static readonly validHeight: string = "Please enter a valid height.";
  public static readonly numericOnly: string = "Please enter numeric value.";
  public static readonly validBay: string = "Please select a Bay.";
  public static readonly validFeetValue: string = "Please enter a valid value.";
  public static readonly validBayError: string =  "The accessory does not fit in this wall bay. Please select a new bay."
}

export enum EnumFramedOpening {
  ID_FO_CLIPS_WELDED = "Welded",
  ID_FO_CLIPS_BOLTED = "Bolted",
  ID_WALL_PANEL_NONE = "None",
  ID_WALL_PANEL_BYOTHERS = "By Others"
}

export class Building {
  Id: number;
  Name: string;
  Elevation: string;
  IsComplete: string;
}
