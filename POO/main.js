//importo la clase vehiculo desde donde se encuentra ese archivo.
import Vehiculo from "./vehiculo.js";


//funcion de auxilio, se encarga de invicar al metodo.
const mostrar= ()=>{
    const km= document.getElementById('inp_km').value
    const marca= document.getElementById('inp_marca').value


    //creo una extencion de la clase (instancia)
    //envio datos al primer metodo que se ejecuta (constructor) en el parametro
    const auto = new Vehiculo(marca, km)
    //la instancia me da todo lo que tenga la clase dentro
    auto.mostrar_datos_vehiculos()
}
//Forma resumida de la escucha
document.getElementById('btn_mostrar').addEventListener("click",mostrar)
