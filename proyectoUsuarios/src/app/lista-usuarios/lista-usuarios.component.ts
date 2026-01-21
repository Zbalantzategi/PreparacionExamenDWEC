import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ApiUsuariosService } from '../api-usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuarios',
  standalone: false,
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  //Variables
  users: Usuario[] = [];

  constructor(private usuariosService: ApiUsuariosService) {
  }

  ngOnInit():void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.users = data;
      }, error: (err) => {
        console.log("Ha ocurrido un error");
      }

    });
  }


}
