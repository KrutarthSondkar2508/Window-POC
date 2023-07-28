import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { CommonEnum } from '../models/common-enum';
@Injectable({
  providedIn: 'root'
})

export class CoredataService {
  public result: any;
  public headers: HttpHeaders;
  public baseUrl = "";
  public systemBaseUrl = environment.systemBaseUrl;
  public companyBaseUrl = environment.companyBaseUrl;
  public buildingProjectBaseUrl = environment.buildingProjectBaseUrl;
  public customerBaseUrl = environment.customerBaseUrl;
  public buildingInputBaseUrl = environment.buildingInputBaseUrl;
  public codesLoadsBaseUrl = environment.codesLoadsBaseUrl;
  public userManagementBaseUrl = environment.userManagementBaseUrl;
  public openAreaBaseUrl = environment.openAreaBaseUrl;
  public accessoriesBaseUrl = environment.accessoriesBaseUrl;
  public buildingCheckInputBaseUrl = environment.buildingCheckInputBaseUrl;
  public toolsBaseUrl = environment.toolsBaseUrl;
  public orderManagementBaseUrl = environment.orderManagementBaseUrl;
  public azureBaseUrl = environment.azureBaseUrl;
  public standardPricingBaseUrl = environment.standardPricingBaseUrl;
  public reportBaseUrl = environment.reportBaseUrl;
  public projectExportToOeUrl = environment.projectExportToOeUrl;
  public jobBoard = environment.jobboard;
  public cadDrawingsInputBaseUrl = environment.cadDrawingsInputBaseUrl;
  public importUtilityBaseUrl = environment.import_utility;
  public fileManagementUrl = environment.FileManagement;
  public emailnotification = environment.EmailNotificationUrl;
  public quickQuoteUrl = environment.QuickQuote;
  constructor(private http: HttpClient, private httpService: HttpClient,
    private authService: MsalService) {

  }

  getFullURL(repository, api) {
    switch (repository) {
      case CommonEnum.SystemAPP:
        this.baseUrl = this.systemBaseUrl;
        break;
      case CommonEnum.CompanyAPP:
        this.baseUrl = this.companyBaseUrl;
        break;
      case CommonEnum.BuildingProjectAPP:
        this.baseUrl = this.buildingProjectBaseUrl;
        break;
      case CommonEnum.CustomerApp:
        this.baseUrl = this.customerBaseUrl;
        break;
      case CommonEnum.BuildingInputAPP:
        this.baseUrl = this.buildingInputBaseUrl;
        break;
      case CommonEnum.CodesLoadsAPP:
        this.baseUrl = this.codesLoadsBaseUrl;
        break;
      case CommonEnum.UserManagementAPP:
        this.baseUrl = this.userManagementBaseUrl;
        break;
      case CommonEnum.OpenAreaAPP:
        this.baseUrl = this.openAreaBaseUrl;
        break;
      case CommonEnum.Accessories:
        this.baseUrl = this.accessoriesBaseUrl;
        break;
      case CommonEnum.BuildingCheckInputAPP:
        this.baseUrl = this.buildingCheckInputBaseUrl;
        break;
      case CommonEnum.Tools:
        this.baseUrl = this.toolsBaseUrl;
        break;
      case CommonEnum.OrderManagementAPP:
        this.baseUrl = this.orderManagementBaseUrl;
        break; 
             
      case CommonEnum.AzureFileShare:
        this.baseUrl = this.azureBaseUrl;
        break;
      case CommonEnum.PricingAPI:
        this.baseUrl = this.standardPricingBaseUrl;
        break;
      case CommonEnum.ReportAPI:
        this.baseUrl  = this.reportBaseUrl;
        break;
        this.baseUrl = this.azureBaseUrl;    
        break;
      case CommonEnum.ProjectExportToOeAPP:
        this.baseUrl = this.projectExportToOeUrl;
        break;
      case CommonEnum.JobBoardAPI:
        this.baseUrl = this.jobBoard;
        break;
      case CommonEnum.CadDrawingsAPP:
        this.baseUrl = this.cadDrawingsInputBaseUrl;
        break;
        case CommonEnum.ImportUtility:
          this.baseUrl = this.importUtilityBaseUrl;
          break;
      case CommonEnum.FileManagement:
        this.baseUrl = this.fileManagementUrl;
        break;
      case CommonEnum.SendEmail:
        this.baseUrl = this.emailnotification;
        break;
      case CommonEnum.QuickQuoteAPP:
        this.baseUrl = this.quickQuoteUrl;
        break;
      default:
        this.baseUrl = this.systemBaseUrl;
        break;
    }
    return this.baseUrl + api;
  }

