import { Component, OnInit } from '@angular/core';
import {ServicioDatosService} from '../servicio-datos.service'
import {FormControl,FormGroup} from '@angular/forms'
import { Producto } from 'src/app/Models/producto/producto.interface';
import {Comentario} from '../../Models/comentario/comentario.interface'

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
    nombre_producto: new FormControl('')
  })

  PostComent = new FormGroup({
    comentario: new FormControl('')
  })

  constructor(private datosvc:ServicioDatosService) { }

  ngOnInit(): void {
    this.datosvc.getProducto().subscribe(data=>{this.producto=data
    console.log(data)})
  }

  onSelect(pro:Producto){
    this.prodselect = pro;
    this.id = pro.id;
    this.nomprod = pro.nombre_producto;
  }

  getComentario(id){
    this.datosvc.getComentario(id).subscribe(data =>{this.comentario = data
    console.log(data)
    this.idu = id})
  }

  deleteProducto(id){
    this.datosvc.deleteProducto(id).subscribe(data =>{console.log(data)})
  }

  postComentario(){

    const com = {
      comentario: this.PostComent.value.comentario,
      usuario:1,
      id_producto: this.idu
    }
    console.log(com)
    this.datosvc.postComentario(com).subscribe(data =>{console.log(com)
    })
  }

}
