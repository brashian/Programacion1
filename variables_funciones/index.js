//funcion clasica
function mostrar (){
    //forma uno
    //const nombres = document.querySelector("#inp_nombre").value

    //forma dos
    const nombres = document.getElementById("inp_nombre").value




    //sin template string
    //const mensaje = 'Nombre y Apellido '+nombres
 

    //con template string
    const mensaje = `Nombre y apellido: ${nombres} - DNI: 45471450`

    alert(mensaje)
}

//funcion con retorno, la retorna al que la invoca, llama.
function mifunction_con_retorno ()
{
    const ejemplo = 'Probando funcion con retorno'
    //retorna una repuesta
    return ejemplo
}

function mostrar_respuest()
{
// se invoca la funcion.
    const respuesta =      mifunction_con_retorno()
    alert(respuesta)
}

