function encriptar(){
    let texto = document.getElementById ("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
                    .replace(/a/gi,"scy")
                    .replace(/e/gi,"ref")
                    .replace(/i/gi,"lif")
                    .replace(/o/gi,"hod")
                    .replace(/u/gi,"per");
 if(document.getElementById ("texto").value != 0){
        document.getElementById ("texto").value = textoCifrado;
        document.getElementById("titulo_mensaje").textContent = "Texto encriptado con exito";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("muneco").src = "./img/encriptado.jpg";
     }
     else{
        document.getElementById("muneco").src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar"
        alert("DEBES INGRESAR ALGUN TEXTO");
 }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/scy/gi,"a")
        .replace(/ref/gi,"e")
        .replace(/lif/gi,"i")
        .replace(/hod/gi,"o")
        .replace(/per/gi,"u");
    
        if (texto.length !=0){
            document.getElementById ("texto").value = textoCifrado;
        document.getElementById("titulo_mensaje").textContent = "Texto desencriptado con exito";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("muneco").src = "./img/desencriptado.jpg";
        } else {
            document.getElementById("muneco").src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar"
        alert("DEBES INGRESAR ALGUN TEXTO")
        }
}