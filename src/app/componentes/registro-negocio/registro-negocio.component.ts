import { Component, OnInit } from '@angular/core';
import { RegistroNegocioDTO } from '../../DTO/registro-negocio-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapaService } from '../../servicios/mapa.service';
import { NegociosService } from '../../servicios/negocios.service';
import { Horario } from '../../DTO/horario';

@Component({
  selector: 'app-registro-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-negocio.component.html',
  styleUrl: './registro-negocio.component.css'
})

export class RegistroNegocioComponent implements OnInit {
  archivos!: FileList;
  registroNegocioDTO: RegistroNegocioDTO;
  horarios: Horario[];
  registroNegocioExitoso:boolean = false;

  constructor(private negociosService: NegociosService, private mapaService : MapaService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.horarios = [ new Horario() ];
    }
  ngOnInit(): void {
    this.mapaService.crearMapa();

    this.mapaService.agregarMarcador().subscribe((marcador: { lat: number | undefined; lng: number | undefined; }) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud =marcador.lng;
    });
  }


  public registrarNegocio() {
    if (this.archivos && this.archivos.length > 0) {
      console.log("Archivos selecionados:", this.archivos, this.registroNegocioDTO);
      this.registroNegocioDTO.horarios = this.horarios;
      
      this.negociosService.crear(this.registroNegocioDTO);
    } else {
      console.log("Debe cargar al menos una foto.")
    }
    this.registroNegocioExitoso = true;
  }

  public agregarHorario (){
    this.horarios.push (new Horario());
  }

  public agregarTelefono(){
    this.registroNegocioDTO.telefonos.push();
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      Array.from(this.archivos).map(file => this.registroNegocioDTO.imagenes.push(file.name));
    }
  }
}
