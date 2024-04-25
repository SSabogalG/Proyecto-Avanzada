import { Component } from '@angular/core';
import { MapaComponent } from "../mapa/mapa.component";


@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [MapaComponent]
})
export class InicioComponent {

}
