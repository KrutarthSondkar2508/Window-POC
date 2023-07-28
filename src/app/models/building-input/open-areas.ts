export class OpenArea {
  OptionId: number;
  BuildingNo: number;
  ProjectId: number
  EndWallNo: number;
  OpenAreaFor: string;

  //Type
  TypeId: number = 0;
  WallType: string;
  AttanchedBuildingNo: string;
  Width: string;
  Height: string;
  IsFullWidth: boolean;
  IsPMaterialByOthers: boolean;
  oldOpenFor: number;
  OpenFor: number;
  IsSheetedWall: boolean;

  //Options
  OptionTabId: number = 0;
  MasonryReinforcement: number;
  MasonryType: number;
  TiltUp: number;
  IsShearWall: boolean;
  ColumnBeBraced: boolean;
  NotDeductLinearPanel: boolean;
  NotDeductInsulation: boolean;
  DeductPanelTrim: boolean;
  IncludeJambFlash: boolean;
  IncludeHeaderFlash: boolean;
  Base: number;
  FlashColor: string;

  //Material
  MaterialId: number = 0;
  MaterialThickness: string;
  MaterialWeight: string;
  DistanceFromSteelLinetoF: string;
  DistanceFromSteelLinetoJ: string;
  PercRemainingOpenForWind: string;

  //Beam
  BeamId: number = 0;
  SupportBeanByManufacturer: boolean;
  BeamLocation: number;
  BeamType: number;
  BeamDeflectionLenghth: number;
  UseFalangeBracing: boolean;
  ConnectionSpaceOfWallAttachmentToSBeam: string;
}​​​​​

export class TempOpenAreas {
  Id: number;
  BuildingNumber: number;
  Elevation: string;
  BayNumber: number;
  DistFromLeftCorner: number;
  DistFromLeftColumn: number;
  OpeningType: string;
  OpenEndwall: number;

  oldMaterialType: string;

  OpeningWidth: number;
  OpeningHeight: number;
  MaterialType: string;
  MaterialWeight: number;
  
  MaterialThickness: number;
  DistSteelLinetoBeam: number;
  DistSteelLinetoMaterial: number;
  MasonryType: string;
  MaterialDirection: string;
  ShearWall: number;
  PercentOpenforWind: number;
  LeftJamb: number;
  LeftJambFlash: number;
  LeftJambFlangeWidth: number;
  LeftJambFlangeThick: number;
  LeftJambWebDepth: number;
  LeftJambWebThick: number;
  RightJamb: number;
  RightJambFlash: number;
  RightJambFlangeWidth: number;
  RightJambFlangeThick: number;
  RightJambWebDepth: number;
  RightJambWebThick: number;
  HeaderFlash: number;
  HeaderFlashType: string;
  HeaderFlashColor: string;
  AttachmentNumber: number;
  AllowableDrift: number;

  BeamSelected: number;
  BeamStartCol: number;
  BeamStopCol: number;
  BeamHeight: number;
  BeamFlanges: number;
  BeamWebThick: number;
  BeamWebDepth: number;
  BeamFlangeThick: number;
  BeamFlangeWidth: number;
  BeamDeflection: number;
  BeamAttachmentSpacing: number;
  BeamSteelline: number;
  BeamSection: string;
  BeamWeight: number;
  BeamPrice: number;
  BeamIsPriced: number;
  BeamErrorCode: number;
  LedgerAngle: number;
  AllElevations: number;
  ColumnBracing: string;
  NoOutsideColumns: number;
  PanelsSpan: number;
  NoFlangeBelow: number;
  AllowableInsulation: number;
  PartitionNumber: number;
  PartitionText: string;
  DeductPanelsTrimOnly: number;
  FullWidth: number;
  FullHeight: number;
  ParapetByOther: number;
  HeaderFlashColorValsparCode: string;
  HeaderFlashColorSpecialName: string;
  isDirty: boolean = false;
  UserId: number;
}​​​​​

export enum OpenForType {
  'Masonry' = 1,
  'Wind' = 2,
  'Tilt-up' = 3,
  'Stud Walls' = 4,
  'Glass' = 5,
  'Other' = 6
}

export enum MaterialType {
  Masonry = 'Masonry',
  Wind = 'Wind',
  Tiltup = 'Tilt-up',
  Studs = 'Studs',
  Glass = 'Glass',
  Other = 'Other'
}

export enum OpeningType {
  // open areas types
  OPEN_FULL = 'Full Height',
  OPEN_PARTIAL = 'Partial Height',
  OPEN_ATTACHMENT = 'Attachment Height',
  OPEN_CHILD_ATTACHMENT = 'Child Bldg Attachment',
  PARTITION = 'Partition'
}

export class SoldierColumn {
  DistFromLeftColumn: number;
  RoofBayNumber: number;
}
