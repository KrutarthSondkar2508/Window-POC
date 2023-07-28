import { EventEmitter, Injectable, Output } from '@angular/core';
import { EndwallBayConfigurationChoice, EndwallWidth } from '../models/building-input/endwall-column-spacing';
import { EaveHeight, RoofSlope, SidewallConfigurationChoice, SideWallLength } from '../models/building-input/geometry';
import { Occupancy, ThermalFactor } from '../models/building-input/loads';
import { PanelThicknessChoice } from '../models/building-input/roofs';
import { FrameStylesMeasure, GeometryMeasures, TableOfTable } from '../models/QuickQuoteModel';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
 
  @Output() FrameOpeningSizeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WalkDoorColorOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WalkDoorSizeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WalkDoorStyleOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WindowGlassOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WindowSizeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WindowFrameColorOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() LouverColorOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() LouverSizeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() LouverTypeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() RoofVentColorOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() RoofVentSizeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() InsulationFacingOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() InsulationThicknessOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() EndwallWidthOutEmit: EventEmitter<EndwallWidth[]> = new EventEmitter();
  @Output() RoofSlopeOutEmit: EventEmitter<RoofSlope[]> = new EventEmitter();
  @Output() EaveHeightOutEmit: EventEmitter<EaveHeight[]> = new EventEmitter();
  @Output() EndwallBayConfigurationChoiceOutEmit: EventEmitter<EndwallBayConfigurationChoice[]> = new EventEmitter();
  @Output() SideWallLengthOutEmit: EventEmitter<SideWallLength[]> = new EventEmitter();
  @Output() SidewallConfigurationChoiceOutEmit: EventEmitter<SidewallConfigurationChoice[]> = new EventEmitter();
  @Output() GirtTypeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() FrameTypeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() RoofPanelOutEmit: EventEmitter<PanelThicknessChoice[]> = new EventEmitter();
  @Output() WallPanelOutEmit: EventEmitter<PanelThicknessChoice[]> = new EventEmitter();
  @Output() ClipTypeOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() TrimStyleOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() SiteClassOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() SnowExposureOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() WindExposureOutEmit: EventEmitter<TableOfTable[]> = new EventEmitter();
  @Output() OccupancyOutEmit: EventEmitter<Occupancy[]> = new EventEmitter();
  @Output() SelectedOccupancyOutEmit: EventEmitter<string> = new EventEmitter();
  @Output() ThermalFactorOutEmit: EventEmitter<ThermalFactor[]> = new EventEmitter();


  @Output() IsAPISuccessOutEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() CanadaBasedDesignCodeOutEmit: EventEmitter<boolean> = new EventEmitter();

  @Output() GeometryMeasuresOutEmit: EventEmitter<GeometryMeasures> = new EventEmitter();
  @Output() FrameStylesMeasureOutEmit: EventEmitter<FrameStylesMeasure> = new EventEmitter();


  constructor() { }

  FrameOpeningSize(frameOpeningSize) {
    this.FrameOpeningSizeOutEmit.emit(frameOpeningSize);
  }
  WalkDoorColor(walkdDoorColor) {
    this.WalkDoorColorOutEmit.emit(walkdDoorColor);
  }
  WalkDoorSize(walkDoorSize) {
    this.WalkDoorSizeOutEmit.emit(walkDoorSize);
  }
  WalkDoorStyle(walkDoorStyle) {
    this.WalkDoorStyleOutEmit.emit(walkDoorStyle);
  }
  WindowGlass(windowGlass) {
    this.WindowGlassOutEmit.emit(windowGlass);
  }
  WindowSize(windowSize) {
    this.WindowSizeOutEmit.emit(windowSize);
  }
  WindowFrameColor(windowFrameColor) {
    this.WindowFrameColorOutEmit.emit(windowFrameColor);
  }
  LouverColor(louverColor) {
    this.LouverColorOutEmit.emit(louverColor);
  }
  LouverSize(louverSize) {
    this.LouverSizeOutEmit.emit(louverSize);
  }
  LouverType(louverType) {
    this.LouverTypeOutEmit.emit(louverType);
  }
  RoofVentColor(roofVentColor) {
    this.RoofVentColorOutEmit.emit(roofVentColor);
  }
  RoofVentSize(roofVentSize) {
    this.RoofVentSizeOutEmit.emit(roofVentSize);
  }
  InsulationFacing(insulationFacing) {
    this.InsulationFacingOutEmit.emit(insulationFacing);
  }
  InsulationThickness(insulationThickness) {
    this.InsulationThicknessOutEmit.emit(insulationThickness);
  }
  EndwallWidth(endwallWidth) {
    this.EndwallWidthOutEmit.emit(endwallWidth);
  }
  RoofSlope(roofSlope) {
    this.RoofSlopeOutEmit.emit(roofSlope);
  }
  EaveHeight(eaveHeight) {
    this.EaveHeightOutEmit.emit(eaveHeight);
  }
  EndwallBayConfigurationChoice(endwallBayConfigurationChoice) {
    this.EndwallBayConfigurationChoiceOutEmit.emit(endwallBayConfigurationChoice);
  }
  SideWallLength(sideWallLength) {
    this.SideWallLengthOutEmit.emit(sideWallLength);
  }
  SidewallConfigurationChoice(configurationChoice) {
    this.SidewallConfigurationChoiceOutEmit.emit(configurationChoice);
  }
  GirtType(girtType) {
    this.GirtTypeOutEmit.emit(girtType);
  }
  FrameType(frameType) {
    this.FrameTypeOutEmit.emit(frameType);
  }
  RoofPanel(roofPanel) {
    this.RoofPanelOutEmit.emit(roofPanel);
  }
  WallPanel(wallPanel) {
    this.WallPanelOutEmit.emit(wallPanel);
  }
  ClipType(clipType) {
    this.ClipTypeOutEmit.emit(clipType);
  }
  TrimStyle(trimStyle) {
    this.TrimStyleOutEmit.emit(trimStyle);
  }
  SiteClass(siteClass) {
    this.SiteClassOutEmit.emit(siteClass);
  }
  SnowExposure(snowExposure) {
    this.SnowExposureOutEmit.emit(snowExposure);
  }
  WindExposure(windExposure) {
    this.WindExposureOutEmit.emit(windExposure);
  }
  Occupancy(occupancy) {
    this.OccupancyOutEmit.emit(occupancy);
  }
  SelectedOccupancy(selectedOccupancy)
  {
    this.SelectedOccupancyOutEmit.emit(selectedOccupancy);
  }
  ThermalFactor(thermalFactor) {
    this.ThermalFactorOutEmit.emit(thermalFactor);
  }

  IsAPISuccess(IsAPISuccess) {
    this.IsAPISuccessOutEmit.emit(IsAPISuccess);
  }
  IsCanadaBasedDesignCode(isCanadaBasedDesignCode) {
    this.CanadaBasedDesignCodeOutEmit.emit(isCanadaBasedDesignCode);
  }
  GeometryMeasures(geometryMeasures) {
    this.GeometryMeasuresOutEmit.emit(geometryMeasures);
  }
  FrameStylesMeasure(frameStylesMeasure) {
    this.FrameStylesMeasureOutEmit.emit(frameStylesMeasure);
  }

}
