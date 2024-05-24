import { Component, OnInit } from '@angular/core';
import { ItemNegocioDTO } from '../../DTO/Negocio/item-negocio-dto';
import { ActivatedRoute } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { MapaService } from '../../servicios/mapa.service';
import { AuthService } from '../../servicios/auth.service';
import { PublicoService } from '../../servicios/publico.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit{

  textoBusqueda : string;
  resultados: ItemNegocioDTO[];
  categoriaSeleccionada : string;


  constructor(private route: ActivatedRoute, private negociosService: NegociosService, private mapaService: MapaService ,private publicoService:PublicoService) {
    this.resultados = [];
    this.textoBusqueda = "";
    this.categoriaSeleccionada = "";
    this.route.params.subscribe(params => {
    this.textoBusqueda = params['texto'];
    
    });

    }

  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.pintarMarcadores(this.resultados);
    this.listarCategoria();
  }

  private listarCategoria(textoBusqueda? :string){

    if(textoBusqueda){
      this.publicoService.BuscarTipo(textoBusqueda).subscribe ({
        next:(data) => {
          this.resultados =data.respuesta;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
    onSelectCategoria(categoria:string) {
      this.categoriaSeleccionada = categoria;
      this.listarCategoria(categoria);
    }
    
    buscarPorCategoria(){
      this.listarCategoria(this.categoriaSeleccionada)
    }
}
