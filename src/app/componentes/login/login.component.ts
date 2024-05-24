import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { Alerta } from '../../DTO/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { LoginDTO } from '../../DTO/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, AlertaComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Usa styleUrls en plural
})
export class LoginComponent {
  loginDTO!: LoginDTO; 
  alerta!: Alerta;

  constructor(private authService: AuthService, private tokenService: TokenService) {
    this.loginDTO = new LoginDTO();
  }

  public login(): void {
    this.authService.loginUsuario(this.loginDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = new Alerta(error.error.respuesta, "Este es el error");
      }
    });
  }

  public loginModerador(): void{
    this.authService.loginModerador(this.loginDTO).subscribe({
      next:data => {
        this.tokenService.login(data.respuesta.token);
      },
      error:error => {
        this.alerta = new Alerta(error.error.respuesta, "Error");
      }
    });

  }
}
