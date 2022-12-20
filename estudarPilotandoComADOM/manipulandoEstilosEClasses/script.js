// Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3D2"

// classlist
const element2 = document.querySelector('body')

element2.classList.add('active', 'green')
console.log(element2.classList)
// element.classList.remove('active')
element2.classList.toggle('active')