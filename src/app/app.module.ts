import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { InsertarComponent } from './Componentes/insertar/insertar.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'

//importar servicio de cookies
import {CookieService} from 'ngx-cookie-service'

//Interceptors
import {ServicioDatosService} from './Componentes/servicio-datos.service'
import {InterceptorService} from './Componentes/Interceptors/interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InsertarComponent,
    PrincipalComponent,
    PageNotFoundComponent,
    InicioComponent,
    EliminarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  //importa el servicio con el auth
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: ServicioDatosService,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi: true
    },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
