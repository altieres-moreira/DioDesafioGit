const peso1 = 1.0 //testar com 1.1
const peso2 = Number ("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 =9.871
const avaliacao2= 6.871

const total = avaliacao1 * peso1 +avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed serve para determinar quantas casas decimais serão mostradas

console.log(media.toString()) // toString serve para converter o valor para String


console.log(media.toString(2)) // toString(2) o 2 entre parenteses serve para converter o valor para binario
console.log(typeof media)
console.log(typeof Number)

//(typeof  nomeDaVariavel) serve para mostrar no console o tipo da variavel