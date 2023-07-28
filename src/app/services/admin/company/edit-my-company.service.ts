import { Injectable, Output, EventEmitter } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CoredataService } from '../../../core/coredata.service';
import { CommonEnum } from '../../../models/common-enum';


@Injectable({
  providedIn: 'root'
})
export class EditMyCompanyService {
  public headers: HttpHeaders;
  public baseUrl = environment.companyBaseUrl;

  constructor(private coreData: CoredataService, private httpClient: HttpClient) { }

  private getHeader(): HttpHeaders {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=utf-8');
    // header.append('Authorization', localStorage.getItem("token"));
    return header;
  }

  getById(id: number, success, error) {
    this.coreData.Get(CommonEnum.CompanyAPP, CommonEnum.CompanyInformationAPI + '/' + id, null,
      (result) => {
        if (result != null) {
          return success(result);
        }
        return null;
      },
      (error) => {
        return error(error);
      });
    //return this.httpClient.get<EditMyCompany>(this.baseUrl + CommonEnum.CompanyInformationAPI + '/' + id)
    //  .pipe(
    //    catchError(this.errorHandler)
    //  );
  }
  
  getForLogin(code: string, success, error) {
    this.coreData.Get(CommonEnum.CompanyAPP, CommonEnum.CompanyInformationForLogin + '/' + code, null,
      (result) => {
        if (result != null) {
          return success(result);
        }
        return null;
      },
      (error) => {
        return error(error);
      });
  }

  SaveEditMyCompany(formData, success, error) {
    this.coreData.PostUpload(CommonEnum.CompanyAPP, CommonEnum.CompanyInformationAPI, formData,
      (result) => {
        if (result != null) {
          return success(result);
        }
        return null;
      },
      (error) => {
        return error(error);
      });
  }

  getHttpError(success, error) {
    this.coreData.Get(CommonEnum.CompanyAPP, CommonEnum.HttpErrorTest, null,
      (result) => {
        if (result != null) {
          return success(result)
        }
        else {
          console.error('No Data Found ');
        }
        return
      },
      (error) => {
        return error(error);
      });
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getUserModifiedDate(UserId: string, success, error) {
    this.coreData.Get(CommonEnum.UserManagementAPP, CommonEnum.SystemUserAPI + '/GetUserModifiedDate/' + UserId, null,
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

}
