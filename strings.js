const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // conta a partir do zero
console.log(escola.charCodeAt(3)) // vai mostrar valor da tabela unicode (asci)
console.log(escola.indexOf('3'))

console.log(escola.substring(1))//ignora o caracter zero e mostra a partir do 1
console.log(escola.substring(0 ,3)) //mostra a partir do 0 e mostra 3 caracteres (definido no 2º parametro)

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))