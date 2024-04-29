import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';


@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: []
})
export class InicioComponent implements OnInit {

    constructor(private mapaServcice: MapaService){}
    
    ngOnInit(): void {
        this.mapaServcice.crearMapa();
    }

}
