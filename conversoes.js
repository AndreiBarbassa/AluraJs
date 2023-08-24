//tipo de dados
//booleanos

// conversão implicita (meio bosta)
const numero = 20;
const numeroString = '20';
console.log(numero === numeroString)
console.log(numero == numeroString)
console.log(numero + numeroString) // transformou o numero em string 

//console.log (numero1) não vai rodar pq a const foi declarada abaixo (line 25)

// conversão explicita
//Number()
//String()

console.log(numero + Number(numeroString)) //transformação de String em número
const numeroString2 = Number('20') // outra forma

//node conversoes.js

const numeroLetra = Number("20a")
console.log (numeroLetra) //Retorna NaN (not a number)

const numero1 = 123
const texto = 'Alura'

console.log(numero1.toString()) // toString é outra forma de converter para string.
// console.log(texto.toNumber()) // não funciona para number



let usuarioConectado = false
console.log(String(usuarioConectado)) // conversão de boolean para string.
console.log(usuarioConectado.toString()) // conversão de boolean para string.
console.log(Number(usuarioConectado)) // conversão de boolean para número. false = 0, true = 1

// outro tipo de conversão para numeros é colocando o operador + antes; notar que é possivel fazer operações limitadas; no caso da exponenciação não é necessário colocar o operador + antes dos numeros, como se nao fosse necessário fazer a conversão e ocorresse um tipo de converção implicita no código:

let altura = '5'
let largura = '60'

console.log(largura ** altura) 

// não é boa prática fazer correções implicitas.