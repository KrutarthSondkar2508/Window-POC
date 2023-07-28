export class UserManagement {
  UserDetailId: number;
  CompanyId: number;
  EmployeeNo: number;
  CustomerNo: number;
  CustomerName: string;
  Active: boolean;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  JobTitle: string;
  OfficeNumber: string;
  Mobile: string;
  Fax: string;
  UserId: string;
  Notes: string;
  IsRequireSignature: boolean;
  IpAddress: string;
  lstBrand: Brand[];
  ModuleName: string;
  Orders: boolean;
  Contacts: boolean;
  Leads: boolean;
  JobBoard: boolean;
  UpcomingEvents: boolean;
  Bookmarks: boolean;
  LoginUserId: number;
  lstCustomer: Customer[];
  lstGroups: Groups[];
  lstUserGroups: GroupsUsers[];
  IsUserIntExtWithCurrCust: number;
  //For Email and text Notification
  checkboxJobBoardEmail: number;
  checkboxJobBoardText: number;
  jobBoardFrequency: number;
  checkboxOrderStatusEmail: number;
  checkboxOrderStatusText: number;
  OrderStatusFrequency: number;
  checkboxLeadsEmail: number;
  checkboxLeadsText: number;
  LeadsFrequency: number;
  UserBrandId: number;
  IsCustomerAdmin:boolean;
}

export class Brand {
  BrandId: number;
  BrandName: string;
  lstPermissionGroup: PermissionGroup[];
  lstBuilderAccessPermission: BuilderAccessPermission[];
  IsEnable: boolean;
  IsActive: boolean;
}

export class PermissionGroup {
  PermissionGroupId: number;
  BrandId: number;
  PermissionGroupName: string;
  lstBuilderAccessPermission: BuilderAccessPermission[];
  IsEnable: boolean;
  IsActive: boolean = false;
  PermissionRoleId:number;
}

export class BuilderAccessPermission {
  BuilderAccessPermissionId: number;
  PermissionGroupId: number;
  BuilderAccessPermissionName: string;
  IsEnable: boolean;
  IsCategory: boolean;
  IsExternal: boolean = false;
  IsActive: boolean = false;
}

export class Customer {
  CustomerNo: string;
  CustomerName: string;
  CustomerId: number;
  IsEnable: boolean;
  BrandId: number;
  UserDetailId: number;
  UsrBrandCustomerId: number;
}
export class BrandCustomerData {

  EmployeeId: number;
  UserId: string;
  IsAllEneble: boolean;
  PrevIsAllEneble: boolean;
  BrandCustomerCheck: Customer[];
  BrandUncheckCustomerIds: number[];

}
export class CustomerReqModel {
  EmployeeId: number;
  UserId: string;
  IsAllEneble: boolean = false;
  BrandCustomerCheck: Customer[];
  BrandUncheckCustomerIds: Customer[];
}

export class UserPermssion {
  RoleId: number;
  RoleName: string;
  ParentId: number;
  IsAdd: boolean;
  IsEdit: boolean;
  IsDelete: boolean;
  IsView: boolean;
  IsHistory: boolean;
  IsActive: boolean;
}

export class UserBrand {
  CompanyId: number;
  CompanyName: string;
  CustomerNo: string;
  CustomerName: string;
  CRMCompanyId: string;
  CompanyCode: string;
  CustomerType: string;
}

export class UserPermssionGroup {
  PermissionGroupId: number;
  PermissionGrpName: string;
  ProjectBuildingType: string;
  UserType: string;
  Role: string;
  IsExpandedLimitPricing: boolean;
}

export class Groups {
  GroupId: string;
  GroupName: string;
  IsActive: boolean;
}

export class GroupsUsers {
  GroupUserId: number;
  GroupId: string;
  UserDetailId: number;
  IsEnable: string;
}
