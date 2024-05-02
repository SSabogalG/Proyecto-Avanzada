import { Component, OnInit } from '@angular/core';
import { RegistroNegocioDTO } from '../../DTO/registro-negocio-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapaService } from '../../servicios/mapa.service';

@Component({
  selector: 'app-registro-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-negocio.component.html',
  styleUrl: './registro-negocio.component.css'
})

export class RegistroNegocioComponent implements OnInit {
  archivos!: FileList;
  registroNegocioDTO!: RegistroNegocioDTO;

  constructor(private mapaservcice: MapaService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
  }
  ngOnInit(): void {
    this.mapaservcice.crearMapa;
  }


  public registrarNegocio() {
    if (this.archivos && this.archivos.length > 0) {
      console.log("Archivos selecionados:", this.archivos, this.registroNegocioDTO);
    } else {
      console.log("Debe cargar al menos una foto.")
    }
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      Array.from(this.archivos).map(file => this.registroNegocioDTO.imagenes.push(file.name));
    }
  }
}
