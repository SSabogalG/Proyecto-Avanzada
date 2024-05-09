import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../DTO/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { ItemNegocioDTO } from '../DTO/item-negocio-dto';

@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "http://localhost:8181/api/public";

  constructor(private http: HttpClient) { }
  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-ciudades`);
  }
  public listarTiposNegocio(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-tipo-de-negocios`);
  }
  public BuscarTipo(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/buscar-negocios-tipo/{tipoNegocio}`);
  }
  
}

