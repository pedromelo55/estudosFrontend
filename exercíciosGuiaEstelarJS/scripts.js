/*
    Transformar notas escolares

    Crie um algoritmo que transforme as nota do sistema
    numérico pra sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F
*/

function transformarNota(nota) {
    let grade

    if (nota >= 90 && nota <=100) {
        return grade = "A"
    }
    else if (nota >= 80 && nota <= 89){
        return grade = "B"
    }
    else if (nota >= 70 && nota <= 79){
        return grade = "C"
    }
    else if (nota >= 60 && nota <= 69){
        return grade = "D"
    }
    else if (nota >= 0 && nota <= 59){
        return grade = "F"
    }
    else {
        return grade = "Nota inválida"
    }
}

console.log(transformarNota(78))

/////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Sistema de gastos faimilar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo
*/

const objeto = {
    receitas: [20, 300, 4000, 55.50],
    despesas: [260.49, 150, 100, 1000]
}

function calcularReceita (receitas, despesas){
    let sum = 0
    let sum2 = 0
    for (let i = 0 ; i < receitas.length ; i++){
        sum += receitas[i]
    }
    for (let j = 0 ; j < despesas.length ; j++){
        sum2 += despesas[j]
    }

    if( sum - sum2 < 0){
        console.log(`Saldo negativo: ${sum - sum2}`)
    }
    else{
        console.log(`Saldo positivo: ${sum - sum2}`)
    }
}

calcularReceita(objeto.receitas, objeto.despesas)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para 
    outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/


function temperature(string) {
    let tempF
    Number(string)
    tempF = string * 9/5 + 32
    return tempF
}

console.log(temperature(24))