import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegistroUsuarioDTO } from '../../DTO/Usuario/registro-usuario-dto';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicios/auth.service';
import { PublicoService } from '../../servicios/publico.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../DTO/alerta';
import { ImagenService } from '../../servicios/imagen.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, AlertaComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  ciudades: string[];
  registroExitosos: boolean = false;
  archivos!: FileList;
  registroUsuarioDTO!: RegistroUsuarioDTO;
  alerta!:Alerta;

  constructor(private authService: AuthService,  private publicoService: PublicoService, private imagenService:ImagenService) {
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  public registrar() {
    if(this.registroUsuarioDTO.urlFotoPerfil != ""){
      this.authService.registrarUsuario(this.registroUsuarioDTO).subscribe({
        next: (data) =>{
          this.alerta = new Alerta(data.respuesta, "succes");
          
        },
        error: (error) => {
          this.alerta = new Alerta (error.error.respuesta, "danger")
          
        }
      });
    } else {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
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
  public subirImagen(){
    if(this.archivos != null && this.archivos.length>0){

      const formData = new FormData();
      formData.append('file',this.archivos[0]);

      this.imagenService.subir(formData).subscribe({
        next:data => {
          this.registroUsuarioDTO.urlFotoPerfil = data.respuesta.url;
          this.alerta = new Alerta ("Se ha subido la foto", "Success");
        },
        error:error => {
          this.alerta = new Alerta (error.error, "danger");
        }
      });
    } else {
      this.alerta = new Alerta ("Debe seleccionar una imagen y subirla", "danger");
    }
  }


}


