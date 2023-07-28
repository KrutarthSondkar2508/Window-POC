export class Windows {

  WindowId: number = 0;
  BuildingNumber: number = 0;
  Quantity: number = 0;
  Elevation: string;
  BayNumber: number = 0;
  Type: string;
  SillHeight: number = 0;
  HeaderHeight: number = 0;
  Width: number = 0;
  DistFromLeftCorner: number = 0;
  DistFromLeftCol: number = 0;
  TrimColor: string;
  WindowColor: string;
  SubFraming: number = 0;
  GlassType: string;
  Quality: string;
  IsBuyout: number = 0;
  Weight: number = 0;
  Price: number = 0;
  IsPriced: number = 0;
  ErrorCode: number = 0;
  InsulatedGlass: boolean;
  FrameFinish: string;
  LocatedInLiner: boolean;
  LeftSteelLine: boolean;
  PartitionNumber: number = 0;
  WindowCategory: string;
  InsulationRetainerKit: boolean;
  CWindowRating: boolean;
  WindowSize: string;
  BracedBay: number = 0;
  IpAddress: string = "10.10.10.1";
  ProjectId: number = 0;
  IncludeFramedOpening: boolean;
  IsLocate: boolean;
  UserId: number;
  TrimColorValsparCode: string;
  TrimColorSpecialName: string;
  isDirty: boolean = false;
}

export class WindowsMessages {
  public static readonly windowsAddSuccessMsg: string = 'Windows added successfully.';
  public static readonly windowsUpdateSuccessMsg: string = 'Windows updated successfully.';
  public static readonly buildingIncompleteValidationMsg: string = "This building is not completed, please select another one."

  public static readonly transactionSuccessTitle: string = 'Success';
  public static readonly transactionFailTitle: string = 'Transaction Fail';
  public static readonly transactionFailMsg: string = 'Transaction not completed.';
  public static readonly validationTitle: string = 'Validation Alert!';
  public static readonly requiredFieldMsg: string = 'Please fill required fields.';
  public static readonly WindowsDataErrorTitle: string = 'Please enter a valid Data.';
  public static readonly validBayError: string = "The accessory does not fit in this wall bay. Please select a new bay."
  public static readonly numericOnly: string = "Please enter numeric value.";
  public static readonly validQuantity: string = "Quantity must be between 1 and 999.";
}

export class APIResponse {
  ID: number;
  TransStatus: boolean;
  status: string;
  statusCode: number;
  statusText: string;
  responseContent: any;
}

export enum Category {

  THERMAL_FRAME = "Thermal frame",
  VINYL = "Vinyl",
  NON_THERMAL_FRAME = "Non-Thermal Frame",
  INSUL_VIEW = "Insul View"
}

export class Building{
  ID: number;
  NAME: string;
  ELEVATION: string;
  ISCOMPLETE: string;
  WALLTYPE: string;
}

export enum Type {

  ID_WINDOW_TYPE_HORZ_SLIDE_XO = "Horizontal Sliding (XO)",
  ID_WINDOW_TYPE_FIXED_PICTURE = "Fixed Picture",
  ID_WINDOW_TYPE_FIXED_PROJECT_IN = "Fixed Project-In",
  ID_WINDOW_TYPE_SINGLE_HUNG = "Single Hung Window",
  ID_WINDOW_TYPE_HORZ_SLIDE_XO_SSB = "Horizontal Sliding (XO) - Single Strength B-Grade",
  ID_WINDOW_TYPE_SINGLE_HUNG_SSB = "Side Load, Single Hung - Single Strength B-Grade",
  ID_WINDOW_TYPE_FIXED_DSB = "Fixed Window - Double Strength B- Grade",
  ID_WINDOW_TYPE_HORZ_SLIDE = "Horizontal Slide ",
  ID_WINDOW_TYPE_FIXED = "Fixed",
  ID_WINDOW_TYPE_HORZ_SLIDE_INSUL = "Horizontal Slide ",
  ID_WINDOW_TYPE_FIXED_INSUL = "Fixed"

}

export enum Framecolor {

  ID_WINDOW_COLOR_WHITE = "White",
  ID_WINDOW_COLOR_BRONZE = "Bronze",
  ID_WINDOW_COLOR_MILLFINISH = "Mill Finish"
}

export enum Glasscolor {

  ID_WINDOW_GLASS_TINTED = "Tinted",
  ID_WINDOW_GLASS_CLEAR = "Clear",
  ID_WINDOW_GLASS_LOW_E = "Low E",
  ID_WINDOW_GLASS_CLEAR_INSUL_VINYL = "Clear Insulated",
  ID_WINDOW_GLASS_LOW_E_VINYL = "Low E With Vinyl",
  ID_WINDOW_GLASS_LOW_E_ARGON = "Low E With Argon",
  ID_WINDOW_GLASS_TINT_BRZ_GRY = "Bronze/Grey Tint",
  ID_WINDOW_GLASS_SINGLE_GLAZED = "Single Glazed",
  ID_WINDOW_GLASS_INSULATED = "Insulated",
  ID_WINDOW_GLASS_TINTED_INSUL_VINYL = "Tinted Insulated",
  ID_WINDOW_GLASS_LOW_E_INSULATED = "Low E Insulated",

}

export enum Size {

  ID_WINDOW_SIZE_2070SL = "2070SL",
  ID_WINDOW_SIZE_3030AHS = "3030AHS",
  ID_WINDOW_SIZE_4030AHS = "4030AHS",
  ID_WINDOW_SIZE_4040AHS = "4040AHS",
  ID_WINDOW_SIZE_6030AHS = "6030AHS",
  ID_WINDOW_SIZE_3030 = "3030",
  ID_WINDOW_SIZE_3040 = "3040",
  ID_WINDOW_SIZE_4030 = "4030",
  ID_WINDOW_SIZE_4040 = "4040",
  ID_WINDOW_SIZE_5030 = "5030",
  ID_WINDOW_SIZE_6030 = "6030",
  ID_WINDOW_SIZE_6040 = "6040",
  ID_WINDOW_SIZE_2060 = "2060",
  ID_WINDOW_SIZE_2070 = "2070",
  ID_WINDOW_SIZE_3050 = "3050",
  ID_WINDOW_SIZE_3060 = "3060",
  ID_WINDOW_SIZE_2060T = "2060T",
  ID_WINDOW_SIZE_2070T = "2070T",
  ID_WINDOW_SIZE_5040 = "5040",
  ID_WINDOW_SIZE_1070 = "1070"


}

export class WindowsMaster {
  TYPE: string;
  State: string;
  GAUGE: number;
}

export enum EnumWindows {
  ID_WALL_PANEL_NONE = "None",
  ID_WALL_PANEL_BYOTHERS = "By Others"
}

