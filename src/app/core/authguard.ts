import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class Authguard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private commonService: CommonService,/* private projectInformationService: ProjectInformationService,*/) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = sessionStorage.getItem('UserRole');
    const permissionId = route.data?.permissionid;
    const isList = route.data?.isList;
    const filterStatus = route.data?.filterStatus;
    if (permissionId) {
      //if (filterStatus)
      //  this.projectInformationService.ProjectStage = filterStatus;
      if (this.commonService.hasAllRights) {
        this.commonService.isAdd = true;
        this.commonService.isEdit = true;
        this.commonService.isView = true;
        this.commonService.isDelete = true;
        this.commonService.isHistory = true;
        return true;
      }
      else {
        const permissions = this.commonService.getUserPermissionFromSession(permissionId);
        let validUser = false;

        let iId = +route.params?.id;
        if (isNaN(iId)) {
          iId = this.commonService.Decrypt(route.params?.id);
        }

        let sId = '';
        if (isNaN(iId))
          sId = String(route.params?.id);
        if (isList)
          validUser = permissions && (permissions.IsView || permissions.IsAdd || permissions.IsEdit || permissions.IsDelete);
        else if (sessionStorage.getItem('UserName'))//temp added by yasin
          validUser = true;
        else if (iId && this.commonService.Decrypt(route.params?.buildingid))
          validUser = permissions && (permissions.IsEdit || permissions.IsView);
        else if (iId && this.commonService.Decrypt(route.params?.buildingid) === 0)
          validUser = permissions && permissions.IsAdd;
        else if (iId || sId || +route.params?.CustomerId || +route.params?.UserId || +route.params?.PricingSegmentId || +route.params?.PricingSegmentValueId || this.commonService.Decrypt(route.params?.buildingid))
          validUser = permissions && (permissions.IsEdit || permissions.IsView);
        else
          validUser = permissions && permissions.IsAdd;

        if (validUser) {
          this.commonService.isAdd = permissions.IsAdd;
          this.commonService.isEdit = permissions.IsEdit;
          this.commonService.isView = permissions.IsView;
          this.commonService.isDelete = permissions.IsDelete;
          this.commonService.isHistory = permissions.IsHistory;
        } else {
          this.commonService.isAdd = false;
          this.commonService.isEdit = false;
          this.commonService.isView = false;
          this.commonService.isDelete = false;
          this.commonService.isHistory = false;
          this.router.navigate(['']);
        }
        return validUser;
      }
    }

    //if (route.data.roles && route.data.roles.indexOf(currentUser) >= 0) {
    //  return true;
    //}
    //else if (route.data.roles && route.data.roles.indexOf(currentUser) === -1) {
    //  // role not authorised so redirect to home page
    //  this.router.navigate(['/']);
    //  return false;
    //}
    //else {
    //  //Without Login
    //  this.router.navigate(['']);
    //  return false;
    //}
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}
