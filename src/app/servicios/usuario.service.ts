import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../DTO/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioURL = "http://localhost:8181/api/usuario";

  constructor(private http: HttpClient) { }

  public listarNegocio(idUsuario: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.usuarioURL}/listar-negocios-usuario/${idUsuario}`);
  }

  public recuperarContrasenia(idUsuario: string): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.usuarioURL}/recuperar-contrasenia-usuario/${idUsuario}`, null);
  }


}
