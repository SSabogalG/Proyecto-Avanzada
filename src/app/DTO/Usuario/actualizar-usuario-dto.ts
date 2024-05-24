import { Ubicacion } from "../ubicacion";

export class ActualizarUsuarioDTO {
    constructor(
        public idUsuario : string = "",
        public nombre : string = "",
        public correo : string = "",
        public fotoPerfil : string = "",
        public ciudadReidencia : string = "",
        public ubicacion : Ubicacion = new Ubicacion()
    ){}
}
