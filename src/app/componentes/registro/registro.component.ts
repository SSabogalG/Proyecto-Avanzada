import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegistroUsuarioDTO } from '../../DTO/registro-usuario-dto';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicios/auth.service';
import { PublicoService } from '../../servicios/publico.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  ciudades: string[];
  registroExitosos: boolean = false;
  archivos!: FileList;
  registroUsuarioDTO!: RegistroUsuarioDTO;

  constructor(private authService: AuthService,  private publicoService: PublicoService) {
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  public registrar() {
    if(this.registroUsuarioDTO.urlFotoPerfil != ""){
      this.authService.registrarUsuario(this.registroUsuarioDTO).subscribe({
        next: (data) =>{
          console.log("Cliente registrado");
        },
        error: (error) => {
          console.log(error.error.respuesta);
        }
      });
    } else {
      console.log ("Debe cargar una foto")
    }
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroUsuarioDTO.urlFotoPerfil = this.archivos[0].name;
    }
  }
  private cargarCiudades() {
    this.publicoService.listarCiudades().subscribe({
      next:(data) => {
        this.ciudades=data.respuesta;
      },
      error: (error) => {
        console.log("error al cargar las ciudades");
      }
    });
  }
}


