import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegistroUsuarioDTO } from '../../DTO/registro-usuario-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  archivos!: FileList;
  registroUsuarioDTO!: RegistroUsuarioDTO;

  constructor() {
    this.registroUsuarioDTO = new RegistroUsuarioDTO();
  }

  public registrar() {
    if (this.registroUsuarioDTO.urlFotoPerfil != "") {
      console.log(this.registroUsuarioDTO);
    } else {
      console.log("Debe de cargar una foto")
    }
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroUsuarioDTO.urlFotoPerfil = this.archivos[0].name;
    }
  }
}


