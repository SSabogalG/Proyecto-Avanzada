import { Injectable } from '@angular/core';
import { ItemNegocioDTO } from '../DTO/item-negocio-dto';
import { RegistroNegocioDTO } from '../DTO/registro-negocio-dto';

@Injectable({
  providedIn: 'root'
})

export class NegociosService {

  negocios: ItemNegocioDTO[];

  constructor() {
    this.negocios = [];

    this.negocios.push(new ItemNegocioDTO('1', 'Bar Armenia', 'https://picsum.photos/100',
      'BAR', 4.5, 'APROBADO'));

    this.negocios.push(new ItemNegocioDTO('2', 'Restaurante La Casona',
      'https://picsum.photos/100', 'RESTAURANTE', 4.0, 'APROBADO'));

    this.negocios.push(new ItemNegocioDTO('3', 'Peluquería La 33', 'https://picsum.photos/100',
      'PELUQUERIA', 4.0, 'RECHAZADO'));

    this.negocios.push(new ItemNegocioDTO('4', 'Veterinaria Los Amigos',
      'https://picsum.photos/100', 'VETERINARIA', 4.0, 'APROBADO'));
  }




  public listar(): ItemNegocioDTO[] {
    return this.negocios;
  }

  public obtener(codigo: string): ItemNegocioDTO | undefined {
    return this.negocios.find(negocios => negocios.codigoNegocio == codigo);
  }

  public crear(negocioNuevo: RegistroNegocioDTO) {
    const codigo = (this.negocios.length + 1).toString();
    this.negocios.push(new ItemNegocioDTO(codigo, negocioNuevo.nombre,
      negocioNuevo.imagenes[0], negocioNuevo.tipoNegocio, 0, 'PENDIENTE'));
  }
  public eliminar(codigo: string) {
    this.negocios = this.negocios.filter(n => n.codigoNegocio !== codigo);
  }

}
