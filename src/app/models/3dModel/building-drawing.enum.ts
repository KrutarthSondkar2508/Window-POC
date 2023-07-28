export enum BuildingDrawingEnum {
  //*************************  GENERAL PROGRAM STRINGS  ***********************//

  ID_WALL = "WALL",
  ID_ROOF = "ROOF",

  // Software Editions
  ID_EDITION_OPTIMA = "Optima",
  ID_EDITION_ELITE = "Elite",
  ID_EDITION_ASTEK = "ASTEK-II",
  ID_EDITION_GARCO = "Garco",

  // registry paths
  ID_STAR_REG_PATH = "SOFTWARE\\RCC\\SBS 9", //1
  ID_CECO_REG_PATH = "SOFTWARE\\RCC\\CecoPro 2005", //2
  ID_ROBERTSON_REG_PATH = "SOFTWARE\\RCC\\RBS 9", //3				
  ID_NBS_REG_PATH = "SOFTWARE\\RCC\\NBS",//4
  ID_NBC_REG_PATH = "SOFTWARE\\RCC\\NBC",//5
  ID_NBA_REG_PATH = "SOFTWARE\\RCC\\NBA", //6
  ID_GRC_REG_PATH = "SOFTWARE\\RCC\\GARCO",//7

  // not applicable 
  ID_NOT_APPLICABLE = "N/A",
  ID_NONE = "None",
  ID_YES = "Yes",
  ID_NO = "No",
  ID_FULL_HEIGHT = "Full Height",
  ID_OTHER = "Other",

  // plants
  ID_PLANT_MTC = "MTC",
  ID_PLANT_LKF = "LKF",
  ID_PLANT_ELZ = "ELZ",
  ID_PLANT_BRD = "BRD",
  ID_PLANT_CBS = "COL",
  ID_PLANT_MPL = "MPL",
  ID_PLANT_RKM = "RKM",
  ID_PLANT_NCI = "NCI",
  ID_PLANT_ANS = "ANS",
  ID_PLANT_MSC = "MSC",
  ID_PLANT_GRC = "GRC", //Garco
  ID_PLANT_ATW = "ATW", //Atwater
  ID_PLANT_FVW = "FVW", //Fairview
  ID_PLANT_CRV = "CRV", //Carryville
  ID_PLANT_SPK = "SPK", //Spokane

  // divisions	Kevin Bottoms	1-23-2007
  ID_DIVISION_ALLAMERICAN = "All American",
  ID_DIVISION_MIDWEST = "Midwest",
  ID_DIVISION_METALLIC = "Metallic",
  ID_DIVISION_MESCO = "Mesco",
  ID_DIVISION_ANS = "A & S",
  ID_DIVISION_CECO = "Ceco",
  ID_DIVISION_MID_WEST = "Mid-West",
  ID_DIVISION_METALDEPOTS = "Metal Depots",
  ID_DIVISION_GARCO = "Garco",
  ID_DIVISION_MBSC_DIRECT = "MBSC-Direct",
  ID_DIVISION_HERITAGE = "Heritage",
  ID_DIVISION_NCI_BS = "NCI Building Systems",
  ID_DIVISION_ABC = "ABC",

  // Sources
  ID_SOURCE_BWX_ROOF = "BWX Roof",
  ID_SOURCE_BWX_OTHER = "BWX Other",
  ID_SOURCE_EDS_ROOF = "EDS Roof",
  ID_SOURCE_EDS_OTHER = "EDS Other",

  // elevations
  ID_WALL_A = "A",
  ID_WALL_B = "B",
  ID_WALL_C = "C",
  ID_WALL_D = "D",
  ID_WALL_R = "R",
  ID_WALL_E = "E",
  ID_WALL_F = "F",
  ID_ROOF_FRONT_LETTER = "E",
  ID_ROOF_BACK_LETTER = "F",
  ID_ROOF_LEFT_LETTER = "G",
  ID_ROOF_RIGHT_LETTER = "H",
  ID_WALL_NA = "N/A",
  ID_SIDEWALL = "Sidewall",
  ID_ENDWALL = "Endwall",
  ID_PARTITION = "Partition",

  // general steel
  ID_GENERAL_NUMBER = "62978",




  //*************************  PROJECT INFORMATION STRINGS  ***********************//

  // carrier 
  ID_CARRIER_BEST = "Best",
  ID_CARRIER_CECO = "Ceco",

  // city limits
  ID_CITYLIMITS_INSIDE = "Inside",
  ID_CITYLIMITS_OUTSIDE = "Outside",

  // countries
  ID_COUNTRY_UNITED_STATES = "United States",
  ID_COUNTRY_INTERNATIONAL = "International Site",
  ID_COUNTRY_CANADA = "Canada",

  // credit terms
  ID_CREDIT_10_NET_30 = "1% 10 Net 30",
  ID_CREDIT_CASH_LOADING = "Cash before Loading",
  ID_CREDIT_CHECK_LOADING = "Cashiers Check before Loading",
  ID_CREDIT_COD = "COD",
  ID_CREDIT_COD_CASHIERS_CHECK = "COD Cashiers Check",
  ID_CREDIT_COD_COMPANY_CHECK = "COD Company Check",
  ID_CREDIT_IMMEDIATE = "Immediate",
  ID_CREDIT_LETTER_OF_CREDIT = "Letter of Credit",
  ID_CREDIT_NET_INVOICE = "Net on Invoice",
  ID_CREDIT_PREPAID = "Pre-Paid in Full",
  ID_CREDIT_SPECIAL = "Special",
  ID_CREDIT_STAR_ARRANGED = "Star Established Terms",
  ID_CREDIT_NET_30 = "Net 30 Days",								// added for RBS
  ID_CREDIT_APPROVAL = "Subject to Credit Mgr's Approval",		// added for RBS
  ID_CREDIT_CECO_ARRANGED = "Ceco Established Terms",					// added for Ceco
  ID_CREDIT_ESTABLISHED_TERMS = "Established Terms",						// added 10/17/2006 bts
  ID_CREDIT_PREPAY = "Prepay",							// added 10/17/2006 bts

  // drawing certifications
  ID_CERT_ENGINEERING_SEAL = "Engineering Seal",
  ID_CERT_ID_NOTE = "ID Note",
  ID_CERT_NONE = "None",

  // drawing types
  ID_DRAWTYPE_PRELIMINARY = "Preliminary",
  ID_DRAWTYPE_CUSTOM = "Custom",

  // Complexity MBMA Categories
  ID_MBMA_STANDARD = "Standard",
  ID_MBMA_STANDARD_STRUCTURAL = "Standard structural accessories",
  ID_MBMA_NONSTANDARD_STRUCTURAL = "Non-standard structural accessories",
  ID_MBMA_NONSTANDARD_NONSTRUCTURAL = "Non-standard non-structural accessories",

  // drawing types
  ID_TYPE_ERECTION = "Erection",
  ID_TYPE_STANDARD_PRODUCT = "Standard Product",
  ID_TYPE_AB_PLAN = "Anchor Bolt Plan",
  ID_TYPE_LETTER_CERT = "Letter of Cert.",
  ID_TYPE_LETTER_CERT_CALCS = "Letter of Cert. w/ Calcs",
  ID_TYPE_AR_PLAN = "Anchor Rod Plan w/ Reactions",	//added 02.06.2006 dkb
  ID_TYPE_AR_PLAN_OLD = "Anchor Rod Plan",
  ID_TYPE_CALCS = "Calcs",						// Added 11.2.2006 By Brian Summers at the request of Damon Brooks
  ID_TYPE_AR = "Anchor Rod Only",					// Added 11.2.2006 By Brian Summers at the request of Damon Brooks
  ID_TYPE_HARD_COPY_CALCS = "Hard Copy of Calculations",

  // drawing purposes
  ID_PURPOSE_APPROVAL = "Approval",
  ID_PURPOSE_PERMIT = "Permit",
  ID_PURPOSE_SUBMITTAL = "Submittal",
  ID_PURPOSE_FINAL = "Final",
  ID_PURPOSE_FOR_CONSTRUCTION = "For Construction", // Added 11.2.2006 By Brian Summers at the request of Damon Brooks.
  ID_PURPOSE_APPROVAL_1 = "Approval Type 1",
  ID_PURPOSE_APPROVAL_2 = "Approval Type 2",
  ID_PURPOSE_APPROVAL_3 = "Approval Type 3",
  ID_PURPOSE_PERMIT_1 = "Permit Type 1",
  ID_PURPOSE_PERMIT_2 = "Permit Type 2",
  ID_PURPOSE_PERMIT_3 = "Permit Type 3",
  ID_PURPOSE_PERMIT_4 = "Permit Type 4",

  // drawing seals
  ID_SEAL_SEALED = "Sealed",
  ID_SEAL_UNSEALED = "Unsealed",
  ID_SEAL_ID_NOTE = "ID Note",
  ID_SEAL_NONE = "None",

  // erection drawing types
  ID_ERECTION_STANDARD = "Standard",
  ID_ERECTION_ENHANCED = "Enhanced",
  ID_ERECTION_EXPRESS = "Express",

  // end use of building options
  ID_ENDUSE_101 = "101 COMMERCIAL STORAGE FOR AGRICULTURAL COMMODITIES",
  ID_ENDUSE_201 = "201 FARM - ON FARM COMMODITY STORAGE",
  ID_ENDUSE_202 = "202 FARM - OTHER FARM BUILDINGS",
  ID_ENDUSE_301 = "301 MANUFACTURING - PRODUCTION",
  ID_ENDUSE_302 = "302 MANUFACTURING - WAREHOUSING",
  ID_ENDUSE_303 = "303 MANUFACTURING - EQUIPMENT SERVICE",
  ID_ENDUSE_401 = "401 COMMERCIAL - RETAIL STORES",
  ID_ENDUSE_402 = "402 COMMERCIAL - WAREHOUSING AND STORAGE",
  ID_ENDUSE_403 = "403 COMMERCIAL - HANGARS",
  ID_ENDUSE_404 = "404 COMMERCIAL - FREIGHT TERMINALS",
  ID_ENDUSE_405 = "405 COMMERCIAL - OFFICES AND BANKS",
  ID_ENDUSE_406 = "406 COMMERCIAL - GARAGES AND SERVICE STATIONS (AUTO.)",
  ID_ENDUSE_501 = "501 COMMUNITY - RECREATIONAL",
  ID_ENDUSE_502 = "502 COMMUNITY - EDUCATIONAL",
  ID_ENDUSE_503 = "503 COMMUNITY - HOSPITALS AND HEALTH TREATMENT",
  ID_ENDUSE_504 = "504 COMMUNITY - HOUSE OF WORSHIP",
  ID_ENDUSE_505 = "505 COMMUNITY - GOVERNMENT ADMINISTRATION AND SERVICE",
  ID_ENDUSE_506 = "506 COMMUNITY - PASSENGER TERMINALS",
  ID_ENDUSE_507 = "507 COMMUNITY - RESIDENTIAL",
  ID_ENDUSE_508 = "508 COMMUNITY - CORRECTIONAL FACILITIES",
  ID_ENDUSE_601 = "601 GOVERNMENT EXPORT",
  ID_ENDUSE_602 = "602 PRIVATE SECTOR EXPORT",
  ID_ENDUSE_701 = "701 COMPONENT PARTS",
  ID_ENDUSE_702 = "702 RETROFIT ROOF SYSTEMS",
  ID_ENDUSE_703 = "703 RETROFIT WALL SYSTEMS",
  ID_ENDUSE_704 = "704 OTHER",

  ID_ENDUSE_1A = "1A AGRICULTURAL BUILDINGS - COMMODITY STORAGE",
  ID_ENDUSE_1B = "1B AGRICULTURAL BUILDINGS - OTHER FARM BUILDINGS",
  ID_ENDUSE_2A = "2A MANUFACTURING - PRODUCTION",
  ID_ENDUSE_2B = "2B MANUFACTURING - WAREHOUSING",
  ID_ENDUSE_2C = "2C MANUFACTURING - EQUIPMENT STORAGE",
  ID_ENDUSE_3A = "3A COMMERCIAL - RETAIL STORES",
  ID_ENDUSE_3B = "3B COMMERCIAL - WAREHOUSING AND STORAGE",
  ID_ENDUSE_3C = "3C COMMERCIAL - HANGARS",
  ID_ENDUSE_3D = "3D COMMERCIAL - FREIGHT TERMINALS",
  ID_ENDUSE_3E = "3E COMMERCIAL - OFFICES AND BANKS",
  ID_ENDUSE_3F = "3F COMMERCIAL - GARAGES AND SERVICE STATIONS (AUTO.)",
  ID_ENDUSE_3G = "3G COMMERCIAL - MINI STORAGE AND SELF STORAGE",
  ID_ENDUSE_4A = "4A COMMUNITY - RECREATIONAL",
  ID_ENDUSE_4B = "4B COMMUNITY - EDUCATIONAL",
  ID_ENDUSE_4C = "4C COMMUNITY - HOSPITAL AND HEALTH TREATMENT",
  ID_ENDUSE_4D = "4D COMMUNITY - HOUSES OF WORSHIP",
  ID_ENDUSE_4E = "4E COMMUNITY - GOVERNMENT ADMINISTRATION AND SERVICES",
  ID_ENDUSE_4F = "4F COMMUNITY - TRANSPORTATION",
  ID_ENDUSE_4G = "4G COMMUNITY - RESIDENTIAL",
  ID_ENDUSE_4H = "4H COMMUNITY - CORRECTIONAL FACILITIES",
  ID_ENDUSE_5 = "5 EXPORT",
  ID_ENDUSE_6 = "6 ALL OTHER",

  // erection labor
  ID_ERECTION_CECONONUNION = "Ceco Non-Union",
  ID_ERECTION_CECOUNION = "Ceco Union",
  // freight terms 
  ID_FREIGHT_PREPAID = "Pre-Paid",
  ID_FREIGHT_COD = "COD",
  ID_FREIGHT_CUSTOMER = "Customer",
  ID_FREIGHT_COLLECT = "Collect",

  // mailed drawings
  ID_DRAW_MAIL_ROLLED = "Rolled",
  ID_DRAW_MAIL_FOLDED = "Folded",
  ID_DRAW_MAIL_ROLLED_OVERNIGHT = "Rolled - Overnight",
  ID_DRAW_MAIL_FOLDED_OVERNIGHT = "Folded - Overnight",
  ID_DRAW_MAIL_EMAILED = "E-Mailed",
  ID_DRAW_MAIL_EMAILED_OVERNIGHT = "E-Mailed - Overnight",

  // Drawing Sizes
  ID_DRAWINGS_SIZE_D_22_X_34 = "Size D (22\" x 34\")",
  ID_DRAWINGS_SIZE_B_11_X_17 = "Size B (11\" x 17\")",
  ID_DRAWINGS_SIZE_C_17_X_22 = "Size C (17\" x 22\")",

  // project status
  ID_PROJECT_STATUS_FAB = "Fabrication",
  ID_PROJECT_STATUS_APPROVAL = "Approval",
  ID_PROJECT_STATUS_PRODUCTION = "Production", // added 10/17/2006 bts
  ID_PROJECT_STATUS_PERMIT_ONLY = "Permit Only", // added 10/17/2006 bts

  // ShipTo for Drawings
  ID_DRAW_SHIPTO_BUYER = "Buyer", // add 10/23/2006 bts
  ID_DRAW_SHIPTO_OWNER = "Owner",// add 10/23/2006 bts
  ID_DRAW_SHIPTO_OTHER = "Other, See Notes", // add 10/23/2006 bts
  ID_DRAW_SHIPTO_EMAIL_BUYER = "E-Mail PDF to Buyer",
  ID_DRAW_SHIPTO_EMAIL_OWNER = "E-Mail PDF to Owner",


  // provinces
  ID_STATE_CANADA_AB = "AB",
  ID_STATE_CANADA_BC = "BC",
  ID_STATE_CANADA_MB = "MB",
  ID_STATE_CANADA_NB = "NB",
  ID_STATE_CANADA_NF = "NF",
  ID_STATE_CANADA_NL = "NL",
  ID_STATE_CANADA_NS = "NS",
  ID_STATE_CANADA_NT = "NT",
  ID_STATE_CANADA_NU = "NU",
  ID_STATE_CANADA_ON = "ON",
  ID_STATE_CANADA_PE = "PE",
  ID_STATE_CANADA_PQ = "PQ",
  ID_STATE_CANADA_SK = "SK",
  ID_STATE_CANADA_YT = "YT",

  ID_STATE_CANADA_QC = "QC",

  // shipping notification
  ID_SHIP_NOTIF_PROJECT_NOTES = "Refer to Project Notes",
  ID_SHIP_NOTIF_24HRS_BEFORE_ARRIVAL = "Notify 24 Hours before Arrival",

  // shipping terms
  ID_SHIP_TRUCK = "Truck",
  ID_SHIP_RAIL = "Rail",
  ID_SHIP_TRUCK_LTL = "Truck (LTL)",
  ID_SHIP_SHARED_RIDE = "Shared Ride (Piggy Back)",
  ID_SHIP_OPEN_CONTAINER = "Open Top Container",
  ID_SHIP_BUILDER_OWNED_TRUCK = "Builder Owned Truck", //BW-7591: Obsolete
  ID_SHIP_CUSTOMER_ARRANGED = "Customer Arranged", //BW-7591: Change Shipping Terms and Freight Terms Functionality
  ID_SHIP_BUILDER_ARRANGED_TRUCK = "Builder Arranged Truck",
  ID_SHIP_CLOSED_CONTAINER = "Closed Top Container",

  ID_SHIP_NO_CONTAINER_FOB_WEST_ALLOWED = "No Container F.O.B. West Coast Port Allowed",

  ID_SHIP_CECO_TRUCK = "Ceco Truck/FOB Jobsite",	// added for Ceco
  ID_SHIP_COMMON_CARRIER = "Common Carrier/FOB Plant",		// added for Ceco
  ID_SHIP_OTHER = "Other",					// added for Ceco

  ID_SHIP_FOB = "FOB plant with Freight allowed to jobsite", // added 10/17/2006 bts
  ID_SHIP_COMBINED_LOAD = "Combined Load",							// added 10/17/2006 bts
  ID_SHIP_CUSTOMER_PICK_UP = "Customer pick up",						// Modifed 10/24/2006 bts

  ID_SHIP_OPEN_CONTAINER_FOB = "Open Top Container FOB Plant",// NBS-867 08/15/2007 Kevin Bottoms NCI Beta v3.7
  ID_SHIP_OPEN_CONTAINER_CPU = "Open Top Container CPU",		// NBS-867 08/15/2007 Kevin Bottoms NCI Beta v3.7

  //* BW-1072 added shipping terms for Garco
  ID_SHIP_FOB_PLANT = "FOB Plant",
  ID_SHIP_FOB_CUSTOMER_CALL = "FOB plant, customer will call",
  ID_SHIP_FOB_PREPAY_FREIGHT = "FOB plant, prepay freight to jobsite",
  ID_SHIP_FOB_SIDELOAD = "FOB plant, side load flat rack",

  // shipping points by Kevin Bottoms 1-23-2007 for NCI Project
  ID_SHIPPING_ADEL = "Adel, GA",
  ID_SHIPPING_ATWATER = "Atwater, CA",
  ID_SHIPPING_CARYVILLE = "Caryville, TN",
  ID_SHIPPING_EXPORT = "Export",
  ID_SHIPPING_HERNANDO = "Hernando, MS",
  ID_SHIPPING_HOUSTON = "Houston, TX",
  ID_SHIPPING_LUBBOCK = "Lubbock, TX",
  ID_SHIPPING_MATTON = "Matton, IL",
  ID_SHIPPING_PHOENIX = "Phoenix, AZ",
  ID_SHIPPING_ROME = "Rome, NY",
  ID_SHIPPING_SALTLAKE = "Salt Lake City, UT",
  ID_SHIPPING_TALLAPOOSA = "Tallapoosa, GA",
  ID_SHIPPING_OKLAHOMACITY = "Oklahoma City, OK",
  ID_SHIPPING_OMAHA = "Omaha, NE",
  ID_SHIPPING_RICHMOND = "Richmond, VA",
  ID_SHIPPING_MATTOON = "Mattoon, IL",
  ID_SHIPPING_INDIANAPOLIS = "Indianapolis, IN",
  ID_SHIPPING_MEMPHIS = "Memphis, TN",
  ID_SHIPPING_ATLANTA = "Atlanta, GA",
  ID_SHIPPING_MONTICELLO = "Monticello, IA",
  ID_SHIPPING_ELIZABETHTON = "Elizabethton, TN",
  ID_SHIPPING_SPOKANE = "Spokane, WA",//* BW-1072 Added Spokane, WA for Garco
  ID_SHIPPING_KNOXVILLE = "Knoxville, TN",//* BW-3154 Added Knoxville, TN


  // steel origin
  ID_STEEL_ORIGIN_NON_DOMESTIC = "Non-Domestic Steel Allowed",// BW-850 Add drop-down for Domestic Steel Status. 10/8/2008
  ID_STEEL_ORIGIN_BUY_AMERICAN = "BUY-AMERICAN ACT COMPLIANT",	// BW-850 Add drop-down for Domestic Steel Status. 10/30/2008
  ID_STEEL_ORIGIN_DOMESTIC = "DOMESTIC STEEL ONLY",		// BW-850 Add drop-down for Domestic Steel Status. 10/30/2008

  // tax exempt status
  ID_TAX_TAXABLE = "Taxable",
  ID_TAX_EXEMPT = "Exempt",
  ID_TAX_RETAIL = "Retail",// added for RBS
  ID_TAX_RESALE = "Resale",
  ID_TAX_DIRECT = "Direct",
  ID_TAX_DIRECT_PAY = "Direct Pay",
  ID_TAX_GST_EXEMPT = "GST Exempt",		// added for RBS -dkb 09.15.2005
  ID_TAX_PST_EXEMPT = "PST Exempt",		// added for RBS -dkb 09.15.2005

  // states
  ID_STATE_AK = "AK",
  ID_STATE_AL = "AL",
  ID_STATE_AR = "AR",
  ID_STATE_AZ = "AZ",
  ID_STATE_CA = "CA",
  ID_STATE_CO = "CO",
  ID_STATE_CT = "CT",
  ID_STATE_DE = "DE",
  ID_STATE_FL = "FL",
  ID_STATE_GA = "GA",
  ID_STATE_HI = "HI",
  ID_STATE_IA = "IA",
  ID_STATE_ID = "ID",
  ID_STATE_IL = "IL",
  ID_STATE_IN = "IN",
  ID_STATE_KS = "KS",
  ID_STATE_KY = "KY",
  ID_STATE_LA = "LA",
  ID_STATE_MA = "MA",
  ID_STATE_MD = "MD",
  ID_STATE_ME = "ME",
  ID_STATE_MI = "MI",
  ID_STATE_MN = "MN",
  ID_STATE_MO = "MO",
  ID_STATE_MS = "MS",
  ID_STATE_MT = "MT",
  ID_STATE_NC = "NC",
  ID_STATE_ND = "ND",
  ID_STATE_NE = "NE",
  ID_STATE_NH = "NH",
  ID_STATE_NJ = "NJ",
  ID_STATE_NM = "NM",
  ID_STATE_NV = "NV",
  ID_STATE_NY = "NY",
  ID_STATE_OH = "OH",
  ID_STATE_OK = "OK",
  ID_STATE_OR = "OR",
  ID_STATE_PA = "PA",
  ID_STATE_RI = "RI",
  ID_STATE_SC = "SC",
  ID_STATE_SD = "SD",
  ID_STATE_TN = "TN",
  ID_STATE_TX = "TX",
  ID_STATE_UT = "UT",
  ID_STATE_VA = "VA",
  ID_STATE_VT = "VT",
  ID_STATE_WA = "WA",
  ID_STATE_WI = "WI",
  ID_STATE_WV = "WV",
  ID_STATE_WY = "WY",


  //County Constants, as necessary
  ID_COUNTY_LOS_ANGELES = "Los Angeles",
  ID_COUNTY_DADE_OLD = "Dade",
  ID_COUNTY_MIAMI_DADE = "Miami-Dade",

  //*************************  CODES AND LOADS STRINGS  ***********************//

  // building codes
  ID_BC_NONE = "None",
  ID_BC_ASCE_798 = "1998 ASCE7",
  ID_BC_ASCE_795 = "1995 ASCE7",
  ID_BC_ASCE_793 = "1993 ASCE7",
  ID_BC_BOCA_99 = "1999 BOCA",
  ID_BC_BOCA_99_ASCE798 = "1999 BOCA with ASCE 7-98 Wind",
  ID_BC_BOCA_99_ASCE = "1999 BOCA with ASCE 7-95 Wind",
  ID_BC_BOCA_96 = "1996 BOCA",
  ID_BC_BOCA_93 = "1993 BOCA",
  ID_BC_CALIFORNIA = "1998 California",
  ID_BC_CALIFORNIA_MBMA = "1998 California with MBMA 96 Wind",
  ID_BC_CALIFORNIA_2001 = "2001 California",
  ID_BC_CANADA_95 = "1995 National Building Code of Canada",
  ID_BC_CONNECTICUT = "1999 Connecticut",
  ID_BC_IBC_2000 = "2000 IBC",
  ID_BC_INDIANA = "Indiana",
  ID_BC_INDIANA_MBMA = "Indiana with MBMA 96 Wind",
  ID_BC_INDIANA_2003 = "2003 Indiana",
  ID_BC_KENTUCKY = "2002 Kentucky",
  ID_BC_MASSACHUSETTS = "1997 Massachusetts",
  ID_BC_MBMA_96 = "1996 MBMA",
  ID_BC_MBMA_90 = "1990 MBMA",
  ID_BC_NEW_YORK = "1998 New York",
  ID_BC_NEW_YORK_02 = "2002 New York",
  ID_BC_NORTH_CAROLINA = "2002 North Carolina",
  ID_BC_SBC_97 = "1997 SBC",
  ID_BC_SBC_97_ASCE = "1997 SBC with ASCE 7-95 Wind",
  ID_BC_SBC_94 = "1994 SBC",
  ID_BC_SBC_94_ASCE = "1994 SBC with ASCE 7-88 Wind",
  ID_BC_UBC_97 = "1997 UBC",
  ID_BC_UBC_97_MBMA = "1997 UBC with MBMA 96 Wind",
  ID_BC_UBC_94 = "1994 UBC",
  ID_BC_UBC_94_MBMA = "1994 UBC with MBMA 90 Wind",
  ID_BC_FLORIDA = "2001 Florida",
  ID_BC_WISCONSIN = "Wisconsin",

  ID_CODE_ASCE_798 = "ASCE 7-98",
  ID_CODE_ASCE_795 = "ASCE 7-95",
  ID_CODE_ASCE_793 = "ASCE 7-93",
  ID_CODE_BOCA_99 = "BOCA 99",
  ID_CODE_BOCA_96 = "BOCA 96",
  ID_CODE_BOCA_93 = "BOCA 93",
  ID_CODE_CALIFORNIA = "California (2001) w/o Amendments",
  ID_CODE_CONNECTICUT = "Connecticut (1999)",
  ID_CODE_FLORIDA = "Florida (2001)",
  ID_CODE_IBC_2000 = "IBC 2000",
  ID_CODE_INDIANA = "Indiana (2003)",
  ID_CODE_KENTUCKY = "Kentucky (2002)",
  ID_CODE_MASSACHUSETTS = "Massachusetts (1997)",
  ID_CODE_MBMA_96 = "MBMA 96",
  ID_CODE_MINNESOTA = "Minnesota",
  ID_CODE_NBCC_95 = "NBCC 95",
  ID_CODE_NEW_YORK = "New York (2002)",
  ID_CODE_NORTH_CAROLINA = "North Carolina (2002)",
  ID_CODE_OHIO = "Ohio",
  ID_CODE_RHODE_ISLAND = "Rhode Island (1999)",
  ID_CODE_SBC_97 = "SBC 97",
  ID_CODE_SBC_97_ASCE = "SBC 97 (ASCE 7-95 Wind)",
  ID_CODE_SBC_94 = "SBC 94",
  ID_CODE_SBC_94_ASCE = "SBC 94 (ASCE 7-88 Wind)",
  ID_CODE_UBC_97 = "UBC 97",
  ID_CODE_UBC_97_MBMA = "UBC 97 (MBMA 96 Wind)",
  ID_CODE_UBC_94 = "UBC 94",
  ID_CODE_UBC_94_MBMA = "UBC 94 (MBMA 90 Wind)",
  ID_CODE_WISCONSIN = "Wisconsin",
  ID_CODE_IBC_2003 = "IBC 2003",
  ID_CODE_KENTUCKY_2003 = "Kentucky (2003)",

  ID_CODE_2002_ASCE7 = "2002 ASCE7",
  ID_CODE_1998_ASCE7 = "1998 ASCE7",
  ID_CODE_1995_ASCE7 = "1995 ASCE7",
  ID_CODE_1999_BOCA = "1999 BOCA",
  ID_CODE_1996_BOCA = "1996 BOCA",
  ID_CODE_2001_CALIFORNIA = "2001 California",
  ID_CODE_1999_CONNECTICUT = "1999 Connecticut",
  ID_CODE_2001_FLORIDA = "2001 Florida",
  ID_CODE_2000_IBC = "2000 IBC",
  ID_CODE_2003_IBC = "2003 IBC",
  ID_CODE_2003_INDIANA = "2003 Indiana",
  ID_CODE_2003_KENTUCKY = "2003 Kentucky",
  ID_CODE_1997_MASSACHUSETTS = "1997 Massachusetts",
  ID_CODE_1996_MBMA = "1996 MBMA",
  ID_CODE_2003_MINNESOTA = "2003 Minnesota",
  ID_CODE_1995_NBCC = "1995 National Building Code of Canada",
  ID_CODE_2002_NEWYORK = "2002 New York",
  ID_CODE_2002_NORTHCAROLINA = "2002 North Carolina",
  ID_CODE_2002_OHIO = "2002 Ohio",
  ID_CODE_1999_RHODEISLAND = "1999 Rhode Island",
  ID_CODE_1999_SBC = "1999 SBC",
  ID_CODE_1997_SBC = "1997 SBC",
  ID_CODE_1997_SBC_ASCEWIND = "1997 SBC with ASCE7-95 Wind",
  ID_CODE_1997_UBC = "1997 UBC",
  ID_CODE_1994_UBC = "1994 UBC",
  ID_CODE_2002_WISCONSIN = "2002 Wisconsin",
  ID_CODE_2004_RHODEISLAND = "2004 Rhode Island",
  ID_CODE_2003_UTAH = "2003 Utah",
  ID_CODE_2005_OHIO = "2005 Ohio",
  ID_CODE_2007_OHIO = "2007 Ohio",
  ID_CODE_2004_OREGON = "2004 Oregon",
  ID_CODE_2004_FLORIDA = "2004 Florida",
  ID_CODE_2005_CONNECTICUT = "2005 Connecticut",
  ID_CODE_2006_NORTHCAROLINA = "2006 North Carolina",
  ID_CODE_2006_IBC = "2006 IBC",
  ID_CODE_2005_NBCC = "2005 National Building Code of Canada",
  ID_CODE_2010_NBCC = "2010 National Building Code of Canada",
  ID_CODE_2015_NBCC = "2015 National Building Code of Canada",
  ID_CODE_2007_CALIFORNIA = "2007 California",
  ID_CODE_2007_KENTUCKY = "2007 Kentucky",
  ID_CODE_2007_MINNESOTA = "2007 Minnesota",
  ID_CODE_2007_NEW_YORK = "2007 New York",
  ID_CODE_2007_OREGON = "2007 Oregon",
  //BW-689
  ID_CODE_2004_FLORIDA_06AMD = "2004 Florida with 2006 Amendments",
  ID_CODE_2007_RHODEISLAND = "2007 Rhode Island",
  ID_CODE_2008_UTAH = "2008 Utah",
  ID_CODE_2008_WISCONSIN = "2008 Wisconsin",
  ID_CODE_7TH_MASSACHUSETTS = "Massachusetts 7th Ed.",
  ID_CODE_2008_INDIANA = "2008 Indiana",
  //BW-1.1 BW-636 6-19-2008
  ID_CODE_2006_VIRGINIA = "2006 Virginia USBC",
  ID_CODE_2006_MBMA = "2006 MBMA",//* BW-742 Kevin Bottoms 06/30/2008
  ID_CODE_2006_MICHIGAN = "2006 Michigan",//* BW-1233 Kevin Bottoms 11/24/2008
  ID_CODE_2007_FLORIDA_09AMD = "2007 Florida with 2009 Amendments", //* BW-1510 Kevin Bottoms 03/11/2009
  ID_CODE_2009_NORTHCAROLINA = "2009 North Carolina",
  ID_CODE_2009_IBC = "2009 IBC",
  ID_CODE_2009_OHIO = "2009 Ohio",
  ID_CODE_2007_OHIO_09UD = "2007 Ohio (with 2009 updates)",
  ID_CODE_2010_OREGON = "2010 Oregon",
  ID_CODE_2010_RHODEISLAND = "2010 Rhode Island",
  ID_CODE_8TH_MASSACHUSETTS = "Massachusetts 8th Ed.",
  ID_CODE_2010_CALIFORNIA = "2010 California",
  ID_CODE_2010_NEW_YORK = "2010 New York",
  ID_CODE_2009_MICHIGAN = "2009 IBC with 2009 MI Amendments",
  ID_CODE_2010_RHODE_ISLAND = "2010 Rhode Island",
  ID_CODE_2009_UTAH = "2009 Utah",
  ID_CODE_2009_VIRGINIA = "2009 Virginia",
  ID_CODE_2006_VERMONT = "2006 Vermont Fire and Bldg Safety",
  ID_CODE_2007_ARKANSAS = "2007 Arkansas",
  ID_CODE_2005_CONNECTICUT_W_2009AMD = "2005 Connecticut with 2009 Amendments",
  ID_CODE_2011_OHIO = "2011 Ohio",
  ID_CODE_2012_NORTHCAROLINA = "2012 North Carolina",
  ID_CODE_WISCONSIN_IBC09 = "Wisconsin Commercial Building Code (IBC09)",
  ID_CODE_2010_FLORIDA = "2010 Florida",
  ID_CODE_2012_IBC = "2012 IBC",
  ID_CODE_2011_WISCONSIN = "2011 Wisconsin",
  ID_CODE_2012_VERMONT = "2012 Vermont Fire and Bldg Safety",
  ID_CODE_2013_CALIFORNIA = "2013 California",
  ID_CODE_2013_KENTUCKY = "2013 Kentucky",
  ID_CODE_2013_RHODE_ISLAND = "2013 Rhode Island",
  ID_CODE_2012_UTAH = "2012 Utah",
  ID_CODE_2012_ARKANSAS = "2012 Arkansas",
  ID_CODE_2012_ARKANSAS_FIRE_PREVENTION = "2012 Arkansas Fire Prevention Code Vol. II: Build",
  ID_CODE_2012_VIRGINIA_OLD = "2012 Virginia",
  ID_CODE_2014_INDIANA = "2014 Indiana",
  ID_CODE_2014_OREGON = "2014 Oregon",
  ID_CODE_2012_MICHIGAN = "2012 Michigan",
  ID_CODE_2015_IBC = "2015 IBC",
  ID_CODE_2015_MARYLAND = "2015 Maryland",
  ID_CODE_2015_MINNESOTA = "2015 Minnesota",
  ID_CODE_2014_FLORIDA = "2014 Florida",
  ID_CODE_2015_NEW_JERSEY = "IBC - New Jersey Edition, 2015",
  ID_CODE_2014_FLORIDA_5TH = "Florida Building Code, 5th Edition (2014)",
  ID_CODE_2016_UTAH = "2016 Utah",
  ID_CODE_2016_CALIFORNIA = "2016 California",
  ID_CODE_2016_NEW_YORK = "2016 New York",
  ID_CODE_2012_VIRGINIA = "2012 Virginia Uniform Statewide Building Code",
  ID_CODE_2016_CONNECTICUT = "2016 Connecticut",
  ID_CODE_2015_MICHIGAN = "2015 Michigan",
  ID_CODE_2017_OHIO = "2017 Ohio",
  ID_CODE_9TH_MASSACHUSETTS = "Massachusetts 9th Ed.",
  ID_CODE_2015_VERMONT = "2015 Vermont Fire and Bldg Safety",
  ID_CODE_2017_FLORIDA_6TH = "Florida Building Code, 6th Edition (2017)",
  ID_CODE_2018_WISCONSIN = "2018 Wisconsin",
  ID_CODE_2018_CONNECTICUT = "2018 Connecticut Building Code",
  ID_CODE_2018_NORTHCAROLINA = "2018 North Carolina State Building Code",
  ID_CODE_2018_IBC = "2018 IBC",
  ID_CODE_2018_KENTUCKY = "2018 Kentucky Building Code",
  ID_CODE_2019_CALIFORNIA = "2019 California Building Code",
  ID_CODE_2020_NEW_YORK = "2020 New York",
  ID_CODE_2020_MINNESOTA = "2020 Minnesota",
  ID_CODE_2018_MARYLAND = "2018 Maryland",
  ID_CODE_2018_NEW_JERSEY = "IBC - New Jersey Edition, 2018",
  ID_CODE_2019_OREGON = "2019 Oregon",
  ID_CODE_2019_RHODE_ISLAND = "2019 Rhode Island",
  ID_CODE_2019_UTAH = "2019 Utah",
  ID_CODE_2015_VIRGINIA = "2015 Virginia Uniform Statewide Building Code",

  // escarpment
  ID_2D_ESCARPMENT = "2D Escarpments",
  ID_2D_RIDGES_OR_VALLEYS = "2D Ridges or Valleys",
  ID_3D_AXISYMMETRICAL_HILLS = "3D Axisymmetrical Hills",



  // project use category
  ID_USE_AGRICULTURAL = "Agricultural",
  ID_USE_COMMERCIAL = "Commercial",
  ID_USE_GOVERNMENTAL = "Governmental",

  // enclosure conditions
  ID_ENCLOSURE_SC_OPEN = "Calculated - Open",
  ID_ENCLOSURE_SC_ENCLOSED = "Calculated - Enclosed",
  ID_ENCLOSURE_SC_PARTIALLY = "Calculated - Partially Enclosed",
  ID_ENCLOSURE_SC_PARTOPEN = "Calculated - Partially Open",
  ID_ENCLOSURE_PARTIALLY = "Partially Enclosed",
  ID_ENCLOSURE_SC_TBD = "Calculated - TBD",		// NBS-852 08/13/2007 Kevin Bottoms NCI Beta v3.7
  ID_ENCLOSURE_SYSTEM_CALCULATED = "System Calculated",		/* S.Hathaway 09-24-2010 BW-2751 */

  // exposure options
  ID_EXPOSURE_D = "Exposure D",
  ID_EXPOSURE_C = "Exposure C",
  ID_EXPOSURE_B = "Exposure B",

  // live load reduction
  ID_LL_REDUCTION_YES = "Yes",
  ID_LL_REDUCTION_NO = "No",

  // occupancy options
  ID_OCCUPANCY_LOW = "Low",
  ID_OCCUPANCY_HIGH_CANADA = "High",
  ID_OCCUPANCY_NORMAL = "Normal",
  ID_OCCUPANCY_ESSENTIAL = "Essential",
  ID_OCCUPANCY_HIGH_HAZARD = "High Hazard",
  ID_OCCUPANCY_LOW_HAZARD = "Low Hazard",
  ID_OCCUPANCY_300_PEOPLE = ">300 People",
  ID_OCCUPANCY_AGRICULTURAL = "Agricultural",
  ID_OCCUPANCY_POST_DISASTER = "Post Disaster",

  ID_OCCUPANCY_HIGH = "High Occupancy",
  ID_OCCUPANCY_HAZARDOUS = "Hazardous Facility",
  ID_OCCUPANCY_SPECIAL = "Special Occupancy",

  ID_OCCUPANCY_IBC_NORMAL = "I - Normal",
  ID_OCCUPANCY_IBC_HIGH = "II - High Occupancy",
  ID_OCCUPANCY_IBC_ESSENTIAL = "III - Essential",
  ID_OCCUPANCY_IBC_AGRICULTURAL = "IV - Agricultural",

  ID_OCCUPANCY_IBC2000_NORMAL = "I - Normal",
  ID_OCCUPANCY_IBC2000_HIGH = "II - High Occupancy",
  ID_OCCUPANCY_IBC2000_ESSENTIAL = "III - Essential",
  ID_OCCUPANCY_IBC2000_AGRICULTURAL = "IV - Agricultural",

  ID_OCCUPANCY_IBC2003_NORMAL = "II - Normal",
  ID_OCCUPANCY_IBC2003_HIGH = "III - High Occupancy",
  ID_OCCUPANCY_IBC2003_ESSENTIAL = "IV - Essential",
  ID_OCCUPANCY_IBC2003_AGRICULTURAL = "I - Agricultural",

  ID_OCCUPANCY_ASCE7_LOW_HAZARD = "I - Low Hazard", //* BW-403 Add string define for low hazard.
  ID_OCCUPANCY_IBC2012_HIGH = "III - High",


  // seismic zones
  ID_ZONE_6 = "Zone 6",
  ID_ZONE_5 = "Zone 5",
  ID_ZONE_4 = "Zone 4",
  ID_ZONE_3 = "Zone 3",
  ID_ZONE_2 = "Zone 2",
  ID_ZONE_2B = "Zone 2b",
  ID_ZONE_2A = "Zone 2a",
  ID_ZONE_1 = "Zone 1",
  ID_ZONE_0 = "Zone 0",

  ID_Z_0 = "0",
  ID_Z_1 = "1",
  ID_Z_2 = "2",
  ID_Z_3 = "3",
  ID_Z_4 = "4",
  ID_Z_5 = "5",
  ID_Z_6 = "6",

  // seismic snow
  ID_PERCENT_SL_NORMAL = "Normal",

  // snow exposures
  ID_SNOW_ALL_OTHER_CASES = "All Other Cases",
  ID_SNOW_SHELTERED = "Sheltered",
  ID_SNOW_CLEAR = "Clear",
  ID_SNOW_OPEN_TERRAIN = "Open Terrain",
  ID_SNOW_DENSELY_FORRESTED = "Densely Forrested",
  ID_SNOW_PARTIALLY_EXPOSED = "Partially Exposed",
  ID_SNOW_FULLY_EXPOSED = "Fully Exposed",

  ID_SNOW_NORMAL = "Normal Exposure",
  ID_SNOW_HEAVILY_FORESTED = "Heavily Forested",
  ID_SNOW_OT_NO_SHELTER = "Open Terrain No Shelter",
  ID_SNOW_OT_LITTLE_SHELTER = "Open Terrain Little Shelter",
  ID_SNOW_EXPOSED_LOCATION = "Exposed Location",
  ID_SNOW_TREE_LINE = "North of Tree Line",

  // snow load types
  ID_SNOW_LOAD_GROUND = "Ground",
  ID_SNOW_LOAD_ROOF = "Roof",

  // soil types
  ID_SOIL_A_HARD_ROCK = "(A) Hard Rock",
  ID_SOIL_B_ROCK = "(B) Rock",
  ID_SOIL_C_SOFT_ROCK = "(C) Very Dense Soil & Soft Rock",
  ID_SOIL_D_STIFF = "(D) Stiff Soil",
  ID_SOIL_E = "(E) Soil",
  ID_SOIL_F_EVALUATION = "(F) Soil Requires Site Evaluation",
  ID_SOIL_S1_ROCK = "(S1) Rock",
  ID_SOIL_S2_STIFF_CLAY = "(S2) Stiff Clay",
  ID_SOIL_S3_MEDIUM_CLAY = "(S3) Soft to Medium Stiff Clay",
  ID_SOIL_S4_SOFT_CLAY = "(S4) Soft Clay",
  ID_SOIL_SA_HARD_ROCK = "(SA) Hard Rock",
  ID_SOIL_SB_ROCK = "(SB) Rock",
  ID_SOIL_SC_SOFT_ROCK = "(SC) Very Dense Soil & Soft Rock",
  ID_SOIL_SD_STIFF = "(SD) Stiff Soil",
  ID_SOIL_SE = "(SE) Soil",
  ID_SOIL_SF_EVALUATION = "(SF) Soil Requires Site Evaluation",
  ID_SOIL_1_DENSE_GRAIN = "(1) Rock, dense/very dense coarse-grain(0-15M)",
  ID_SOIL_2_COMPACT_GRAIN = "(2) Compact coarse-grain(0-15M)",
  ID_SOIL_3_LOOSE_GRAIN = "(3) Very loose & loose coarse-grain(>15M)",
  ID_SOIL_4_FINE_GRAIN = "(4) Very soft & soft fine-grain(>15M)",

  ID_SOIL_E_SOFT = "(E) Soft Soil",

  // thermal factors		
  ID_THERMAL_HEATED = "Heated",
  ID_THERMAL_UNHEATED = "Unheated",
  ID_THERMAL_ABOVE_FREEZING = "Above Freezing",
  ID_THERMAL_ALL_OTHERS = "All Others",
  ID_THERMAL_KEPT_BELOW = "Kept Below Freezing",
  ID_THERMAL_FREEZER_BUILDINGS = "Freezer Buildings",


  // wind load types			
  ID_WIND_LOAD_MPH = "mph",
  ID_WIND_LOAD_PSF = "psf",

  // wind category
  ID_WIND_INLAND = "Inland",
  ID_WIND_COASTAL = "Coastal",

  ID_ANCHOR_ROD_58 = "5/8",
  ID_ANCHOR_ROD_34 = "3/4",

  //*************************  BUILDING INPUT STRINGS  ***********************//

  // building type
  ID_BLDG_STAND_ALONE = "Stand Alone",
  ID_BLDG_ATTACHMENT = "Attachment",

  ID_PURLIN_LBP = "LBP",
  ID_LBP_BOTTOM_CHORD = "Bottom Chord",
  ID_LBP_TOP_CHORD = "Top Chord",

  // bracing types    =                 ,
  ID_BRACING_ANGLE = "Angle",
  ID_BRACING_ROD = "Rod",
  ID_BRACING_CABLE = "Cable",
  ID_BRACING_PFRAME = "Portal Frame",
  ID_BRACING_FBBC = "Fixed Base Bracing Column",
  ID_BRACING_FBBC_TYPE_I = "FBBC Type I",
  ID_BRACING_FBBC_TYPE_II = "FBBC Type II",
  ID_BRACING_FBBC_TYPE_ERROR = "FBBC Error",

  ID_BRACING_DIAPHRAGM = "Diaphragm Action",
  ID_BRACING_ANGLES = "Angles",
  ID_BRACING_STRAPS = "Straps",
  ID_BRACING_NONE = "None",
  ID_BRACING_NOBAYS = "No Bays",
  ID_BRACING_BYOTHERS = "By Others",
  ID_BRACING_PURLINFLANGEBRACING = "T & B Flg",
  ID_BRACING_PURLIN_TBA_BRACING = "TBA", //BW-5752: Synch with EDS 5.07: Replaces obsolete ID_BRACING_PURLINFLANGEBRACING


  ID_BRACING_RACKTOFRAME = "Rack to Frame",
  ID_BRACING_TRANSFER_WALL = "Transfer to Opposite Wall",
  ID_BRACING_TRANSFER_BUILDING = "Transfer to Main Building",

  //BEGIN BW-5709: Color Alignment (BWX v6.03): NEW COLORS - Consider all other color string defines as obsolete
  //Finish Keys
  ID_COLOR_SIG200_KEY = "200",				//Common definition of Signature 200 (S200) finish
  ID_COLOR_SIG300_KEY = "300",		//Common definition of Signature 300 (S300) finish
  ID_COLOR_SPECIAL_KEY = "Special",			//Common definition of Special finish

  ID_FINISH_GALVALUME_PLUS = "Galvalume Plus",	// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06

  //S200 Colors
  ID_COLOR_SIG200_POLAR_WHITE = "S200 Polar White",	//Replaced "Polar White"			// added for all 6-23-2006
  ID_COLOR_SIG200_LIGHT_STONE = "S200 Light Stone",	//Replaced "Light Stone"			// added for all 6-23-2006
  ID_COLOR_SIG200_ASH_GRAY = "S200 Ash Gray",//Replaced "Ash Gray"				// added for all 6-23-2006
  ID_COLOR_SIG200_SADDLE_TAN = "S200 Saddle Tan",//Replaced "Saddle Tan"			// added for all 6-23-2006
  ID_COLOR_SIG200_HAWAIIAN_BLUE = "S200 Hawaiian Blue",		//Replaced "Hawaiian Blue"			// added for all 6-23-2006
  ID_COLOR_SIG200_FERN_GREEN = "S200 Fern Green",	//Replaced "Fern Green"			// added for all 6-23-2006
  ID_COLOR_SIG200_CHARCOAL_GRAY = "S200 Charcoal Gray",	//Replaced "Charcoal Gray"			// added for all 6-23-2006
  ID_COLOR_SIG200_BURNISHED_SLATE = "S200 Burnished Slate",	//Replaced "Burnished Slate"		// added for all 6-23-2006
  ID_COLOR_SIG200_RUSTIC_RED = "S200 Rustic Red",//Replaced "Rustic Red"			// added for Ceco 7-9-2006
  ID_COLOR_SIG200_CRIMSON_RED = "S200 Crimson Red",	//Replaced "Crimson Red"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG200_DESERT_SAND = "S200 Desert Sand",	//Replaced "Desert Sand"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG200_KOKO_BROWN = "S200 Koko Brown",//Replaced "Koko Brown"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG200_COAL_BLACK = "S200 Coal Black",//Replaced "Coal Black"			// added -dkbrooks 04.02.2007
  ID_COLOR_SIG200_SOLAR_WHITE = "S200 Solar White",	//Replaced "Solar White"			// Kevin Bottoms 04/15/2009 added for BW-1501.
  ID_COLOR_SIG200_WINTER_WHITE = "S200 Winter White",	//Replaced "Winter White"			// BW-4003 - For IMP panels, Snow white is now replaced with Winter White.
  ID_COLOR_SIG200_COBALT_BLUE = "S200 Cobalt Blue",	//Replaced  "Cobalt Blue"			// BW-4154
  ID_COLOR_SIG200_STD_TBD = "S200 Standard TBD",	//Replaced "SIG - 200 STD TBD"
  ID_COLOR_SIG200_IGLOO_WHITE = "S200 Igloo White",	//Replaced "Igloo White"
  //BW-6874: Corrections to DBCI door offerings - New Colors
  ID_COLOR_SIG200_HIGH_GLOSS_WHITE = "S200 High Gloss White",
  ID_COLOR_SIG200_S200_SILHOUETTE_GRAY = "S200 Silhouette Gray",

  //S300 Colors
  ID_COLOR_SIG300_AEGEAN_BLUE = "S300 Aegean Blue",	//Replaced "Aegean Blue*"				// BW-3849 - JDM
  ID_COLOR_SIG300_SNOW_WHITE = "S300 Snow White",		//Replaced "Snow White*"
  ID_COLOR_SIG300_ALMOND = "S300 Almond",	//Replaced "Almond*"
  ID_COLOR_SIG300_SLATE_GRAY = "S300 Slate Gray",	//Replaced "Slate Gray*"
  ID_COLOR_SIG300_CLASSIC_GREEN = "S300 Classic Green",	//Replaced "Classic Green*"
  ID_COLOR_SIG300_PACIFIC_BLUE = "S300 Pacific Blue",	//Replaced "Pacific Blue*"
  ID_COLOR_SIG300_COLONIAL_RED = "S300 Colonial Red",	//Replaced "Colonial Red*"
  ID_COLOR_SIG300_MEDIUM_BRONZE = "S300 Medium Bronze",	//Replaced "Medium Bronze*"
  ID_COLOR_SIG300_NATURAL_PATINA = "S300 Natural Patina",	//Replaced "Natural Patina*"
  ID_COLOR_SIG300_POLAR_WHITE = "S300 Polar White",		//Replaced "Kynar Polar White*"		// BW-3849 - JDM
  ID_COLOR_SIG300_REGAL_GRAY = "S300 Regal Gray",	//Replaced "Regal Gray*"				// BW-3849 - JDM
  ID_COLOR_SIG300_SMOKE_GRAY = "S300 Smoke Gray",	//Replaced "Smoke Gray*"				// BW-3849 - JDM
  ID_COLOR_SIG300_SANDSTONE = "S300 Sandstone",//Replaced "Sandstone*"
  ID_COLOR_SIG300_BROWNSTONE = "S300 Brownstone",	//Replaced "Brownstone*"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_EVERGLADE = "S300 Everglade",//Replaced "Everglade*"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_HARBOR_BLUE = "S300 Harbor Blue",		//Replaced "Harbor Blue*"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_HUNTER_GREEN = "S300 Hunter Green",	//Replaced "Hunter Green*"			// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_MIDNIGHT_BRONZE = "S300 Midnight Bronze",	//Replaced "Midnight Bronze*"		// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_BRITE_RED = "S300 Brite Red",	//Replaced "Brite Red*"			// Justin Martin 01-11-10 added for BW-2337
  ID_COLOR_SIG300_SPRUCE = "S300 Spruce",			//Replaced "Spruce*"				// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_TERRA_COTTA = "S300 Terra Cotta",	//Replaced "Terra Cotta*"				// BW-3849 - JDM
  ID_COLOR_SIG300_TUNDRA = "S300 Tundra",			//Replaced "Tundra*"				// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_BONE_WHITE = "S300 Bone White",		//Replaced "Bone White*"			// Kevin Bottoms 04/15/2009 added for BW-1501.
  ID_COLOR_SIG300_STD_TBD = "S300 Standard TBD",	//Replaced "SIG - 300 STD TBD*"

  //Tuff Finishes and Colors
  ID_COLOR_TUFFCOTE_TBD = "Tuff Cote Std. TBD",
  //END BW-5709: Color Alignment (BWX v6.03)


  // colors (BW-5709: Note: All string defines below relating to color and finish should be considered Obsolete)
  ID_COLOR_ALUM_ZINC = "Alum-Zinc",
  ID_COLOR_ASPEN_GOLD = "Aspen Gold",
  ID_COLOR_BRICK_RED = "Brick Red",
  ID_COLOR_BURNISHED_SLATE = "Burnished Slate",
  ID_COLOR_CHARCOAL_GRAY = "Charcoal Gray",
  ID_COLOR_COAL_BLACK = "Coal Black",
  ID_COLOR_FERN_GREEN = "Fern Green",
  ID_COLOR_GALVALUME = "Galvalume",
  ID_COLOR_HAWAIIAN_BLUE = "Hawaiian Blue",
  ID_COLOR_IMPERIAL_WHITE = "Imperial White",
  ID_COLOR_KOKO_BROWN = "Koko Brown",
  ID_COLOR_LIGHT_STONE = "Light Stone",
  ID_COLOR_OCEAN_BLUE = "Ocean Blue",
  ID_COLOR_POLAR_WHITE = "Polar White",
  ID_COLOR_RUSTIC_RED = "Rustic Red",
  ID_COLOR_SAHARA_TAN = "Sahara Tan",
  ID_COLOR_SAND_BEIGE = "Sand Beige",
  ID_COLOR_SANDSTONE = "Sandstone",
  ID_COLOR_SHELL_WHITE = "Shell White",
  ID_COLOR_SLATE_BRONZE = "Slate Bronze",
  ID_COLOR_STONE_GRAY = "Stone Gray",
  ID_COLOR_SURREY_BEIGE = "Surrey Beige",
  ID_COLOR_KYNAR_ALMOND = "Almond*",
  ID_COLOR_KYNAR_ASH_GRAY = "Ash Gray*",
  ID_COLOR_KYNAR_BRANDYWINE = "Brandywine*",
  ID_COLOR_KYNAR_BROWN_STONE = "Brown Stone*",
  ID_COLOR_KYNAR_CLASSIC_GREEN = "Classic Green*",
  ID_COLOR_KYNAR_COLONIAL_RED = "Colonial Red*",
  ID_COLOR_KYNAR_DARK_BRONZE = "Dark Bronze*",
  ID_COLOR_KYNAR_EVERGLADE = "Everglade*",
  ID_COLOR_KYNAR_EVERGREEN = "Evergreen*",
  ID_COLOR_KYNAR_HARBOR_BLUE = "Harbor Blue*",
  ID_COLOR_KYNAR_HUNTER_GREEN = "Hunter Green*",
  ID_COLOR_KYNAR_MEDIUM_BRONZE = "Medium Bronze*",
  ID_COLOR_KYNAR_MIDNIGHT_BRONZE = "Midnight Bronze*",
  ID_COLOR_KYNAR_NATURAL_PATINA = "Natural Patina*",
  ID_COLOR_KYNAR_PACIFIC_BLUE = "Pacific Blue*",
  ID_COLOR_KYNAR_PATINA_GREEN = "Patina Green*",
  ID_COLOR_KYNAR_PATRICIAN_BRONZE = "Patrician Bronze*",
  ID_COLOR_KYNAR_REGAL_BLUE = "Regal Blue*",
  ID_COLOR_KYNAR_REGAL_WHITE = "Regal White*",
  ID_COLOR_KYNAR_RIVER_TEAL = "River Teal*",
  ID_COLOR_KYNAR_RUSTIC_RED = "Rustic Red*",
  ID_COLOR_KYNAR_SCARLET_RED = "Scarlet Red*",
  ID_COLOR_KYNAR_SEAL_BROWN = "Seal Brown*",
  ID_COLOR_KYNAR_SEA_MIST = "Sea Mist*",
  ID_COLOR_KYNAR_SLATE_BLUE = "Slate Blue*",
  ID_COLOR_KYNAR_SLATE_GRAY = "Slate Gray*",
  ID_COLOR_KYNAR_SMOKEY_BLUE = "Smokey Blue*",
  ID_COLOR_KYNAR_SNOW_WHITE = "Snow White*",
  ID_COLOR_KYNAR_SPRUCE = "Spruce*",
  ID_COLOR_KYNAR_SURREY_BEIGE = "Surrey Beige*",
  ID_COLOR_KYNAR_TEAL = "Teal*",
  ID_COLOR_KYNAR_TUNDRA = "Tundra*",
  ID_COLOR_LINER_WHITE = "Liner White",
  ID_COLOR_BRONZE = "Bronze",
  ID_COLOR_CLASSIC_GREEN = "Classic Green",			// added for RBS
  ID_COLOR_REGAL_WHITE = "Regal White",// added for RBS
  ID_COLOR_FOREST_GREEN = "Forest Green",	// added for RBS
  ID_COLOR_SNOW_WHITE = "Snow White",// added for RBS
  ID_COLOR_LZC_GALVANIZED = "LZC Galv.",	// added for RBS RTS panel
  ID_COLOR_G_90_GALVANIZED = "G-90 Galv.",	// added for RBS RTS panel
  ID_COLOR_BONE_WHITE = "Bone White",// added for RBS RTS panel
  ID_COLOR_SEDONA_TAN = "Sedona Tan",

  //* BW-269 Added colors for new color options.
  ID_COLOR_KYNAR_ANTIQUE_BRONZE = "Antique Bronze*",
  ID_COLOR_KYNAR_ASCOT_WHITE = "Ascot White*",
  ID_COLOR_KYNAR_DOVE_GRAY = "Dove Gray*",
  ID_COLOR_KYNAR_OLD_TOWN_GRAY = "Old Town Gray*",
  ID_COLOR_KYNAR_PARCHMENT = "Parchment*",
  ID_COLOR_KYNAR_RAWHIDE = "Rawhide*",
  ID_COLOR_KYNAR_REDWOOD = "Redwood*",
  ID_COLOR_KYNAR_SPARTAN_BRONZE = "Spartan Bronze*",
  ID_COLOR_KYNAR_TAHOE_BLUE = "Tahoe Blue*",
  ID_COLOR_KYNAR_ZINC_GRAY = "Zinc Gray*",

  ID_COLOR_RBS_STANDARD = "Standard",				// added for RBS
  ID_COLOR_RBS_PREMIUM = "Premium",				// added for RBS
  ID_COLOR_SBS_SILICON = "Sil-Poly",				// added for SBS
  ID_COLOR_SBS_KYNAR = "Kynar",				// added for SBS




  //BEGIN Obsolete Colors?
  ID_COLOR_SIG200_DRIFTWOOD = "Driftwood",	// BW-3080: Added color - JTH 7/13/11
  ID_COLOR_SIG200_AZTEC_GOLD = "Aztec Gold",		// added for all 6-23-2006
  ID_COLOR_SIG200_COLONY_GREEN = "Colony Green",		// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG200_GALLERY_BLUE = "Gallery Blue",		// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG200_COOL_ROOF_SOLAR_WHITE = "Cool Roof Solar White",// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG200_TBD = "To Be Determined",	// Kevin Bottoms 11-27-06 added as per document CRD4A
  ID_COLOR_SIG200_TBD_COLOR = "SIG - 200 TBD",	// Kevin Bottoms 1-5-07
  ID_COLOR_SIG200_TBD_COLOR_SEL = "SIG - 200 TBD(select from above colors)",
  ID_COLOR_SIG200_WHITE = "White",			// Kevin Bottoms 1-17-07
  ID_COLOR_SIG200_WHITE_EMBOSSED = "Polar White-Embossed",// NBS-491 05-25-2007 Kevin Bottoms Beta v3.3 // BW-3201 - Added "Polar "
  ID_COLOR_SIG200_WHITE_SMOOTH = "Polar White-Smooth",// NBS-491 05-25-2007 Kevin Bottoms Beta v3.3 // BW-3201 - Added "Polar "
  ID_COLOR_SIG200_PRM_TBD = "SIG - 200 PRM TBD^",

  ID_COLOR_SIG300_DRIFTWOOD = "Driftwood*",	// BW-3080: Added color - JTH 7/13/11
  ID_COLOR_SIG300_ROCK_TAN = "Rock Tan*",	// BW-3080: Added color - JTH 7/13/11
  ID_COLOR_SIG300_TAUPESTONE = "Taupestone*",		// BW-3080: Added color - JTH 7/13/11
  ID_COLOR_SIG300_RIVER_TEAL = "River Teal*",		// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_SCARLET_RED = "Scarlet Red*",		// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_SEA_MIST = "Sea Mist*",		// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_COOL_ROOF_BONE_WHITE = "Cool Roof Bone White*",	// Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_COLOR_SIG300_TBD = "To Be Determined*",	// Kevin Bottoms 11-27-06 added as per document CRD4A
  ID_COLOR_SIG300_TBD_COLOR = "SIG - 300 TBD*",	// Kevin Bottoms 1-5-07
  ID_COLOR_SIG300_TBD_COLOR_SEL = "SIG - 300 TBD*(select from above colors)",

  ID_COLOR_SIG300_STD_I_TBD = "SIG - 300 STD I TBD*",
  ID_COLOR_SIG300_STD_II_TBD = "SIG - 300 STD II TBD*^",
  ID_COLOR_SIG300_PRM_TBD = "SIG - 300 PRM TBD*^",

  //END Obsolete Colors?

  ID_COLOR_SIG200_STD_CATEGORY = "Sig-200 STD",
  ID_COLOR_SIG200_PRM_CATEGORY = "Sig-200 PRM",
  ID_COLOR_SIG300_STD_I_CATEGORY = "Sig-300 STD I",
  ID_COLOR_SIG300_STD_II_CATEGORY = "Sig-300 STD II",
  ID_COLOR_SIG300_PRM_CATEGORY = "Sig-300 PRM",

  ID_COLOR_SILICON = "Sil-Poly",		// added for all 6-23-2006
  ID_COLOR_KYNAR = "Kynar",			// added for all 6-23-2006

  ID_FINISH_SIG_200 = "SIG - 200",				// added 6-30-2006
  ID_FINISH_SIG_300 = "SIG - 300",				// added 6-30-2006

  ID_COLOR_CECO_STANDARD = "Standard",					// added for Ceco
  ID_COLOR_CECO_KYNAR = "Kynar",		// added for Ceco
  ID_COLOR_CECO_GALVALUME = "Galvalume",				// added for Ceco
  ID_COLOR_CECO_EMBOSSED = "Embossed",			// added for Ceco	

  ID_COLOR_CECO_GLACIER_WHITE = "Glacier White",		// added for Ceco
  ID_COLOR_CECO_SAND_GOLD = "Sand Gold",		// added for Ceco
  ID_COLOR_CECO_MIDNIGHT_BLUE = "Midnight Blue",			// added for Ceco
  ID_COLOR_CECO_BURNISHED_SLATE = "Burnished Slate",		// added for Ceco
  ID_COLOR_CECO_LIGHTSTONE = "Lightstone",	// added for Ceco
  ID_COLOR_CECO_SURREY_TAN = "Surrey Tan",		// added for Ceco
  ID_COLOR_CECO_ASH_GRAY = "Ash Gray",		// added for Ceco
  ID_COLOR_CECO_EMERALD_GREEN = "Emerald Green",			// added for Ceco
  ID_COLOR_CECO_SNOW_WHITE = "Snow White",		// added for Ceco
  ID_COLOR_CECO_SLATE_GRAY = "Slate Gray",		// added for Ceco
  ID_COLOR_CECO_NATURAL_PATINA = "Natural Patina",		// added for Ceco
  ID_COLOR_CECO_CLASSIC_GREEN = "Classic Green",		// added for Ceco
  ID_COLOR_CECO_ALMOND = "Almond",		// added for Ceco
  ID_COLOR_CECO_MEDIUM_BRONZE = "Medium Bronze",			// added for Ceco
  ID_COLOR_CECO_PACIFIC_BLUE = "Pacific Blue",		// added for Ceco
  ID_COLOR_CECO_COLONIAL_RED = "Colonial Red",		// added for Ceco	
  ID_COLOR_CECO_TBD = "To Be Determined",	// added for Ceco

  ID_FINISH_APPLIED_FINISH = "Applied Finish",

  // Primer Types - Added 10/17/2006 bts
  ID_PRIMER_DARK_BROWN = "Dark Brown",	// New Primer 
  ID_PRIMER_DARK_GRAY = "Dark Gray",			// New Primer
  ID_PRIMER_RED = "Red",
  ID_PRIMER_GRAY = "Gray",
  ID_PRIMER_HOT_DIPPED = "Hot-Dipped",		// BW-3153 - JDM


  // common wall for attachments
  ID_COMMONWALL_OPEN = "Open",
  ID_COMMONWALL_SHEETED = "Sheeted",

  // endwall column spacing
  ID_COLSPACING_STANDARD = "Standard",
  ID_COLSPACING_ALTERNATE = "Alternate",
  ID_COLSPACING_MIXED = "Mixed",
  ID_COLSPACING_OPEN = "Open",

  // endwall types
  ID_ENDWALL_POST_BEAM_OLD = "Post and Beam",
  ID_ENDWALL_BEARING_HOT_ROLLED_OLD = "Bearing Hot Rolled",		// BW-5722 - Switching with Bearing Frame
  ID_ENDWALL_NONEXPANDABLE_BF_OLD = "Non-Expandable Bearing Frame",	// BW-5722 - Switching with Bearing Frame
  ID_ENDWALL_NONEXPANDABLE_FRAME_OLD = "Non-Expandable Frame",
  ID_ENDWALL_HALF_LOAD_OLD = "Half-Load Frame",			// BW-3463 Added for Star
  ID_ENDWALL_NOT_BY_STAR_OLD = "Not By Star",
  ID_ENDWALL_NOT_BY_ROBERTSON_OLD = "Not By Robertson",			// added for RBS
  ID_ENDWALL_NOT_BY_CECO_OLD = "Not By Ceco",		// added for Ceco
  ID_ENDWALL_POST_BEAM_PB_OLD = "Post and Beam (PB)",		// added for Ceco
  ID_ENDWALL_BEARING_HOT_ROLLED_BF_OLD = "Bearing Hot Rolled (BF)",	// BW-5722 - Switching with Bearing Frame	
  ID_ENDWALL_EXPANDABLE_FRAME_RF_OLD = "Expandable Frame (RF)",	// added for Ceco
  ID_ENDWALL_NONEXPANDABLE_FRAME_HRF_OLD = "Non-Expandable Frame (HRF)",	// added for Ceco	
  ID_ENDWALL_BEARING_FRAME_OLD = "Bearing Frame *",		// added for NBS by Kevin Bottoms per Document CRD3A 11-11-06
  ID_ENDWALL_BEARING_FRAME_COLD_FORM_OLD = "Bearing Frame Cold Formed",		// BW-5722 - Switching with Bearing Frame-Cold Form
  ID_ENDWALL_NONEXPANDABLE_FRAME_NCI_OLD = "Non-Expandable Frame *",	// added for NBS by Kevin Bottoms per Document CRD3A 11-11-06
  ID_ENDWALL_EXPANDABLE_FRAME_NCI_OLD = "Expandable Frame *",	// added for NBS by Kevin Bottoms per Document CRD3A 11-11-06
  ID_ENDWALL_LEDGER_MEMBER_OLD = "Ledger Member - Open to Roof",	// BW-5722 - Switching with Ledger Member
  ID_ENDWALL_NO_FRAME_OLD = "No Frame - Endwall Tie-In",	// BW-5722 - Switching with Existing/By Others
  ID_ENDWALL_TIEIN = "Tie-In Trim",				// added for NBS by Kevin Bottoms per Document CRD3B 11-14-06

  ID_ENDWALL_POST_BEAM_FRAME_OLD = "Post and Beam Frame",		// BW-5722 - Switching with Bearing Frame
  ID_ENDWALL_FULL_LOAD_POST_AND_BEAM_OLD = "Full Load Post and Beam",
  ID_ENDWALL_HALF_LOAD_MAIN_FRAME_OLD = "Half Load Main Frame",			// BW-5722 - Switching with Non-Expandable Frame
  ID_ENDWALL_FULL_LOAD_MAIN_FRAME_OLD = "Full Load Main Frame",		// BW-5722 - Switching with Expandable Frame


  ID_ENDWALL_HIPPED = "Hipped Endwall",

  // BW - 5722 - Adding new Endwall Terms - JDM
  ID_ENDWALL_TYPE_BEARING_FRAME_COLD_FORM = "Bearing Frame-Cold Form",
  ID_ENDWALL_TYPE_BEARING_FRAME = "Bearing Frame",
  ID_ENDWALL_RIGID_BEARING = "Rigid Bearing Frame",
  ID_ENDWALL_TYPE_NON_EXPANDABLE_FRAME = "Non-Expandable Frame",
  ID_ENDWALL_EXPANDABLE_FRAME = "Expandable Frame",
  ID_ENDWALL_TYPE_LEDGER_MEMBER = "Ledger Member",
  ID_ENDWALL_EXISTING_BY_OTHERS = "Existing/By Others",
  // End adding new Endwall Terms

  // frame column types
  ID_COL_TAPERED = "Tapered",
  ID_COL_STRAIGHT = "Straight",
  ID_COL_STRAIGHT_TB = "Straight - TB",
  ID_COL_UNSUPPORTED = "Unsupported",

  // frame types
  ID_FRAME_SYMMETRICAL = "Symmetrical",
  ID_FRAME_NONSYMMETRICAL = "Non-Symmetrical",
  ID_FRAME_SINGLE_SLOPE = "Single Slope",
  ID_FRAME_LEANTO = "Lean-to",

  // girt types
  ID_GIRT_EXT = "Exterior",
  ID_GIRT_OUTSET = "1\" Outset",
  ID_GIRT_FLUSH = "Flush",
  ID_GIRT_BYPASS = "Bypass",			// added for Ceco
  ID_GIRT_INSET = "Inset",		// added for Ceco

  ID_GIRT_OPTIMIZE = "Optimize",	//* BW-1366 Add option for optimal depth.

  // Cold-form Types
  ID_COLDFORM_TYPE_STAR = "Star Cold-form and Bolted Connections",
  ID_COLDFORM_TYPE_CECO = "Ceco Cold-form and Bolted Connections",
  ID_COLDFORM_TYPE_ROBERTSON = "Robertson Cold-form and Bolted Connections",
  ID_COLDFORM_TYPE_MBCI = "MBCI Cold-form and Welded Connections",

  // BW-2718 New Black and Plated String defines for Bolt Finish Justin D Martin  9/2/10
  ID_BOLT_FINISH_BLACK = "Black",
  ID_BOLT_FINISH_PLATED = "Plated",
  ID_BOLT_FINISH_UNPAINTED = "Unpainted",// BW-3168 "Unpainted" to replace "Black"

  // interior column types
  ID_INTCOL_PIPE = "Pipe",
  ID_INTCOL_TUBE = "Tube",
  ID_INTCOL_HOT_ROLLED = "Hot Rolled",
  ID_INTCOL_BUILT_UP_PLATE = "Built Up Plate",
  ID_INTCOL_MOSTECONOMICAL = "Most Economical",// added 02.10.2006 -dkb
  ID_INTCOL_MANUFACTURERSOPTION = "Manufacturers Option",	// added 06/29/2010 - BW-2456 Justin D Martin
  ID_INTCOL_PIPE_COL = "Pipe Col",			// added 02.10.2006 -dkb
  ID_INTCOL_TUBE_COL = "Tube Col",				// added 02.10.2006 -dkb

  ID_INT_COL_FIXED = "Fixed",
  ID_INT_COL_PINNED = "Pinned",

  // not by star or not by robertson roof
  ID_ROOF_NBS_BUILT_UP = "Built Up",
  ID_ROOF_NBS_STANDING_SEAM = "Standing Seam",
  ID_ROOF_NBS_SCREW_DOWN = "Screw Down",

  //Kevin Bottoms added 2-2-2007 for NCI Project
  ID_ROOF_PAN_STANDING_SEAM = "Pan Standing Seam",
  ID_ROOF_TRAPEZOIDAL_STANDING_SEAM = "Trapezoidal Standing Seam",
  ID_ROOF_THROUGH_FASTENED = "Through-Fastened",
  ID_ROOF_OTHER_SEAM = "Other",

  //OE Category IDs
  ID_OE_CATEGORY_BUILTUP = 1,	// Builtup (Structural)
  ID_OE_CATEGORY_FAB_COLDFORMED = 2,// Fabricated Cold-Formed
  ID_OE_CATEGORY_COLDFORMED = 3,	// Cold-Formed
  ID_OE_CATEGORY_HOTROLLED = 4,	// Hot-Rolled Mill Shapes
  ID_OE_CATEGORY_SSR_PANELS = 5,	// SSR Panels
  ID_OE_CATEGORY_TRIM = 6,// Sheet Metal (Trim)
  ID_OE_CATEGORY_HARDWARE = 7,// Hardware/Warehouse
  ID_OE_CATEGORY_BUYOUTS = 10,// Buyouts (Includes IMP Panels)
  ID_OE_CATEGORY_MBCI_NON_SSR_PANELS = 51,// MBCI (Non SSR) Panels



  // open for options
  ID_OPEN_FOR_WIND = "Wind",
  ID_OPEN_FOR_GLASS = "Glass",
  ID_OPEN_FOR_OTHER = "Other",
  ID_OPEN_FOR_MASONRY = "Masonry",
  ID_OPEN_FOR_TILTUP = "Tilt-up",
  ID_OPEN_FOR_STUDS = "Studs",

  // openarea
  ID_OPENAREA_COLUMN_BRACED = "Braced",
  ID_OPENAREA_COLUMN_UNBRACED = "Unbraced",

  // Base Detail
  ID_WALLPANEL_BASE_DETAIL = "Base Detail",		//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_WALLPANEL_BASE_TRIM = "Base Trim",		//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008

  ID_BASETRIM_F73 = "F73",		//* BW-2674

  ID_BASETRIM_BF67 = "BF67",		//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASETRIM_MPF837_WAS = "MPF837 (was TF1Z)",		//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASETRIM_MPF837 = "MPF837 (formerly TF1Z)",//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASETRIM_TF1_TF7 = "TF1 & TF7",				//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASETRIM_TF1 = "TF1",			//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASETRIM_TF7 = "TF7",			//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASETRIM_BF22 = "BF22",				//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASETRIM_BF25 = "BF25",				//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASETRIM_OTHER = "Other",				//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASETRIM_TF79 = "TF79",
  ID_BASETRIM_F201 = "F201",				// BW-3612 Lane Adkisson 8/22/12 Update Base Trim and Base Detail options
  ID_BASETRIM_F406 = "F406",				// BW-3612 Lane Adkisson 8/22/12 Update Base Trim and Base Detail options
  ID_BASETRIM_F408 = "F408",				// BW-3612 Lane Adkisson 8/22/12 Update Base Trim and Base Detail options

  ID_BASEDETAIL_1 = "Base Detail 1",	//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_2 = "Base Detail 2",	//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_3 = "Base Detail 3",	//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_4 = "Base Detail 4",	//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_5 = "Base Detail 5",	//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_6 = "Base Detail 6",	//added per JIRA BW-198 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_7 = "Base Detail 7",	//added per JIRA BW-197 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_8 = "Base Detail 8",	//added per JIRA BW-197 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_9 = "Base Detail 9",	//added per JIRA BW-197 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_10 = "Base Detail 10",	//added per JIRA BW-197 -dkbrooks 10.02.2007 CecoPro 2008
  ID_BASEDETAIL_11 = "Base Detail 11",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_12 = "Base Detail 12",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_13 = "Base Detail 13",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_14 = "Base Detail 14",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_15 = "Base Detail 15",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_16 = "Base Detail 16",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_17 = "Base Detail 17",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_18 = "Base Detail 18",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_BASEDETAIL_OTHER = "Other",//added per JIRA BW-197 -dkbrooks 10.02.2007 CecoPro 2008

  ID_OPENWALL_DETAIL_1 = "Open Wall Detail 1",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_OPENWALL_DETAIL_2 = "Open Wall Detail 2",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_OPENWALL_DETAIL_3 = "Open Wall Detail 3",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_OPENWALL_DETAIL_4 = "Open Wall Detail 4",	//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B
  ID_OPENWALL_DETAIL_OTHER = "Other",				//BW-197 12/12/2007 Kevin Bottoms CecoPro 2007B

  // panel gauges
  ID_GAUGE_24 = "24",
  ID_GAUGE_26 = "26",
  ID_GAUGE_22 = "22",
  ID_GAUGE_28 = "28",			//added 11.15.2005 -dkb
  //* BW-1210 Added 29 ga definition
  ID_GAUGE_29 = "29",

  // point load types
  ID_POINT_LOAD_PRIMARY = "Primary",
  ID_POINT_LOAD_SECONDARY = "Secondary",

  // purlin and girt spacing
  ID_USER_SPECIFIED = "User Specified",
  ID_SYSTEM_STANDARD = "System Standard",

  // roof guarantee
  ID_ROOF_GUAR_ULTRA_20 = "Ultra Premium 20",
  ID_ROOF_GUAR_STARGUARD = "StarGuard",
  ID_ROOF_GUAR_STARGUARD_10 = "StarGuard 10",
  ID_ROOF_GUAR_STARGUARD_20 = "StarGuard 20",
  ID_ROOF_GUAR_NONE = "None",
  ID_ROOF_GUAR_STARGUARD950 = "StarGuard 950",			// added for RBS
  ID_ROOF_GUAR_RBS_10 = "Standard(10 Years)",		// added for RBS
  ID_ROOF_GUAR_RBS_20 = "Premium(20 Years)",			// added for RBS
  ID_ROOF_GUAR_STANDARD_I = "Standard I",	// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_STANDARD_II = "Standard II",	// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_STANDARD_III = "Standard III",		// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_SINGLE_SOURCE_I = "Single Source I",// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_SINGLE_SOURCE_II = "Single Source II",// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_SINGLE_SOURCE_III = "Single Source III",// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06

  ID_ROOF_GUAR_TYPE_5_YEAR = "5 Year",	// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_TYPE_10_YEAR = "10 Year",// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_TYPE_15_YEAR = "15 Year",	// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06
  ID_ROOF_GUAR_TYPE_20_YEAR = "20 Year",// added for NBS by Kevin Bottoms per Document CRD3B 11-13-06


  // roof panel profile
  ID_ROOF_PANEL_PROFILE_PENCILRIB = "Pencil-Rib",
  ID_ROOF_PANEL_PROFILE_STRIATED = "Striated",
  ID_ROOF_PANEL_PROFILE_FLATPAN = "Flat-Pan",

  // roof panel standing seam clip
  ID_ROOF_SEAMCLIP_FIXED_1 = "1\" Fixed",
  ID_ROOF_SEAMCLIP_FIXED_38 = "3/8\" Fixed",
  ID_ROOF_SEAMCLIP_FIXED_0 = "0\" Fixed",
  ID_ROOF_SEAMCLIP_FLOATING_1 = "1\" Floating",
  ID_ROOF_SEAMCLIP_FLOATING_1AND34 = "1-3/4\" Floating",
  ID_ROOF_SEAMCLIP_FLOATING_38 = "3/8\" Floating",
  ID_ROOF_SEAMCLIP_FLOATING_0 = "0\" Floating",

  // Kevin Bottoms added 3-13-2007 for NCI Project
  ID_ROOF_SEAMCLIP_LOW_FIXED = "Low Fixed",
  ID_ROOF_SEAMCLIP_HIGH_FIXED = "High Fixed",
  ID_ROOF_SEAMCLIP_LOW_FLOATING = "Low Floating",
  ID_ROOF_SEAMCLIP_HIGH_FLOATING = "High Floating",

  // added per JIRA NBS-1024 -dkbrooks 10.03.2007
  ID_ROOF_SEAMCLIP_LOWFLOAT_NOINSUL = "Low Floating - No Blkt. Insulation",
  ID_ROOF_SEAMCLIP_LOWFLOAT_1_4_INSUL = "Low Floating - 4 in. or less Blkt. Insulation",
  ID_ROOF_SEAMCLIP_LOWFIXED_NOINSUL = "Low Fixed - No Blkt. Insulation",
  ID_ROOF_SEAMCLIP_LOWFIXED_1_4_INSUL = "Low Fixed - 4 in. or less Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFLOAT_3_INSUL = "High Floating - 3 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFLOAT_4_INSUL = "High Floating - 4 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFLOAT_6_INSUL = "High Floating - 6 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFIXED_3_INSUL = "High Fixed - 3 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFIXED_4_INSUL = "High Fixed - 4 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFIXED_6_INSUL = "High Fixed - 6 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_LOWFLOAT_1_4_INSUL_FOR = "Low Floating for 4 in. or less Blkt. Insulation",
  ID_ROOF_SEAMCLIP_LOWFIXED_1_4_INSUL_FOR = "Low Fixed for 4 in. or less Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFLOAT_3_INSUL_FOR = "High Floating for 3 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFLOAT_4_INSUL_FOR = "High Floating for 4 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFLOAT_6_INSUL_FOR = "High Floating for 6 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFIXED_3_INSUL_FOR = "High Fixed for 3 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFIXED_4_INSUL_FOR = "High Fixed for 4 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHFIXED_6_INSUL_FOR = "High Fixed for 6 in. Blkt. Insulation",

  // Added 8-18-2008 Kevin Bottoms for CecoPro
  ID_ROOF_SEAMCLIP_SHORTFLOAT_6_INSUL_FOR = "Short Floating with no thermal blk and 6 in. or less Insulation",
  ID_ROOF_SEAMCLIP_TALLFLOAT_6_INSUL_FOR = "Tall Floating with thermal blk or greater than 6 in. Insulation",

  ID_ROOF_SEAMCLIP_LOWSLIDE_NOINSUL = "Low Sliding - No Blkt. Insulation",
  ID_ROOF_SEAMCLIP_LOWSLIDE_1_4_INSUL_FOR = "Low Sliding for 4 in. or less Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHSLIDE_3_INSUL_FOR = "High Sliding for 3 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHSLIDE_4_INSUL_FOR = "High Sliding for 4 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHSLIDE_6_INSUL_FOR = "High Sliding for 6 in. Blkt. Insulation",
  ID_ROOF_SEAMCLIP_HIGHSLIDE_12_INSUL_FOR = "High Sliding for 12 in. Blkt. Insulation",

  // Added 8-05-2010 Stephen Hathaway per Jira BW-2038
  ID_ROOF_SEAMCLIP_STANDARD = "Standard",

  // Added 2-16-2012 Justin Martin per Jira BW-3196
  ID_ROOF_SEAMCLIP_LOWFIXED = "Low Fixed (Up to 4\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_LOWSLIDING = "Low Sliding (Up to 4\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_HIGHFIXED = "High Fixed (Up to 6\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_HIGHSLIDING = "High Sliding (Up to 6\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_HIGHTHERMAL = "High Thermal (Up to 10\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_HIGHTHERMAL_OLD = "High Thermal (Up to 12\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_LOWFLOATING = "Low Floating (Up to 4\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_HIGHFLOATING = "High Floating (Up to 6\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_UTILITYCLIP = "Utility Clip (No Insulation)",
  ID_ROOF_SEAMCLIP_FLOATING_0_INSUL = "0\" Floating (No Insulation)",
  ID_ROOF_SEAMCLIP_FLOATING_1_INSUL = "1\" Floating (Up to 4\" Blkt. Insulation)",
  ID_ROOF_SEAMCLIP_FLOATING_1AND34_INSUL = "1-3/4\" Floating (Up to 6\" Blkt. Insulation)",



  ID_ROOF_THERMALBLOCK_3_8_THICK = "3/8\" Thick",
  ID_ROOF_THERMALBLOCK_5_8_THICK = "5/8\" Thick",
  ID_ROOF_THERMALBLOCK_1_THICK = "1\" Thick",
  ID_ROOF_THERMALBLOCK_1_THICK_R_5 = "1\" Thick R-5 Rated",


  // roof panel stitch screws
  ID_ROOF_STITCH_78_SELFDRILL = "7/8\" Self-Drill",
  ID_ROOF_STITCH_STANDARD = "Standard",
  ID_ROOF_STITCH_NONE = "None",

  // roof panel structural screws
  ID_ROOF_STRUCT_1AND14_SELFDRILL = "1-1/4\" Self-Drill",
  ID_ROOF_STRUCT_1AND12_SELFDRILL = "1-1/2\" Self-Drill",
  ID_ROOF_STRUCT_1AND78_SELFDRILL = "1-7/8\" Self-Drill",
  ID_ROOF_STRUCT_2_SELFDRILL = "2\" Self-Drill",
  ID_ROOF_STRUCT_STARSHIELD_SD = "StarShield S.D.",
  ID_ROOF_STRUCT_STARTHERM_BATTENCAP = "StarTherm Batten Cap",
  ID_ROOF_STRUCT_STARTHERM_STD = "StarTherm Std.",
  ID_ROOF_STRUCT_SSR_SD = "SSR S.D.",					// added for RBS
  ID_ROOF_STRUCT_NONE = "None",
  ID_ROOF_STRUCT_HR900_BATTENCAP = "HR900 Batten Cap",			// added for RBS
  ID_ROOF_STRUCT_HR900_STD = "HR900 Std.",			// added for RBS

  // roof panel thickness
  ID_ROOF_THICK_1 = "1\"",
  ID_ROOF_THICK_1POINT5 = "1.5\"",
  ID_ROOF_THICK_2 = "2\"",
  ID_ROOF_THICK_2POINT5 = "2.5\"",
  ID_ROOF_THICK_3 = "3\"",
  ID_ROOF_THICK_4 = "4\"",
  ID_ROOF_THICK_5 = "5\"",
  ID_ROOF_THICK_6 = "6\"",

  // roof panel type
  ID_ROOF_PANEL_DURARIB = "DuraRib",
  ID_ROOF_PANEL_DURA_RIB = "Dura-Rib",		// S.Hathaway 11-15-2010 BW-2814
  ID_ROOF_PANEL_TWINRIB = "TwinRib",
  ID_ROOF_PANEL_STARSHIELD = "StarShield",
  ID_ROOF_PANEL_STARTHERM = "StarTherm III HR900",
  ID_ROOF_PANEL_STARASR = "StarASR",
  ID_ROOF_PANEL_NONE = "None",
  ID_ROOF_PANEL_RTS = "RTS",		// added for RBS  -dkb 09.27.2005
  ID_ROOF_PANEL_FLATLINER = "Flatliner",					// added for RBS  -dkb 09.27.2005 //BW-7270: Obsolete: Remove RTS Flatliner option
  ID_ROOF_PANEL_SSR = "SSR",		// added for RBS
  ID_ROOF_PANEL_HR900 = "HR900",				// added for RBS
  ID_ROOF_PANEL_ASR = "ASR",		// added for RBS
  ID_ROOF_PANEL_MAP = "MAP",		// added for Ceco
  ID_ROOF_PANEL_CLP = "CLP",		// added for Ceco
  ID_ROOF_PANEL_CXP = "CXP",		// added for Ceco
  ID_ROOF_PANEL_CRP = "CRP",		// added for Ceco
  ID_ROOF_PANEL_MVR = "MVR",		// added for Ceco
  ID_ROOF_PANEL_BATENLOK_HS = "Batenlok HS",			// added for Ceco -bts 7-14-2005
  ID_ROOF_PANEL_BATTENLOK_HS = "Battenlok HS",			// added for Ceco -bts 8-4-2006
  ID_ROOF_PANEL_PBR = "PBR",				// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_RBR = "RBR",			// added 11-03-20 by Prayag Vakharia, BW-8352
  ID_ROOF_PANEL_ULTRADEK = "Ultra-Dek",				// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_DOUBLELOK = "Double-Lok",				// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_SUPERLOK = "SuperLok",				// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_BYOTHERS = "By Others",				// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_BATTENLOK_HS_NCI = "BattenLok HS",				// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_RWPII = "RWP II",			// added 03-05-12 by Justin Martin per BW-3563
  ID_ROOF_PANEL_NOT_BY_MANUFACTURER = "Not by Manufacturer",

  ID_ROOF_PANEL_IBL = "IBL",					//* BW-1112 Add IPS panel string defines.

  ID_ROOF_PANEL_CFR42 = "CFR",	// BW-4003 - Metl-Span panel to replace IBL
  ID_ROOF_PANEL_LS_36 = "LS-36",		// BW-4003 - Metl-Span panel to replace RWP II R

  // roof panel thermal
  ID_ROOF_PANEL_THERMAL_NONE = "None",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_THERMAL_INCLUDED = "Included",// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_ROOF_PANEL_THERMAL_BYOTHERS = "By Others",	// added 11-14-06 by Kevin Bottoms per Document CRD3B


  ID_ROOF_FASTENER_SS_CAPS = " w/ SS Caps",  //* BW-431 03/27/2008 Kevin Bottoms BW 1.0.0

  // roof fasteners - Ceco
  ID_ROOF_FASTENER_STANDARD = "Standard",					// added for Ceco
  ID_ROOF_FASTENER_SS = "SD w/Stainless Steel Caps",		// added for Ceco
  ID_ROOF_FASTENER_ALLOY = "SD Cast Alloy (Extended Life)",	// added for Ceco
  ID_ROOF_FASTENER_CAST_ALLOY = "SD Cast Alloy",			// added for Ceco

  ID_WALL_ROOF_TO_ROOF = "Roof to Roof Tie-in Trim",
  ID_WALL_ROOF_TO_WALL = "Roof to Wall Tie-in Trim",

  // fasteners - NCI
  ID_FASTEN_SELF_DRILLING = "Self-Drilling",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_SELF_TAPPING = "Self-Tapping",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_HEAD_STANDARD = "Standard",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_HEAD_LONGLIFE = "Long-Life",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_HEAD_SS_CAP = "Stainless Steel Cap",
  ID_FASTEN_HEAD_STAINLESS = "Stainless",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_LENGTH_STANDARD = "Standard",     // added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_LENGTH_114 = "1-1/4\"",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_LENGTH_112 = "1-1/2\"",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_LENGTH_2 = "2\"",	// added 11-14-06 by Kevin Bottoms per Document CRD3B
  ID_FASTEN_LENGTH_178 = "1-7/8\"",

  // venders
  ID_FASTEN_VENDER_ATLAS = "Atlas",		// BW-3640 SCH 6/26/12
  ID_FASTEN_VENDER_BUILDEX = "Buildex",			// BW-3640 SCH 6/26/12

  // roof panel ul rating
  ID_ROOF_PANEL_UL_30 = "UL 30",
  ID_ROOF_PANEL_UL_90 = "UL 90",
  ID_ROOF_PANEL_UL_NONE = "None",

  // trim finish - Ceco
  ID_TRIM_FINISH_STANDARD = "Standard",				// added for Ceco
  ID_TRIM_FINISH_KYNAR = "Kynar",			// added for Ceco
  ID_TRIM_FINISH_EMBOSSED = "Embossed",					// added for Ceco

  // wall fastener - Ceco
  ID_WALL_FASTENER_SD = "SD w/washer, Stitch no washer", // added for Ceco
  ID_WALL_FASTENER_STITCH = "SD w/washer, Stitch w/washer", // added for Ceco

  // wall category
  ID_WALL_CATEGORY_ENCLOSED = "Enclosed",
  ID_WALL_CATEGORY_PARTIALLY_ENCLOSED = "Partially Enclosed",
  ID_WALL_CATEGORY_OPEN = "Open",

  // wall guarantee
  ID_WALL_GUAR_UL20 = "Ultra Premium 20",
  ID_WALL_GUAR_STARGUARD = "StarGuard",
  ID_WALL_GUAR_STARGUARD_10 = "StarGuard 10",
  ID_WALL_GUAR_STARGUARD_20 = "StarGuard 20",
  ID_WALL_GUAR_NONE = "None",
  ID_WALL_GUAR_CFW = "20 Year",
  ID_WALL_GUAR_STARGUARD950 = "StarGuard 950",		// added for RBS
  ID_WALL_GUAR_RBS_10 = "Standard(10 Years)",		// added for RBS
  ID_WALL_GUAR_RBS_20 = "Premium(20 Years)",		// added for RBS

  // BW-5718 - New Base Closure - JDM
  ID_WALL_PANEL_BASE_CLOSURE_INSIDE = "Base Inside Closure",
  ID_WALL_PANEL_BASE_CLOSURE_NONE = "None",
  // END BW- 5718 - New Base Closure

  // wall panel base closure
  ID_WALL_PANEL_BASE_CLOSURE_FOAM_PLUGS_OLD = "Foam Plugs",
  ID_WALL_PANEL_BASE_CLOSURE_FOAM_STRIP_OLD = "Foam Strip",
  ID_WALL_PANEL_BASE_CLOSURE_METAL_STRIP_OLD = "Metal Strip",


  // wall panel base flash
  ID_WALL_PANEL_BASE_FLASH_NB2 = "NB2",
  ID_WALL_PANEL_BASE_FLASH_NB3 = "NB3",
  ID_WALL_PANEL_BASE_FLASH_NB4 = "NB4",
  ID_WALL_PANEL_BASE_FLASH_NB5 = "NB5",
  ID_WALL_PANEL_BASE_FLASH_CFWII = "CFW II Std.",
  ID_WALL_PANEL_BASE_FLASH_STARTHERM = "StarTherm Std.",
  ID_WALL_PANEL_BASE_FLASH_NONE = "None",
  ID_WALL_PANEL_BASE_FLASH_AW300 = "AW300 Std.",	// added for RBS

  ID_WALL_PANEL_BASE_FLASH_ESPII = "ESP II Std.",
  ID_WALL_PANEL_BASE_FLASH_IPPII = "IPP II Std.",
  ID_WALL_PANEL_BASE_FLASH_EWPII = "EWP II Std.",
  ID_WALL_PANEL_BASE_FLASH_FWP = "FWP Std.",
  ID_WALL_PANEL_BASE_FLASH_RWPII = "RWP II Std.",
  ID_WALL_PANEL_BASE_FLASH_EWF = "EWF Std.",
  ID_WALL_PANEL_BASE_FLASH_SONORA = "Sonora Std.",

  // BW-4003 New Base Flash definitions for the new Metal-Span Names.
  ID_WALL_PANEL_BASE_FLASH_STRIATED_OA = "Striated Std.",
  ID_WALL_PANEL_BASE_FLASH_MESA_OA = "Mesa Std.",
  ID_WALL_PANEL_BASE_FLASH_ARCH_FLAT_OA = "Arch. Flat Std.",
  ID_WALL_PANEL_BASE_FLASH_LS_36_OA = "LS-36 Std.",
  ID_WALL_PANEL_BASE_FLASH_FLUTED_OA = "Fluted Std.",
  ID_WALL_PANEL_BASE_FLASH_SANTA_FE_OA = "Santa Fe Std.",
  ID_WALL_PANEL_BASE_FLASH_LT_MESA_OA = "Lt. Mesa Std.",
  ID_WALL_PANEL_BASE_FLASH_THERMALSAFE_OA = "ThermalSafe Std.",
  ID_WALL_PANEL_BASE_FLASH_TUFFCAST_OA = "Tuff-Cast Std.",
  ID_WALL_PANEL_BASE_FLASH_TUFFWALL_OA = "Tuff Wall Std.",
  ID_WALL_PANEL_BASE_FLASH_72_INSUL_RIB_OA = "7.2 Insul-Rib Std.",

  // 1-26-2007 Kevin Bottoms added for RBS to replace CFWII with shadowrib
  ID_WALL_PANEL_BASE_FLASH_SHADOWRIBII_OA = "ShadowRib II Std.",
  //BW-3231: Convert previous "ShadowRib II..." options to "ShadowRib ..."
  ID_WALL_PANEL_BASE_FLASH_SHADOWRIB_OA = "ShadowRib Std.",

  // BW-6417 - New Base Trim Definitions - JDM
  ID_WALL_PANEL_BASE_TRIM_F406_VERTICAL_LIP_BASE_TRIM = "F406 Vertical Lip Base Trim",
  ID_WALL_PANEL_BASE_TRIM_F407_BASE_TRIM = "F407 Base Trim",
  ID_WALL_PANEL_BASE_TRIM_F408_MASONRY_BASE_TRIM = "F408 Masonry Base Trim",
  ID_WALL_PANEL_BASE_TRIM_T6012_SHADOWRIB_STANDARD = "T6012 ShadowRib Standard",
  ID_WALL_PANEL_BASE_TRIM_STRIATED_STANDARD = "Striated Standard",
  ID_WALL_PANEL_BASE_TRIM_MESA_STANDARD = "Mesa Standard",
  ID_WALL_PANEL_BASE_TRIM_FLUTED_STANDARD = "Fluted Standard",
  ID_WALL_PANEL_BASE_TRIM_ARCH_FLAT_STANDARD = "Arch. Flat Standard",
  ID_WALL_PANEL_BASE_TRIM_LS_36_STANDARD = "LS-36 Standard",
  ID_WALL_PANEL_BASE_TRIM_LT_MESA_STANDARD = "Lt. Mesa Standard",
  ID_WALL_PANEL_BASE_TRIM_THERMALSAFE_STANDARD = "ThermalSafe Standard",
  ID_WALL_PANEL_BASE_TRIM_TUFF_CAST_STANDARD = "Tuff-Cast Standard",
  ID_WALL_PANEL_BASE_TRIM_TUFF_WALL_STANDARD = "Tuff Wall Standard",
  ID_WALL_PANEL_BASE_TRIM_7_2_INSUL_RIB_STANDARD = "7.2 Insul-Rib Standard",
  ID_WALL_PANEL_BASE_TRIM_SANTA_FE_STANDARD = "Santa Fe Standard",

  //BW-6617 04/06/2021 Tanuja Kumari Base trim options will not work with base girt
  ID_WALL_PANEL_BASE_TRIM_F161_BASE_TRIM = "F161",

  // End new Base Trim Definitions


  ID_WALL_PANEL_BASE_FLASH_F405_OLD = "F405",// Replaces NB2
  ID_WALL_PANEL_BASE_FLASH_F406_OA = "F406", // Replaces NB3
  ID_WALL_PANEL_BASE_FLASH_F407_OA = "F407",// Replaces NB4
  ID_WALL_PANEL_BASE_FLASH_F408_OA = "F408",// Replaces NB5

  // BW-6417 - New Base Framing Definitions - JDM
  ID_WALL_PANEL_BASE_FRAMING_ANGLE = "Angle",
  ID_WALL_PANEL_BASE_FRAMING_GALVANIZED_ANGLE = "Galvanized Angle",
  ID_WALL_PANEL_BASE_FRAMING_TUBE = "Tube",
  ID_WALL_PANEL_BASE_FRAMING_CHANNEL = "Channel",
  ID_WALL_PANEL_BASE_FRAMING_GALVANIZED_CHANNEL = "Galvanized Channel",
  ID_WALL_PANEL_BASE_FRAMING_GIRT = "Girt",
  ID_WALL_PANEL_BASE_FRAMING_F73_FORMED_BASE_TRIM = "F73 Formed Base Trim",
  ID_WALL_PANEL_BASE_FRAMING_EXTRUDED_ALUMINUM_BASE = "Extruded Aluminum Base Edge",
  ID_WALL_PANEL_BASE_FRAMING_SHADOWRIB = "ShadowRib Angle",
  ID_WALL_PANEL_BASE_FRAMING_GALVANIZED_SHADOWRIB = "Galvanized ShadowRib Angle",
  ID_WALL_PANEL_BASE_FRAMING_NONE = "None",
  // End new Base Framing Definitions

  // 1-26-2007 Kevin Bottoms added for RBS to replace CFWII with shadowrib
  ID_WALL_PANEL_BASE_FRAMING_SHADOWRIBII_OLD = "ShadowRib II Angle",
  ID_WALL_PANEL_BASE_FRAMING_SHADOWRIB_OLD = "ShadowRib Angle",
  ID_WALL_PANEL_BASE_FRAMING_GALVANIZED_SHADOWRIB_OLD = "Galvanized ShadowRib Angle",
  //BW-3231: Convert previous "ShadowRib II..." options to "ShadowRib ..."


  // Wall Panel base conditions
  ID_WALL_PANEL_BASE_FRAMING_ANGLE_WTRIM = "Angle w/ Trim",
  ID_WALL_PANEL_BASE_FRAMING_CFWII_OLD = "CFW II Angle",
  ID_WALL_PANEL_FORMED_BASE_TRIM_OA = "Formed Base Trim",									// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_BASE_ANGLE_OLD = "Base Angle",						// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_GALVANIZED_BASE_ANGLE_OLD = "Galvanized Base Angle",							// added 1-2-14 by Justin Martin per BW-4048
  ID_WALL_PANEL_BASE_ANGLE_FLASH_MATCH = "Base Angle and Flash - Match Wall Color",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_GALVANIZED_BASE_ANGLE_FLASH_MATCH = "Galv Base Angle and Flash - Match Wall Color",		// added 1-2-14 by Justin Martin per BW-4048
  ID_WALL_PANEL_BASE_CHANNEL_OLD = "Base Channel",									// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_BASE_CHANNEL_FLASH_MATCH = "Base Channel and Flash - Match Wall Color",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_LOW_BASE_GIRT_OLD = "Low Base Girt",								// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_LOW_GIRT_FLASH_MATCH = "Low Base Girt and Flash - Match Wall Color",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_BASE_NONE_OLD = "None",											// added 11-13-06 by Kevin Bottoms per Document CRD3B

  ID_WALL_PANEL_BASE_CEE_BFL846 = "Cee with BFL846",	// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_ZEE_BFL846 = "Zee with BFL846",	// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_ANGLE_BFL846 = "Angle with BFL846",		// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_GALVANIZED_ANGLE_BFL846 = "Galvanized Angle with BFL846",
  ID_WALL_PANEL_BASE_CEE_BFL201 = "Cee with BFL201",// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_ZEE_BFL201 = "Zee with BFL201",// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_ANGLE_BFL201 = "Angle with BFL201",		// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_GALVANIZED_ANGLE_BFL201 = "Galvanized Angle with BFL201",
  ID_WALL_PANEL_BASE_CEE_BFL161 = "Cee with BFL161",// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_ZEE_NO_FLASH = "Zee No Flashing",	// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_CEE_NO_FLASH = "Cee No Flashing",	// NBS-1034 10/03/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_BFL846_ONLY = "Flash Only BFL846",		// NBS-1034 10/19/2007 Kevin Bottoms NCI v1.0
  ID_WALL_PANEL_BASE_BFL201_ONLY = "Flash Only BFL201",		// NBS-1034 10/19/2007 Kevin Bottoms NCI v1.0


  // wall panel base options - Ceco
  ID_WALL_PANEL_BASE_A = "A - Base Angle Trim",// added for Ceco
  ID_WALL_PANEL_BASE_B = "B - Base Girt no Flashing",// added for Ceco
  ID_WALL_PANEL_BASE_C = "C - Base Angle no Flashing",// added for Ceco
  ID_WALL_PANEL_BASE_D = "D - Base Girt with Flashing",// added for Ceco
  ID_WALL_PANEL_BASE_E = "E - Base Angle with Flashing",	// added for Ceco
  ID_WALL_PANEL_BASE_F = "F - Base Channel no Flashing",	// added for Ceco
  ID_WALL_PANEL_BASE_G = "G - Base Channel with Flashing",	// added for Ceco

  ID_WALL_PANEL_BASE_ANGLE_TRIM = "Base Angle Trim",			// added for Ceco

  // wall panel stitch screws
  ID_WALL_STITCH_78_SELFDRILL = "7/8\" Self-Drill",
  ID_WALL_STITCH_NONE = "None",

  // wall panel structural screws
  ID_WALL_STRUCT_1AND14_SELFDRILL = "1-1/4\" Self-Drill",
  ID_WALL_STRUCT_1AND12_SELFDRILL = "1-1/2\" Self-Drill",
  ID_WALL_STRUCT_2_SELFDRILL = "2\" Self-Drill",
  ID_WALL_STRUCT_CFWII_SD = "CFW II S.D.",
  ID_WALL_STRUCT_CFWII_FABLOCK = "CFW II Fab Lock",
  ID_WALL_STRUCT_STARTHERM_STD = "StarTherm Std.",
  ID_WALL_STRUCT_NONE = "None",
  ID_WALL_STRUCT_AW300_STD = "AW300 Std.",				// added for RBS

  // 1-26-2007 Kevin Bottoms added for RBS to replace CFW
  ID_WALL_STRUCT_SHADOWRIB_SD = "ShadowRib II S.D.",
  ID_WALL_STRUCT_SHADOWRIB_FABLOCK = "ShadowRib II Fab Lock",

  // wall panel thickness
  ID_WALL_THICK_1POINT5 = "1.5\"",				// BW-3563 - JDM Added for RWP II thickness.
  ID_WALL_THICK_2 = "2\"",
  ID_WALL_THICK_2POINT5 = "2.5\"",
  ID_WALL_THICK_3 = "3\"",
  ID_WALL_THICK_4 = "4\"",
  ID_WALL_THICK_5 = "5\"",
  ID_WALL_THICK_6 = "6\"",
  ID_WALL_THICK_7 = "7\"",
  ID_WALL_THICK_8 = "8\"",

  // wall panel types
  ID_WALL_PANEL_DURARIB = "DuraRib",
  ID_WALL_PANEL_DURA_RIB = "Dura-Rib",			// S.Hathaway 11-15-2010 BW-2814
  ID_WALL_PANEL_STARMARK = "StarMark",
  ID_WALL_PANEL_CFWII = "CFW II",
  ID_WALL_PANEL_STARTHERM = "StarTherm III AW300",
  ID_WALL_PANEL_NONE = "None",
  ID_WALL_PANEL_A36 = "A-36",				// added for RBS
  ID_WALL_PANEL_AW300 = "AW300",					// added for RBS
  ID_WALL_PANEL_MVW = "MVW",			// added for Ceco
  ID_WALL_PANEL_MAP = "MAP",			// added for Ceco
  ID_WALL_PANEL_MSP = "MSP",			// added for Ceco
  ID_WALL_PANEL_CWP = "CWP",			// added for Ceco
  ID_WALL_PANEL_SHR24 = "SHR24",					// added for BW-3343
  ID_WALL_PANEL_MIP = "MIP",			// added for Ceco
  ID_WALL_PANEL_SHADOWRIB = "ShadowRib",
  ID_WALL_PANEL_PBR = "PBR",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_PBA = "PBA",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_PBU = "PBU",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_VISTASHADOW = "Vistashadow",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_BYOTHERS = "By Others",			// added 11-13-06 by Kevin Bottoms per Document CRD3B
  ID_WALL_PANEL_VISTA_SHADOW = "VistaShadow",				// added 12-13-06 by Kevin Bottoms per Document CRD3B

  ID_WALL_PANEL_ESPII = "ESP II",				//* BW-1112 Add IPS panel string defines.
  ID_WALL_PANEL_IPPII = "IPP II",				//* BW-1112 Add IPS panel string defines.
  ID_WALL_PANEL_EWPII = "EWP II",				//* BW-1112 Add IPS panel string defines.
  ID_WALL_PANEL_FWP = "FWP",		//* BW-1112 Add IPS panel string defines.
  ID_WALL_PANEL_RWPII = "RWP II",				// BW-3563 Adds IPS panel RWP II JDM
  ID_WALL_PANEL_EWF = "EWF",		//* BW-3645
  ID_WALL_PANEL_SONORA = "Sonora",				//* BW-3650 - Adding Support for 42" Sonora IPS Wall Panel.
  ID_WALL_PANEL_AVP = "AVP",		// BW-3887 - Lane Adkisson 12/4/12 Add AVP Panels in place of PBA

  ID_WALL_PANEL_LS_36 = "LS-36",		// BW-4003 - Metl-Span panel to replace RWP II W
  ID_WALL_PANEL_CF36A_ARCH_FLAT = "Arch. Flat",	// BW-4003 - Metl-Span panel to replace FWP
  ID_WALL_PANEL_MESA = "Mesa",		// BW-4003 - Metl-Span panel to replace IPP II
  ID_WALL_PANEL_CF42_FLUTED = "Fluted",	// BW-4003 - Metl-Span panel to replace EWF
  ID_WALL_PANEL_CF42_STRIATED = "Striated",	// BW-4003 - Metl-Span panel to replace ESP II
  ID_WALL_PANEL_CF42_SANTA_FE = "Santa Fe",	// BW-4003 - Metl-Span panel to replace Sonora

  ID_WALL_PANEL_LT_MESA = "Lt. Mesa",
  ID_WALL_PANEL_72_INSUL_RIB = "7.2 Insul-Rib",
  ID_WALL_PANEL_THERMALSAFE = "ThermalSafe",
  ID_WALL_PANEL_TUFFCAST = "Tuff-Cast",
  ID_WALL_PANEL_TUFFWALL = "Tuff Wall",
  ID_WALL_PANEL_ULTRA_LT_MESA = "Ultra-Light Mesa",

  ID_WALL_PANEL_NO_PROFILE = "Flat - No Profile",

  //*************************  ACCESSORY INPUT STRINGS  ***********************//

  // Accessory Soffit Panel	Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SOFFIT_NONE = "None",
  ID_ACCESSORY_SOFFIT_PBR = "PBR",
  ID_ACCESSORY_SOFFIT_PBU = "PBU",
  ID_ACCESSORY_SOFFIT_ARTISAN = "Artisan",
  ID_ACCESSORY_SOFFIT_BY_OTHERS = "By Others",
  ID_ACCESSORY_SOFFIT_ARTISAN_L12 = "Artisan L12",//* BW-378 Adding MBCI panels to RCC and updating for NCI.

  // Liner Panel Accessory	Kevin Bottoms 11-11-06 added as per document CRD4A
  // Liner Type
  ID_ACCESSORY_LINER_FULL_HEIGHT = "Full Height",
  ID_ACCESSORY_LINER_PARTIAL_HEIGHT = "Partial Height",

  // Liner Panel				Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_ACCESSORY_LINER_PANEL_PBR = "PBR",
  ID_ACCESSORY_LINER_PANEL_PBU = "PBU",
  ID_ACCESSORY_LINER_PANEL_ARTISAN = "Artisan",

  // Liner Base Type			Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_ACCESSORY_LINER_BASE_ANGLE = "Angle",
  ID_ACCESSORY_LINER_BASE_CHANNEL = "Channel",
  ID_ACCESSORY_LINER_BASE_GIRT = "Girt",
  ID_ACCESSORY_LINER_BASE_LOW_BASE_GIRT = "Low Base Girt",
  ID_ACCESSORY_LINER_BASE_NONE = "None",

  // Liner Color Categories	Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_ACCESSORY_LINER_CAP_TRIM = "Cap Trim",
  ID_ACCESSORY_LINER_PURLIN_TRIM = "Purlin Trim",
  ID_ACCESSORY_LINER_INSIDE_CORNER_TRIM = "Inside Corner Trim",
  ID_ACCESSORY_LINER_COLUMN_TIE_TRIM = "Column Tie Trim",

  // Accessory Roof Liner		Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_ROOF_LINER_PANEL_PBR = "PBR",
  ID_ACCESSORY_ROOF_LINER_PANEL_PBU = "PBU",
  ID_ACCESSORY_ROOF_LINER_PANEL_ARTISAN = "Artisan",

  // Accessory Roof Liner Area	Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_ROOF_LINER_COVERS_ENTIRE_ROOF_AREA = "Entire Roof Area",
  ID_ACCESSORY_ROOF_LINER_COVERS_SPECIFIC_AREA = "Specific Area",

  // Canopy Accessory			Kevin Bottoms 11-11-06 added as per document CRD4A
  // Canopy Eave Condition
  ID_ACCESSORY_CANOPY_TYPE_EAVE_FOLLOW_THE_ROOF_OLD = "Eave Follow the Roof",//BW-3981: Obsolete as of BW 4.6
  ID_ACCESSORY_CANOPY_TYPE_BELOW_EAVE_OLD = "Below Eave", //BW-3981: Obsolete as of BW 4.6
  ID_ACCESSORY_CANOPY_TYPE_BOX_FOLLOW_THE_ROOF_OLD = "Box Follow the Roof",
  ID_ACCESSORY_CANOPY_TYPE_EAVE_EXTENSION_OLD = "Eave Extension",

  //BW-3981 (12/10/13): NCI Values for canopy types have changed 
  ID_ACCESSORY_CANOPY_TYPE_SLIMLINE_AT_EAVE_OLD = "Slimline at Eave", //` "Slimline" for NCI only
  ID_ACCESSORY_CANOPY_TYPE_SLIMLINE_BELOW_EAVE_OLD = "Slimline below Eave", //added for NCI only
  ID_ACCESSORY_CANOPY_TYPE_EAVE_FOLLOW_THE_ROOF_STRUCTURAL_OLD = "Eave Follow the Roof (Structural)", //replaces "Eave Follow the Roof" for NCI only
  ID_ACCESSORY_CANOPY_TYPE_BELOW_EAVE_STRUCTURAL_OLD = "Below Eave (Structural)", //replaces "Below Eave" for NCI only

  // Canopy Soffit Panel		Kevin Bottoms 11-11-06 added as per document CRD4A
  ID_ACCESSORY_CANOPY_SOFFIT_NONE = "None",
  ID_ACCESSORY_CANOPY_SOFFIT_PBR = "PBR",
  ID_ACCESSORY_CANOPY_SOFFIT_PBU = "PBU",
  ID_ACCESSORY_CANOPY_SOFFIT_ARTISAN = "Artisan",
  ID_ACCESSORY_CANOPY_SOFFIT_BY_OTHERS = "By Others",

  // canopy types
  ID_CANOPY_SLIMLINE_OLD = "Slimline",
  ID_CANOPY_STRUCTURAL_OLD = "Structural",
  ID_CANOPY_FLUSH_OLD = "Flush",//BW - 2875 3/22/11 Lane Adkisson, Add Flush and Structural to Canopy Input Screen
  ID_CANOPY_GABLE_OVERHANG = "Gable Overhang",
  ID_CANOPY_PURLIN_EXTENSION = "Purlin Extension", //Kevin Bottoms 11-29-06 added as per document CRD4A

  // Ceco Canopy/Fascia
  ID_CANOPY_ROOF_EXTENSION = "Roof Extension",		// added for Ceco

  // Canopy Types - BW-5698 - JDM ///
  //ID_ACCESSORY_CANOPY_TYPE_SLIMLINE_AT_EAVE = "Slimline At Eave",
  ID_ACCESSORY_CANOPY_TYPE_SLIMLINE_AT_EAVE = "Slimline at Eave",   //Change Slimline At Eave to Slimline at Eave
  ID_CANOPY_TYPE_SLIMLINE_BELOW_EAVE_HT = "Slimline Below Eave Ht.",
  //ID_CANOPY_TYPE_STRUCTURAL_AT_EAVE = "Structural At Eave",
  ID_CANOPY_TYPE_STRUCTURAL_AT_EAVE = "Structural at Eave",   //Change Structural At Eave to Structural at Eave
  ID_CANOPY_TYPE_STRUCTURAL_BELOW_EAVE_HT = "Structural Below Eave Ht.",
  //ID_CANOPY_TYPE_BOX_AT_EAVE = "Box At Eave",
  ID_CANOPY_TYPE_BOX_AT_EAVE = "Box at Eave",  //Change   Box At Eave  to Box at Eave
  // BW-5698 - Canopy Types add End ///

  ID_CANOPY_SOFFIT_MVW = "MVW",			// added for Ceco
  ID_CANOPY_SOFFIT_MIP = "MIP",			// added for Ceco
  ID_CANOPY_SOFFIT_SOP = "SOP",			// added for Ceco
  ID_CANOPY_SOFFIT_NONE = "None",				// added for Ceco

  ID_CANOPY_SOFFIT_26 = "26",			// added for Ceco
  ID_CANOPY_SOFFIT_24 = "24",			// added for Ceco

  ID_CANOPY_SOFFIT_STANDARD = "Standard",		// added for Ceco
  ID_CANOPY_SOFFIT_PREMIUM = "Premium",	// added for Ceco
  ID_CANOPY_SOFFIT_GALVALUME = "Galvalume",			// added for Ceco


  // door closers
  ID_DOORCLOSER_CLOSER = "Std. Closer",
  ID_DOORCLOSER_HD_CLOSER = "H.D. Closer",
  ID_DOORCLOSER_NONE = "None",
  //BEGIN BW-3426
  ID_DOORCLOSER_CLOSER_PARALLEL = "Grade 1 Standard Parallel Arm",
  ID_DOORCLOSER_CLOSER_HOBAR = "Grade 1 With Hold-Open Bar",
  ID_DOORCLOSER_HD_CLOSER_PARALLEL = "Grade 1 Heavy Duty Parallel Arm",
  ID_DOORCLOSER_HD_CLOSER_HOBAR = "Grade 1 Heavy Duty Hold-Open Bar",
  ID_DOORCLOSER_CLOSER_PARALLEL_2 = "Grade 2 Standard Parallel Arm",
  ID_DOORCLOSER_CLOSER_HOBAR_2 = "Grade 2 With Hold-Open Bar",
  ID_DOORCLOSER_CLOSER_PARALLEL_3 = "Grade 3 Standard Parallel Arm (UL Rated)",
  //END BW-3426

  // BW-4383 : Added new closer descriptions
  ID_DOORCLOSER_GRADE_1_PARALLEL = "Grade 1 Closer w/Parallel Arm",
  ID_DOORCLOSER_GRADE_1_HOLD_OPEN = "Grade 1 Closer w/Hold Open Arm",
  ID_DOORCLOSER_GRADE_2_PARALLEL = "Grade 2 Closer w/Parallel Arm",
  ID_DOORCLOSER_GRADE_2_HOLD_OPEN = "Grade 2 Closer w/Hold Open Arm",
  // BW-4383 END

  ID_DOORCLOSER_G1_SIZED_PARALLEL = "Grade 1 Sized Closer w/Parallel Arm",
  ID_DOORCLOSER_G1_HD_PARALLEL = "Grade 1 Heavy Duty Closer w/Parallel Arm",
  ID_DOORCLOSER_G1_HD_HOLD_OPEN = "Grade 1 Heavy Duty Closer w/Hold Open Arm",

  ID_CLOSER_NONE = "None",// BW-74 08/15/2007 Kevin Bottoms CecoPro 2007A
  ID_CLOSER_STD = "Standard",	// BW-74 08/15/2007 Kevin Bottoms CecoPro 2007A
  ID_CLOSER_HEAVY_DUTY = "Heavy Duty",	// BW-74 08/15/2007 Kevin Bottoms CecoPro 2007A

  // door colors
  ID_DOORCOLOR_BRONZE = "Bronze",
  ID_DOORCOLOR_WHITE = "White",
  //BEGIN BW-3426
  ID_DOORCOLOR_CLEAR = "Clear",
  //END BW-3426

  // door frames and swing direction for glassfront
  ID_DOORFRAME_BRONZE = "L-Bronze",
  ID_DOORFRAME_CLEAR = "L-Clear",
  ID_DOORFRAME_RBRONZE = "R-Bronze",
  ID_DOORFRAME_RCLEAR = "R-Clear",

  //BEGIN BW-3426
  ID_DOOR_3070_GLASS = "3070 Glass-Front",
  ID_DOOR_6070_GLASS = "6070 Glass-Front",
  //END BW-3426

  // door glass for glassfront
  ID_DOORGLASS_14 = "1/4\" Tempered",
  ID_DOORGLASS_INSULATED = "Insulated Tempered",
  //BEGIN BW-3426
  ID_DOORGLASS_14_TINTED = "1/4\" Tinted Tempered",
  ID_DOORGLASS_LOW_E1 = "1\" Low-E Insluated",
  ID_DOORGLASS_INSULATED_1 = "1\" Insluated",
  ID_DOORGLASS_INSUL_TINT_1 = "1\" Insluated Tinted",

  //Lock kits for glassfront
  ID_DOORGLASSLOCK_MORTISE = "Mortise Lock Cylinder Push/Pull Hardware",
  ID_DOORGLASSLOCK_THUMB = "Thumbturn/Lock",
  ID_DOORGLASSLOCK_RIM_PANIC = "Rim Panic Device",
  ID_DOORGLASSLOCK_VERT_PANIC = "Concealed Vertical Rod Panic Device (both leafs)",

  //Closers for glassfront
  ID_DOORGLASSCLOSER_GRADE1 = "Grade 1 Standard Parallel Arm",
  ID_DOORGLASSCLOSER_NONE = "N/A",

  //Sidelite glass for glassfront
  ID_SIDELITEGLASS_NONE = "N/A",
  ID_SIDELITEGLASS_12_14 = "12\" Wide, 1/4\" Tempered",
  ID_SIDELITEGLASS_12_INSULATED_1 = "12\" Wide, 1\" Insluated",
  ID_SIDELITEGLASS_12_14_TINTED = "12\" Wide, 1/4\" Tinted Tempered",
  ID_SIDELITEGLASS_12_INSUL_TINT_1 = "12\" Wide, 1\" Insluated Tinted",
  ID_SIDELITEGLASS_18_14 = "18\" Wide, 1/4\" Tempered",
  ID_SIDELITEGLASS_18_INSULATED_1 = "18\" Wide, 1\" Insluated",
  ID_SIDELITEGLASS_18_14_TINTED = "18\" Wide, 1/4\" Tinted Tempered",
  ID_SIDELITEGLASS_18_INSUL_TINT_1 = "18\" Wide, 1\" Insluated Tinted",
  //END BW-3426

  ID_DOOR_GLAZING_NA = "N/A",
  ID_DOOR_GLAZING_UNGLAZED = "Unglazed",
  ID_DOOR_GLAZING_LAMINATED = "Laminated",
  ID_DOOR_GLAZING_TEMPERED = "Tempered",
  ID_DOOR_GLAZING_INSULATED = "Insulated",

  // door lites
  ID_DOORLITE_20X24_WIRE = "20\" x 24\" Wire",
  ID_DOORLITE_4X24_WIRE = "4\" x 24\" Wire",
  ID_DOORLITE_16X16_WIRE = "16\" x 16\" Wire",
  ID_DOORLITE_6X27_WIRE = "6\" x 27\" Wire",		//added 02.16.2006 -dkb
  ID_DOORLITE_20X24_TEMPERED = "20\" x 24\" Tempered",
  ID_DOORLITE_4X24_TEMPERED = "4\" x 24\" Tempered",
  ID_DOORLITE_16X16_TEMPERED = "16\" x 16\" Tempered",
  ID_DOORLITE_6X27_TEMPERED = "6\" x 27\" Tempered",		//added 02.16.2006 -dkb
  ID_DOORLITE_6X30_TEMPERED = "6\" x 30\" Tempered",	//added for BW-2368 - Justin Martin
  ID_DOORLITE_6X30_INSULATED = "6\" x 30\" Insulated",		//added for BW-2368 - Justin Martin
  ID_DOORLITE_20X24_INSULATED = "20\" x 24\" Insulated",
  ID_DOORLITE_16X16_INSULATED = "16\" x 16\" Insulated",
  ID_DOORLITE_10X10_FIRERATED = "10\" x 10\" Fire Rated",
  ID_DOORLITE_NONE = "None",
  ID_DOORLITE_NA = "N/A",
  //BEGIN BW-3426
  ID_DOORLITE_6X30_TEMPERED_14 = "6\" x 30\", Single Glazed (1/4\"), Tempered",
  ID_DOORLITE_6X30_INSULATED_1 = "6\" x 30\", 1\" Insulated, Tempered",
  ID_DOORLITE_24X30_TEMPERED_14 = "24\" x 30\", Single Glazed (1/4\"), Tempered",
  ID_DOORLITE_24X30_INSULATED_1 = "24\" x 30\", 1\" Insulated, Tempered",
  ID_DOORLITE_10X10_WIRE = "10\" x 10\", 1/4\" Wire Glass",
  ID_DOORLITE_10X10_NONWIRE = "10\" x 10\", Non-Wire Glass (Keralite FRF)",
  ID_DOORLITE_4X25_WIRE = "4\" x 25\", 1/4\" Wire Glass",
  //END BW-3426

  ID_DOORLITE_6X30_LAMINATED = "6\" x 30\", Laminated",
  ID_DOORLITE_24X30_LAMINATED = "24\" x 30\", Laminated",
  ID_DOORLITE_16X16_TEMPERED_14 = "16\" x 16\", Single Glazed (1/4\"), Tempered",
  ID_DOORLITE_16X16_INSULATED_1 = "16\" x 16\", 1\" Insulated, Tempered",
  ID_DOORLITE_16X16_LAMINATED = "16\" x 16\", Laminated",

  ID_DOORLITE_4X24_FIREWIRE = "4\" x 24\", FireWire",
  ID_DOORLITE_10X10_FIREWIRE = "10\" x 10\", FireWire",

  ID_DOORLITE_24X30_ADACOMPLIANT = "24\" x 30\" ADA Compliant",

  // door lever locks
  ID_DOORLOCK_GRADE3 = "Grade 3",
  ID_DOORLOCK_GRADE2 = "Grade 2",
  ID_DOORLOCK_GRADE1 = "Grade 1",
  ID_DOORLOCK_MORTISE = "Mortise",
  ID_DOORLOCK_PANIC = "Panic",
  //BEGIN BW-3426
  ID_DOORLOCK_GRADE2_CYL = "Grade 2 Cylinder (26D Finish)",
  ID_DOORLOCK_GRADE1_CYL = "Grade 1 Cylinder",
  ID_DOORLOCK_GRADE1_MORTISE = "Grade 1 Mortise",
  ID_DOORLOCK_GRADE1_MORTISE_LEVER_PANIC = "Grade 1 Mortise With Panic Bar",
  ID_DOORLOCK_PANIC_RIM = "Standard Duty Rim Panic",
  ID_DOORLOCK_HD_PANIC_RIM = "Heavy Duty Rim Panic",
  ID_DOORLOCK_FIRE_PANIC_RIM = "Fire Standard Duty Rim Panic",
  ID_DOORLOCK_FIRE_HD_PANIC_RIM = "Fire Heavy Duty Rim Panic",
  //END BW-3426

  // BW-4383 : Added new lock kit descriptions
  ID_DOORLOCK_GRADE_1_CYLINDER = "Grade 1 Cylindrical Lever Lock",
  ID_DOORLOCK_GRADE_1_CYLINDER_PANIC = "Grade 1 Cylindrical Lever Lock w/Panic Exit Bar",
  ID_DOORLOCK_GRADE_2_CYLINDER_PANIC = "Grade 2 Cylindrical Lever Lock w/Panic Exit Bar",
  ID_DOORLOCK_GRADE_1_FIRE_CYLINDER_PANIC = "Fire Grade 1 Cylindrical Lever Lock w/Panic Bar",
  ID_DOORLOCK_GRADE_2_FIRE_CYLINDER_PANIC = "Fire Grade 2 Cylindrical Lever Lock w/Panic Bar",
  ID_DOORLOCK_GRADE_2_CYLINDER = "Grade 2 Cylindrical Lever Lock",
  ID_DOORLOCK_MORTISE_LEVER = "Mortise Lever Lock",
  ID_DOORLOCK_MORTISE_LEVER_PANIC = "Mortise Lever Lock w/Panic Exit Bar",
  // BW-4383 END

  ID_DOORLOCK_G1_MORTISE_LEVER = "Grade 1 Mortise Lever Lock",
  ID_DOORLOCK_G1_MORTISE_LEVER_PANIC = "Grade 1 Mortise Lever Lock w/Panic Exit Bar",
  ID_DOORLOCK_G1_KEYLESS_ENTRY = "Grade 1 Keyless Entry",
  ID_DOORLOCK_EXIT_ONLY_DEVICE = "Exit Only Device",
  ID_DOORLOCK_FIRE_G1_CYLINDER_PANIC = "Fire Rated Grade 1 Cylindrical Lever Lock w/Panic Exit Bar",
  ID_DOORLOCK_FIRE_G1_MORTISE_PANIC = "Fire Rated Grade 1 Mortise Lever Lock w/Panic Exit Bar",


  // door skins
  ID_DOORSKIN_18SMOOTH = "18 ga. Smooth",
  ID_DOORSKIN_20SMOOTH = "20 ga. Smooth",
  ID_DOORSKIN_20EMBOSSED = "20 ga. Embossed",

  // door swings	
  ID_DOORSWING_A = "A",
  ID_DOORSWING_B = "B",
  ID_DOORSWING_C = "C",
  ID_DOORSWING_D = "D",
  //BEGIN BW-3426: Support Swing In
  ID_DOORSWING_AI = "AI",
  ID_DOORSWING_BI = "BI",
  ID_DOORSWING_CI = "CI",
  ID_DOORSWING_DI = "DI",
  ID_DOORSWING_E = "E", //GlassFront Double Door - Both Leafs active
  //END BW-3426

  // door types
  ID_DOOR_3070_STANDARD = "3070 Standard",
  ID_DOOR_4070_STANDARD = "4070 Standard",
  ID_DOOR_6070_STANDARD = "6070 Standard",
  ID_DOOR_3070_MASONRY = "3070 Masonry",
  ID_DOOR_4070_MASONRY = "4070 Masonry",
  ID_DOOR_6070_MASONRY = "6070 Masonry",
  ID_DOOR_3070_FIRERATED = "3070 Fire Rated",
  ID_DOOR_4070_FIRERATED = "4070 Fire Rated",
  ID_DOOR_6070_FIRERATED = "6070 Fire Rated",
  ID_DOOR_3070_WINDRATED = "3070 Wind Rated",

  //door types cont  // BW - 2864 12/9/2010 Lane Adkisson, add Time Rating to door
  ID_DOOR_3070_FIRERATED_WTIME = "3070 Fire Rated(1-1/2 Hour Rating)",
  ID_DOOR_4070_FIRERATED_WTIME = "4070 Fire Rated(1-1/2 Hour Rating)",
  ID_DOOR_6070_FIRERATED_WTIME = "6070 Fire Rated(1-1/2 Hour Rating)",

  ID_DOOR_3070_FIRERATED_BLABEL = "3070 Fire Rated(1-1/2 Hour B-Label)",
  ID_DOOR_4070_FIRERATED_BLABEL = "4070 Fire Rated(1-1/2 Hour B-Label)",
  ID_DOOR_6070_FIRERATED_BLABEL = "6070 Fire Rated(1-1/2 Hour B-Label)",


  // door sizes
  ID_DOORSIZE_3070 = "3070",
  ID_DOORSIZE_4070 = "4070",
  ID_DOORSIZE_6070 = "6070",


  // Ceco doors
  ID_DOOR_TYPE_KD_WHITE = "KD - White",			// added for Ceco
  ID_DOOR_TYPE_KD_BRONZE = "KD - Bronze",				// added for Ceco
  ID_DOOR_TYPE_PA_WHITE = "PA - White",			// added for Ceco
  ID_DOOR_TYPE_PA_BRONZE = "PA - Bronze",				// added for Ceco
  ID_DOOR_TYPE_KD_GRAY = "KD - Gray",			// by Kevin Bottoms per request by Damon Brooks
  ID_DOOR_TYPE_PA_GRAY = "PA - Gray",			// by Kevin Bottoms per request by Damon Brooks

  ID_DOOR_SIZE_3070 = "3070",				// added for Ceco
  ID_DOOR_SIZE_4070 = "4070",				// added for Ceco
  ID_DOOR_SIZE_6070 = "6070",				// added for Ceco

  ID_DOOR_STYLE_SOLID = "Solid",				// added for Ceco
  ID_DOOR_STYLE_HALFGLASS = "Half Glass",				// added for Ceco
  ID_DOOR_STYLE_LONGVISION = "Long Vision",			// added for Ceco

  // Kevin Bottoms 11-22-06 added as per document CRD4B
  ID_DOOR_STYLE_M_SOLID = "M - Solid",
  ID_DOOR_STYLE_G_GLASS = "G - 1/2 Glass",
  ID_DOOR_STYLE_NL_NARROWLITE = "NL - Narrowlite",

  // Kevin Bottoms 11-22-06 added as per document CRD4B
  ID_DOOR_INSULATED = "Insulated",
  ID_DOOR_NON_INSULATED = "Non-Insulated",

  ID_DOOR_LEAF_HONEYCOMB = "Honeycomb",			// added for Ceco
  ID_DOOR_LEAF_URETHANE = "Urethane",		// added for Ceco

  ID_DOOR_SWING_RHO = "Right Hand Out",			// added for Ceco
  ID_DOOR_SWING_RHI = "Right Hand In",			// added for Ceco
  ID_DOOR_SWING_LHO = "Left Hand Out",			// added for Ceco
  ID_DOOR_SWING_LHI = "Left Hand In",			// added for Ceco
  ID_DOOR_SWING_OUT = "Out",// added for NCI by Kevin Bottoms 12-27-06

  ID_DOOR_HARDWARE_MORTISEPANIC = "Mortise Panic w/ Lever",		// added for Ceco
  ID_DOOR_HARDWARE_MORTISE = "Mortise w/ Lever",			// added for Ceco
  ID_DOOR_HARDWARE_CYLINDRICAL = "Cylindrical Panic w/ Lever",// added for Ceco
  ID_DOOR_HARDWARE_CYLINDRICAL_STANDARD = "Cylindrical w/ Lever",		// added for Ceco

  // Accessory Doors Locksets		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_DOOR_LEVER_LOCKSET = "Lever Lockset",
  ID_ACCESSORY_DOOR_MORTISE_LOCKSET = "Mortise Lockset",

  // Accessory Doors Primer Color		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_DOOR_PRIMER_COLOR_WHITE = "White",
  ID_ACCESSORY_DOOR_PRIMER_COLOR_BRONZE = "Bronze",
  ID_ACCESSORY_DOOR_PRIMER_COLOR_GRAY = "Gray",

  // Accessory Doors Leaf Options		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_DOOR_ONE_LEAF_ACTIVE = "One Leaf Active",
  ID_ACCESSORY_DOOR_BOTH_LEAVES_ACTIVE = "Both Leaves Active",

  // Accessory Door Types		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_DOOR_PREASSEMBLED = "Pre-Assembled",
  ID_ACCESSORY_DOOR_KNOCKDOWN = "Knock Down",

  // Accessory Sliding Doors and DBCI Lift Door Sizes		// Kevin Bottoms 11-13-06 added as per document CRD4A //* BW-1709 Updated list of sizes for DBCI doors.
  ID_ACCESSORY_DOOR_SIZE_8X8 = "8\' x 8\'", // 8' x 8'
  ID_ACCESSORY_DOOR_SIZE_8X9 = "8\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_8X10 = "8\' x 10\'",// 8' x 10'
  ID_ACCESSORY_DOOR_SIZE_8X11 = "8\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_8X12 = "8\' x 12\'", // 8' x 12'
  ID_ACCESSORY_DOOR_SIZE_8X13 = "8\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_8X14 = "8\' x 14\'",
  ID_ACCESSORY_DOOR_SIZE_9X8 = "9\' x 8\'",
  ID_ACCESSORY_DOOR_SIZE_9X9 = "9\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_9X10 = "9\' x 10\'",
  ID_ACCESSORY_DOOR_SIZE_9X11 = "9\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_9X12 = "9\' x 12\'",
  ID_ACCESSORY_DOOR_SIZE_9X13 = "9\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_9X14 = "9\' x 14\'",
  ID_ACCESSORY_DOOR_SIZE_10X8 = "10\' x 8\'",// 10' x 8'
  ID_ACCESSORY_DOOR_SIZE_10X9 = "10\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_10X10 = "10\' x 10\'",// 10' x 10'
  ID_ACCESSORY_DOOR_SIZE_10X11 = "10\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_10X12 = "10\' x 12\'",// 10' x 12'
  ID_ACCESSORY_DOOR_SIZE_10X13 = "10\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_10X14 = "10\' x 14\'",// 10' x 14'
  ID_ACCESSORY_DOOR_SIZE_11X8 = "11\' x 8\'",
  ID_ACCESSORY_DOOR_SIZE_11X9 = "11\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_11X10 = "11\' x 10\'",
  ID_ACCESSORY_DOOR_SIZE_11X11 = "11\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_11X12 = "11\' x 12\'",
  ID_ACCESSORY_DOOR_SIZE_11X13 = "11\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_11X14 = "11\' x 14\'",
  ID_ACCESSORY_DOOR_SIZE_12X8 = "12\' x 8\'",// 12' x 8'
  ID_ACCESSORY_DOOR_SIZE_12X9 = "12\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_12X10 = "12\' x 10\'", // 12' x 10'
  ID_ACCESSORY_DOOR_SIZE_12X11 = "12\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_12X12 = "12\' x 12\'",// 12' x 12'
  ID_ACCESSORY_DOOR_SIZE_12X13 = "12\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_12X14 = "12\' x 14\'", // 12' x 14'
  ID_ACCESSORY_DOOR_SIZE_13X8 = "13\' x 8\'",
  ID_ACCESSORY_DOOR_SIZE_13X9 = "13\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_13X10 = "13\' x 10\'",
  ID_ACCESSORY_DOOR_SIZE_13X11 = "13\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_13X12 = "13\' x 12\'",
  ID_ACCESSORY_DOOR_SIZE_13X13 = "13\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_13X14 = "13\' x 14\'",
  ID_ACCESSORY_DOOR_SIZE_14X8 = "14\' x 8\'", // 14' x 8'
  ID_ACCESSORY_DOOR_SIZE_14X9 = "14\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_14X10 = "14\' x 10\'",// 14' x 10'
  ID_ACCESSORY_DOOR_SIZE_14X11 = "14\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_14X12 = "14\' x 12\'",// 14' x 12'
  ID_ACCESSORY_DOOR_SIZE_14X13 = "14\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_14X14 = "14\' x 14\'", // 14' x 14'
  ID_ACCESSORY_DOOR_SIZE_15X8 = "15\' x 8\'",
  ID_ACCESSORY_DOOR_SIZE_15X9 = "15\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_15X10 = "15\' x 10\'",
  ID_ACCESSORY_DOOR_SIZE_15X11 = "15\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_15X12 = "15\' x 12\'",
  ID_ACCESSORY_DOOR_SIZE_15X13 = "15\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_15X14 = "15\' x 14\'",
  ID_ACCESSORY_DOOR_SIZE_16X8 = "16\' x 8\'",
  ID_ACCESSORY_DOOR_SIZE_16X9 = "16\' x 9\'",
  ID_ACCESSORY_DOOR_SIZE_16X10 = "16\' x 10\'",
  ID_ACCESSORY_DOOR_SIZE_16X11 = "16\' x 11\'",
  ID_ACCESSORY_DOOR_SIZE_16X12 = "16\' x 12\'",
  ID_ACCESSORY_DOOR_SIZE_16X13 = "16\' x 13\'",
  ID_ACCESSORY_DOOR_SIZE_16X14 = "16\' x 14\'",

  // DBCI Door Class
  ID_DBCI_SERIES_1900 = "1900",
  ID_DBCI_SERIES_1950 = "1950",
  ID_DBCI_SERIES_2000 = "2000",
  ID_DBCI_SERIES_2250 = "2250",
  ID_DBCI_SERIES_2500 = "2500",
  ID_DBCI_SERIES_2750 = "2750",
  ID_DBCI_SERIES_3000 = "3000",
  ID_DBCI_SERIES_3250 = "3250",
  ID_DBCI_SERIES_5000 = "5000",
  ID_DBCI_SERIES_5250 = "5250",

  // DBCI Options
  ID_DBCI_13HP_ELECTRIC_OPERATOR = "1/3 HP Electric Operator",
  ID_DBCI_12HP_ELECTRIC_OPERATOR = "1/2 HP Electric Operator",
  ID_DBCI_MANUAL_CHAIN_HOIST = "Manual Chain Hoist",
  ID_DBCI_TOP_DRAFT_STOP = "Top Draft Stop",
  ID_DBCI_HEADER_SEAL = "Header Seal",

  // Accessory Sliding Door Types		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_DOOR_TYPE_SINGLE_SLIDE = "Single Slide",
  ID_ACCESSORY_DOOR_TYPE_DOUBLE_SLIDE = "Double Slide",

  // Accessory Sliding Door Slide direction		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_DOOR_SLIDE_RIGHT = "Slide Right",
  ID_ACCESSORY_DOOR_SLIDE_LEFT = "Slide Left",


  // downspout types
  ID_DOWNSPOUT_CFW_II = "CFW II",
  ID_DOWNSPOUT_STARTHERM = "StarTherm",
  ID_DOWNSPOUT_4X5 = "4x5",
  ID_DOWNSPOUT_6X6 = "6x6",
  ID_DOWNSPOUT_AW300 = "AW300",		// added for RBS
  ID_DOWNSPOUT_SHADOWRIB = "ShadowRib",				// BW-3231


  // Ceco Downspouts	
  ID_DRAINAGE_1000 = "1000",					// added for Ceco
  ID_DRAINAGE_2000 = "2000",					// added for Ceco
  ID_DRAINAGE_3000 = "3000",					// added for Ceco

  // eave trims
  ID_EAVETRIM_STANDARD = "Standard",
  ID_EAVETRIM_STARASR = "StarASR",
  ID_EAVETRIM_ASR = "ASR",		// added for RBS
  ID_EAVETRIM_BATTENLOK = "Battenlok",				// Added for RBS
  ID_EAVETRIM_BATTENLOK_HS = "BattenLok HS",			// Added 1-30-2007 Kevin Bottoms

  // facade types
  ID_FACADE_SLOPED = "Sloped",
  ID_FACADE_VERTICAL = "Vertical",

  // Accessory Facade Types // Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_FACADE_VERTICAL_WITH_BACK_SHEETS = "Vertical with Back Sheets",
  ID_ACCESSORY_FACADE_VERTICAL_WITHOUT_BACK_SHEETS = "Vertical without Back Sheets",
  ID_ACCESSORY_FACADE_SLOPED_WITH_BACK_SHEETS = "Sloped with Back Sheets",
  ID_ACCESSORY_FACADE_SLOPED_WITHOUT_BACK_SHEETS = "Sloped without Back Sheets",

  // Accessory Facade angle // Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_FACADE_VERTICAL = "Vertical",
  ID_ACCESSORY_FACADE_SLOPED = "Sloped",
  ID_ACCESSORY_FACADE_PARAPET_WALL = "Parapet Wall",

  // Accessory Facade Panel // Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_FACADE_PANEL_PBR = "PBR",
  ID_ACCESSORY_FACADE_PANEL_PBA = "PBA",
  ID_ACCESSORY_FACADE_PANEL_PBU = "PBU",
  ID_ACCESSORY_FACADE_PANEL_BY_OTHERS = "By Others",
  ID_ACCESSORY_FACADE_PANEL_VISTASHADOW = "VistaShadow",

  // Ceco Fascia
  ID_FASCIA_STRUCTURAL = "Structural",		// added for Ceco
  ID_FASCIA_EAVELINE = "Eaveline",		// added for Ceco
  ID_FASCIA_BLOCK = "Block",	// added for Ceco

  ID_FASCIA_SLOPED = "Sloped",// added for Ceco
  ID_FASCIA_VERTICAL = "Vertical",		// added for Ceco

  ID_FASCIA_PANEL_MVW = "MVW",// added for Ceco
  ID_FASCIA_PANEL_MSP = "MSP",// added for Ceco
  ID_FASCIA_PANEL_CWP = "CWP",// added for Ceco
  ID_FASCIA_PANEL_CAF = "CAF",// added for Ceco
  ID_FASCIA_PANEL_CRC = "CRC",// added for Ceco
  ID_FASCIA_PANEL_FW = "FW-120",	// added for Ceco - BW-1880
  ID_FASCIA_PANEL_NONE = "None",	// added for Ceco

  ID_FASCIA_PANEL_STANDARD = "Standard",			// added for Ceco
  ID_FASCIA_PANEL_PREMIUM = "Premium",		// added for Ceco
  ID_FASCIA_PANEL_GALVALUME = "Galvalume",			// added for Ceco

  ID_FASCIA_SOFFIT_MVW = "MVW",// added for Ceco
  ID_FASCIA_SOFFIT_MIP = "MIP",// added for Ceco
  ID_FASCIA_SOFFIT_SOP = "SOP",// added for Ceco
  ID_FASCIA_SOFFIT_CAF = "CAF",// added for Ceco
  ID_FASCIA_SOFFIT_FW = "FW-120",	// added for Ceco - BW-1880
  ID_FASCIA_SOFFIT_NONE = "None",	// added for Ceco

  ID_FASCIA_SOFFIT_STANDARD = "Standard",			// added for Ceco
  ID_FASCIA_SOFFIT_PREMIUM = "Premium",		// added for Ceco
  ID_FASCIA_SOFFIT_GALVALUME = "Galvalume",				// added for Ceco



  // framed opening steel
  ID_FRAMEOPEN_STEEL_GALVANIZED = "Galvanized",
  ID_FRAMEOPEN_STEEL_RED_IRON = "Red Iron",

  // Ceco Framed Openings
  ID_FO_CLEARANCE_INCHES = "9.5 inches",				// added for Ceco
  ID_FO_CLEARANCE_FEET = "2 feet",			// added for Ceco
  ID_FO_CLEARANCE_EAVE = "To Eave",				// added for Ceco
  ID_FO_CLEARANCE_DOOR = "Personnel Door",		// added for Ceco
  ID_FO_CLEARANCE_VERTICAL_LIFT = "Vertical Lift Door",		// added for Ceco

  ID_FO_COVERING_SHOP = "Shop Coat",	// added for Ceco
  ID_FO_COVERING_GALVANIZED = "Galvanized",	// added for Ceco
  ID_FO_COVERING_TRIM = "Trim over Jambs",		// added for Ceco


  // gutter types
  ID_GUTTER_ROLL_FORMED = "Roll Formed",
  ID_GUTTER_CONVEX = "Convex",
  ID_GUTTER_STARTHERM = "StarTherm",
  ID_GUTTER_STARASR = "StarASR",
  ID_GUTTER_VALLEY = "Valley",
  ID_GUTTER_HR900 = "HR900",		// added for RBS
  ID_GUTTER_ASR = "ASR",// added for RBS
  ID_GUTTER_BATTENLOK = "Battenlok",			// Added for RBS
  ID_GUTTER_BATTENLOK_HS = "BattenLok HS",				// Added 1-30-2007 Kevin Bottoms

  // Ceco gutter types
  ID_WALL_TRIM = "Eave Trim",			// added for Ceco
  ID_WALL_MITERED_TRIM = "Mitered Eave Trim",			// BW-4069 Lane Adkisson add mitered eave trim 
  ID_WALL_FLAT_TRIM = "Flat Trim",			// BW-4069 Lane Adkisson add mitered eave trim 
  ID_WALL_DF_METAL_TRIM = "Die-Formed Metal Eave Trim - HW-4062",	// BW-4069 Lane Adkisson add mitered eave trim 
  ID_WALL_RAKE = "Rake Trim",				// added for Ceco
  ID_WALL_GABLE = "Gable Trim",
  ID_WALL_PLAIN_EAVE = "Plain Eave Trim",
  ID_WALL_SIMPLE_TRIM = "Simple Trim",
  ID_WALL_NO_TRIM = "No Trim",

  ID_GUTTER_STANDARD = "Standard Gutter",			// added for Ceco
  ID_GUTTER_PROJECTION = "Projected Gutter",				// added for Ceco
  ID_GUTTER_FALSE = "False Gutter",		// added for Ceco
  ID_GUTTER_ICE = "Ice Gutter",// added for Ceco
  ID_GUTTER_NORTHERN = "Northern Gutter",

  ID_WALL_GUTTER_DOWNSPOUTS = "Gutters and Downspouts",		// Kevin Bottoms 11-14-06 added as per document CRD3B
  ID_WALL_SCULPTURED = "Sculptured Eave Trim",			// Kevin Bottoms 11-14-06 added as per document CRD3B
  ID_WALL_SIMPLE = "Simple Eave Trim",			// Kevin Bottoms 11-14-06 added as per document CRD3B
  ID_WALL_STANDARD_EAVE = "Standard Eave Trim",
  ID_WALL_EAVE_BOX = "Eave Box Trim",
  ID_WALL_CONTOURED = "Contoured",
  ID_WALL_CASCADING = "Cascading",
  ID_WALL_SIGNATURE = "Signature",
  ID_WALL_CLASSIC = "Classic",
  ID_WALL_IMP = "IMP Standard",
  ID_WALL_EDGECRAFT = "Edgecraft",

  ID_PANEL_TEXTURE_STUCCO_EMBOSSED = "Stucco Embossed",
  ID_PANEL_TEXTURE_AZTEC_EMBOSSED = "Aztec Embossed",
  ID_PANEL_TEXTURE_SMOOTH = "Smooth",

  ID_PANEL_WIDTH_16 = "16\"",
  ID_PANEL_WIDTH_24 = "24\"",
  ID_PANEL_WIDTH_36 = "36\"",
  ID_PANEL_WIDTH_42 = "42\"",

  // Accessory Valley Gutter Options	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_VALLEY_GUTTER_NONE = "None",
  ID_ACCESSORY_VALLEY_GUTTER_ONE_END = "One End",
  ID_ACCESSORY_VALLEY_GUTTER_BOTH_ENDS = "Both Ends",

  // liner panel types
  ID_WALL_PANEL_LINER = "StarLiner",
  ID_WALL_PANEL_ROBERTSON_LINER = "RobertsonLiner",				// added for RBS

  // Ceco Liner Panel
  ID_LINER_PANEL_MIP = "MIP",				// added for Ceco
  ID_LINER_PANEL_MAP = "MAP",				// added for Ceco
  ID_LINER_PANEL_MVW = "MVW",				// added for Ceco

  ID_LINER_COLOR_STANDARD = "Standard",				// added for Ceco
  ID_LINER_COLOR_PREMIUM = "Premium",			// added for Ceco
  ID_LINER_COLOR_GALVALUME = "Galvalume",				// added for Ceco

  ID_LINER_BASE_ANGLE = "Angle",			// added for Ceco
  ID_LINER_BASE_GIRT = "Girt",			// added for Ceco
  ID_LINER_BASE_CHANNEL = "Channel",			// added for Ceco

  ID_TERMINATE_TOP_EAVE_STRUT = "Terminate at Top of Eave Strut",	//added per JIRA BW-196 -dkbrooks 10.02.2007 CecoPro 2008
  ID_TERMINATE_BOTTOM_EAVE_STRUT = "Terminate at Bottom of Eave Strut",	//added per JIRA BW-196 -dkbrooks 10.02.2007 CecoPro 2008
  ID_TERMINATE_OTHER = "Other",							//added per JIRA BW-196 -dkbrooks 10.02.2007 CecoPro 2008


  // louvers
  ID_BRONZE_LOUVER = "4'-0\" x 4'-0\" Bronze",

  // Accessory Louver Options
  ID_ACCESSORY_SIZE_2X2 = "2\' x 2\'",// 2' x 2'	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SIZE_3X2 = "3\' x 2\'",// 3' x 2'	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SIZE_3X3 = "3\' x 3\'",// 3' x 3'	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SIZE_4X3 = "4\' x 3\'",// 4' x 3'	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SIZE_3X4 = "3\' x 4\'", // 3' x 4'	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SIZE_4X4 = "4\' x 4\'",// 4' x 4'	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_SIZE_5X4 = "5\' x 4\'", // 5' x 4'	// Kevin Bottoms 11-13-06 added as per document CRD4A

  // Accessory Louver Type
  ID_ACCESSORY_LOUVER_FIXED = "Fixed",	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_LOUVER_ADJUSTABLE = "Adjustable",	// Kevin Bottoms 11-13-06 added as per document CRD4A

  // Ceco Louvers
  ID_LOUVER_EXHAUSTER = "Exhauster",		// added for Ceco
  ID_LOUVER_STANDARD = "Standard Louver",			// added for Ceco
  ID_LOUVER_PREMIUM = "Premium Louver",		// added for Ceco

  ID_POWER_110 = "110",						// added for Ceco
  ID_POWER_220 = "220",						// added for Ceco


  // open areas column stability
  ID_OPEN_AREAS_COL_STABILITY_BY_STAR = "By Star",
  ID_OPEN_AREAS_COL_STABILITY_NOT_BY_STAR = "Not By Star",

  // open areas types
  ID_OPEN_FULL = "Full Height",
  ID_OPEN_PARTIAL = "Partial Height",
  ID_OPEN_ATTACHMENT = "Attachment Height",
  ID_OPEN_CHILD_ATTACHMENT = "Child Bldg Attachment",

  // open areas framing
  ID_OPEN_AREAS_FRAME_REMOVED = "Removed",
  ID_OPEN_AREAS_FRAME_REMAINS = "Remains",

  // apen areas
  ID_OPENAREA_CHANNEL = "Channel",
  ID_OPENAREA_BASE_CHANNEL = "Base Channel",
  ID_OPENAREA_BASE_ANGLE = "Base Angle",

  // open areas options
  ID_OPEN_REINFORCED = "Reinforced",
  ID_OPEN_UNREINFORCED = "Unreinforced",
  ID_OPEN_VERTSPAN = "Vertical Span",
  ID_OPEN_VERTCANTILEVER = "Vertical Cantilever",
  ID_OPEN_VERTICAL = "Vertical",
  ID_OPEN_HORIZONTAL = "Horizontal",

  // pipe flash type
  ID_PIPE_ROOFJACKS = "Metal Roof Jacks",
  ID_PIPE_PIPEFLASH = "Rubber Pipe Flash",

  ID_PIPE_CECOPIPE = "Pipe Flash",			// added for Ceco


  //BW-6991: Update Pipe Flash product offering for all brands to match NCI Standards (NEW defines) //Reference Standards documents GDL26001 and GBL26001
  ID_PIPEFLASH_HW1000 = "1/4\" - 1-1/2\"",
  ID_PIPEFLASH_HW1001 = "1-1/2\" - 4\"",
  ID_PIPEFLASH_HW1002 = "4-1/4\" - 6\"",
  ID_PIPEFLASH_HW1003 = "6\" - 11\"",
  ID_PIPEFLASH_HW1004 = "7\" - 13\"",

  // pipe flash outside diamter //BW-6991: Update Pipe Flash product offering for all brands to match NCI Standards (Below are obsolete as of 7.0)
  ID_OD_7TO12 = "7\" - 12\"",
  ID_OD_1TO4 = "1/4\" - 4\"",
  ID_OD_4TO7 = "4\" - 7\"",
  ID_OD_7TO13 = "7\" - 13\"",

  ID_OD_SMALL = "Small #3 (1/4\" to 4\")",	// added for Ceco
  ID_OD_MEDIUM = "Medium #5 (4\" to 7\")",	// added for Ceco
  ID_OD_LARGE = "Large #8 (7\" to 13\")",	// added for Ceco

  ID_OD_1TO2 = "#1 - 1/4\" - 2\"",
  ID_OD_13TO31 = "#2 - 1-3/4\" - 3-1/4\"",
  ID_OD_1TO5 = "#3 - 1/4\" - 5\"",
  ID_OD_3TO61 = "#4 - 3\" - 6-1/4\"",
  ID_OD_41TO71 = "#5 - 4-1/4\" - 7-1/2\"",
  ID_OD_5TO9 = "#6 - 5\" - 9\"",
  ID_OD_6TO11 = "#7 - 6\" - 11\"",
  ID_OD_70TO13 = "#8 - 7\" - 13\"",
  ID_OD_10TO19 = "#9 - 10\" - 19\"",

  //BW-6991: Update Pipe Flash product offering for all brands to match NCI Standards (Below are obsolete as of 7.0)
  ID_OD_1TO2_PARA = "(#1) 1/4\" - 2\"", // NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_13TO31_PARA = "(#2) 1-3/4\" - 3-1/4\"",// NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_1TO5_PARA = "(#3) 1/4\" - 5\"", // NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_3TO61_PARA = "(#4) 3\" - 6-1/4\"",// NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_41TO71_PARA = "(#5) 4-1/4\" - 7-1/2\"", // NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_5TO9_PARA = "(#6) 5\" - 9\"",// NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_6TO11_PARA = "(#7) 6\" - 11\"",// NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_70TO13_PARA = "(#8) 7\" - 13\"",// NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7
  ID_OD_10TO19_PARA = "(#9) 10\" - 19\"",// NBS-900 08/27/2007 Kevin Bottoms NCI Beta v3.7

  // slide doors
  ID_SLIDE_SINGLE = "Single",
  ID_SLIDE_DOUBLE = "Double",

  // slide door direction
  ID_SLIDE_RIGHT = "Right",
  ID_SLIDE_LEFT = "Left",

  // support beams location
  ID_SUPP_BEAMS_INSIDE = "Inside",
  ID_SUPP_BEAMS_OUTSIDE = "Outside",


  // Accessory Wall Translucent Panels - LTPs		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_3X30 = "3\' x 3\'-0\"",// 3' x 3'-0"
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_3X40 = "3\' x 4\'-0\"", // 3' x 4'-0"
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_3X54 = "3\' x 5\'-4\"", // 3' x 5'-4"
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_3X69 = "3\' x 6\'-9\"", // 3' x 6'-9"	
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_3X108 = "3\' x 10\'-8\"",// 3' x 10'-8"
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_3X110 = "3\' x 11\'-0\"",// 3' x 11'-0"

  // Accessory Wall Translucent Panels - eave conditions		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_AT_EAVE = "At Eave",
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_BELOW_EAVE = "Below Eave",

  // Accessory Wall Translucent Panels - Continuous / Non-Continuous		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_CONTINUOUS = "Continuous",
  ID_ACCESSORY_WALL_TRANSLUCENT_PANELS_NONCONTINUOUS = "Non-Continuous",

  // translucent panel types
  ID_ROOF_LTPTYPE_DURARIB = "DuraRib",
  ID_ROOF_LTPTYPE_DURA_RIB = "Dura-Rib",				// S.Hathaway 11-15-2010 BW-2814
  ID_ROOF_LTPTYPE_TWINRIB = "TwinRib",
  ID_ROOF_LTPTYPE_STARSHIELD = "StarShield",
  ID_ROOF_LTPTYPE_SSR = "SSR",		// added for RBS
  ID_ROOF_LTP_DURARIB1 = "5'-10\"",
  ID_ROOF_LTP_DURARIB2 = "10'-7\"",
  ID_ROOF_LTP_DURARIB3 = "11'-1\"",
  ID_ROOF_LTP_TWINRIB = "11'-0\"",
  ID_ROOF_LTP_STARSHIELD = "10'-0\"",
  ID_ROOF_LTP_SSR = "10'-0\"",
  ID_ROOF_LTP_PBR = "10'-8\"",
  ID_ROOF_LTP_DOUBLELOK = "10'-3\"",
  ID_ROOF_LTP_10_6 = "10'-6\"",
  ID_ROOF_LTP_11 = "11'-0\"",
  ID_ROOF_LTP_12 = "12'-0\"",
  ID_WALL_LTP_DURARIB1 = "5'-10\"",
  ID_WALL_LTP_DURARIB2 = "7'-8\"",
  ID_WALL_LTP_DURARIB3 = "10'-7\"",
  ID_WALL_LTP_PBR1 = "3'-0\"",
  ID_WALL_LTP_PBR2 = "4'-0\"",
  ID_WALL_LTP_PBR3 = "5'-4\"",
  ID_WALL_LTP_PBR4 = "6'-9\"",
  ID_WALL_LTP_PBR5 = "10'-8\"",
  ID_WALL_LTP_PBA = "11'-0\"",
  ID_WALL_LTP_PBU = "12'-0\"",

  // BW-3873 - JDM Adding new panel lengths for these wall panels.
  ID_WALL_LTP_PBR_11 = "11'-0\"",
  ID_WALL_LTP_PBR_12 = "12'-0\"",
  ID_WALL_LTP_PBU_10_8 = "10'-8\"",
  ID_WALL_LTP_AVP_11 = "11'-0\"",

  // translucent panel locations	
  ID_LTP_STANDARD = "Standard",
  ID_LTP_FIELD = "Field Located",
  ID_LTP_NOTES = "Project Notes",

  ID_LOCATE_CENTER = "Center in Bay",				// added for Ceco
  ID_LOCATE_2 = "2 per Bay",		// added for Ceco
  ID_LOCATE_3 = "3 per Bay",		// added for Ceco
  ID_LOCATE_CONTINUOUS = "Continuous",				// added for Ceco

  ID_LOCATE_SWA = "SWA roof",				// added for Ceco
  ID_LOCATE_SWB = "SWB roof",				// added for Ceco
  ID_LOCATE_SWC = "SWC roof",				// added for Ceco
  ID_LOCATE_SWD = "SWD roof",				// added for Ceco

  ID_SWA = "SWA",	// added for Ceco
  ID_SWB = "SWB",	// added for Ceco
  ID_SWC = "SWC",	// added for Ceco
  ID_SWD = "SWD",	// added for Ceco
  ID_EWA = "EWA",	// added for Ceco
  ID_EWB = "EWB",	// added for Ceco
  ID_EWC = "EWC",	// added for Ceco
  ID_EWD = "EWD",	// added for Ceco

  // vents
  ID_VENT_UNIVENT = "Univent",
  ID_VENT_MONOVENT = "Monovent",

  ID_VENT_TYPE_ROUND = "Round",		// added for Ceco
  ID_VENT_TYPE_CONTINUOUS = "Continuous",				// added for Ceco
  ID_VENT_INS_SINGLE = "Single",		// added for Ceco
  ID_VENT_INS_CONTINUOUS = "Continuous",				// added for Ceco

  // Accessory Vent Types		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_VENT_9X10 = "9\" x 10\'-0\"", // 9" x 10'-0"
  ID_ACCESSORY_VENT_12X10 = "12\" x 10\'-0\"", // 12" x 10'-0"
  ID_ACCESSORY_VENT_12ULTRAVENT = "12\" Ultra-Vent", // 12" Ultra-Vent
  ID_ACCESSORY_VENT_20ROUND = "20\" Round",// 20" Round //BW-7466: 20" Round Vent no longer supported
  ID_ACCESSORY_VENT_24ROUND = "24\" Round", // 24" Round

  // Accessory Vent Finish/Color		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_VENT_GALVALUME = "Galvalume Plus",
  ID_ACCESSORY_VENT_WHITE = "White",

  // Accessory Vent Operators		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_MULTIPLE_VENT_OPERATOR = "Multiple Vent Operator",
  ID_ACCESSORY_SINGLE_VENT_OPERATOR = "Single Vent Operator",

  //BEGIN BW-3426: Add Window Categories offered by Star/Robertson
  ID_WINDOW_CATEGORY_NON_THERMAL = "Non Thermal Frame",
  ID_WINDOW_CATEGORY_THERMAL = "Thermal Frame",
  ID_WINDOW_CATEGORY_INSUL_VIEW = "Insul View",
  ID_WINDOW_CATEGORY_VINYL = "Vinyl",
  //END BW-3426


  // window glass
  ID_WINDOW_GLASS_TINTED = "Tinted",
  ID_WINDOW_GLASS_CLEAR = "Clear",
  //BEGIN BW-3426: Add New Window glass finishes offered by Star/Robertson
  ID_WINDOW_GLASS_LOW_E = "Low E",
  //Insul View
  ID_WINDOW_GLASS_CLEAR_INSUL = "Clear Insulated",
  ID_WINDOW_GLASS_TINT_INSUL = "Tinted Insulated",
  ID_WINDOW_GLASS_LOW_E_INSUL = "Low E Insulated",
  //Vinyl                                               ,
  ID_WINDOW_GLASS_CLEAR_INSUL_VINYL = "Clear Insulated",
  ID_WINDOW_GLASS_LOW_E_VINYL = "Low E",
  ID_WINDOW_GLASS_LOW_E_ARGON = "Low E With Argon",
  ID_WINDOW_GLASS_TINT_BRZ_GRY = "Bronze/Grey Tint",
  //END BW-3426

  // window color
  ID_WINDOW_COLOR_WHITE = "White",
  ID_WINDOW_COLOR_BRONZE = "Bronze",

  // window types
  ID_WINDOW_3030_XO = "3030 Single Slide XO",
  ID_WINDOW_3040_XO = "3040 Single Slide XO",
  ID_WINDOW_4030_XO = "4030 Single Slide XO",
  ID_WINDOW_4040_XO = "4040 Single Slide XO",
  ID_WINDOW_5040_XO = "5040 Single Slide XO",
  ID_WINDOW_6030_XO = "6030 Single Slide XO",
  ID_WINDOW_6040_XO = "6040 Single Slide XO",
  ID_WINDOW_6030_XOX = "6030 Double Slide XOX",
  ID_WINDOW_6040_XOX = "6040 Double Slide XOX",
  ID_WINDOW_2060_FIXED = "2060 Fixed",
  ID_WINDOW_2070_FIXED = "2070 Fixed",
  ID_WINDOW_3030_FIXED = "3030 Fixed",
  ID_WINDOW_3040_FIXED = "3040 Fixed",
  ID_WINDOW_4030_FIXED = "4030 Fixed",
  ID_WINDOW_4040_FIXED = "4040 Fixed",
  ID_WINDOW_6030_FIXED = "6030 Fixed",
  ID_WINDOW_3040_FIXED_PI = "3040 Fixed/Project-In",
  ID_WINDOW_2060_FIXED_PI = "2060 Fixed/Project-In",

  // non-thermal window adds
  ID_WINDOW_COLOR_MILL = "Mill",
  ID_WINDOW_GLASS_GLAZING = "Single Glazing",
  ID_WINDOW_GLASS_INSULATED = "Insulated",
  ID_WINDOW_NT_1070_FIXED = "Non-Thermal 1070 Fixed",
  ID_WINDOW_NT_2060_FIXED = "Non-Thermal 2060 Fixed",
  ID_WINDOW_NT_2070_FIXED = "Non-Thermal 2070 Fixed",
  ID_WINDOW_NT_3040_FIXED = "Non-Thermal 3040 Fixed",
  ID_WINDOW_NT_4030_FIXED = "Non-Thermal 4030 Fixed",
  ID_WINDOW_NT_4040_FIXED = "Non-Thermal 4040 Fixed",
  ID_WINDOW_NT_6040_FIXED = "Non-Thermal 6040 Fixed",
  ID_WINDOW_NT_3030_XO = "Non-Thermal 3030 XO",
  ID_WINDOW_NT_4030_XO = "Non-Thermal 4030 XO",
  ID_WINDOW_NT_6030_XO = "Non-Thermal 6030 XO",
  ID_WINDOW_NT_3040_XO = "Non-Thermal 3040 XO",
  ID_WINDOW_NT_4040_XO = "Non-Thermal 4040 XO",
  ID_WINDOW_NT_6040_XO = "Non-Thermal 6040 XO",

  ID_WINDOW_QUALITY_STANDARD = "Standard",					// added for Ceco
  ID_WINDOW_QUALITY_PREMIUM = "Premium",			// added for Ceco
  ID_WINDOW_TYPE_FIXED = "Fixed",		// added for Ceco
  ID_WINDOW_TYPE_SLIDE = "Slide",		// added for Ceco
  ID_WINDOW_SIZE_2060 = "2060",		// added for Ceco
  ID_WINDOW_SIZE_3030 = "3030",		// added for Ceco
  ID_WINDOW_SIZE_4030 = "4030",		// added for Ceco
  ID_WINDOW_SIZE_6030 = "6030",		// added for Ceco
  //BEGIN BW-3426: Add Window Sizes also offered by Star/Robertson
  ID_WINDOW_SIZE_2060T = "2060T",
  ID_WINDOW_SIZE_2070T = "2070T",
  ID_WINDOW_SIZE_2070 = "2070",
  ID_WINDOW_SIZE_3040 = "3040",
  ID_WINDOW_SIZE_3050 = "3050",
  ID_WINDOW_SIZE_3060 = "3060",
  ID_WINDOW_SIZE_4040 = "4040",
  ID_WINDOW_SIZE_5030 = "5030",
  ID_WINDOW_SIZE_5040 = "5040",
  ID_WINDOW_SIZE_6040 = "6040",
  //END BW-3426

  //BEGIN BW-3426: Add Window Types offered by Star/Robertson
  //Thermal Frame
  ID_WINDOW_TYPE_HORZ_SLIDE_XO = "Horizontal Sliding (XO)",
  ID_WINDOW_TYPE_FIXED_PICTURE = "Fixed Picture",
  ID_WINDOW_TYPE_FIXED_PROJECT_IN = "Fixed Project-In",
  ID_WINDOW_TYPE_SINGLE_HUNG = "Single Hung Window",
  //Vinyl
  ID_WINDOW_TYPE_HORZ_SLIDE_XO_SSB = "Horizontal Sliding (XO) - Single Strength B-Grade",
  ID_WINDOW_TYPE_SINGLE_HUNG_SSB = "Side Load, Single Hung - Single Strength B-Grade",
  ID_WINDOW_TYPE_FIXED_DSB = "Fixed Window - Double Strength B-Grade",
  //Insul View - Now Only Option for Insulated Wall Panels
  ID_WINDOW_TYPE_HORZ_SLIDE_XO_IV = "Horizontal Sliding (XO)",
  ID_WINDOW_TYPE_FIXED_IV = "Fixed",



  //END BW-3426

  // Accessory Windows Size Options	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_WINDOWS_2070SL = "2070SL",
  ID_ACCESSORY_WINDOWS_3030AHS = "3030 AHS",
  ID_ACCESSORY_WINDOWS_4030AHS = "4030 AHS",
  ID_ACCESSORY_WINDOWS_4040AHS = "4040 AHS",
  ID_ACCESSORY_WINDOWS_6030AHS = "6030 AHS",

  // Accessory Windows Insulation		// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_WINDOWS_INSULATED = "Insulated",
  ID_ACCESSORY_WINDOWS_NONINSULATED = "Non-Insulated",

  // Accessory Windows Frame			// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_WINDOWS_MILL_FINISH = "Mill Finish",
  ID_ACCESSORY_WINDOWS_BRONZE = "Bronze",

  // mezzanines
  ID_MEZZ_DECK_22 = "22 gauge 1 1/2\" Wide Rib Deck",
  ID_MEZZ_DECK_B = "1 1/2\" B-Deck",
  ID_MEZZ_DECK_26 = "26 gauge 9/16\" Form-Deck",
  ID_MEZZ_DECK_TYPE_STANDARD = "Manufacturer Standard", // Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_DECK_TYPE_OTHER = "Other",	// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_DECK_GALVALUME = "Galvanized",
  ID_MEZZ_DECK_SHOPCOAT = "Shopcoat",
  ID_MEZZ_DECK_PREGALVANIZED = "Pregalvanized",		// added per BW-173 -dkbrooks 10.31.2007 SBS 9.4B
  ID_MEZZ_DECK_26_G90 = "32\" PBD 26ga Galvanized G90",		// SCH 08-07-2013 BW-3713
  ID_MEZZ_DECK_22_B = "22ga 1.5\" B-Deck",			// SCH 08-16-2013 BW-3713
  ID_MEZZ_DECK_26_F_OLD = "26ga 9/16\" Form-Deck",				//BSheth_v10.0.0_BW-8303 Mezzanine deck sort option	// SCH 08-16-2013 BW-3713 
  ID_MEZZ_DECK_26_F = "26ga 0.6\" FD Deck",          //BSheth_v10.0.0_BW-8303 Mezzanine deck sort option
  ID_MEZZ_DECK_26_P = "26ga 5/8\" PBD Panel",				// SCH 08-16-2013 BW-3713
  ID_MEZZ_DECK_ME = "Most Economical",		// SCH 09-11-2013 BW-3713

  ID_MEZZ_FINISH_PG = "PreGalvanized",		// SCH 08-16-2013 BW-3713
  ID_MEZZ_FINISH_G60 = "PreGalvanized G60",							// SCH 08-16-2013 BW-3713
  ID_MEZZ_FINISH_G90 = "PreGalvanized G90",							// SCH 08-16-2013 BW-3713
  ID_MEZZ_FINISH_PW = "Painted White",		// SCH 08-16-2013 BW-3713
  ID_MEZZ_FINISH_G = "Painted Gray",		// SCH 08-16-2013 BW-3713

  ID_MEZZ_DECK_SCREWED = "Screwed",
  ID_MEZZ_DECK_WELDED = "Welded",
  ID_MEZZ_DECK_BUTTON_PUNCHED = "Button Punching",
  ID_MEZZ_DECK_ATTACH_SCREWS = "Screws",	// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_DECK_ATTACH_WELD_WASHERS = "Weld Washers",// Kevin Bottoms 11-22-06 added as per document CRD6

  ID_MEZZ_JOISTS_GRAY = "Gray",
  ID_MEZZ_JOISTS_RED = "Red",
  ID_MEZZ_JOISTS_VENDOR = "Vendor Standard",
  ID_MEZZ_JOISTS_GALVALUME = "Galvanized",		// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_JOISTS_TYPE_STANDARD = "Manufacturer Standard",// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_JOISTS_TYPE_LBS = "LBS",		// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_JOISTS_SPACING_STANDARD = "Manufacturer Standard", // Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_JOISTS_SPACING_CUSTOM = "Custom",			// Kevin Bottoms 11-22-06 added as per document CRD6

  ID_MEZZ_FLOOR_CONCRETE = "Concrete",
  ID_MEZZ_FLOOR_LIGHTCONCRETE = "Light Concrete",
  ID_MEZZ_FLOOR_PLYWOOD = "Plywood",

  ID_MEZZ_COLUMN_TYPE_NONE = "None",	// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_COLUMN_TYPE_HCOLUMN = "H-Column",	// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_COLUMN_TYPE_PIPE = "Pipe",	// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_COLUMN_TYPE_TUBE = "Tube",	// Kevin Bottoms 11-22-06 added as per document CRD6

  ID_MEZZ_COLUMN_BASE_AT_FLOOR = "At Finished Floor",		// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_COLUMN_BASE_BELOW_FLOOR = "Below Finished Floor",	// Kevin Bottoms 11-22-06 added as per document CRD6
  ID_MEZZ_COLUMN_BASE_ABOVE_FLOOR = "Above Finished Floor",	// Kevin Bottoms 11-22-06 added as per document CRD6

  ID_MEZZ_JOISTS_NET_DESC = "Joists NET",
  ID_MEZZ_DECK_NET_DESC = "Deck NET",

  //*************************  INSULATION INPUT STRINGS  ***********************//

  // insulation facings
  ID_FACING_WV = "Vinyl White",
  ID_FACING_PSKVR = "PSK-VR",
  ID_FACING_FSK = "FSK",
  ID_FACING_PSK10 = "PSK-10",
  ID_FACING_PSK30 = "PSK-30",
  ID_FACING_PSP = "PSP",
  ID_FACING_VRP3 = "VRP-3",
  ID_FACING_GG = "Gym Guard",
  ID_FACING_AS = "Arena Shield",
  ID_FACING_VRR = "VRR",
  ID_FACING_UNFACED = "Unfaced",
  ID_FACING_SOLARGUARD = "Solarguard",
  ID_FACING_TVM = "TVM",

  ID_FACING_CBS_ARENA = "Arenashield",	// added for Ceco
  ID_FACING_CBS_FSKHD = "FSK-HD",		// added for Ceco
  ID_FACING_CBS_PSF = "PSF",	// added for Ceco
  ID_FACING_CBS_UNFACED = "Unfaced",		// added for Ceco
  ID_FACING_CBS_VPG = "VPG",	// added for Ceco
  ID_FACING_CBS_VR = "VR",		// added for Ceco
  ID_FACING_CBS_VRPHD = "VRP-HD",		// added for Ceco
  ID_FACING_CBS_VRPLD = "VRP-LD",		// added for Ceco
  ID_FACING_CBS_VRV = "VRV",	// added for Ceco
  ID_FACING_CBS_WMP10 = "WMP-10",		// added for Ceco
  ID_FACING_CBS_WMP30 = "WMP-30",		// added for Ceco
  ID_FACING_CBS_WV = "WV",	// added for Ceco
  ID_FACING_CBS_VRPLUS = "VRR PLUS",		// Kevin Bottoms added 3-13-2007 for Ceco

  ID_FACING_MPL_FSK = "FSK",		// added for Ceco
  ID_FACING_MPL_WMP10 = "WMP-10",			// added for Ceco
  ID_FACING_MPL_WMP50 = "WMP-50",		// added for Ceco
  ID_FACING_MPL_WMPVR = "WMP-VR",		// added for Ceco
  ID_FACING_MPL_WMPVRR = "WMP-VRR",		// added for Ceco

  ID_FACING_RKM_ARENA = "Arenashield",	// added for Ceco
  ID_FACING_RKM_FSK = "FSK",	// added for Ceco
  ID_FACING_RKM_GYM = "Gymguard",			// added for Ceco
  ID_FACING_RKM_VRP = "VRP",		// added for Ceco
  ID_FACING_RKM_VRV = "VRV",		// added for Ceco
  ID_FACING_RKM_VSF = "VSF",		// added for Ceco
  ID_FACING_RKM_VSFHD = "VSF-HD",		// added for Ceco
  ID_FACING_RKM_WV = "White Vinyl",	// added for Ceco
  ID_FACING_RKM_WMP10 = "WMP-10",		// added for Ceco
  ID_FACING_RKM_WMPF = "WMP-F",		// added for Ceco
  ID_FACING_RKM_WMPVR = "WMP-VR",		// added for Ceco

  // S.Hathaway 11-29-2010 BW-2784
  ID_FACING_WMPVR = "WMP-VR",
  ID_FACING_WMP10 = "WMP-10",
  ID_FACING_WMP30 = "WMP-30",
  ID_FACING_WMP50 = "WMP-50",
  ID_FACING_WMPVRR = "WMP-VRR",

  // Kevin Bottoms 11-29-06 added as per document CRD5
  ID_FACING_BLANKET = "Blanket",
  ID_FACING_SOLAR_GUARD = "SolarGuard",
  //BW-4485: Changed "SolarGuard" to "Reflect-R" for Star. Also added Elaminator for Star
  ID_FACING_REFLECT_R = "Reflect-R",
  ID_FACING_ELAMINATOR = "Elaminator 300",

  ID_FACING_ENERGY_SAVER = "Energy Saver",
  ID_FACING_BANDED_SYSTEM = "Banded System",
  ID_FACING_OPTILINER_BLS = "Optiliner BLS",
  ID_FACING_ECOLINER = "Ecoliner",
  ID_FACING_BANDED = "Banded",
  ID_FACING_OPTILINER = "Optiliner",
  ID_FACING_SKYLINER = "Skyliner",
  ID_FACING_BANDED_LINER_SYSTEM = "Banded Liner System",
  ID_FACING_LONG_TAB_BANDED = "Long Tab Banded",
  ID_FACING_LEADING_EDGE_SYSTEM = "Leading Edge System",

  // Justin D Martin BW-4051 - New Insulation types for Insulation not by Brand.
  ID_FACING_BATT_OVER_PURLIN = "Batt-Over the Purlin Insulation Only",
  ID_FACING_BATT_OVER_GIRT = "Batt-Over the Girt Insulation Only",
  ID_FACING_FULL_CAVITY = "Full Cavity Insulation",
  ID_FACING_RTS_UNFACED = "RTS Unfaced Insulation",

  // Kevin Bottoms 11-21-06 added as per document CRD5
  ID_SOLARGUARD_FACING_FOIL_FOIL_NCI = "Foil/Foil",
  ID_SOLARGUARD_FACING_FOIL_RFSK_NCI = "Foil/RFSK",
  ID_SOLARGUARD_FACING_WHITE_NCI = "White",

  // Kevin Bottoms 2-12-2007 for NCI Project
  ID_SOLARGUARD_FACING_RFSK = "RFSK Aluminum",
  ID_SOLARGUARD_FACING_PSKVR = "PSK-VR White",

  ID_SOLARGUARD_FACING_RFSK_WHITE = "RFSK White",

  // Kevin Bottoms 11-21-06 added as per document CRD5
  ID_BLANKET_FACING_PSK_VR_NCI = "PSK-VR",
  ID_BLANKET_FACING_FSK_NCI = "FSK",
  ID_BLANKET_FACING_PSK_10_NCI = "PSK-10",
  ID_BLANKET_FACING_PSK_30_NCI = "PSK-30",
  ID_BLANKET_FACING_PSP_NCI = "PSP",
  ID_BLANKET_FACING_VRP_3_NCI = "VRP-3",
  ID_BLANKET_FACING_GYM_GUARD_NCI = "Gym Guard",
  ID_BLANKET_FACING_ARENA_SHIELD_NCI = "Arena Shield",
  ID_BLANKET_FACING_VRR_NCI = "VRR",
  ID_BLANKET_FACING_TVM_NCI = "TVM",

  // Kevin Bottoms 2-12-2007 for NCI Project
  ID_BLANKET_FACING_WHITE_VINYL_NCI = "White Vinyl",
  ID_BLANKET_FACING_WMPVR_NCI = "WMP-VR",
  ID_BLANKET_FACING_WMPVR_R_NCI = "WMP-VR-R",

  // Kevin Bottoms 11-21-06 added as per document CRD5
  ID_BLANKET_DOUBLE_FACED_TAPE_150_NCI = "1 1/2\" x 150\'-0\" Roll (Blanket)",
  ID_BLANKET_DOUBLE_FACED_TAPE_450_NCI = "1 1/2\" x 450\'-0\" Roll (Blanket)",
  ID_SOLARGUARD_DOUBLE_FACED_TAPE_180_NCI = "1 1/2\" x 180\'-0\" Roll (SolarGuard)",

  // Kevin Bottoms 2-12-2007 for NCI Project
  ID_DOUBLE_FACED_TAPE_180_NCI = "1 1/2\" x 180\'-0\" Roll",

  // Kevin Bottoms 11-21-06 added as per document CRD5
  ID_PATCHING_TAPE_PSK_VR_NCI = "PSK-VR",
  ID_PATCHING_TAPE_FSK_NCI = "FSK",
  ID_PATCHING_TAPE_PSK_10_NCI = "PSK-10",
  ID_PATCHING_TAPE_PSK_30_NCI = "PSK-30",
  ID_PATCHING_TAPE_PSP_NCI = "PSP",
  ID_PATCHING_TAPE_VRP_3_NCI = "VRP-3",
  ID_PATCHING_TAPE_GYM_GUARD_NCI = "Gym Guard",
  ID_PATCHING_TAPE_ARENA_SHIELD = "Arena Shield",
  ID_PATCHING_TAPE_VRR_NCI = "VRR",
  ID_PATCHING_TAPE_TVM_NCI = "TVM",
  ID_PATCHING_TAPE_SOLARGUARD_WHITE_NCI = "SolarGuard - White",
  ID_PATCHING_TAPE_SOLARGUARD_SILVER_NCI = "SolarGuard - Silver",

  // Kevin Bottoms 2-12-2007 for NCI Project
  ID_PATCHING_TAPE_WHITE_VINYL_NCI = "White Vinyl (150' Roll)",
  ID_PATCHING_TAPE_WMPVR_NCI = "WMP-VR (150' Roll)",
  ID_PATCHING_TAPE_WMPVR_R_NCI = "WMP-VR-R (150' Roll)",
  ID_PATCHING_TAPE_SOLARGUARD_NCI = "Solarguard (150' Roll)",

  // Kevin Bottoms 11-21-06 added as per document CRD5
  ID_UNFACED_INSULATION_3R10_100_NCI = "3\" R-10 (100\'-0 Max Roll)",
  ID_UNFACED_INSULATION_3R11_75_NCI = "3 1/2\" R-11 (75\'-0 Max Roll)",
  ID_UNFACED_INSULATION_4R13_75_NCI = "4\" R-13 (75\'-0 Max Roll)",
  ID_UNFACED_INSULATION_5R16_60 = "5\" R-16 (60\'-0 Max Roll)",
  ID_UNFACED_INSULATION_6R19_50_NCI = "6\" R-19 (50\'-0 Max Roll)",
  ID_UNFACED_INSULATION_8R24_25_NCI = "8\" R-24 (25\'-0 Max Roll)",
  ID_UNFACED_INSULATION_9R30_25_NCI = "9 1/2\" R-30 (25\'-0 Max Roll)",
  ID_UNFACED_INSULATION_9R30_25 = "9\" R-30 (25\'-0 Max Roll)",

  ID_UNFACED_INSULATION_3R10_75 = "3\" R-10 (75\'-0 Max Roll)",
  ID_UNFACED_INSULATION_3R10_90 = "3\" R-10 (90\'-0 Max Roll)",
  ID_UNFACED_INSULATION_3R11_90 = "3 1/2\" R-11 (90\'-0 Max Roll)",
  ID_UNFACED_INSULATION_4R13_628 = "4\" R-13 (62\'-8 Max Roll)",
  ID_UNFACED_INSULATION_4R13_70 = "4\" R-13 (70\'-0 Max Roll)",
  ID_UNFACED_INSULATION_8R24_40 = "8\" R-24 (40\'-0 Max Roll)",

  ID_UNFACED_INSULATION_3R12_70_RBS = "3 1/2\" R-12 (70\'-6 Max Roll)",
  ID_UNFACED_INSULATION_6R20_40_RBS = "6\" R-20 (40\'-0 Max Roll)",
  ID_UNFACED_INSULATION_8R28_25_RBS = "8\" R-28 (25\'-0 Max Roll)",

  ID_UNFACED_INSULATION_3R11_100 = "3 1/2\" R-11 (100\'-0 Max Roll)",
  ID_UNFACED_INSULATION_8R25_30 = "8\" R-25 (30\'-0 Max Roll)",

  ID_UNFACED_INSULATION_3R12_75 = "3 1/2\" R-12 (75\'-0 Max Roll)",
  ID_UNFACED_INSULATION_6R19_55 = "6\" R-19 (55\'-0 Max Roll)",
  ID_UNFACED_INSULATION_6R20_55 = "6\" R-20 (55\'-0 Max Roll)",
  ID_UNFACED_INSULATION_8R25_40 = "8\" R-25 (40\'-0 Max Roll)",
  ID_UNFACED_INSULATION_8R28_30 = "8\" R-28 (30\'-0 Max Roll)",

  // insulation tabs
  ID_TAB_1AT6 = "1 @ 6\"",
  ID_TAB_2AT3 = "2 @ 3\"",
  ID_TAB_2AT12 = "2 @ 12\"",//BW-4485
  ID_TAB_VERSA_TAB = "Versa-Tab",// Kevin Bottoms 11-22-06 added as per document CRD5
  ID_TAB_VERSI_TAB = "Versi-Tab",// Kevin Bottoms 3-13-2007 added as per After approval 9 item R95

  // Insulation Thickness Kevin Bottoms 11-22-06 added as per document CRD5
  ID_INSULATION_THICKNESS_3R10 = "3\" (R 10)",
  ID_INSULATION_THICKNESS_4R13 = "4\" (R 13)",
  ID_INSULATION_THICKNESS_6R19 = "6\" (R 19)",
  ID_INSULATION_THICKNESS_STANDARD = "Standard",

  // Kevin Bottoms 2-12-2007 for NCI Project
  ID_INSULATION_THICKNESS_35R11 = "3.5\" (R 11)",
  //	ID_INSULATION_THICKNESS_35R11_OLD	=		"3 1/2\" (R 11)",

  // Insulation Roll length Kevin Bottoms 11-22-06 added as per document CRD5
  ID_INSULATION_ROLL_LENGTH_102 = "102\'",
  ID_INSULATION_ROLL_LENGTH_125 = "125\'",

  // insulation pricing
  ID_INSULATION_PRICE_STANDARD = "Standard",
  ID_INSULATION_PRICE_SPECIAL = "Special",
  ID_INSULATION_PRICE_CGI = "CGI",
  ID_INSULATION_PRICE_SUPREME = "SUPREME",






  //*************************  ADDLINES INPUT STRINGS  ***********************//

  // addlines type
  ID_LIST = "List",
  ID_NET = "Net",





  //*************************  CRANES INPUT STRINGS  ***********************//

  // crane classes
  ID_CRANE_CLASS_A = "A",
  ID_CRANE_CLASS_B = "B",
  ID_CRANE_CLASS_C = "C",
  ID_CRANE_CLASS_D = "D",
  ID_CRANE_CLASS_E = "E",

  // crane controls
  ID_CRANECONTROL_PENDANT = "Pendant",
  ID_CRANECONTROL_HAND_OPERATED = "Hand Operated",
  ID_CRANECONTROL_CAB = "Cab",

  // crane girder types
  ID_GIRDER_SINGLE = "Single",
  ID_GIRDER_DOUBLE = "Double",

  // crane types
  ID_CRANE_TOP_RUNNING = "Top Running",
  ID_CRANE_UNDERHUNG = "Underhung",
  ID_CRANE_MONORAIL = "Monorail",





  //*************************  PRICE AND DESIGN STRINGS  ***********************//

  // column types
  ID_COL_CEE = "Cee",
  ID_COL_DOUBLE_CEE = "Double Cee",
  ID_COL_HOT_ROLLED = "Hot Rolled",
  ID_COL_BUILT_UP_PLATE = "Built Up Plate",
  ID_COL_WELDED_EYE_SHAPE = "Welded Eye Shape",

  ID_FLANGE_BRACE_STANDARD = "Standard",
  ID_FLANGE_BRACE_KNIFE_PLATE = "Knife Plate",
  ID_FLANGE_BRACE_DOUBLE_CLIP = "Double Clip",

  // flange brace types
  ID_FLGBRACING_NONE = "None",
  ID_FLGBRACING_1_STD = "One Std",
  ID_FLGBRACING_2_STD = "Two Std",
  ID_FLGBRACING_1_HVY = "One Hvy",
  ID_FLGBRACING_2_HVY = "Two Hvy",
  ID_FLGBRACING_1_XHVY = "One XHvy",
  ID_FLGBRACING_2_XHVY = "Two XHvy",

  // frameline joint position
  ID_FLJOINT_VERTICAL = "Vertical",
  ID_FLJOINT_HORIZONTAL = "Horizontal",
  ID_FLJOINT_PERPENDICULAR = "Perpendicular",
  ID_FLJOINT_SLOPED = "Sloped",

  // frameline joint status
  ID_JOINTSTATUS_FAILURE = "Failure",
  ID_JOINTSTATUS_NO_DESIGN = "No Design",
  ID_JOINTSTATUS_STD_IN_AND_OUT = "Std In and Out",
  ID_JOINTSTATUS_HVY_IN_STD_OUT = "Hvy In and Std Out",
  ID_JOINTSTATUS_STD_IN_HVY_OUT = "Std In and Hvy Out",
  ID_JOINTSTATUS_HVY_IN_AND_OUT = "Hvy In and Out",
  ID_JOINTSTATUS_SPECIAL = "Special",

  // frameline joint types
  ID_JOINTTYPE_RFT_KNEE = "Rafter Knee",
  ID_JOINTTYPE_RFT_PEAK = "Rafter Peak",
  ID_JOINTTYPE_INTERMEDIATE_RFT = "Intermediate Rafter",
  ID_JOINTTYPE_INTERMEDIATE_EXT_COL = "Intermediate Exterior Column",
  ID_JOINTTYPE_DIAGONAL_KNEE = "Diagonal Knee",
  ID_JOINTTYPE_COL_KNEE = "Column Knee",
  ID_JOINTTYPE_CANOPY = "Canopy",
  ID_JOINTTYPE_L2_KNEE = "Lean-to Knee",
  ID_JOINTTYPE_L2_PEAK = "Lean-to Peak",
  ID_JOINTTYPE_INTERMEDIATE_INT_COL = "Intermediate Interior Column",

  // frameline stiffner status
  ID_STIFFENER_STATUS_FAILURE = "Failure",  // -1
  ID_STIFFENER_STATUS_NO_DESIGN = "No Design",  // 0
  ID_STIFFENER_STATUS_PLATE = "Plate",     // 1
  ID_STIFFENER_STATUS_ANGLE = "Angle",     // 2

  // frameline stiffner position
  ID_STIFFENER_POSITION_DIAGONAL_KNEE = "Diagonal Knee",// 0
  ID_STIFFENER_POSITION_VERTICAL = "Vertical",// 1
  ID_STIFFENER_POSITION_HORIZONTAL = "Horizontal",// 2
  ID_STIFFENER_POSITION_PERP_TO_OUTER_FLG = "Perpendicular To Outer Flange",// 3
  ID_STIFFENER_POSITION_PERP_TO_INNER_FLG = "Perpendicular To Inner Flange",// 4
  ID_STIFFENER_POSITION_SLOPED = "Sloped",// 5

  // frameline stiffner types
  ID_STIFFENER_TYPE_DIAGONAL_KNEE = "Diagonal Knee", // 1
  ID_STIFFENER_TYPE_KNEE_BEARING_ON_COLUMN = "Knee Bearing On Column", // 2
  ID_STIFFENER_TYPE_KNEE_BEARING_ON_RAFTER = "Knee Bearing On Rafter", // 3
  ID_STIFFENER_TYPE_PEAK = "Peak", // 4
  ID_STIFFENER_TYPE_RAFTER_PINCH = "Rafter Pinch", // 5
  ID_STIFFENER_TYPE_EXTERIOR_COLUMN_PINCH = "Exterior Column Pinch", // 6
  ID_STIFFENER_TYPE_RAFTER_INTERMEDIATE = "Rafter Intermediate", // 7
  ID_STIFFENER_TYPE_EXTERIOR_COLUMN_INTERMEDIATE = "Exterior Column Intermediate", // 8
  ID_STIFFENER_TYPE_DIAGONAL_KNEE_PANEL = "Diagonal Knee Panel", // 9
  ID_STIFFENER_TYPE_IC_BEARING = "Bearing",
  ID_STIFFENER_TYPE_IC_SHEAR = "Shear",

  // header types
  ID_HEADER_CEE = "Cee",
  ID_HEADER_HOT_ROLLED = "Hot Rolled",

  // jamb types
  ID_JAMB_CEE = "Cee",
  ID_JAMB_HOT_ROLLED = "Hot Rolled",

  // partiton types
  ID_PARTITION_LONGITUDINAL = "Longitudinal",
  ID_PARTITION_TRANSVERSE = "Transverse",

  ID_PARTITION_BYPASS = "Bypass",
  ID_PARTITION_INSET = "Inset",

  ID_PARTITION_ANGLE_OLD = "Angle",
  ID_PARTITION_GALVANIZED_ANGLE_OLD = "Galvanized Angle",
  ID_PARTITION_CHANNEL_OLD = "Channel",
  ID_PARTITION_GIRT_OLD = "Girt",

  ID_PARTITION_GALVALUME = "Galvalume",
  ID_PARTITION_STANDARD = "Standard",

  ID_PARTITION_MVW = "MVW",
  ID_PARTITION_MAP = "MAP",
  ID_PARTITION_MIP = "MIP",
  ID_PARTITION_DURARIB = "DuraRib",	// added 11.16.2005 -dkb
  ID_PARTITION_DURA_RIB = "Dura-Rib",					// S.Hathaway 11-15-2010 BW-2814
  ID_PARTITION_OTHERS = "By Others",	// added 02.09.2006 -dkb
  ID_PARTITION_NONE = "None",			// added 08-25-15 - JDM BW-3682


  // Partition Girt Spacings
  ID_PARTITION_GIRT_DEPTH_8 = "8\"",
  ID_PARTITION_GIRT_DEPTH_10 = "10\"",
  ID_PARTITION_GIRT_DEPTH_12 = "12\"",

  // BW-3686 Adding new String defines for determining which side of the partition is Sheeted.
  ID_PARTITION_SHEETEDSIDE_SWA = "Facing SWA",
  ID_PARTITION_SHEETEDSIDE_SWC = "Facing SWC",
  ID_PARTITION_SHEETEDSIDE_SWB = "Facing SWB",
  ID_PARTITION_SHEETEDSIDE_SWD = "Facing SWD",

  ID_PARTITION_SHEETEDSIDE_EWA = "Facing EWA",
  ID_PARTITION_SHEETEDSIDE_EWC = "Facing EWC",
  ID_PARTITION_SHEETEDSIDE_EWB = "Facing EWB",
  ID_PARTITION_SHEETEDSIDE_EWD = "Facing EWD",

  ID_PARTITION_SHEETEDSIDE_BOTH = "Both",

  // Accessory Partition Panel	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_PARTITION_PANEL_PBR = "PBR",
  ID_ACCESSORY_PARTITION_PANEL_VISTASHADOW = "VistaShadow",
  ID_ACCESSORY_PARTITION_PANEL_NONE = "None",
  ID_ACCESSORY_PARTITION_PANEL_PBA = "PBA",

  // Accessory Partition Girt Types	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_PARTITION_BY_PASS = "By-Pass",
  ID_ACCESSORY_PARTITION_FLUSH = "Flush",

  // Accessory Partition Base Condition	// Kevin Bottoms 11-13-06 added as per document CRD4A
  ID_ACCESSORY_PARTITION_ANGLE = "Angle",
  ID_ACCESSORY_PARTITION_CHANNEL = "Channel",
  ID_ACCESSORY_PARTITION_LOW_BASE_GIRT = "Low Base Girt",

  // plate types
  ID_PLATE_CAP = "Cap",
  ID_PLATE_BASE = "Base",
  ID_PLATE_CLIP = "Clip",

  // portal frame mounts
  ID_PORTAL_FLOOR = "Floor Mounted",
  ID_PORTAL_WEB = "Web Mounted",

  // rafter types
  ID_RFT_CEE = "Cee",
  ID_RFT_DOUBLE_CEE = "Double Cee",
  ID_RFT_HOT_ROLLED = "Hot Rolled",
  ID_RFT_BUILT_UP_PLATE = "Built Up Plate",

  // sag bracing type
  ID_SAG_PURLIN = "Purlin",
  ID_SAG_GIRT = "Girt",

  // segment types
  ID_SEGMENT_RFT = "Rafter",
  ID_SEGMENT_COL = "Column",


  // component slope
  ID_COMPONENT_SLOPE_STRING_HALF = "1/2:12",
  ID_COMPONENT_SLOPE_STRING_1 = "1:12",
  ID_COMPONENT_SLOPE_STRING_2 = "2:12",
  ID_COMPONENT_SLOPE_STRING_3 = "3:12",
  ID_COMPONENT_SLOPE_STRING_4 = "4:12",
  ID_COMPONENT_SLOPE_STRING_5 = "5:12",
  ID_COMPONENT_SLOPE_STRING_6 = "6:12",
  ID_COMPONENT_SLOPE_VALUE_HALF = 1,
  ID_COMPONENT_SLOPE_VALUE_1 = 2,
  ID_COMPONENT_SLOPE_VALUE_2 = 4,
  ID_COMPONENT_SLOPE_VALUE_3 = 8,
  ID_COMPONENT_SLOPE_VALUE_4 = 16,
  ID_COMPONENT_SLOPE_VALUE_5 = 32,
  ID_COMPONENT_SLOPE_VALUE_6 = 64,



  //*************************  CAD DRAWINGS STRINGS  ***********************//

  // BW-3174: Removing unused drawing file definitions and calls, drawing removed from "Blocks" directory

  // title block drawing name defines
  TB_STAR_ANSI_D = "S ANSI D.dwg",

  // titleblocks for NCI versions

  TB_NBS_ANSI_D = "NBS ANSI D.dwg",
  TB_NBC_ANSI_D = "NBC ANSI D.dwg",
  TB_MBSC_ANSI_D = "MBSC ANSI D.dwg",
  TB_NBA_ANSI_D = "NBA ANSI D.dwg",
  TB_NBS_2_ANSI_D = "NBS_2 ANSI D.dwg",
  TB_NBS_3_ANSI_D = "NBS_3 ANSI D.dwg",
  TB_NCI_ANSI_D = "NCI ANSI D.dwg",

  TB_GARCO_ANSI_D = "GARCO ANSI D.dwg",

  // robertson will use star blanks       
  TB_STAR_BLANK_ANSI_D = "SB ANSI D.dwg",

  TB_CECO_BLANK_ANSI_D = "CB ANSI D.dwg",

  //Dossie Johnson 8/25/05                      
  TB_CECO_ANSI_D_C = "C ANSI D COL.dwg",
  TB_CECO_ANSI_D_R = "C ANSI D RKM.dwg",
  TB_CECO_ANSI_D_M = "C ANSI D MPL.dwg",

  TB_ROBERTSON_ANSI_D = "R ANSI D.dwg",
  TB_HERITAGE_ANSI_D = "H ANSI D.dwg",

  // define the dwg layout names for accessing
  // and setting up the layout's viewport into mspace
  LAYOUT_ANSI_D = "ANSI D (22.0 x 34.0)",

  // Green Projects String Defines - BW - 2199
  LEED_NC_PLATINUM = "LEED-NC Platinum",
  LEED_NC_GOLD = "LEED-NC Gold",
  LEED_NC_SILVER = "LEED-NC Silver",
  LEED_NC_CERTIFIED = "LEED-NC Certified",
  LEED_NC_UNREGISTERED = "LEED-NC (Unregistered)",
  LEED_30_ALL_LEVELS = "LEED 3.0 (All levels)",
  LEED_40_ALL_LEVELS = "LEED 4.0 (All levels)",
  GREEN_GLOBES = "Green Globes",
  ASHRAE_189_1 = "ASHRAE 189.1",
  ASHRAE_189_1_2011 = "ASHRAE 189.1-2011",
  IGCC_2012 = "IgCC 2012",
  IGCC_2015 = "IgCC 2015",
  CALGREEN_2013 = "CALGreen 2013",
  CALGREEN_2016 = "CALGreen 2016",
  OTHER_LOCAL = "Other/Local",
  ID_UNKNOWN = "Unknown",

  ASHRAE_901_2004 = "ASHRAE 90.1-2004",
  ASHRAE_901_2007 = "ASHRAE 90.1-2007",
  ASHRAE_901_2008_SUPP = "ASHRAE 90.1-2008 Supp.",
  ASHRAE_901_2010 = "ASHRAE 90.1-2010",
  ASHRAE_901_2013 = "ASHRAE 90.1-2013",
  IECC_2006 = "IECC 2006",
  IECC_2009 = "IECC 2009",
  IECC_2012 = "IECC 2012",
  IECC_2015 = "IECC 2015",
  IECC_2018 = "IECC 2018",
  CALIFORNIA_2005 = "California 2005",
  CALIFORNIA_2008 = "California 2008",
  CALIFORNIA_2013 = "California 2013",
  CANADA_MNECB_1997 = "Canada MNECB-1997",
  NECC_2011 = "National Energy Code of Canada-2011",
  NC_2012 = "North Carolina 2012",
  FLORIDA_2012_ENERGY = "Florida 2012 - Energy",
  FLORIDA_2012__ENERGY = "Florida 2012 -- Energy",
  FLORIDA_2014__ENERGY = "Florida 2014 -- Energy",

  //// Submittal Package String Defines - BW-2652 Justin D Martin,
  ID_SUBMITTAL_SAMPLE_METAL_ROOF = "12\" long sample of metal roof, wall, and liner panels X panel width",
  ID_SUBMITTAL_SAMPLE_LTP = "12\" long sample of LTP's and/or insulites (if required on job)",
  ID_SUBMITTAL_INSULATION = "12\" square sample of insulation",
  ID_SUBMITTAL_FASTENER = "(1) of each type of fastener required on the job",
  ID_SUBMITTAL_TRIM = "(1) 12\" long piece of each trim required on the job",
  ID_SUBMITTAL_COLOR = "(1) Metal color Samples",
  ID_SUBMITTAL_STANDARDS = "Required Standards in Submittal Folder",

  // NCI Conversion Factor
  NCI_LIST_CONVERSION_FACTOR = 2.0,

  // Constants for Soldier Column Dsign // 09/06/2007 Kevin Bottoms NCI Beta v3.8
  STEEL_ELASTICITY = 29000,
  STEEL_YIELD_STRESS = 50,

  // CONSTANTS FOR CONCRETE NOTCHES
  //------ STANDARD -------//      
  NOTCH_STD_WIDTH = 1.5,
  NOTCH_STD_DEPTH = 1.5,
  //------ ALTERNATE ------//      
  NOTCH_ALT_WIDTH = 0.5,	// ths gets added to the panel depth
  NOTCH_ALT_DEPTH = 1.5,
  //--------- MAP ---------//      
  NOTCH_MAP_WIDTH = 2.0,
  NOTCH_MAP_DEPTH = 1.5,

  // BW-4163: Added clip attachment types for framed opening selection
  ID_FO_CLIPS_WELDED = "Welded",
  ID_FO_CLIPS_BOLTED = "Bolted",

  ID_CATEGORY_BRACING = "Bracing",
  ID_CATEGORY_FRAMES = "Frames",
  ID_CATEGORY_PORTAL_FRAMES = "Portal Frames",
  ID_CATEGORY_ROOF_COVER = "Roof Covering",
  ID_CATEGORY_ROOF_STRUCT = "Roof Structural",
  ID_CATEGORY_SW_COVER = "Sidewall Covering",
  ID_CATEGORY_SW_STRUCT = "Sidewall Structural",
  ID_CATEGORY_EW_COVER = "Endwall Covering",
  ID_CATEGORY_EW_STRUCT = "Endwall Structural",
  ID_CATEGORY_ROOF_IMP = "NET - IMP Roof",
  ID_CATEGORY_SW_IMP = "NET - IMP Sidewall",
  ID_CATEGORY_EW_IMP = "NET - IMP Endwall",
  ID_CATEGORY_PARTITION_STRUCT = "Partition Structural",
  ID_CATEGORY_ACCESSORIES = "Accessories",
  ID_CATEGORY_NET_ACCESSORIES = "NET - Accessories",
  ID_CATEGORY_SW_EW_STRUCT = "Sidewall & Endwall Structural",

  ID_ADDLINE_DETAILS_LBP = "LBP",
  ID_ADDLINE_DETAILS_DECK = "Roof Deck",
  ID_ADDLINE_DETAILS_JOIST = "Bar Joist",
  ID_ADDLINE_DETAILS_MISC = "Misc",
  ID_ADDLINE_DETAILS_DOORS = "O.H. Doors Special",
  ID_FREIGHT_WEIGHT_PER_TRUCK = 32000.0,
  ID_CORPORATE_WEBSITE = "https://www.cornerstonebuildingbrands.com/",
  ID_IMP_THRESHOLD_MULTIPLIER = 5500.0,

  BUILDING_MAX_BAYS = 30,
  MAX_NUM_EW_CLMS = 2,

  MAX_NUM_FRM_LINES = 32,
  MAX_NUM_MODULES = 10,

  DoorType_DBCI = "dbci",

  MeshAElevation = " - A",
  MeshBElevation = " - B",
  MeshCElevation = " - C",
  MeshDElevation = " - D",
  MeshPartitionElevation = " - Partition ",


  ID_SW1 = "SW1",	
  ID_SW2 = "SW2",	
  ID_EW3 = "EW3",	
  ID_EW4 = "EW4"
  //EXTERN int COMPANY,
  //  // 1 - Star
  //  // 2 - Ceco
  //  // 3 - Robertson
  //  // 4 - NBS Metallic
  //  // 5 - NBC Mesco
  //  // 6 - NBA A&S
  //  // 8 - CecoPro run as A&S

  //  EXTERN int INTERNAL,
  //  EXTERN int DEVELOPER,
  //  EXTERN int isAutoRun, //BW-5047:1=Enable automated run of BuilderWorx project from external program, Else=Nautomated

}
