// Selección de elementos globales
const inputText = document.getElementById("inputText");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDensencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const textoResultado = document.getElementById("texto-resultado");

// const darkMode = document.getElementById('dark-mode');
btnEncriptar.addEventListener("click", () => {
    if (inputText.value != "") {
        seccion2.classList.add("ocultar");
        seccion3.classList.remove("ocultar");
        textoResultado.textContent = encriptar(inputText.value);
    } else {
        alert("Introduzca un texto valido!");
    }
});

btnDensencriptar.addEventListener("click", () => {
    if (inputText.value != "") {
        seccion2.classList.add("ocultar");
        seccion3.classList.remove("ocultar");
        textoResultado.textContent = desencriptar(inputText.value);
    } else {
        alert("Introduzca un texto valido!")
    }
});

btnCopiar.addEventListener("click", () => {
    if (inputText.value != "") {
        copiar();
        inputText.focus();
    } else {
        alert("No hay nada para copiar")
    }
});

// Función encriptar
function encriptar(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            resultado += "ai"
        }
        else if (texto[i] == "e") {
            resultado += "enter"

        }
        else if (texto[i] == "i") {
            resultado += "imes"

        }
        else if (texto[i] == "o") {
            resultado += "ober"

        }
        else if (texto[i] == "u") {
            resultado += "ufat"

        }
        else {
            resultado += texto[i]

        }
    }

    return resultado;
}

//Función desencriptar
function desencriptar(texto) {
    let textoFinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }

        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;
}

function copiar() {
    let contenido = textoResultado.textContent;
    navigator.clipboard.writeText(contenido);
    const inputText = document.getElementById('inputText').value = "";
}




