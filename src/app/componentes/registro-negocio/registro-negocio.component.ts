import { Component, OnInit } from '@angular/core';
import { RegistroNegocioDTO } from '../../DTO/Negocio/registro-negocio-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapaService } from '../../servicios/mapa.service';
import { NegociosService } from '../../servicios/negocios.service';
import { Horario } from '../../DTO/horario';
import { PublicoService } from '../../servicios/publico.service';
import { Alerta } from '../../DTO/alerta';
import { TokenService } from '../../servicios/token.service';
import { ImagenService } from '../../servicios/imagen.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-registro-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertaComponent],
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
  telefono:string;
  ciudades: string[];

  constructor(private negociosService: NegociosService, private mapaService: MapaService, private publicoService: PublicoService, private tokenService:TokenService, 
    private imagenService:ImagenService
  ) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.horarios = [new Horario()];
    this.tipoNegocio = [];
    this.cargarCategorias();
    this.telefono = "";
    this.ciudades = [];
    this.cargarCiudades();
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

      const codigoCliente = this.tokenService.getCodigo();
      this.registroNegocioDTO.idUsuario = codigoCliente;

      console.log(this.registroNegocioDTO);

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
    this.registroNegocioDTO.listaTelefonos.push(this.telefono);
    
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      Array.from(this.archivos).map(file => this.registroNegocioDTO.listaImagenes.push(file.name));
    }
  }
  private cargarCategorias() {
    this.publicoService.listarTiposNegocio().subscribe({
      next: (data) => {
        this.tipoNegocio = data.respuesta;
      },
      error: (error) => {
        console.log("error al cargar las categorias", error);
      }
    });
  }

  private cargarCiudades(){
    this.publicoService.listarCiudades().subscribe({
      next:(data) =>{
        this.ciudades=data.respuesta;
      },
      error:(error) =>{
        console.log("error al cargar las ciudades", error);
      }
    });
  }

  public subirImagen(){
    if(this.archivos != null && this.archivos.length>0){

      const formData = new FormData();
      formData.append ('file', this.archivos[0]);

      this.imagenService.subir(formData).subscribe({
        next:data => {
          this.registroNegocioDTO.listaImagenes.push( data.respuesta.url );
          this.alerta = new Alerta ("Se ha subido la foto", "succes");
        },
        error:error =>{
          this.alerta = new Alerta (error.error, "danger");
        }
      });

    } else {
      this.alerta = new Alerta ("Debe seleccionar una imagen y subirla", "danger");
    }
  }
}
