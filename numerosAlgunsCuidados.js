console.log(7/0) //o console ira exibir Infinity (diferente de outras linguagens onde dividir por zero da erro
console.log("10" / 2) //se for um valor numérico o JS converte para numero caso contrario ira exibir NaN (Not a Number)
console.log('3' + 2) // ira concaternar pois considera primeiro a string
console.log('3' - 2) // como o sinal negativo não tem função para a string, o JS vai converter a string em numero e fazer a conta
console.log("Show!" *2) // diferente de algumas linguagens vai mostrar NaN
console.log(0.1 + 0.7) /* ira exibir um resultado que não é oito, 
                        * uma imprecissão (por conta da especificação do JS com números de ponto flutuante)
                        */
//console.log(10.toString()) // vai ocasionar erro de excessão,a maneira correta abaixo
console.log((10.345).toFixed(2))