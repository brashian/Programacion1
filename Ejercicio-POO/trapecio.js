export default class Trapecio {

    constructor(Altura,Base,Basedos){
        this.altura = Altura
        this.base = Base
        this.segundabase = Basedos
    }

    calculo_trapecio(){

        let trapecio = parseInt(this.base) + parseInt(this.segundabase)
        let resultado = `Area de trapecio: ${(trapecio * this.altura)/2}`
         return resultado
       
    }






}