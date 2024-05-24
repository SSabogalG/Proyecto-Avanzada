import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private router: Router) { }

  public setToken(token: string): void {
    if (this.isBrowser()) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }

  public getToken(): string | null {
    if (this.isBrowser()) {
      return sessionStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  public isLogged(): boolean {
    return !!this.getToken();
  }

  public login(token: string): void {
    this.setToken(token);
    this.router.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }

  public logout(): void {
    if (this.isBrowser()) {
      window.sessionStorage.clear();
    }
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }

  private decodePayload(token: string): any {
    try {
      const payload = token.split(".")[1];
      const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
      return JSON.parse(payloadDecoded);
    } catch (e) {
      console.error("Error decoding token payload", e);
      return null;
    }
  }

  public getCodigo(): string {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values ? values.id : '';
    }
    return "";
  }

  public getCodigoNegocio():string {
    const token = this.getToken();
    if(token){
      const values = this.decodePayload(token);
      return values ? values.idNegocio : '';
    }
    return "";
  }

  public getEmail(): string {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values ? values.sub : '';
    }
    return "";
  }

  public getNombre(): string {
    const token = this.getToken();
    if(token){
      const values = this.decodePayload(token);
      return values ? values.nombre: '';
    }
    return "";
  }

  public getRole(): string {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values ? values.rol : '';
    }
    return "";
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  public getCategoria():string{
    const token = this.getCategoria();
    if(token){
      const values = this.decodePayload(token);
      return values ? values.getCategoria: '';
    }
    return "";
  }

}
