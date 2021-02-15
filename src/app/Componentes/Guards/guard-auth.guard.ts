import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import {InterceptorService} from '../../Componentes/Interceptors/interceptor.service'


@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  
  constructor(private cookie:CookieService,private route:Router){}

  canActivate(): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.cookie.check('token')){
      return true;
    }
    else{
      this.route.navigate(['/nologin'])
      return false;
    }
    
  }
  
}
