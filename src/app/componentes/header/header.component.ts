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
  email: string = "";

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.islogged = this.tokenService.isLogged();
    if (this.islogged) {
      this.email = this.tokenService.getEmail();
    }
  }

  public logout() {
    this.tokenService.logout();
  }
}
