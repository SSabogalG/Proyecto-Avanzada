export class Horario {
    horaApertura: Date | undefined;
    horaCierre: Date | undefined;
    dia: string | undefined;

    
    constructor(horaApertura?: Date, horaCierre?: Date, dia?:string){
        this.horaApertura = horaApertura;
        this.horaCierre = horaCierre;
        this.dia= dia;
    }
}


