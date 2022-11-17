// Estrutura de repetição
// for
// break - para a execeução do loop
// continue - pula a execução do momento

for(let i = 100 ; i > 0 ; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
}

// While - Quando não sabe o momento da parada

j = 0;
while(j < 10) {
    console.log(j)

    j++
}

// for... of

let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
    console.log(name)
}

// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person.name)
    console.log(person[property])
}