
export class RuntimeMapping {
  TabName: string;
  BuildingNumber: number;
  Key: string;
  SubKey: string;
  Value: any;
  IsCallDrawingMethod: boolean = true;
  RoofBaySpacing: any;
  WallBayspacing: any;
  FramesData: any;
  Bracing: any;
  XBraceAnchor: any;
  PointLoads: any;
  OpenAreas: any;
  EwRecesses: any;
  Columnspacing: any;
  MezzanineId: number;
}


export enum RuntimeMappingEnum {
  BRACING_DATA = "BracingData",
  BRACING_BRACINGLOCATION = "BracingLocation",
  BRACING_XBRACEANCHOR = "XBraceAnchor",
}
