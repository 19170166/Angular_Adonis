import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {ServicioDatosService} from '../servicio-datos.service'

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  
  productos:any
  
  InsertForm = new FormGroup({
    nombreproducto:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
