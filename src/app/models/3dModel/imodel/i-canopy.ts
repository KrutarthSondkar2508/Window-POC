import { IBays } from "./ibays";

export class ICanopy {
  BuildingNumber: number;
  Elevation: string;
  StartCol: number;
  StopCol: number;
  DistFromLeftCorner: number;
  Length: number;
  Type: string;
  Projection: number;
  HeightLocation: number;
  Slope: number;
  AtEave: boolean;
  SoffitFramingClearance: number;
}


export class BayWidthReturnData {
  bay_widths: number[] = new Array();
  num_bays: number = 0;
  bays: IBays = new IBays();
}
