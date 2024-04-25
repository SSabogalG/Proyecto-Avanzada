import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InicioSesionDTO } from '../../DTO/inicio-sesion-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  InicioSesionDTO!: InicioSesionDTO;

  username: string = '';
  password: string = '';

  constructor(){
    this.InicioSesionDTO = new InicioSesionDTO();
  }

  onSubmit() {
    
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
