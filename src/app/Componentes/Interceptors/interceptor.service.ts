import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token: any;
  logeado:boolean = false;

  constructor(private cookie:CookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    console.log('token',this.token)
    const headers = new HttpHeaders({
      authorization:'Bearer ' + this.cookie.get('token')
    })

    const reqclone = req.clone({
      headers
    })

    if(!this.cookie.check('token')){
      this.logeado = false;
    }else{
      this.logeado = true;
    }

    return next.handle(reqclone).pipe(
      catchError(this.catcherror)
    )
  }

  catcherror(error:HttpErrorResponse){
    console.log('Sucedio un error')
    return throwError(error)
  }

  setToken(){
    
  }

  logeo(estado:boolean){
    return this.logeado = estado;
  }
}
