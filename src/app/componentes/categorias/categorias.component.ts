import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../DTO/item-negocio-dto';
import { PublicoService } from '../../servicios/publico.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  listaNegocios: ItemNegocioDTO[]

  constructor(private publicoService: PublicoService){
    this.listaNegocios = [];
  }

  public consultarNegocios(){
this.publicoService.BuscarTipo().subscribe({
  next:(data) => {
    this.listaNegocios=data.respuesta;
  },
  error:(error) =>{
    console.log("Error a mostrar los negocios")
  }
})
  }

}
