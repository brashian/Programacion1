/*Mediante el uso de funciones tradicionales, calcular:
Por el Teorema de Pitágoras, deberán calcular la Hipotenusa (el lado del triángulo
rectángulo indicado en el gráfico).
• Deberán crear una función
encargada de calcular la
Hipotenusa, donde la misma
tendrá que retornar como
respuesta, el resultado de dicho
calculo.
• Posteriormente, también deben
crear una función encargada de
recoger datos y mostrar el
resultado entregado por la
función anterior, en un <h4></h4> . */

function Teorema (CatetoA,CatetoB){
    
    
    //En la constante Hip 
    const Hip = Math.sqrt(Math.pow(CatetoA,2) + Math.pow(CatetoB,2))
   const resultado = `Su Hipotenusa es ${Hip}`
   return resultado
}

function resultado() {
    //recolecto los valores de los dos catetos y la hipotenusa, los transformo en enteros
    const CatetoA = parseInt(document.getElementById('inp_catetoa').value)
    const CatetoB = parseInt(document.getElementById('inp_catetob').value)
    
    //mando los valores en parametros a Teorema(), recibo el return
    const respuesta = Teorema(CatetoA,CatetoB)



    document.getElementById("h4_respuesta").textContent = respuesta

}
       

