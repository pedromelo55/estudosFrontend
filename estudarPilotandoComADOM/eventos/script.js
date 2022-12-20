// EVENTOS

function print() {
    console.log('print')
}

// eventos de teclado
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}


const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', print)

// h1.onclick = print /*Essa maneira so executa a última que encontrar*/


/* Executar 2

const h1 = document.querySelector('h1');
h1.addEventListener('click', print)

function print() {
    console.log('print')
}

h1.addEventListener('click', function) {
    console.log('outro momento')
}


*/