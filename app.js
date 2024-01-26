var NumeroAleatorio = GenerarNumeroAleatorio();
var Numerodeintentos = 1;
var NumeroMaximo = 10
function AsignarTextoElemento(elemento, texto)//La funcion puede recibir parametros lo que es en este caso elemento y texto 
{
    var elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;//No es necesario siempre que la funcion nos regrese algo, pero es una buen apracctica ponerlo terminando la funcion. 
}
function verificaciondelintento()
{
    var numeroDelUsuario = parseInt(document.getElementById("NumeroDeUsuario").value);//esto de aqui es el input y el input esta en HTML 
    if(numeroDelUsuario === NumeroAleatorio)
    {
        AsignarTextoElemento("p", `!Encontraste el numero correcto! en  ${Numerodeintentos} ${(Numerodeintentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else
    //El usuario no acierta 
    {
        if(numeroDelUsuario > NumeroAleatorio)
        {
            AsignarTextoElemento("p", "Es el numero secreto es menor"); 
        }
        else
        {
            AsignarTextoElemento("p", "Es el numero secreto es mayor");
        }
        Numerodeintentos++
        limpiar();
    }
    return;
    //si tenemos mas de un "input" tenemos que ir al HTML a poner un indicador, con el atributo "id", la funcion para buscar por id, es el que esta arriba 
    //Con typeof(), se puede saber que tipo de dato es el que nos esta dando el programa.
    //El triple === es para que sea igual en valor y en tipo de dato ya sea string, float, int etc.... 
}

function limpiar()
{
    document.getElementById("NumeroDeUsuario").value = "";
    //se puede de esta manera :var valorcaja = document.getElementById("NumeroDeUsuario");
    //valorcaja.value = " ";
    //se puede usar document.querySlector por ID solo que seria dento de parentesis llevar un signo de gato asi: ("#NumeroDeUsuario");
}


function GenerarNumeroAleatorio()
{
    var ListaNumeroSorteados = [];
    var NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    console.log(NumeroGenerado);
    console.log(ListaNumeroSorteados);
    if(ListaNumeroSorteados.includes(NumeroGenerado))
    {
        return GenerarNumeroAleatorio();
        //Esto es algo llamado recursividad, que es llamarse a si misma la funcion, en este caso para generar un numero aleatorio 
    }
    else
    {
        ListaNumeroSorteados.push(NumeroGenerado); //Aqui lo que hace es enlistar el numero generado anteriormente en la lista, para ya no volverlo a usar. 
        return NumeroGenerado;
    }

    //retornar, en este caso se refiere a que cuando se ejecute la funcion, nos va a regresar un valor. 
    //Si el numero geneardo esta incluido en la lista, se hace una operacion, sino se hace otra  
    //Al crear una variable en la parte de arriba, ya no es necesario poner tanta linea de codigo en esta funcion. con lo que pusimos ya esta bien. 
}

function funcionesiniciales()
{
    AsignarTextoElemento("h1", "Juego del numero secreto");
    AsignarTextoElemento("p", `Indica un numero del 1 al ${NumeroMaximo}`);
    NumeroAleatorio = GenerarNumeroAleatorio();
    Numerodeintentos = 1;
}
function reiniciarjuego()
{
    limpiar()
    funcionesiniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
    //Esta funcion va a hacer varias cosas, como limpiar la caja 
    //reiniciar practicamente todo
    //indicar el mensaje de inicio 
    //generar el numero aleatorio nuevamente 
    //Deshabilitar el boton de nuevo juego 
    //Inicializar el numero de intentos 
}

funcionesiniciales();
//Esto que hicimos es hacer el codigo mas corto, con esta funcion, ya tenemos para cambiar el titulo y el texto que aparece a bajo sin complicarnos tanto la vida
//En los arreglos o Array se usan corchetes estos [], para saber el ultimo numero de una lista, se usa lo siguiente 
//console.log(lista[lista.length-1]);, como se puede observar "lista", es la variable y lenght-1 es el tamaño de toda la lista menos uno, con eso sabemos el ultimo numero dle arreglo   