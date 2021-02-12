import { Injectable } from '@angular/core';
import {PersonA} from '../Models/Persona/persona.interface'
import {Producto} from '../Models/producto/producto.interface'
import {Observable, throwError} from 'rxjs';
import {HttpClient,HttpErrorResponse,HttpEvent,HttpHandler,HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Comentario} from '../Models/comentario/comentario.interface'
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService implements HttpInterceptor{

  url='http://127.0.0.1:3333/'
  private urlApi3 = this.url+'Registraruser'
  private urlApi4 = this.url+'login'
  private urlApi5 = this.url+'Registrarprod'
  private urlApi6 = this.url+'Insertarcoment/'
  private urlApi7 = this.url+'Actualizarprod/'
  private urlApi8 = this.url+'Mostrarprod'
  private urlApi9 = this.url+'Producto/'
  private urlApi10 = 'http://127.0.0.1:8000/api/borrarproducto/'
  private urlApi11 = 'http://127.0.0.1:8000/api/borrarcomentario/'
  
  httpHeader = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE'
  });

  token: string;

  constructor(private http: HttpClient ,private router:Router) { }

  intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
    console.log('pase por el interceptor')
    return next.handle(req);
  }

  

  login(person:PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi4,person,{headers:this.httpHeader})
  }

  getPersona():Observable<PersonA>{
    return this.http.get<any>(this.urlApi9,{headers: this.httpHeader})
  }

  postPersona(person:PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi3,person,{headers:this.httpHeader})
  }

  getProducto():Observable<Producto[]>{
    return this.http.get<any[]>(this.urlApi8,{headers:this.httpHeader})
  }

  getComentario(id:number):Observable<Comentario[]>{
    return this.http.get<any[]>(this.urlApi9+id+'/comentarios',{headers:this.httpHeader})
  }

  deleteProducto(id:number):Observable<Producto>{
    return this.http.delete<any>(this.urlApi10+id,{headers:this.httpHeader})
  }

  postComentario(com:Comentario):Observable<Comentario>{
    return this.http.post<any>(this.urlApi6+com.producto_id,com,{headers:this.httpHeader})
  }

  putProducto(com,id):Observable<Producto>{
    return this.http.put<any>(this.urlApi7+id,com,{headers:this.httpHeader})
  }

  deleteComentario(id):Observable<Comentario>{
    return this.http.delete<any>(this.urlApi11+id,{headers:this.httpHeader})
  }

  postProducto(pro:Producto):Observable<Producto>{
    return this.http.post<any>(this.urlApi5,pro,{headers:this.httpHeader})
  }
}
