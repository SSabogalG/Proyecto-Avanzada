import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InicioSesionDTO } from '../../DTO/inicio-sesion-dto';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { Alerta } from '../../DTO/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { LoginDTO } from '../../DTO/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet,AlertaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  InicioSesionDTO!: InicioSesionDTO;
  loginDTO!: LoginDTO;
  alerta!: Alerta;

  username: string = '';
  password: string = '';

  constructor(private authService:AuthService, private tokenService:TokenService){
    this.InicioSesionDTO = new InicioSesionDTO();
  }

  onSubmit() {
    
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  public login(){
    this.authService.loginUsuario(this.loginDTO).subscribe({
      next:data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = new Alerta (error.error.respuesta, "danger")
      }
    })
  }
}
