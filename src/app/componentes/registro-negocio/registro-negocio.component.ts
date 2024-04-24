import { Component } from '@angular/core';
import { RegistroNegocioDTO } from '../../DTO/registro-negocio-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-negocio.component.html',
  styleUrl: './registro-negocio.component.css'
})
export class RegistroNegocioComponent {
  archivos!: FileList;
  registroNegocioDTO!: RegistroNegocioDTO;

  constructor() {
    this.registroNegocioDTO = new RegistroNegocioDTO();
  }

  public registrarNegocio() {
    if ( this.archivos && this.archivos.length > 0) {
      console.log("Archivos selecionados:", this.archivos, this.registroNegocioDTO);
    } else {
      console.log("Debe cargar al menos una foto.")
    }
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroNegocioDTO.listaimagenes = Array.from(this.archivos).map(file=> file.name).join(',');
    }
  }
}
