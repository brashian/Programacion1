export default class Rectangulo{

    constructor(A,B){
        this.base=B
        this.altura=A

    }

    area_rectangulo(){

        let rectangulo = this.altura * this.base
        console.log(`
            Area de su rectangulo = ${rectangulo}
        `)
        document.getElementById('h1_rectangulo').textContent= `
        Area del rectangulo: ${rectangulo}
    `
    }




}