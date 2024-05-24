import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../DTO/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeradorServicesService {

  private publicoURL = "http://localhost:8181/api/moderador";

  constructor(private http: HttpClient) { }

   /*public aprobar(revision:registroRevisionDTO): Observable<MensajeDTO> {
      return this.http.put<MensajeDTO>(`${this.publicoURL}/aprobar-negocio`, revision);
    } */




}
