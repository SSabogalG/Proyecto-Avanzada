export class RegistroNegocioDTO {
    constructor(
        public nombre:string ="",
        public descripcion:string = "",
        public listaimagenes:string = "",
        public listaTelefonos:string = "",
        public ubicacion:string = "",
        public horarioNegocio:string ="",
        public tipoNegocio:string = "",
        public ciudad:string = ""
    ){}
}
