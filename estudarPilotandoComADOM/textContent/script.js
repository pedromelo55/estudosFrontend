// Manipulando conteúdo
// textContent
const element = document.querySelector('h1')

element.textContent += " Olá Devs!"

console.log(element.textContent)

// innerText

element.innerText = "Olá Devs! (h1 alterado)"

// innerHTML

element.innerHTML = "Olá Devs! <small>!!!</small>"

// value
const element2 = document.querySelector('input')

console.log(element2.value)
element2.value = "outro valor"

// Manipulando elementos
// Atributos

const header = document.querySelector("header")
header.setAttribute('id', 'header')

const headerID = document.querySelector("#header")

console.log(headerID)
console.log(headerID.getAttribute('id'))
header.removeAttribute('class')