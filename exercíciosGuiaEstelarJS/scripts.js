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
    // poderia ter colocado esses for em uma função de somatória
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
        console.log(`Saldo positivo: ${sum - sum2}`) // se usar uma variável para o total dá para colocar um toFixed(2)
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

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")
    
    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Tipo de unidade não identificado")
    }

    // Fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Fluxo alternativo, C -> F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try { 
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
} catch{
    console.log(error)
}