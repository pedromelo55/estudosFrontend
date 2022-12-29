const getFlag = require('./desafioPt1')

const name = getFlag('--name')
const greeting = getFlag('--greeting')

console.log(`Olá, ${name}, ${greeting}`)