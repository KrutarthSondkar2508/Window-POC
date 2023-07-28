import { MapLocation } from "./project-information";

export class Payment {

  constructor() {
    this.ContractorAddress = new MapLocation();
    this.ErectorAddress = new MapLocation();
    this.LenderAddress = new MapLocation();
  }

  PaymentId: number;
  ProjectId: number;
  OrderedBy: string;
  CreditTerms: string;
  BuilderPO: string;
  TaxExemptStatus: string;
  TaxExemptNumber: string;
  ClarificationDayPhone: string;
  ClarificationDayPhoneExt: string;
  GCName: string;
  ContractorAddress: MapLocation;
  ErectorName: string;
  ErectorAddress: MapLocation;
  LenderName: string;
  LenderPhone: string;
  LenderPhoneExt: string;
  LenderAddress: MapLocation;

}
