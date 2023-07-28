import { MapLocation } from "./project-information";

export class Buyer {
  BuyerId: number;
  ProjectId: number;
  BuyerNumber: string;
  BuyerName: string;
  BuyerNameCO: string;

  PhysicalAddress: MapLocation;
  MailingAddress: MapLocation;

  BuyerContactName: string;
  EmailAddress: string;
  ManagerName: string;
  DayPhone: string;
  DayPhoneExt: string;
  FaxNumber: string;
  NightPhone: string;
  NightPhoneExt: string;
  MobileNumber: string;
  CopyFlag: boolean;
  isImported :any;
  DMEmployeeNumber: number;
  CBBInquiryNumber:any;
}

export class UserDetail {
  EmployeeNumber: number;
  Name: string;
}
