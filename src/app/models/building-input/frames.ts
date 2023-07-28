import { Commontabs } from "./buildinginput-common";

export interface FixedFrame {
  index: number;
  groupNo: number;
  groupName: string;
  frametypeImage: string;
  clearspan: string;
  disableFrameline: number;
  frameLines: string;
  lstChecked: string;
}
export class ListFrameLine { frameLineName: string; isChecked: boolean };


export const FixedFrameList: FixedFrame[] = [
  { index: 0, groupNo: 1, groupName: 'Group 1', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" },
  { index: 1, groupNo: 2, groupName: 'Group 2', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" },
  { index: 2, groupNo: 3, groupName: 'Group 3', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" },
  { index: 3, groupNo: 4, groupName: 'Group 4', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" },
  { index: 4, groupNo: 5, groupName: 'Group 5', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" },
  { index: 5, groupNo: 6, groupName: 'Group 6', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" },
  { index: 6, groupNo: 7, groupName: 'Group 7', frametypeImage:'', clearspan: '', disableFrameline: 1, frameLines: "", lstChecked: "" }
];


export class Frames extends Commontabs {
  ProjectId: number;
  BuildingNo: number;
  FrameType: string;
  EW1Frame: string;
  EW2Frame: string;
  BuildingWidth: number;
  RoofBaySpace: number;
  lstFrameGroup: FrameGroup[];
  IsModified: boolean;
}

export class FrameGroup {
  GroupId: number;
  ProjectId: number;
  BuildingNumber: number;
  GroupNumber: number;
  ColType1: string;
  ColType2: string;
  WebDepth1: number;
  WebDepth2: number;
  RafterDepth1: number;
  RafterDepth2: number;
  ExtColRecession1: number;
  ExtColRecession2: number;
  ClearSpan: boolean;
  IsElevation1: boolean
  IsElevation2: boolean
  Elevation1: number
  Elevation2: number;
  HighStrengthWashers: boolean;
  IsAdvanceColumn: boolean;
  ColumnNumber: number;
  IntColType: string;
  IntColRecession: number;
  IntColBaseType: string;
  IntColHeaderType: string;
  IntColMaxWebDepth: number;
  GroutThickness: number;
  ShimsByCeco: number;
  PlatedBolts: number;
  FrameWeldingInspection: number;
  Unsupported1: number;
  Unsupported2: number;
  UnsupportedElevation1: number;
  UnsupportedElevation2: number;
  InteriorColumnSettings: InteriorColumn;
  lstFrameLines: FrameLine[];
  lstModule: Module[]
  lstInteriorColumn: InteriorColumn[];
}

export class FrameLine {
  FrameLineId: number;
  ProjectId: number;
  BuildingNumber: number;
  FrameLineNumber: number;
  GroupNumber: number;
  DesignGroupNumber: number;
}

export class Module {
  ModuleId: number;
  ProjectId: number;
  BuildingNumber: number;
  ModuleNumber: number;
  GroupNumber: number;
  Width: number;
}

export class InteriorColumn {
  ColumnId: number;
  ProjectId: number;
  BuildingNumber: number;
  ColumnNumber: number;
  GroupNumber: number;
  IntColType: string;
  IntColRecess: number;
  IntColBaseType: string;
  IntColHeaderType: string;
  IntColMaxWebDepth: number;
  BracedBays: string;
}
