import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormsUsuariosComponent } from './forms-usuarios/forms-usuarios.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    {path: '', component: ListaUsuariosComponent},
    {path: 'listaUsuarios', component: ListaUsuariosComponent},
    {path: 'listaDetalle/:id', component: ListaUsuariosComponent},
    {path: 'form', component: FormsUsuariosComponent},
    {path: 'aboutUs', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
