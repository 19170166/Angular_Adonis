import { Injectable } from '@angular/core';
import {PersonA} from '../Models/Persona/persona.interface'
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {
  private urlApi = 'http://localhost:8000/api/mostrarpersonas/1'
  private urlApi2 = 'http://localhost:8000/api/mostrarpersonas'
  private urlApi3 = 'http://localhost:8000/api/registro'
  private urlApi4 = 'http://localhost:8000/api/login'
  
  httpHeader = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE'
  });

  constructor(private http: HttpClient) { }

  login(person:PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi4,person,{headers:this.httpHeader})
  }

  getPersona():Observable<PersonA>{
    return this.http.get<any>(this.urlApi,{headers: this.httpHeader})
  }

  getPersonas():Observable<PersonA[]>{
    return this.http.get<any[]>(this.urlApi2,{headers: this.httpHeader})
  }

  postPersona(person:PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi3,person,{headers:this.httpHeader})
  }
}
