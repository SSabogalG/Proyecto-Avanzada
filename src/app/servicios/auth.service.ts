import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroUsuarioDTO } from '../DTO/Usuario/registro-usuario-dto';
import { MensajeDTO } from '../DTO/mensaje-dto';
import { LoginDTO } from '../DTO/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8181/api/auth";
  constructor(private http: HttpClient) { }

  public registrarUsuario (usuario:RegistroUsuarioDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-usuario`, usuario);
  }

  public loginUsuario (loginDTO:LoginDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO> (`${this.authURL}/login-usuario`, loginDTO);
  }

  public loginModerador (loginDTO:LoginDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO> (`${this.authURL}/login-administrador`, loginDTO);
  }
}
