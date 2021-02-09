import { Injectable } from '@angular/core';
import {PersonA} from '../../Models/Persona/persona.interface'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private urlApi = 'http://127.0.0.1:8000/api/mostrarpersonas/1';
  private urlApi2 = 'http://127.0.0.1:8000/api/mostrarpersonas';
  private urlApi3 = 'http://127.0.0.1:8000/api/login';
  httpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE'
  });
  
  constructor(private http: HttpClient) { }

  getPersona():Observable<PersonA>{
    return this.http.get<any>(this.urlApi,{headers: this.httpHeaders})
  }

  getPersonas():Observable<PersonA[]>{
    return this.http.get<any[]>(this.urlApi2,{headers: this.httpHeaders})
  }

  Login(person: PersonA):Observable<PersonA>{
    return this.http.post<any>(this.urlApi3,person)
  }
}
