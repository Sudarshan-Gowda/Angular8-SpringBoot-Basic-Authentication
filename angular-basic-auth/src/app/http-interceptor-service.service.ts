import { Injectable } from '@angular/core';
import { AuthenticatonService } from './authenticaton.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticatonService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('authenticate') === -1) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': `Basic ${window.btoa(this.authenticationService.username+":"+this.authenticationService.password)}`
        })
      })
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  } 
   
}
