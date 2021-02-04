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

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'insertar', component:InsertarComponent},
  {path: 'eliminar', component:EliminarComponent},
  {path: 'modificar', component:ModificarComponent},
  {path: '', component:InicioComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
