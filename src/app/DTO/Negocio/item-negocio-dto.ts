import { Ubicacion } from "../ubicacion";

export class ItemNegocioDTO {

    constructor(
        public id: string = '',
        public nombre: string = '',
        public listaImagenes: string []= [],
        public tipoNegocio: string = '',
        public ubicacion: Ubicacion = new Ubicacion (),
        public direccion: string = '',
        public estadoRegistro: string = ""
        ){}
}
