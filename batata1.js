var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

//

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

//

const nome = 'Andrei'
{ 
    const nome = 'foda-se' // nem pega pq ja foi definida antes
}
console.log (nome)

let bronha;
console.log(typeof(bronha))

let bronhaNull = null;
console.log(typeof(bronhaNull))