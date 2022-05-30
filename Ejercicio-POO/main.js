import Triangulo from "./triangulo.js";
import Rectangulo from "./rectangulo.js";
import Trapecio from "./trapecio.js";

const mostrar= ()=>{
    const h1 = document.getElementById('h1_triangulo')

    const altura= document.getElementById('tria_base').value
    const base= document.getElementById('tria_altura').value
    const area = new Triangulo(altura, base,h1)
    const respuesta_triangulo = area.calculo_triangulo()
    document.getElementById('h1_triangulo').textContent = respuesta_triangulo


    const rec_altura=document.getElementById('rec_altura').value
    const rec_base=document.getElementById('rec_base').value
    const rec_area = new Rectangulo(rec_altura,rec_base)
    const respuesta = rec_area.area_rectangulo()
    document.getElementById('h1_rectangulo').textContent = respuesta


    const tra_altura=document.getElementById('trape_altura').value
    const tra_base=document.getElementById('trape_base').value
    const tra_basedos=document.getElementById('trape_basedos').value
    
    const tra_area = new Trapecio(tra_altura,tra_base,tra_basedos)
    const res_tra = tra_area.calculo_trapecio()
    document.getElementById('h1_trapecio').textContent = res_tra

}
document.getElementById('btn_calcular').addEventListener("click",mostrar)

