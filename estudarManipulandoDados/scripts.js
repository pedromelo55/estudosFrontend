// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))


// Manipulando Strings e Números

// Transfrome letras minúsculas em maiúsculas. Faça o contrário disso também

let phrase = "Programar é muito bacana!"
console.log(phrase.toUpperCase())

let phrase2 = "PROGRAMAR É MUITO BACANA!"
console.log(phrase2.toLowerCase())

// Manipulando Strings e Arrays

/*Separe um texto que contem espaços em um novo array onde cada palavra é uma posição do array.
Depois disso, transforme o array em um texto e onde eram espaços, coloque _ */

let phrase3 = "Eu quero viver o Amor!"
console.log(phrase3)
let myArray = phrase3.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Manipulando Strings
// Verificar se o texto contém a palavra Amor

let phrase4 = "Eu quero viver o Amor!"
console.log(phrase4.includes("Amor"))

// Manipulando arrays
// Criar array com construtor

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// Contar elementos de um array
console.log("A quantidade de elementos nesse novo array é: " + ["a", "b", "c"].length)

// Tranformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

//Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
console.log(techs.push("node.js"))

//adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))

// remover 1 ou mais itens m qualquer posição do array
techs.splice(1, 1)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')