  private getHeader(): HttpHeaders {
     const headerss = new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Credentials': 'true',
       'Access-Control-Allow-Headers': 'Content-Type,Authorization',
       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
       'Authorization': `Bearer ${sessionStorage.getItem("token")}`
     });

     return headerss;
  }

  private getAcceptHeader(): HttpHeaders {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      'Accept': '*/*'
    })
    return header;
  }

  Post(repository, path, objModel, success, error, throwError?: any) {
    var fullURL = this.getFullURL(repository, path);
    this.httpService
      .post(fullURL, JSON.stringify(objModel), { headers: this.getHeader() })
      .subscribe(function (result) {
        return success(result);
      }, (err) => {
        return this.checkError(err, throwError);
      });
  }

  PostUpload(repository, path, objModel, success, error) {
    var fullURL = this.getFullURL(repository, path);
    this.httpService
      .post(fullURL, objModel, { headers: this.getAcceptHeader() })
      .subscribe(function (result) {
        return success(result);
      }, (err) => {
        if(err.status != 401 || err.status != 500)
           return error(err);
        else
           return this.checkError(err);
      });
  }

  Get(repository, path, objModel, success, error) {
    var fullURL = this.getFullURL(repository, path);
    const httpOptions = { headers: this.getHeader() };
    this.httpService
      .get(fullURL, httpOptions)
      .subscribe(function (result) {
        return success(result);
      }, (err) => {
        if (err.status != 401 || err.status != 500)
          return error(err);
        else
          return this.checkError(err);
      });
  }

  Delete(repository, path, objModel, success, error) {
    var fullURL = this.getFullURL(repository, path);
    const httpOptions = { headers: this.getHeader() };
    this.httpService
      .delete(fullURL, httpOptions)
      .subscribe(function (result) {
        return success(result);
      }, (err) => {
        return this.checkError(err);
      });
  }

  //Check for response error and redirect to login if token expired or invalid else add print to log
  checkError(ex, throwError?: any) {
    if (ex.status == 500) {
      if (JSON.parse(ex._body).ExceptionMessage == "authorization token expired" || JSON.parse(ex._body).ExceptionMessage == "authorization token is missing" || JSON.parse(ex._body).ExceptionMessage == "invalid authorization token") {
        //this.adalService.login();
        // Over Here Call Login Page
      }
      else {
        if (typeof throwError !== 'undefined') {
          console.log(ex);
        }
        else {
          if (throwError) {
            throw ex;
          }
        }
      }
    }
    else if (ex.status == 401) {
      this.logout();
    }
    else {
      if (throwError) {
        throw ex;
      }
    }
  }

  logout() {
    window.localStorage.clear();
    sessionStorage.setItem('UserRole', '');
    sessionStorage.setItem('token', '');
    sessionStorage.clear();
    this.authService.logoutRedirect({onRedirectNavigate: () => {
      // Return false to stop navigation after local logout
      return false;
    }});
  }

  GetPromise(repository, path, objModel) {
    var fullURL = this.getFullURL(repository, path);
    const httpOptions = { headers: this.getHeader() };
    return this.httpService
      .get(fullURL, httpOptions)
      .toPromise();
  }

  getWithHttpClient(url: string, method: string){
    var fullURL = this.getFullURL(url, method);
    return this.http.get(fullURL, {
      headers: this.getHeader()
    });
  }
}
