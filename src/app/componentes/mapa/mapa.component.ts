import { Component ,OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  divWidth: string = '800px'; // Por ejemplo, 800px
  divHeight: string = '600px'; // Por ejemplo, 600px
  constructor() { }

  ngOnInit() {
    // Crear el mapa
    const map = new mapboxgl.Map({
      container: 'mapa', // ID del contenedor del mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa (en este caso, streets-v11)
      center: [-75.7217498, 4.5423559], //  inicia [longitud y latitud]
      zoom: 9, // Nivel de zoom inicial
      accessToken: 'pk.eyJ1Ijoic3NhYm9nYWxnIiwiYSI6ImNsdmR3eG1vazAzamgycnA2Mzc0cmIya28ifQ.22cFggl9ENzJD6kq4606tQ' // Token de acceso
    });
  }
}
