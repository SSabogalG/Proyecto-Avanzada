import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FootersComponent } from "./componentes/footers/footers.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, HeaderComponent, FootersComponent]
})
export class AppComponent {
  title = 'Unilocal';
}


