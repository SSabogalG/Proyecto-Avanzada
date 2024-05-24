import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../DTO/Negocio/item-negocio-dto';

@Component({
  selector: 'app-gestion-moderador',
  standalone: true,
  imports: [],
  templateUrl: './gestion-moderador.component.html',
  styleUrl: './gestion-moderador.component.css'
})
export class GestionModeradorComponent {

  negocios :ItemNegocioDTO [];

  constructor(){
    this.negocios =[] ;
  }


}
