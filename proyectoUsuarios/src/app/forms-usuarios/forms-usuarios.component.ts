import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { ApiUsuariosService } from '../api-usuarios.service';


@Component({
  selector: 'app-forms-usuarios',
  standalone: false,
  templateUrl: './forms-usuarios.component.html',
  styleUrl: './forms-usuarios.component.css'
})
export class FormsUsuariosComponent {

  constructor(private APIUsuarios: ApiUsuariosService){}
  
  nuevoUsuario:Usuario = {
    username: '',
    password: ''    
  };

  usuarioActualizar:Usuario ={
    username: '',
    password: ''
  };

  idActualizar: string = '';
  usuarioActualizado:boolean = false;

  usuarioGenerado:boolean = false;

  enviar(){
    this.APIUsuarios.postUsuarios(this.nuevoUsuario).subscribe({
      next: (data) =>{
        this.usuarioGenerado = true;
        console.log(data);
      }, error:(err) => {
        console.log('Ha habido un error');
      }
    });

  }

  actualizar() {
    this.APIUsuarios.putUsuarios(this.idActualizar, this.usuarioActualizar).subscribe({
      next: (data) => {
        this.usuarioActualizado = true;
      }, error: (err) => {
        console.log(err);
      },
    }) 
  }
  

}
