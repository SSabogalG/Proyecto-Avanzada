import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../DTO/Negocio/item-negocio-dto';
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
  categoriaSelecionada:string;

  constructor(private publicoService: PublicoService){
    this.listaNegocios = [];
    this.categoriaSelecionada = "";
  }



public consultarNegocios(categoria? : string){

  if(categoria){
    this.publicoService.BuscarTipo(categoria).subscribe({
      next:(data) => {
        this.listaNegocios=data.respuesta;
      },
      error:(error) =>{
        console.log("Error a mostrar los negocios")
      }
    });
  }

  }

  onSelectCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.consultarNegocios(categoria); // Call the listarCategoria method with the selected category
  }
}
