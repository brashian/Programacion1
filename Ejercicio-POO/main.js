import Triangulo from "./triangulo.js";
import Rectangulo from "./rectangulo.js";


const mostrar= ()=>{
    const altura= document.getElementById('tria_base').value
    const base= document.getElementById('tria_altura').value

    const area = new Triangulo(altura, base)
   
    area.calculo_triangulo()

    const rec_altura=document.getElementById('rec_altura').value
    const rec_base=document.getElementById('rec_base').value

    const rec_area = new Rectangulo(rec_altura,rec_base)
    rec_area.area_rectangulo()
    

}
document.getElementById('btn_calcular').addEventListener("click",mostrar)

