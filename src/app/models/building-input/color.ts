export class ColorResponse {
  CategoryId: number;
  ColorText?: null | string;
  ColorName?: null | string;
  ColorCode?: null | string;
  ColorHashCode?: null | string;
}

export class ColorPanel {
  ColorPanelId: number;
  Type: string;
  Gauge: number;
  CategoryId: number;
}

export class ColorRequest {
  CompanyId: number;
  Module: string;
  CategotyId: number;
  ModuleType: string;
  Gauge: number;
  ColorName: string = null;
}

export class Color {
  Color?: null | string;
  ColorText?: null | string;
  ColorName?: null | string;
  ColorCode?: null | string;
  ColorHashCode?: null | string;
}

export class ColorOptions {
  Location: string;
  Type: string = 'default';
  Gauge: number;
}


export enum ColorEnum {
  COLOR_SPECIAL_KEY = 'COLOR_SPECIAL_KEY',
  FINISH_GALVALUME_PLUS = 'FINISH_GALVALUME_PLUS',
  COLOR_SPECIAL_NAME = 'Special TBD',
  COLOR_SIG300_STD_TBD = "COLOR_SIG300_STD_TBD",
  COLOR_SIG200_STD_TBD = "COLOR_SIG200_STD_TBD",
  COLOR_SIG200_BURNISHED_SLATE = "COLOR_SIG200_BURNISHED_SLATE"
}

export enum ColorNameEnum {
  COLOR_SPECIAL_KEY = 'Special',
  COLOR_GALVALUME_PLUS = 'Galvalume Plus',
  COLOR_SIG200_BURNISHED_SLATE = 'S200 Burnished Slate',
  COLOR_SIG200_WINTER_WHITE = 'S200 Winter White',
  COLOR_SIG200_POLAR_WHITE = 'S200 Polar White',
  COLOR_TUFFCOTE_TBD = "Tuff Cote Std. TBD",
  COLOR_SIG200_LIGHT_STONE = "S200 Light Stone",
  COLOR_SIG300_STD_TBD = 'S300 Standard TBD',
  COLOR_SIG200_STD_TBD = 'S200 Standard TBD',
  ID_COLOR_SIG200_LIGHT_STONE = 'S200 Light Stone',
  ID_COLOR_TUFFCOTE_TBD	 = 'Tuff Cote Std. TBD'
}

export enum ColorCode {
  BURNISHED_SLATE = 'WXB1007L',
  GALVALUME_PLUSHASHCODE = '#AFAFAF',
  Special = '#ffffff',
  BURNISHED_SLATEHASHCODE ='#404040'
}

export enum ColorLocation {
  Wall = 'Wall',
  Roof = 'Roof',
  OpenArea = 'OpenArea',
  Trim = 'Trim',
  Perlin = 'Perlin',
  Downspouts = 'Downspouts',
  Gutters = 'Gutters',
  RoofToRoof = 'RoofToRoof',
  RoofToWall = 'RoofToWall',
  Eave = 'Eave',
  Rake = 'Rake',
  Dbcidoor ='DBCI Doors',
  Corner = 'Corner',
  Others = 'Others',
  Base = 'Base',
  Walk = 'Walk',
  Partition = 'Partition',
  F73 = "F73",
  Canopy = 'Canopy',
  RoofLiner = 'Roof Liner'
}
export enum Panel
{
  ID_WALL_PANEL_TUFFCAST = "Tuff-Cast",
  ID_WALL_PANEL_TUFFWALL = "Tuff Wall",
}

