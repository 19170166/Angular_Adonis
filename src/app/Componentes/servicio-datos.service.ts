import { Injectable } from '@angular/core';
import {PersonA} from '../Models/Persona/persona.interface'
import {Producto} from '../Models/producto/producto.interface'
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Comentario} from '../Models/comentario/comentario.interface'

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {
  private urlApi = 'http://localhost:3333/ver/usuario/1'
  private urlApi2 = 'http://localhost:3333/ver/usuario'
  private urlApi3 = 'http://localhost:8000/api/registro'
  private urlApi4 = 'http://localhost:8000/api/login'
  private urlApi5 = 'http://localhost:8000/api/agregarproducto'
  private urlApi6 = 'http://localhost:8000/api/agregarcomentario'
  private urlApi7 = 'http://localhost:8000/api/modificarproducto/'
  private urlApi8 = 'http://localhost:8000/api/mostrarproducto'
  private urlApi9 = 'http://127.0.0.1:8000/api/mostrarcomentario2/'
  private urlApi10 = 'http://127.0.0.1:8000/api/borrarproducto/'
  
  httpHeader = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE'
  });

  constructor(private http: HttpClient) { }

  login(person:PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi4,person,{headers:this.httpHeader})
  }

  getPersona():Observable<PersonA>{
    return this.http.get<any>(this.urlApi9,{headers: this.httpHeader})
  }

  getPersonas():Observable<PersonA[]>{
    return this.http.get<any[]>(this.urlApi2,{headers: this.httpHeader})
  }

  postPersona(person:PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi3,person,{headers:this.httpHeader})
  }

  getProducto():Observable<Producto[]>{
    return this.http.get<any[]>(this.urlApi8,{headers:this.httpHeader})
  }

  getComentario(id:number):Observable<Comentario[]>{
    return this.http.get<any[]>(this.urlApi9+id,{headers:this.httpHeader})
  }

  deleteProducto(id:number):Observable<Producto>{
    return this.http.delete<any>(this.urlApi10+id,{headers:this.httpHeader})
  }

  postComentario(com:Comentario):Observable<Comentario>{
    return this.http.post<any>(this.urlApi6,com,{headers:this.httpHeader})
  }
}
