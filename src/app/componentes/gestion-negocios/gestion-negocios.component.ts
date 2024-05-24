import { Component, Input } from '@angular/core';
import { ItemNegocioDTO } from '../../DTO/Negocio/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { TokenService } from '../../servicios/token.service';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css'
})
export class GestionNegociosComponent {

  negocios: ItemNegocioDTO[];
  seleccionados: ItemNegocioDTO[];
  textoBtnEliminar: string;
  alertaVisible: boolean;
  tituloModal: string = 'Título del modal';
  descripcionModal: string = 'Descripción del modal';

  constructor(private usuarioService: UsuarioService, private tokenService: TokenService, private negocioService:NegociosService) {
    this.negocios = [];
    this.listarNegocios();
    this.seleccionados = [];
    this.textoBtnEliminar = 'Eliminar';
    this.alertaVisible = false;
  }

  public listarNegocios() {
    
    const idUsuario = this.tokenService.getCodigo();

    this.usuarioService.listarNegocio(idUsuario).subscribe({
      next:(data) => {
        this.negocios = data.respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  public seleccionar(producto: ItemNegocioDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados.splice(this.seleccionados.indexOf(producto), 1);
    }
    this.actualizarMensaje();
  }

  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }

  public borrarNegocios() {

    this.seleccionados.forEach(n => {

      this.negocioService.eliminar(n.id).subscribe({
        next: (data) => {
          this.negocios = data.respuesta;
        },
        error: (error) => {
          console.error(error)
        }
      });

    })

  }
}
