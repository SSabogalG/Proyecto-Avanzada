import { Injectable } from '@angular/core';

declare var mapboxgl:any

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  map:any;

  constructor() { }

  public crearMapa(){

    this.map = new mapboxgl.Map({
      container: 'mapa', // ID del contenedor del mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa (en este caso, streets-v11)
      center: [-75.7217498, 4.5423559], //  inicia [longitud y latitud]
      zoom: 9, // Nivel de zoom inicial
      accessToken: 'pk.eyJ1Ijoic3NhYm9nYWxnIiwiYSI6ImNsdmR3eG1vazAzamgycnA2Mzc0cmIya28ifQ.22cFggl9ENzJD6kq4606tQ' // Token de acceso
    });

  }

}
