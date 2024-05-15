import { Horario } from "./horario";
import { Ubicacion} from "./ubicacion";

export class RegistroNegocioDTO {
        constructor(
        public nombre: string = '',
        public descripcion: string = '',
        public idUsuario: string = '',
        public ubicacion: Ubicacion= new Ubicacion(),
        public listaImagenes: string[] = [],
        public tipoNegocio: string = '',
        public horarioNegocio:Horario[] = [],
        public listaTelefonos:string[] = [],
        public ciudad: string = "",
        public dirreccion: string = ""
        ) { }
}
