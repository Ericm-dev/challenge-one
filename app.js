
// Selección de elementos globales
const divResultado = document.getElementById('div-resultado');
const ocultarElementos = document.getElementById('ocultar-elementos');
const darkMode = document.getElementById('dark-mode');

// Evento en el boton encriptar
const btnEncriptar = document.getElementById('encriptar').addEventListener('click', (e) => {
    const inputText = document.getElementById('inputText').value

    if (!inputText) {
        alert('Debe introducir alguna palabra en el campo');
    } else {
        ocultarElementos.classList.add('ocultar')
        resultadoDom(encriptar(inputText));
    }
});

// Evento en el boton desencriptar
const btnDesencriptar = document.getElementById('desencriptar').addEventListener('click', (e) => {
    const inputText = document.getElementById('inputText').value;

    if (!inputText) {
        alert('Debe introducir alguna palabra en el campo');
        return

    } else {
        ocultarElementos.classList.add('ocultar')
        resultadoDom(desencriptar(inputText));
    }
});

// Creación de funciones
function encriptar(texto) {
    let resultado = '';
    for (var i = 0; i < texto.length; i++) {
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

function resultadoDom(texto) {
    divResultado.classList.remove('ocultar')
    divResultado.innerHTML =
        `
            <div class='contenedor-r'>
                <p class='resultado-parrafo' id='texto' >${texto}</p>
            </div>
            <button class='btn' id='copiar'>Copiar</button>
            
        `
    document.getElementById('copiar').addEventListener('click', (e) => {
        let contenido = document.getElementById('texto').textContent;
        navigator.clipboard.writeText(contenido);
        const inputText = document.getElementById('inputText').value = "";
    });
}




