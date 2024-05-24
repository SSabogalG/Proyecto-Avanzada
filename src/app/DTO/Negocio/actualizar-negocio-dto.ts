import { Horario } from "../horario";

export class ActualizarNegocioDTO {

    constructor(
        public nombre:string = "",
        public descripcion:string = "",
        public listaImagenes:string[] = [],
        public listaTelefonos:string[]= [],
        public horarioNegocio: Horario[]=[]
    ){}
}
