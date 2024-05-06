export class Ubicacion {
    latitud: number | undefined;
    longitud: number | undefined;


    constructor(latitud?: number , longitud?: number) {
        this,latitud = latitud;
        this.longitud = longitud;
    }
}
