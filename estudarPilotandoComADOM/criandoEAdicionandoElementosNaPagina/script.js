// Criando e adicionando elementos

// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"

const div2 = document.createElement('div2');
div2.innerText = "Tchau Devs!"

// append prepend
const body = document.querySelector('body')

body.prepend(div)
body.append(div2)

/*
insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script)
body.insertBefore(div, script)

Simulação de um "insertAfter"
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)
*/