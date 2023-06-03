//Encriptar 
// 1 Texto de ingreso - Seleccionar valor del textarea
// 2 Ocultar background img + informacion de mensaje encriptado
// 3 ejecutar la funcion de encriptar texto
// 4 devolver el texto encriptado al area de mensaje 
// 5 mostrar el boton de copiar
// 6 logica del boton copiar
//------------------------------------------------
// Condiciones -- reemplazar vocales, espacios
//La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// 3 retornar el valor reemplazado
//------------------------------------------------
//Desencriptar
// 1 Seleccionar valor del textarea
// 2 Ocultar background img + informacion de mensaje encriptado
// 3 ejecutar la funcion de desencriptar texto
// 4 devolver el texto desencriptado al area de mensaje 
// 5 mostrar el boton de copiar
// 6 logica del boton copiar

// Encriptado de texto

function encriptar(){
    let frase = document.querySelector(".textarea").value.toLowerCase();
    //i -> tome en cuenta mayusculas y minisculas
    //g -> tome toda la linea o la oracion
    //m -> tome encuenta multiples lineas
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.querySelector(".mensaje").innerHTML = textoEncriptado;
};


function desencriptar(){
    let frase = document.querySelector(".textarea").value.toLowerCase();
    //i -> tome en cuenta mayusculas y minisculas
    //g -> tome toda la linea o la oracion
    //m -> tome encuenta multiples lineas
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.querySelector(".mensaje").innerHTML = textoEncriptado;
};

function copiar(){
    let contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy")
}


