export class Walkdoors {

  WalkDoorId: number = 0;
  ProjectId: number = 0;
  BuildingId: number = 0;
  Quantity: number = 0;
  Elevation: string;
  BayNumber: number = 0;
  Type: string;
  HeaderHeight: number = 0;
  Width: number = 0;
  DistFromLeftCorner: number = 0;
  DistFromLeftCol: number = 0;
  TrimColor: string;
  DoorColor: string;
  SwingDirection: string;
  LatchGuard: boolean;
  SubFraming: boolean;
  Skin: string;
  Lite: string;
  Closer: string;
  LockType: string;
  Quality: string;
  LeafType: string;
  StyleSet: string;
  IsBuyout: boolean;
  weight: number = 0;
  price: number = 0;
  IsPriced: boolean;
  ErrorCode: number = 0;
  KnockDown: number = 0;
  Style: string;
  WindRated: string;
  Size: string;
  KeyedAlike: boolean;
  PanicHardware: boolean;
  ChainStop: boolean;
  Insulated: boolean;
  FloridaApproval: number = 0;
  LocatedInLiner: boolean;
  Glazing: string;
  KickPlate: boolean;
  LeftSteelLine: boolean;
  PartitionNumber: number = 0;
  LocateRightSideBay: boolean;
  DistanceFromFloor: number = 0;
  DadeBrowardApproved: boolean;
  SsbHinges: boolean;
  AddAnchors: number = 0;
  LeafInsulated: boolean;
  LeafsBothActive: number = 0;
  Alabel3hour: boolean;
  AdaCompliant: boolean;
  AdditionalAnchorsQty: number = 0;
  TrimColorValsparCode: string;
  TrimColorSpecialName: string;
  Gauge: number = 0;
  FireRated: boolean;
  InterChangeableLockKit: boolean;
  ExistingOpeningMasonryAnchor: boolean;
  InActiveLeaf: boolean;
  WireMasonryAnchor: boolean;
  Masonry: boolean;
  AnodizedFrame: string;
  DoorGlass: string;
  Glass: string;
  Closure: string;
  MasonaryApplication: boolean;
  BottomRail: boolean;
  IsLocate: boolean;
  LocateLeftSideBay: boolean;
  IpAddress: string = "10.10.10.1";
  isDirty: boolean = false;
}

export class WalkDoorsMessages {
  public static readonly walkdoorsAddSuccessMsg: string = 'Walkdoors added successfully.';
  public static readonly walkdoorsUpdateSuccessMsg: string = 'Walkdoors updated successfully.';
  public static readonly buildingIncompleteValidationMsg: string = "This building is not completed, please select another one."

  public static readonly transactionSuccessTitle: string = 'Success';
  public static readonly transactionFailTitle: string = 'Transaction Fail';
  public static readonly transactionFailMsg: string = 'Transaction not completed.';
  public static readonly validationTitle: string = 'Validation Alert!';
  public static readonly requiredFieldMsg: string = 'Please fill required fields.';
  public static readonly walkdoorsDataErrorTitle: string = 'Please enter a valid Data.';
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



export enum Type {

  ID_WALKDOOR_TYPE_KNOCK_DOWN_DOOR = "Knock Down",
  ID_WALKDOOR_TYPE_GLASS_FRONT_DOOR = "Glass Front",
  ID_WALKDOOR_TYPE_PRE_ASSEMBLED_DOOR = "Pre-Assembled",

}

export enum EnumWalkDoor {
  ID_WALL_PANEL_NONE = "None",
  ID_WALL_PANEL_BYOTHERS = "By Others"
}

export class WalkDoorMaster {
 
  TYPE: string;
  State: string;
  GAUGE: number;
}

export class ProjectInformation {
  ProjectId: number;
  ProjectName: string;
  Address1: string;
  Address2: string;
  State: string;
  Country: string;
}

export enum GlaseFrontSize {

  ID_WALKDOOR_SIZE_3070 = "3070 Glass-Front",
  ID_WALKDOOR_SIZE_6070 = "6070 Glass-Front",
}

export enum WalkDoorPainted {
  ID_WALKDOOR_PAINTED_WHITE = "White",
}
export enum WalkDoorGlassLockSet {
  ID_WALKDOOR_GLASS_LOCKSET_DEFAULT = "Mortise Lock Cylinder Push/Pull Hardware",
}

export enum WalkDoorLockSet {
  ID_WALKDOOR_LOCKSET_GRADE_1 = "Cylindrical Lever Lock (Grade 1)",
  ID_WALKDOOR_LOCKSET_CYLINDRICAL = "Grade 1 Cylindrical Lever Lock w/Panic Exit Bar",
  ID_WALKDOOR_LOCKSET_FIRE_RATED = "Fire Rated Grade 1 Cylindrical Lever Lock w/Panic Exit Bar",
  ID_WALKDOOR_LOCKSET_EXIT = "Exit Only Device",
}

export enum WalkDoorKnockDownLiteKit {
  ID_WALKDOOR_KNOCKDOWN_LITEKIT_DEFAULT = "M- Solid",
}


export enum Size {

  ID_WALKDOOR_SIZE_3070 = "3070",
  ID_WALKDOOR_SIZE_4070 = "4070",
  ID_WALKDOOR_SIZE_6070 = "6070",
}

