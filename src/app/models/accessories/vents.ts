export class Vents {
  VentsId: number;
  BuildingId: number;
  ProjectId: number;
  Quantity: number = 0;
  RoofVent: string='';
  Elevation: string='';
  BayNumber: number=0;
  Color: string='';
  Size: string='';
  Operator: string='';
  OperatorWithCable: string ='';
  Surface: string='';
  ExtensionPackage: boolean;
  TrimCollar: boolean;
  DistFromLeftCorner: number=0;
  DistFromLeftCol: number=0;
  DistFromLeftWall: number=0;
  Damper: number=1;
  IpAddress: string='';
  Locate: number = 1;
  UserId: number;
  isDirty: boolean = false;
}

export enum EVents {
  ID_ROOF_PANEL_PBR = "PBR",
  ID_ROOF_PANEL_CFR42 = "CFR",
  ID_ROOF_PANEL_LS36 = "LS-36",
  ID_FRAME_TYPE_SINGLE_SLOPE = "Single Slope",
  ID_FRAME_TYPE_LEANTO = "Lean-to",
  ID_PROJECT_INFORMATION_TYPE = "ForPricingOrder",
  ID_ROOF_TYPE_MONOVENT = "Monovent",
  ID_ROOF_TYPE_UNIVENT = "Univent",
  ID_ROOF_TYPE_COLOR = "Color",
  ID_ROOF_TYPE_OPERATOR = "Operator",
  ID_ROOF_TYPE_SURFACE = "Surface",
  ID_ROOF_TYPE_OPERATOR_SINGLE = 'Single Vent',
  ID_ROOF_TYPE_OPERATOR_MULTIPLE = 'Multiple Vent'
}

export class VentsMessages {
  public static readonly ventsAddSuccessMsg: string = 'vents added successfully.';
  public static readonly ventsTitleMsg: string = 'Roof Vent';
  public static readonly ventsUpdateSuccessMsg: string = 'vents updated successfully.';
  public static readonly ventsCopySuccessMsg: string = 'vents copied successfully.';

  public static readonly transactionSuccessTitle: string = 'Success';
  public static readonly transactionFailTitle: string = 'Transaction Fail';
  public static readonly transactionFailMsg: string = 'Transaction not completed.';
  public static readonly validationTitle: string = 'Validation Alert!';
  public static readonly requiredFieldMsg: string = 'Please fill required fields.';
  public static readonly requiredRoofVent: string = 'Please select Roof Vent  field.';

  public static readonly univentsFrametypeValidationMsg: string = "Univents cannot be placed in Single Slope or LeanTo building."
  public static readonly univentsRooftypeValidationMsg: string = "Cannot place Univents with CFR Roof Panels."
  public static readonly buildingIncompleteValidationMsg: string = "This building is not completed, please select another one."
  public static readonly validBayError: string = "The accessory does not fit in this wall bay. Please select a new bay."
}
