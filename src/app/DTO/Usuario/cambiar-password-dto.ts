export class CambiarPasswordDTO {
    constructor(
        public idUsuario:string = "",
        public passwordNueva = "",
        public email = ""

    ){}
}
