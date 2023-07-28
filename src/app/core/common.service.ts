import { Injectable } from '@angular/core';
import { UserPermssion } from '../models/user-management';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';
import { CoredataService } from './coredata.service';
import { CommonEnum } from '../models/common-enum';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isEdit: boolean = false;
  isAdd: boolean = false;
  isView: boolean = false;
  isDelete: boolean = false;
  isHistory: boolean = false;
  hasAllRights: boolean = false;
  encPassword: string = "CBBABS";
  decPassword: string = "CBBABS";
  private sanitizer: DomSanitizer;
  constructor(private toastr: ToastrService,
    private coreData: CoredataService,) { }

  getUserPermissionFromSession(roleId: number): UserPermssion {
    const permissions = sessionStorage.getItem('Permissions') ? JSON.parse(sessionStorage.getItem('Permissions')) as UserPermssion[] : [];
    return permissions.find(x => x.RoleId === roleId) || new UserPermssion();
  }
  
  Decrypt(data: any) {
    try {
      if (data != undefined) {
        if (data.indexOf("@") !== -1) {
          data = data.replaceAll('@', "/");
        }
        if (data.indexOf("*") !== -1) {
          data = data.replaceAll('*', "+");
        }
        return Number(CryptoJS.AES.decrypt(data, this.decPassword.trim()).toString(CryptoJS.enc.Utf8));
      }
      else {
        return data;
      }
    }
    catch
    {
      return data
    }
  }

  //Check user if has access to application
  ValidateApplicationUser(GroupId: string, UserId: string, success, error) {
    this.coreData.Get(CommonEnum.UserManagementAPP, CommonEnum.SystemUserAPI + '/ValidateUser/' + GroupId + "/" + UserId, null,
      (result) => {
        if (result != null) {
          return success(result)
        }
        return
      },
      (error) => {
        return error(error);
      });
  }
  showSuccess(message, title) {
    this.toastr.success(message, title, {
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: "increasing",
      positionClass: "toast-top-right",
      extendedTimeOut: 2500,
      tapToDismiss: false
    });
  }

  showError(message, title) {
    this.toastr.error(message, title, {
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-right",
      extendedTimeOut: 2500,
      tapToDismiss: false,
      enableHtml: true
    });
  }

  showInfo(message, title) {
    this.toastr.info(message, title, {
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-right",
      extendedTimeOut: 2500,
      tapToDismiss: false
    });
  }

  showWarning(message, title) {
    this.toastr.warning(message, title, {
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-right",
      extendedTimeOut: 2500,
      tapToDismiss: false,
      enableHtml: true
    });
  }

  setSvgImage(data) {
    if (data != "" && data != null) {
      if (data.indexOf('/svg+xml') > -1 || data.indexOf('data:image/svg') > -1) {
        if (data.indexOf('data:image/svg') > -1) {
          data = data.replace('data:image/svg', 'data:image/svg+xml')
        }
        return this.sanitizer.bypassSecurityTrustUrl(data);
      }
    }
    return data
  }
  SetGoogleTagManagerId(GoogleTagManagerId) {
    if (GoogleTagManagerId) {
      document.getElementById('BodyGoogleTeg').innerHTML =
        '<iframe src="https://www.googletagmanager.com/ns.html?id=' + GoogleTagManagerId + '" height="0" width="0" style="display:none;visibility:hidden;"></iframe>'

      document.getElementById('HeadGoogleTeg').innerHTML =
        '!function (e, t, a, n, g) {e[n] = e[n] || [], e[n].push({ "gtm.start": (new Date).getTime(), event: "gtm.js" }); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id='
        + GoogleTagManagerId
        + '", m.parentNode.insertBefore(r, m)}(window, document, "script", "dataLayer");'

    }
  }

 

}
