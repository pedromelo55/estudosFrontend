// Navegando pelos elementos
// parentNode parentElement
const element = document.querySelector('h1')

console.log(element.parentNode)

// childNodes children
const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)

// firstChild firstElementChild
console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)


const elem = document.querySelector('header')
// nextSibling nextElementSibling
console.log(elem.nextSibling)
console.log(elem.nextElementSibling)

const eleme = document.querySelector('body script')
// previousSibling previousElementSibling
console.log(eleme.previousSibling)
console.log(eleme.previousElementSibling)