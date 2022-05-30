export default class Trapecio {

    constructor(Altura,Base,Basedos){
        this.altura = Altura
        this.base = Base
        this.segundabase = Basedos
    }

    calculo_trapecio(){

        let trapecio = parseInt(this.base) + parseInt(this.segundabase)
        let resultado = (trapecio * this.altura)/2
        document.getElementById('h1_trapecio').textContent= `
        Area del trapecio: ${resultado}
    `
       
    }






}