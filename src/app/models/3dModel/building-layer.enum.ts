export enum BuildingLayerEnum {

  //Elevation
  LAYER_ELEV_A = "Elevation A",
  LAYER_ELEV_B = "Elevation B",
  LAYER_ELEV_C = "Elevation C",
  LAYER_ELEV_D = "Elevation D",
  //Building Layer
  LAYER_BUILDING_BASELINE_ELEV_A = "Building Baseline - Elevation A",
  LAYER_BUILDING_BASELINE_ELEV_B = "Building Baseline - Elevation B",
  LAYER_BUILDING_BASELINE_ELEV_C = "Building Baseline - Elevation C",
  LAYER_BUILDING_BASELINE_ELEV_D = "Building Baseline - Elevation D",
  LAYER_BUILDING_CIRCLE = "Building Circle",

  //Front Wall Layer
  LAYER_FRONT_LEFT_CORNER_ELEV_A = "Front Left Corner - Elevation A",
  LAYER_FRONT_RIGHT_CORNER_ELEV_A = "Front Right Corner - Elevation A",

  //Back Wall Layer
  LAYER_BACK_LEFT_CORNER_ELEV_C = "Back Left Corner - Elevation C",
  LAYER_BACK_RIGHT_CORNER_ELEV_C = "Back Right Corner - Elevation C",

  //Front Roof Layer
  LAYER_ROOF_LEFT_ELEV_A = "Roof Left - Elevation A",
  LAYER_ROOF_LEFT_ELEV_C = "Roof Left - Elevation C",
  LAYER_ROOF_RIGHT_ELEV_A = "Roof Right - Elevation A",
  LAYER_ROOF_RIGHT_ELEV_C = "Roof Right - Elevation C",
  LAYER_ROOF_LEFT_ENDWALL_SINGLE_SLOPE_LINE = "Left End Wall Single Slope line",
  LAYER_ROOF_RIGHT_ENDWALL_SINGLE_SLOPE_LINE = "Right End Wall Single Slope line",
  LAYER_LEFT_HIP_EAVE_LINE = "Left Hip Eave Line",
  LAYER_RIGHT_HIP_EAVE_LINE = "Right Hip Eave Line",

  //Roof Ridge Line
  LAYER_ROOF_RIDGE_LINE = "Roof Ridge Line",

  //Eave Line
  LAYER_EAVE_LINE_ELEV_A = "Eave Line - Elevation A",
  LAYER_EAVE_LINE_ELEV_C = "Eave Line - Elevation C",

  //Frames
  LAYER_FRAMES_FRONT_COLUMN_OUTER_FLANGE_ELEV_A = "Frame Front Column Outer Flange",
  LAYER_FRAMES_FRONT_COLUMN_INNER_FLANGE_ELEV_A = "Frame Front Column Inner Flange",
  LAYER_FRAMES_FRONT_COLUMN_KNEE_STIFFENER_ELEV_A = "Frame Front Column Knee Stiffener",
  LAYER_FRAMES_FRONT_COLUMN_KNEE_PLATE_ELEV_A = "Frame Front Column Knee Plate",
  LAYER_FRAMES_FRONT_COLUMN_BASE_PLATE_ELEV_A = "Frame Front Column Base Plate",
  LAYER_FRAMES_FRONT_RAFTER_OUTER_FLANGE_ELEV_A = "Frame Front Rafter Outer Flange",
  LAYER_FRAMES_FRONT_RAFTER_INNER_FLANGE_ELEV_A = "Frame Front Rafter Inner Flange",

  LAYER_FRAMES_REAR_COLUMN_OUTER_FLANGE_ELEV_C = "Frame Rear Column Outer Flange",
  LAYER_FRAMES_REAR_COLUMN_INNER_FLANGE_ELEV_C = "Frame Rear Column Inner Flange",
  LAYER_FRAMES_REAR_COLUMN_KNEE_STIFFENER_ELEV_C = "Frame Rear Column Knee Stiffener",
  LAYER_FRAMES_REAR_COLUMN_KNEE_PLATE_ELEV_C = "Frame Rear Column Knee Plate",
  LAYER_FRAMES_REAR_COLUMN_BASE_PLATE_ELEV_C = "Frame Rear Column Base Plate",
  LAYER_FRAMES_REAR_RAFTER_OUTER_FLANGE_ELEV_C = "Frame Rear Rafter Outer Flange",
  LAYER_FRAMES_REAR_RAFTER_INNER_FLANGE_ELEV_C = "Frame Rear Rafter Inner Flange",
  LAYER_FRAMES_PEAK_PLATE = "Frame Peak Plate",

  //Roof Bracing
  LAYER_FRONT_ROOF_BRACING_1 = "Front Roof Bracing 1",
  LAYER_FRONT_ROOF_BRACING_2 = "Front Roof Bracing 2",
  LAYER_BACK_ROOF_BRACING_1 = "Back Roof Bracing 1",
  LAYER_BACK_ROOF_BRACING_2 = "Back Roof Bracing 2",

  //Bracing
  LAYER_LEFT_BRACING = "Left Bracing",
  LAYER_RIGHT_BRACING = "Right Bracing",

  //Open Area
  LAYER_OPEN_AREA = "Open Area",
  LAYER_OPEN_AREA_ACCESORIES_BOARDER = "Open Area Accesories Boarder",

  //Soldier Columns
  LAYER_SOLDIER_COLUMNS = "Soldier Column",
  LAYER_SOLDIER_COLUMNS_DEPTH = "Soldier Column Depth",
  LAYER_SOLDIER_COLUMNS_RAFTER = "Soldier Column Rafter",
  LAYER_SOLDIER_COLUMNS_BRACE_1 = "Soldier Column Brace 1",
  LAYER_SOLDIER_COLUMNS_BRACE_2 = "Soldier Column Brace 2",
  LAYER_SOLDIER_COLUMNS_BRACE_3 = "Soldier Column Brace 3",
  LAYER_SOLDIER_COLUMNS_BRACE_4 = "Soldier Column Brace 4",

  //End Wall
  LAYER_LEFT_ENDWALL_LEFT_CORNER_COLUMN_FIRST_BAY = "Left Endwall Left Corner Column First Bay",
  LAYER_LEFT_ENDWALL_RIGHT_CORNER_COLUMN_LAST_BAY = "Left Endwall Right Corner Column Last Bay",
  LAYER_LEFT_ENDWALL_RIGHT_COLUMN_BAY = "Left Endwall Right Column Bay",
  LAYER_LEFT_ENDWALL_RAFTER_1 = "Left Endwall Rafter 1",
  LAYER_LEFT_ENDWALL_RAFTER_2 = "Left Endwall Rafter 2",
  LAYER_LEFT_ENDWALL_RAFTER_3 = "Left Endwall Rafter 3",
  LAYER_LEFT_ENDWALL_COLUMN_1 = "Left Endwall Column 1",
  LAYER_LEFT_ENDWALL_COLUMN_2 = "Left Endwall Column 2",
  LAYER_LEFT_ENDWALL_COLUMN_3 = "Left Endwall Column 3",

  LAYER_RIGHT_ENDWALL_LEFT_CORNER_COLUMN_FIRST_BAY = "Right Endwall Left Corner Column First Bay",
  LAYER_RIGHT_ENDWALL_RIGHT_CORNER_COLUMN_LAST_BAY = "Right Endwall Right Corner Column Last Bay",
  LAYER_RIGHT_ENDWALL_RIGHT_COLUMN_BAY = "Right Endwall Right Column Bay",
  LAYER_RIGHT_ENDWALL_RAFTER_1 = "Right Endwall Rafter 1",
  LAYER_RIGHT_ENDWALL_RAFTER_2 = "Right Endwall Rafter 2",
  LAYER_RIGHT_ENDWALL_RAFTER_3 = "Right Endwall Rafter 3",
  LAYER_RIGHT_ENDWALL_COLUMN_1 = "Right Endwall Column 1",
  LAYER_RIGHT_ENDWALL_COLUMN_2 = "Right Endwall Column 2",
  LAYER_RIGHT_ENDWALL_COLUMN_3 = "Right Endwall Column 3",

  //Inter Columns
  LAYER_INTER_COLUMNS_1 = "Inter Columns 1",
  LAYER_INTER_COLUMNS_2 = "Inter Columns 2",
  LAYER_INTER_COLUMNS_3 = "Inter Columns 3",

  //Hip Frames
  LAYER_HIPFRAME_FRONT_RAFTER_1 = "Hip Frame Front Rafter 1",
  LAYER_HIPFRAME_FRONT_RAFTER_2 = "Hip Frame Front Rafter 2",
  LAYER_HIPFRAME_FRONT_RAFTER_3 = "Hip Frame Front Rafter 3",
  LAYER_HIPFRAME_FRONT_COLUMN_1 = "Hip Frame Front Column 1",
  LAYER_HIPFRAME_FRONT_COLUMN_2 = "Hip Frame Front Column 2",
  LAYER_HIPFRAME_FRONT_COLUMN_3 = "Hip Frame Front Column 3",

  LAYER_HIPFRAME_BACK_RAFTER_1 = "Hip Frame Back Rafter 1",
  LAYER_HIPFRAME_BACK_RAFTER_2 = "Hip Frame Back Rafter 2",
  LAYER_HIPFRAME_BACK_RAFTER_3 = "Hip Frame Back Rafter 3",
  LAYER_HIPFRAME_BACK_COLUMN_1 = "Hip Frame Back Column 1",
  LAYER_HIPFRAME_BACK_COLUMN_2 = "Hip Frame Back Column 2",
  LAYER_HIPFRAME_BACK_COLUMN_3 = "Hip Frame Back Column 3",

  LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_1 = "Hip Frame Front Interior Column 1",
  LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_2 = "Hip Frame Front Interior Column 2",
  LAYER_HIPFRAME_FRONT_INTERIOR_COLUMN_3 = "Hip Frame Front Interior Column 3",

  LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_1 = "Hip Frame Back Interior Column 1",
  LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_2 = "Hip Frame Back Interior Column 2",
  LAYER_HIPFRAME_BACK_INTERIOR_COLUMN_3 = "Hip Frame Back Interior Column 3",


  //Roof Liner
  LAYER_ROOF_LINER_FRONT_PANEL = "Roof Liner Front Panel",
  LAYER_ROOF_LINER_BACK_PANEL = "Roof Liner Back Panel",
  LAYER_ROOF_LINER_LEFT_HIPAREA_LEFT_PARTIAL_PANEL = "Roof Liner Left Hip Area Left Partial Panel",
  LAYER_ROOF_LINER_LEFT_HIPAREA_LEFT_FULL_PANEL = "Roof Liner Left Hip Area Left Full Panel",
  LAYER_ROOF_LINER_LEFT_HIPAREA_RIGHT_PARTIAL_PANEL = "Roof Liner Left Hip Area Right Partial Panel",
  LAYER_ROOF_LINER_LEFT_HIPAREA_RIGHT_FULL_PANEL = "Roof Liner Left Hip Area Right Full Panel",
  LAYER_ROOF_LINER_RIGHT_HIPAREA_LEFT_PARTIAL_PANEL = "Roof Liner Right Hip Area Left Partial Panel",
  LAYER_ROOF_LINER_RIGHT_HIPAREA_LEFT_FULL_PANEL = "Roof Liner Right Hip Area Left Full Panel",
  LAYER_ROOF_LINER_RIGHT_HIPAREA_RIGHT_PARTIAL_PANEL = "Roof Liner Right Hip Area Right Partial Panel",
  LAYER_ROOF_LINER_RIGHT_HIPAREA_RIGHT_FULL_PANEL = "Roof Liner Right Hip Area Right Full Panel",
  LAYER_ROOF_LINER_FRONT_LOW_SIDE_WALL = "Roof Liner Front Low Side wall",
  LAYER_ROOF_LINER_FRONT_HIGH_SIDE_WALL = "Roof Liner Front High Side wall",
  LAYER_ACCESSORIES_ROOF_LINER = "Accessories - Roof Liner",
  LAYER_ACCESSORIES_WALL_LINER = "Accessories - Wall Liner",
  LAYER_ACCESSORIES_WALL_LINER_ACCESSORIES_BOARDER = "Accessories - Wall Liner Accessories Boarder",

  LAYER_PARTITION_WALL = "Partition Wall",
  LAYER_PARTITION_ACCESSORIES_BOARDER = "Partition Wall Accessories Boarder",
  LAYER_PARTITION_ACCESSORIES_VERTICAL_LINES = "Partition Wall Vertical Lines",

  //Portal Bracing
  LAYER_PORTAL_FRAME_OUTLINE = "Portal Frame Outline",
  LAYER_PORTAL_FRAME_LEFT_COLUMN = "Portal Frame Left Column",
  LAYER_PORTAL_FRAME_RIGHT_COLUMN = "Portal Frame Right Column",
  LAYER_PORTAL_FRAME_RAFTER = "Portal Frame Rafter",

  //
  LAYER_FIXED_BAY_BRACING_1 = "Fixed Bay Bracing 1",
  LAYER_FIXED_BAY_BRACING_2 = "Fixed Bay Bracing 2",

  //Point Load
  LAYER_POINT_LOAD_LINE_1 = "Point Load Line 1",     //pointlod
  LAYER_POINT_LOAD_LINE_2 = "Point Load Line 2",
  LAYER_POINT_LOAD_ROOF_PLANE = "Point Load Roof Plane",
  LAYER_POINT_LOAD_FRONT = "Point Load Front",
  LAYER_POINT_LOAD_BACK = "Point Load Back",

  //Accessories
  LAYER_ACCESSORIES_LOUVER = "Accessories - Louver",
  LAYER_ACCESSORIES_FRAMED_OPENINGS = "Accessories - Framed Openings",
  LAYER_ACCESSORIES_DBCI_DOOR = "Accessories - DBCI Door",
  LAYER_ACCESSORIES_SLIDE_DOOR = "Accessories - Slide Door",
  LAYER_ACCESSORIES_DOOR = "Accessories - Door",
  LAYER_ACCESSORIES_GLASS_DOOR = "Accessories - Glass Door",
  LAYER_ACCESSORIES_WINDOWS = "Accessories - Windows",
  LAYER_ACCESSORIES_WALL_LTP = "Accessories - Wall LTP",
  LAYER_ACCESSORIES_PARAPET_WALL = "Accessories - Parapet Wall",
  LAYER_ACCESSORIES_FACADE_BOTTOM_PENAL = "Accessories - Facade bottom penal",    //facede
  LAYER_ACCESSORIES_FACADE_FRONT_PENAL = "Accessories - Facade front penal",
  LAYER_ACCESSORIES_FACADE_BOTTOM_LEFT = "Accessories - Facade bottom left",
  LAYER_ACCESSORIES_FACADE_FRONT_LEFT = "Accessories - Facade front left",
  LAYER_ACCESSORIES_FACADE_BACK_LEFT = "Accessories - Facade back left",
  LAYER_ACCESSORIES_FACADE_TOP_LEFT = "Accessories - Facade back left",
  LAYER_ACCESSORIES_FACADE_BOTTOM_RIGHT = "Accessories - Facade bottom right",
  LAYER_ACCESSORIES_FACADE_FRONT_RIGHT = "Accessories - Facade front right",
  LAYER_ACCESSORIES_FACADE_BACK_RIGHT = "Accessories - Facade back right",
  LAYER_ACCESSORIES_FACADE_TOP_RIGHT = "Accessories - Facade back right",
  LAYER_ACCESSORIES_SUPPORTBEAM = "Accessories - SupportBeam",

  //Canopy
  LAYER_ACCESSORIES_CANOPY_RECTANGLE = "Accessories - Canopy Rectangle",
  LAYER_ACCESSORIES_CANOPY_RECTANGLE_1 = "Accessories - Canopy Rectangle 1",
  LAYER_ACCESSORIES_CANOPY_RECTANGLE_2 = "Accessories - Canopy Rectangle 2",
  LAYER_ACCESSORIES_CANOPY_RECTANGLE_3 = "Accessories - Canopy Rectangle 3",
  LAYER_ACCESSORIES_CANOPY_RECTANGLE_4 = "Accessories - Canopy Rectangle 4",
  LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_1 = "Accessories - Canopy Bottom Rectangle 1",
  LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_2 = "Accessories - Canopy Bottom Rectangle 2",
  LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_3 = "Accessories - Canopy Bottom Rectangle 3",
  LAYER_ACCESSORIES_CANOPY_BOTTOM_RECTANGLE_4 = "Accessories - Canopy Bottom Rectangle 4",
  LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_1 = "Accessories - Canopy Top Rectangle 1",
  LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_2 = "Accessories - Canopy Top Rectangle 2",
  LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_3 = "Accessories - Canopy Top Rectangle 3",
  LAYER_ACCESSORIES_CANOPY_TOP_RECTANGLE_4 = "Accessories - Canopy Top Rectangle 4",
  LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_1 = "Accessories - Canopy Front Rectangle 1",
  LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_2 = "Accessories - Canopy Front Rectangle 2",
  LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_3 = "Accessories - Canopy Front Rectangle 3",
  LAYER_ACCESSORIES_CANOPY_FRONT_RECTANGLE_4 = "Accessories - Canopy Front Rectangle 4",
  LAYER_ACCESSORIES_CANOPY_PURLIN_1 = "Accessories - Canopy Purlin 1",
  LAYER_ACCESSORIES_CANOPY_PURLIN_2 = "Accessories - Canopy Purlin 2",
  LAYER_ACCESSORIES_ROOF_VENTS_LINES = "Accessories - Roof Vents lines",       //Vents
  LAYER_ACCESSORIES_ROOF_VENTS_CIRCLE_TOP = "Accessories - Roof Vents Circle Top",
  LAYER_ACCESSORIES_ROOF_VENTS_CIRCLE_BOTTOM = "Accessories - Roof Vents Circle Bottom",
  LAYER_ACCESSORIES_ROOF_VENTS = "Accessories - Roof Vents",
  LAYER_ACCESSORIES_ROOF_VENTS_RECT_BOTTOM = "Accessories -Roof Vents Bottom",

  //Accessories CRANE
  LAYER_ACCESSORIES_CRANE = "Accessories - Crane",
  BUILDINGLABEL = "BuildingLabel",
  // Mezzanine accessories
  LAYER_ACCESSORIES_MEZZANINE = "Accessories - Mezzanine",

  LAYER_ACCESSORIES_MEZZANINE_SPACING_A = "Accessories - MezzanineColumn_A",
  LAYER_ACCESSORIES_MEZZANINE_SPACING_A_First = "Accessories - MezzanineColumn_A_First",

  LAYER_ACCESSORIES_MEZZANINE_SPACING_B = "Accessories - MezzanineColumn_B",
  LAYER_ACCESSORIES_MEZZANINE_SPACING_B_First = "Accessories - MezzanineColumn_B_First",

  LAYER_ACCESSORIES_MEZZANINE_SPACING_C = "Accessories - MezzanineColumn_C",
  LAYER_ACCESSORIES_MEZZANINE_SPACING_C_First = "Accessories - MezzanineColumn_C_First",

  LAYER_ACCESSORIES_MEZZANINE_SPACING_D = "Accessories - MezzanineColumn_D",
  LAYER_ACCESSORIES_MEZZANINE_SPACING_D_First = "Accessories - MezzanineColumn_D_First",

  MEZZANINE_BORDER_A = "Accessories - MezzanineBorder_A",
  MEZZANINE_BORDER_B = "Accessories - MezzanineBorder_B",
  MEZZANINE_BORDER_C = "Accessories - MezzanineBorder_C",
  MEZZANINE_BORDER_D = "Accessories - MezzanineBorder_D",

  MEZZANINE_OPENING = "Accessories - Mezzanine Opening",
  MEZZANINE_2D_COLUMNS = "Accessories - Mezzanine 2D columns",
  Building_2D_COLUMNS = "Accessories - Building 2D columns",


  //Scaling
  SCALING = "Scaling"
}
