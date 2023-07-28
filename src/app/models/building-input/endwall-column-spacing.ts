import { Commontabs } from "./buildinginput-common";
import { TempOpenAreas } from "./open-areas";

export class ListEndwallColumnSpacing extends Commontabs {
  BuildingNo: number;
  ProjectId: number;
  ElevationType: string;
  lstEndWall: Endwall[];
}

export class ListEndwall {
  lstEndWall: Endwall[];
}

export class Endwall extends Commontabs {
  EndWallID: number;
  BuildingNo: number;
  ProjectId: number;
  EndWallNo: number;
  FrameType: string;
  InsulationTrim: boolean;
  NonStandardSetback: boolean;
  DesignedSetback: number;
  SpecifiedSetback: string;
  ColumnSpacingType: string;
  ElevationType: string;
  BayCount: number;
  isRecessDisable: any;
  GableFlash: number;
  lstEndWallColumnSpacing: ColumnSpacing[];
  lstEndWallRecesses: Recesses[];
  lstColumnSpacingOptions: TempOpenAreas;
  UserId: number;
  IsModified: boolean;
  BuildingLength: number;
  AttachmentOffset: number;
  XCoordinate: number;
  YCoordinate: number;
}
export class ColumnSpacing {
  CSID: number;
  EndWallID: number;
  BuildingNo: number;
  EndWallNo: number;
  BayNo: number;
  BaySpacing: string;
  isClearSpaceDisabled: any;
  Elevation: string;
}

export class Recesses {
  EWRID: number;
  EndWallID: number;
  BuildingNo: number;
  EndWallNo: number;
  RecessNo: number;
  Recesses: string;
  isDisabled: any;
  IsFrameColumn: number;
}

export interface EnumColumnSpacingType {
  key: string,
  value: string
}

export const enumColumnSpacingType: EnumColumnSpacingType[] = [
  { key: "Standard", value: "Standard" },
  { key: "Custom", value: "Custom" },
  { key: "Open", value: "Open" }
]

export enum ColumnSpacingTypeEnum {
  Standard = "Standard",
  Custom = "Custom",
  Open = "Open"
}

export enum ColumnSpacingEnum {
  ID_WALL_A = "A",
  ID_WALL_B = "B",
  ID_WALL_C = "C",
  ID_WALL_D = "D",
  ID_ENDWALL = "E",
  ID_SIDEWALL = "S",
  Lbl_text = "4@22.5, 4@22.5', 4@22'6, 4@22-6, 4@22'-6, 4@22'-6\", 4@22-4.75, 4@22'4.75, 4@22.395833, 4@22.395833', 4@22-4 3/4, 4@22'-4 3/4, 4@22'-4 3/4\"",
  ColumnSpacingGreaterThanZeroMsg = "Column spacing must be greater than Zero(0)",
  ValidationTitle = "Validation Alert!",
  ValueGreaterThanEqualToTwoMsg = "The value should be greater than or equal to two(2)",
  ColumnSpacingLessThanEqualToWidthMsg = "Column spacing must be less than or equal to width",
  MultipleTxtBoxesCommaSeparatedMsg = "Please use @ if you want same value in multiple textboxes or add comma separated value like 4@22.5, 4@22.5', 4@22'6, 4@22-6, 4@22'-6, 4@22'-6\", 4@22-4.75, 4@22'4.75, 4@22.395833, 4@22.395833', 4@22-4 3/4, 4@22'-4 3/4, 4@22'-4 3/4\"",
  ValidFormatMsg = "Please enter valid format like 4@22.5, 4@22.5', 4@22'6, 4@22-6, 4@22'-6, 4@22'-6\", 4@22-4.75, 4@22'4.75, 4@22.395833, 4@22.395833', 4@22-4 3/4, 4@22'-4 3/4, 4@22'-4 3/4\"",
  MaxCountAllowedMsg = "Maximum 30 counts allowed!",
  RoofBaySpacingGreaterThanZeroMsg = "Roof bay spacing must be greater than Zero(0)",
  ColumnSpacingLessThanFiveMsg = "Minimum endwall bay spacing length is 5'-0.  Please enter new length.",
  ID_COUNTRY_INTERNATIONAL = "International Site",
  ID_COUNTRY_UNITED_STATES = "United States",
  ID_STATE_HI = "HI",
  OverseasShippingMaxValidationMsg = "Due to overseas shipping considerations, Maximum Bay Spacing Length is 33'-0. Please enter new value.",
  MaxBayLengthFourtyValidationMsg = "Maximum Bay Spacing Length is 40'-0\".  Please enter new value.",
}

export class EndwallWidth {
  EndwallWidthId: number;
  IsActive: number;
  Width: string;
  SortOrder: number;
}
export class EndwallBayConfiguration {
  EndwallBayConfigurationId: number;
  IsActive: number;
  BayConfiguration: string;
  SortOrder: number;
}
export class EndwallBayConfigurationChoice {
  EndwallBayConfigurationChoiceId: number;
  EndwallWidthId: number;
  IsActive: number;
  Width: number;
  SortOrder: number
  BayConfiguration: string;
}
