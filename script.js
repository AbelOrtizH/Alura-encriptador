// 1 Texto de ingreso
// 2 reemplazar vocales, espacios
//La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// 3 retornar el valor reemplazado

// Encriptado de texto
function encriptar(){
    
    document.getElementById("warning-sms").style.display = "none";
    
    let encryptedText = document.getElementById("encrypted-sms").innerHTML;

    let mapObjs = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };

    let newEncryptedText = encryptedText.replace(/a|e|i|o|u/g, function(matched) {
            return mapObjs[matched]
    });

    return newEncryptedText;

};

    




