import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-forms-usuarios',
  standalone: false,
  templateUrl: './forms-usuarios.component.html',
  styleUrl: './forms-usuarios.component.css'
})
export class FormsUsuariosComponent {
  
  nuevoUsuario:Usuario = {
    id: '',
    username: '',
    password: ''    
  };

  enviar(){
    //Hacer llamada al servicio.
  }

}
