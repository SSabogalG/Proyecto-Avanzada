import { Component } from '@angular/core';
import { CambiarPasswordDTO } from '../../DTO/cambiar-password-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { TokenService } from '../../servicios/token.service';
import { Alerta } from '../../DTO/alerta';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})



export class RecuperarComponent {
  cambiarPasswordDTO !: CambiarPasswordDTO;
  alerta!: Alerta;

  constructor( private usuarioService: UsuarioService, private tokenService: TokenService){
    this.cambiarPasswordDTO = new CambiarPasswordDTO();

  }

 /* public recuperarContrasenia(){
    const idusuario = this.tokenService.getCodigo();
    this.cambiarPasswordDTO.idUsuario = idusuario;

    this.usuarioService.recuperarContrasenia(this.cambiarPasswordDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "succes");
      },
      error : error =>{
        this.alerta = new Alerta (error.error.respuesta, "Danger")
      }
    });
  }*/
}
