import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrincipalComponent} from '../app/Componentes/principal/principal.component';
import {LoginComponent} from '../app/Componentes/login/login.component';
import {RegistroComponent} from '../app/Componentes/registro/registro.component';
import {InsertarComponent} from '../app/Componentes/insertar/insertar.component';
import {PageNotFoundComponent} from '../app/Componentes/page-not-found/page-not-found.component'
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import {GuardAuthGuard} from './Componentes/Guards/guard-auth.guard'

const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'nologin', component:InsertarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'productos', component:ModificarComponent,canActivate:[GuardAuthGuard]},
  {path: '', component:InicioComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
