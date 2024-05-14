import { Injectable } from '@angular/core';
import { ItemNegocioDTO } from '../DTO/item-negocio-dto';
import { RegistroNegocioDTO } from '../DTO/registro-negocio-dto';
import { Ubicacion } from '../DTO/ubicacion';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../DTO/mensaje-dto';
import { Observable } from 'rxjs';
import { ActualizarNegocioDTO } from '../DTO/actualizar-negocio-dto';


@Injectable({
  providedIn: 'root'
})

export class NegociosService {

  private negociosURL = "http://localhost:8181/api/negocio";

  constructor(private http: HttpClient) { }

  public crear(negocioNuevo: RegistroNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.negociosURL}/registrar-negocio`, negocioNuevo);
  }

  public eliminar(idNegocio: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.negociosURL}/eliminar-negocio/${idNegocio}`);
  }

  public actualizar(actualizacionNegocio: ActualizarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.negociosURL}/editar-negocio`, actualizacionNegocio);
  }

  public listarNegociosPropietario(idUsuario: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/listar-negocios-usuario/${idUsuario}`);
  }
}
