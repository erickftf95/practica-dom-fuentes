// EJERCICIO 1: Doble de un número

function calcularDoble() {
    const input = document.getElementById('input-numero').value;
    const resultado = document.getElementById('resultado-doble');

    if (input === "") {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    const numero = parseFloat(input);
    const doble = numero * 2;
    resultado.textContent = `El doble es: ${doble}`;
}


// EJERCICIO 2: Número palíndromo

function verificarPalindromo() {
    const input = document.getElementById('input-palindromo');
    const resultado = document.getElementById('resultado-palindromo');
    
    const texto = input.value.trim();

    if (texto === "") {
        resultado.textContent = "Por favor, ingresa un valor.";
        resultado.style.color = "#dc2626";
        return;
    }

    // Invertir el texto usando split, reverse y join
    const invertido = texto.split('').reverse().join('');

    if (texto === invertido) {
        resultado.textContent = `¡Sí! El número "${texto}" es un palíndromo.`;
        resultado.style.color = "#16a34a"; // Verde
    } else {
        resultado.textContent = `No, el número "${texto}" no es un palíndromo.`;
        resultado.style.color = "#dc2626"; // Rojo
    }
}


// EJERCICIO 3: Contador automático

let contador = 0;

document.addEventListener('DOMContentLoaded', () => {
    const btnIncrementar = document.getElementById('btn-incrementar');
    const displayContador = document.getElementById('contador-valor');

    if (btnIncrementar) {
        btnIncrementar.addEventListener('click', () => {
            contador++;
            displayContador.textContent = contador;
        });
    }
});


// EJERCICIO 4: Lista de tareas (con validación y appendChild)

function agregarTarea() {
    const input = document.getElementById('input-tarea');
    const textoTarea = input.value.trim();

    // Validar que no esté vacío
    if (textoTarea === "") {
        alert("La tarea no puede estar vacía.");
        return;
    }

    // Crear elementos de la lista de forma dinámica
    const li = document.createElement('li');
    li.textContent = textoTarea;

    const lista = document.getElementById('lista-tareas');
    lista.appendChild(li);

    // Limpiar input
    input.value = "";
}