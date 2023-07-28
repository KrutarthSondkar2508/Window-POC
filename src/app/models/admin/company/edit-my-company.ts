export class EditMyCompany {
  CompanyInformationId: number;
  CompanyId: number;
  QuoteExpirationDays: number;
  IsTruckTarpAvaileble: boolean;
  IsTrucTarpMandatory: boolean;
  ItemNotStrocked: string;
  ItemNotAvaileble: string;
  PortalDetailStr: string;
  OracleBrand: string;
  PortalDetail: PortalDetail;
  LabelMessagingDetail: LabelMessagingDetail;
  ContactUsDetail: ContactUsDetail;
  OrderDocumentationSetting: OrderDocumentationSetting;
  CompanyEmailNotification: CompanyEmailNotification;
  CompanyMailServerDetail: CompanyMailServerDetail;
  UserId: number;

}

export class PortalDetail {
  PortalDetailId: number;
  PortalSoftwareName: string;
  PortalHeaderDescriptor: string;
  PortalURL: string;
  GoogleTagManagerId: string;
  BuilderWroxSoftwareName: string;
  FeedBackEmailAddress: string;
  FavaiconImage: File;
  CompanyLogoImage: File;
  CompanyPortalLogoImage : File;
  SignInPageImage: File;
  SignInPageLogoImage: File;
  PurchaseOrderLogoImage: File;

  FaviconName: string;
  CompanyLogoName: string;
  CompanyPortalLogoName: string;
  SignInPageName: string;
  SignInPageLogoName: string;
  PurchaseOrderLogoName: string;

  FavaiconPath: string;
  CompanyLogoPath: string;
  CompanyPortalLogoPath: string;
  SignInPagePath: string;
  SignInPageLogoPath: string;
  PurchaseOrderLogoPath: string;

  FavaiconData: string;
  CompanyLogoData: string;
  CompanyPortalLogoData: string;
  SignInPageImageData: string;
  SignInPageLogoData: string;
  PurchaseOrderLogoData: string;
}

export class LabelMessagingDetail {
  LabelMessagingDetailId: number;
  IsDefualtSetting: boolean;
  LoginWelcomeMessage: string;
  ForgotPasswordMeassage: string;
  OrderNoteMessage: string;
  StartBuildingAction: string;
  StartBuildingURL: string;
  OrderComponent: string;
  OrderComponntURL: string;
  ReturnTowebsideName: string;
  ReturnToWebSideUrl: string;
  CompanyAddess: string;
}

export class ContactUsDetail {
  ContactUsDetailId: number;
  ContactUsPageURL: string;
  BuidldingSoftwareName: string;
  ComponentSoftwareName: string;
  BuildingGoogleAnalyticsId: number;
  ComponenetAnalyticId: number;
  BuidlingPhone: string;
  BuidlingPhoneExt: string;
  DistrictManager: string;
  RegionalManager: string;
  ServiceRepresentative: string;
}

export class OrderDocumentationSetting {
  OrderdocumentId: number;
  IsFinalDrawing: boolean;
  IsPermitDrawing: boolean;
  IsSalesChangeOrder: boolean;
  IsCalculationFiles: boolean;
  IsBOMFiles: boolean;
  IsApprovalDrawing: boolean;
  IsOpenRegistration: boolean;
  IsLangualgeSelection: boolean;
}

export class CompanyEmailNotification {
  CompanyEmailNotificationId: number;
  PurchaseQueueEmailBuildings: string;
  PurchaseQueueEmailComponent: string;
  QuotingsupportEmail: string;
  TechnicalsupportEmail: string;
}

export class CompanyMailServerDetail {
  CompanyMailServerDetailId: number;
  IsDefualtSettingMailServer: boolean;
  SMTPPHost: string;
  SMTPPort: string;
  IsAuthenticationRequired: boolean;
  IsUseSSLConnection: boolean;
  UserName: string;
  Password: string;
  ReplyToAddress: string;
}
