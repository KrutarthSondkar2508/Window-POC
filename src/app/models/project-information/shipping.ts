export class Shipping {
  ShippingId: number;
  ProjectId: number;
  ShippingPointId: number;
  ShippingTerms: string;
  ShippingContact: string;
  Notification: string;
  DayPhone: string;
  DayPhoneExt: string;
  NightPhone: string;
  NightPhoneExt: string;
  FreightTerms: string;
  FreightExpense: number;
  Carrier: string;
  Country: string;
  State: string;
  County: string;
  City: string;
  Address1: string;
  Address2: string;
  ZipCode: string;
  Latitude: string;
  Longitude: string;
  RequestedDeliveryDate: string;
  Miles1: string;
  Miles2: string;
  Miles3: string;
  Rate1: string;
  Rate2: string;
  Rate3: string;
  NumberLoads1: string;
  NumberLoads2: string;
  NumberLoads3: string;
  TruckTarps: boolean;
  CopyFlag: boolean;
  AddIMPOverages: boolean;
  AddExportOverages: boolean;
  ShippingPointMileage: number;
  IsDeleted: boolean;
  IsModified: boolean;
  // not mapped
}

// shipping terms
export enum EShippingTerm {
  ID_SHIP_FOB = 'FOB plant with Freight allowed to jobsite',
  ID_SHIP_CUSTOMER_PICK_UP = 'Customer pick up'
}

export enum EIntlJobsiteShippingTerm {
  ID_SHIP_FOB = 'Open Top Container FOB Plant',
  ID_SHIP_CONTAINER_CPU = 'Open Top Container CPU'
}

export enum ECarrier {
  ID_CARRIER_BEST = 'Best',
  ID_CARRIER_CECO = 'Ceco'
}
