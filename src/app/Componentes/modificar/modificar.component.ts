import { Component, OnInit } from '@angular/core';
import {ServicioDatosService} from '../servicio-datos.service'
import {FormControl,FormGroup} from '@angular/forms'
import { Producto } from 'src/app/Models/producto/producto.interface';
import {Comentario} from '../../Models/comentario/comentario.interface'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  producto:any;
  prodselect:Producto;
  id:number;
  nomprod:string;
  comentario:any;
  comen:any;
  idu:any;

  ModificarForm = new FormGroup({
    id: new FormControl(''),
    Nombre: new FormControl(''),
    Caducidad: new FormControl('')
  })

  PostComent = new FormGroup({
    Comentario: new FormControl('')
  })

  PostProd = new FormGroup({
    Nombre:new FormControl(''),
    Caducidad: new FormControl('')
  })

  constructor(private datosvc:ServicioDatosService, private cookie:CookieService) { }

  ngOnInit(): void {
    this.getProductos()
  }

  onSelect(pro:Producto){
    this.prodselect = pro;
    this.id = pro.id;
    this.nomprod = pro.Nombre;
  }

  getProductos(){
    this.datosvc.getProducto().subscribe(data=>{this.producto=data
    console.log(data)})
  }

  getComentario(pro:Producto){
    console.log('id',pro.id)
    this.datosvc.getComentario(pro.id).subscribe(data =>{this.comentario = data
    console.log(data)
    this.onSelect(pro)})
  }

  deleteProducto(pro:Producto){
    this.datosvc.deleteProducto(pro.id).subscribe(data =>{console.log(data)})
  }

  postComentario(){

    const com = {
      Comentario: this.PostComent.value.Comentario,
      producto_id: this.id
    }
    console.log(com)
    if(com.Comentario){this.datosvc.postComentario(com).subscribe(data =>{console.log(com)})}
  }

  putProducto(){
    console.log(this.ModificarForm.value)
    this.datosvc.putProducto(this.ModificarForm.value,this.id).subscribe(data =>{console.log(this.ModificarForm.value)})
  }

  deleteComentario(id){
    this.datosvc.deleteComentario(id).subscribe(data =>{console.log(data)})
  }

  postProd(){
    const prod = {
      Nombre:this.PostProd.value.Nombre,
      Caducidad:this.PostProd.value.Caducidad
    }
    if(this.cookie.check('token')){
      this.datosvc.postProducto(prod).subscribe(data=>{console.log(data)})
    }
  }
}
