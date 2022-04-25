/*Realizar un programa para una Concesionaria de Autos:
Si el vehículo a la venta es un Ford Fiesta, el descuento es de un 5%. Si el vehículo a la
venta es un Ford focus, el descuento es del 10%. Y por ultimo, si se trata de un Ford Ka,
el descuento es de un 15%. El usuario deberá elegir el vehículo. Y el programa deberá
entregar el precio con descuento en un elemento html H1.
Los precios preestablecidos son:
• Ford Ka: $1.750.00
• Ford Fiesta: $1.950.000
• Ford Focus: $2.560.000
Para llevar a cabo dicha consigna, solo se debe crear una función tradicional. Los
detalles se como llevar adelante el ejercicio, se los dará el docente.*/



//creo funcion tradicional
function calculos () {
   const marca = document.getElementById('select_precio').value
    
    if(marca=="FK"){
        //creo una variable que me calcule el porcentaje, solo en esta parte
        let porcentaje = 175000 * 0.15
        //creo variable resultado, para usarla luegp
        const respuesta = 175000 - porcentaje
        //modifico el h1 desde Js. Mostarndo asi el descuento del FK
        document.getElementById("h1_resultado").textContent = `su precio con descuento es: ${respuesta} de su auto Ford KA`
    
    }else{
        if(marca=="FFiesta"){
             //creo otra vez la variable porcentaje 
            let porcentaje = 1950000 * 0.05
            // reutilizo la variable y le impongo otros valores
             resultado = 1950000 - porcentaje
            //modifico el h1 desde Js. Mostarndo asi el descuento del Ford Fiesta
             document.getElementById("h1_resultado").textContent = `su precio con descuento es: ${resultado} de su auto Ford Fiesta`
        }else{
              //creo otra variable
              let porcentaje =  2560000 * 0.10
              //creo variable resultado, para usarla luegp
               resultado = 2560000 - porcentaje
              
              //muestro en un h1 el valor de resultado
                document.getElementById("h1_resultado").textContent = `su precio con descuento es: ${resultado} de su auto Ford Focus`
        }
    }
    
}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",calculos)