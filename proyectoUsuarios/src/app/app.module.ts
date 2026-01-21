import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormsUsuariosComponent } from './forms-usuarios/forms-usuarios.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    FormsUsuariosComponent,
    AboutUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
