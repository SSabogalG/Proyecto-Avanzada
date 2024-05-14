import { Component, OnInit } from '@angular/core';
import { RegistroNegocioDTO } from '../../DTO/registro-negocio-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapaService } from '../../servicios/mapa.service';
import { NegociosService } from '../../servicios/negocios.service';
import { Horario } from '../../DTO/horario';
import { PublicoService } from '../../servicios/publico.service';
import { Alerta } from '../../DTO/alerta';

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
  registroNegocioExitoso: boolean = false;
  tipoNegocio: string[];
  alerta!: Alerta;

  constructor(private negociosService: NegociosService, private mapaService: MapaService, private publicoService: PublicoService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.horarios = [new Horario()];
    this.tipoNegocio = [];
    this.cargarCategorias();
  }

  ngOnInit(): void {
    this.mapaService.crearMapa();

    this.mapaService.agregarMarcador().subscribe((marcador: { lat: number | undefined; lng: number | undefined; }) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }


  public registrarNegocio() {
    if (this.archivos && this.archivos.length > 0) {
      this.negociosService.crear(this.registroNegocioDTO).subscribe({
        next: (data) => {
          this.alerta = new Alerta(data.respuesta, "succes");
        },
        error: (error) => {
          this.alerta = new Alerta(error.error.respuesta, "Danger")
        }
      });
    } else {
      this.alerta = new Alerta("Debe de subir al menos una imagen", "danger")
    }
  }

  public agregarHorario() {
    this.horarios.push(new Horario());
  }

  public agregarTelefono() {
    this.registroNegocioDTO.telefonos.push();
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      Array.from(this.archivos).map(file => this.registroNegocioDTO.imagenes.push(file.name));
    }
  }
  private cargarCategorias() {
    this.publicoService.listarTiposNegocio().subscribe({
      next: (data) => {
        this.tipoNegocio = data.respuesta;
      },
      error: (error) => {
        console.log("error al cargar las categorias");
      }
    });
  }
}
