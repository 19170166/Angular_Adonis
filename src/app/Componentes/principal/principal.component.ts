import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable,interval } from 'rxjs';
import { InterceptorService } from '../Interceptors/interceptor.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  logeado:boolean;

  constructor(private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
    if(this.cookie.check('token')){
      this.logeado = true;
      this.router.navigate(['inicio'])
    }else{
      this.logeado = false;
      this.router.navigate(['login'])
    }
  }

}
