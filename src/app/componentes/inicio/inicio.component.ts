import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: []
})
export class InicioComponent implements OnInit {

    constructor(private mapaServcice: MapaService, private router: Router) { }

    ngOnInit(): void {
        this.mapaServcice.crearMapa();
    }

    public iraBusqueda(valor: string) {
        if (valor) {
            this.router.navigate(["/busqueda", valor]);
        }
    }
}
