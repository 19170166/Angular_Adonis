import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {ServicioDatosService} from '../servicio-datos.service'
import {InterceptorService} from '../Interceptors/interceptor.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn:'root'
})
export class LoginComponent implements OnInit {
  datas: any;
  data: any;
  token:any;

  constructor(private datosvc:ServicioDatosService,private interceptor:InterceptorService,
    private Cookie:CookieService) { }
  
    LoginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  ngOnInit(): void {

  }
  loginuser(){
    this.datosvc.login(this.LoginForm.value).subscribe(data=>{
    this.token = data;
    
      if(this.token.token!=null){
        console.log('cookie creada')
        this.Cookie.set('token',this.token.token,2)
        this.interceptor.logeo(true)
        window.location.reload()
      }

    console.log(data)
    this.interceptor.setToken()})
  }

}
