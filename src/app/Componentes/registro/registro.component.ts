import { Component, OnInit } from '@angular/core';
import {ServicioDatosService} from '../servicio-datos.service';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //NombreForm = new FormControl();
  //CorreoForm = new FormControl();
  //PasswordForm = new FormControl();
  
  PersonaForm = new FormGroup({
    Nombre: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  constructor(private datosvc: ServicioDatosService) { 
    //this.NombreForm.valueChanges.subscribe(data => console.log(data))
  }
  

  ngOnInit(): void {
    
  }
  registrouser(){
    this.datosvc.postPersona(this.PersonaForm.value).subscribe(data => console.log(data))
    console.warn(this.PersonaForm.value)
  }

}
