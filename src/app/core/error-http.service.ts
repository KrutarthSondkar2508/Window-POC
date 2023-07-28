import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest,
  HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationResult, InteractionRequiredAuthError, PopupRequest, RedirectRequest, SilentRequest } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
@Injectable({
  providedIn: 'root'
})
export class ErrorHttpService implements HttpInterceptor {

  constructor(private authService: MsalService) { }

  handleError(error: HttpErrorResponse) {
    //File implementation to webapi calling for service.
    console.log(error);
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (this.authService.instance.getActiveAccount()) {
      let silentRequest = {
        scopes: ['email'],
        account: this.authService.instance.getActiveAccount(),
        forceRefresh: false,
      };
      this.authService
        .acquireTokenSilent({ ...silentRequest } as SilentRequest)
        .subscribe({
          next: (response: AuthenticationResult) => {
            //console.log(response);
            if (token != response.idToken) { // To check if the token has been refreshed or not
              sessionStorage.setItem('token', response.idToken);
            }
          },
          error: (error) => {
            if (error instanceof InteractionRequiredAuthError) {
              return this.authService.acquireTokenPopup({ ...silentRequest } as PopupRequest);
            }
          }
        });
    }

    if (!token) {
      return next.handle(req);
    }

    const request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(request)
      .pipe(
        catchError(this.handleError)
      )
  };
}
