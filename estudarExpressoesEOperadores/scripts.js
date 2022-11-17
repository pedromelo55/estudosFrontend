/*
    Expressões e Operadores

    - Expressions
    - Operators
        Binary
        Unary
        Ternary
*/

/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Mayk')
name.surname = "Brito"
let age = new Number(23)
console.log(name.surname, age)
let date = new Date('2020-12-01')
console.log(date.__proto__)

/*
    Operadores unários
    typeof
    delete
*/

console.log(typeof "Pedro")

const person = {
    name: "Mayk",
    age: 25
}

delete person.age
console.log(person)

// Operadores Aritméticos

// multiplicação * 
console.log(3 * 5)
// divisão / 
console.log(12 / 2)
// soma +
console.log(34 + 67)
// subtração -
console.log(34 - 23)
// resto da divisão %
let remainder
remainder = 11 % 9
console.log(remainder)
// incremento ++
let increment = 0
console.log(increment)
console.log(++increment)
// decremento --
let decrement = 0
console.log(--decrement)
// exponencial **
console.log(3 ** 3)

// Grouping operator ( )
let total = (2 + 3) * 5
console.log(total)

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a
console.log( two == 1 )
console.log( one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")


let one1 = 1
let two2 = 2
// === estritamente igual a
console.log( one1 === "1")
console.log( one1 === 1)
// !== estritamente diferente de
console.log( two2 !== "2" ) 
console.log( two2 !== 2 )

// > maior que, >= maior ou igual a, < menor que, <= menor ou igual a

// Operadores de Atribuição (Assignment)
let x

console.log(x)

// assignment
x =1
// addition assignment
x += 2
// subtraction assignment
x -= 1
// multiplication assignment
x *= 2
// division assignment
x /= 2
// remainder assignment
    // x %= 2
// exponetation assignment
x **= 2
console.log(x)

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao)

// Operador Condicional (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value 2

// Exemplos

// Café da manhã top
let ovo = true
let bacon = true

const niceBreakfast = ovo && bacon ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18

let idade = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// Operador de String (String operator)

// comparison (comparação)
// console.log('a' == 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet')

/*
    Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)

/*
    FALSY 
    Quando um valor é considerado false em contextos onde
    um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( 0 ? 'verdadeiro' : 'false')

/*
    Truthy
    Quando um valor é considerado true em contextos onde um
    booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log( 1 ? 'verdadeiro' : 'falso')

/*
    Operator precedence
    Precedência de operadores
* grouping
* negação e incremento
* multiplicação e divisão
* adição e subtração
* relacional
* igualdade
* AND
* OR
* condicional
* assignment (atribuição)
*/