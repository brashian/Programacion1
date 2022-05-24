//se crea una clase con export default para poder que main la pueda importar
//tiene que empezar con mayuscula
export default class Vehiculo{
    
    //primer metodo de la clase, lo primero que se ejecuta.
    //m,k son los datos "recibidos"
    constructor(m, k){
        // creo y lleno atributos con los datos traidos desde main
        this.marca = m;
        this.km = k;

    }
    //creacion de metodos
    mostrar_datos_vehiculos(){
    
        console.log(`
            Kilometraje: ${this.km}
            Marca : ${this.marca}
        `)
    }

}