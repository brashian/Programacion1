/*Crear un programa que básicamente analice la temperatura en °Fahrenheit e indice
cuando sus valores son elevados o bajos como se especifica a continuación.
Para ello, deberá añadir una función (flecha) que reciba como parámetro la temperatura
en grados Fahrenheit y retorne las siguientes frases:
CET N°30 TALLER PROGRAMACIÓN 1 25/04/2022
1) Si los °F están entre 14 y 32, sale la frase “Temperatura baja”
2) Si los °F están entre 32 y 68, sale la frase “Temperatura adecuada”
3) Si los °F están entre 68 y 96, sale la frase “Temperatura alta”
4) Si no está entre ningún caso anterior la frase “Temperatura desconocida”
Deberán crear una segunda función flecha, encargada de recolectar y enviar por
parámetro la temperatura que espera recibir la primera función. Y no solo eso, sino que,
esta segunda función también será la encargada de recibir la respuesta retornada por
parte de la primera. Y mostrarla posteriormente en un H1. */

// creo funcion flecha para analizar y retornar los datos que provienen de mostrar_resultado
const retornar_frases = (grados) => {
    //creo un if para ver en que parte se encuentran los grados
    if(grados  >=14 & grados <32){
        //creo variable respuesta para retornarla con el valor correspondiente
        var respuesta  = "Temperatura baja"
    }else{
        if(grados >=32 & grados < 68){
            //sobrepongo los valores, al ser otros los terminos
            respuesta  = "Temperatura adecuada"
        }else{
            if(grados >=68 & grados <=96){
                respuesta  = "Temperatura alta"
            }else{
                respuesta  = "Temperatura desconocida"
            }
        }
    }
    //retorno el resultado que me genere el if 
    return respuesta
}

//creo una funcion flecha con el fin de recoletar datos, mandarlos a otra func flecha y luego tomar esos datos y mostrarlos
const mostrar_resultado =() => {
    //tomo los datos que tiene el input
    const grados = parseInt(document.getElementById("inp_grados").value)
   
    //los envio en parametro a la function y recibo su retorno
    const respuesta = retornar_frases(grados)


    //muestro en un h1 el resultado que retorna la otra funcion
    document.getElementById("h1_resultado").textContent = respuesta

}
//escucha al boton, al hacer click detona el evento que ejcuta la funcion mostrar_resultado
 const evento = document.getElementById('btn_mostrar')
 evento.addEventListener('click',mostrar_resultado)