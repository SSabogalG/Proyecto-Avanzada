import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../servicios/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "Unilocal";
  islogged = false;
  nombre: string = "";
  rol: string = "";

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.islogged = this.tokenService.isLogged();
    
    if (this.islogged) {
      this.nombre = this.tokenService.getNombre();
      this.rol = this.tokenService.getRole();
    }
  }

  public logout() {
    this.tokenService.logout();
  }
}
