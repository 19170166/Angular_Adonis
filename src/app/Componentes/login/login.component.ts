import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {ServicioDatosService} from '../servicio-datos.service'
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor(private datosvc:ServicioDatosService) { }
  LoginForm = new FormGroup({
    correo: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
    this.datosvc.getPersona().subscribe(data => {console.log(data)
    this.data = data;})

    this.datosvc.getPersonas().subscribe(data=> {console.log(data)
    this.datas = data})
    
  }
  loginuser(){
    this.datosvc.login(this.LoginForm.value).subscribe(data=>{console.log(this.LoginForm.value)
    this.token = data;
    console.log(data)})
  }

}
