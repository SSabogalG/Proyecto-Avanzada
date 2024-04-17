import { Component } from '@angular/core';
import { UsuarioDTO } from '../../modelo/usuario-dto';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario:UsuarioDTO;

  constructor(){
    this.usuario = new UsuarioDTO();
  }
  public registrar (){
    console.log(this.usuario);
  }
}


