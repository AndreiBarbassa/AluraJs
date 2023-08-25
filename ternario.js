// funciona como um if else
const idadeMinima = 18
const idadeCliente = 19

// if (idadeCliente >= 18) {
//     console.log("cerveja")
// } else {
//     console.log("suco")
// }

//          condição                        true         false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
// 3 comparadores >= | ? | :

// para varias opções é boa prática usar if mesmo;
// para opções mais curta, é boa prática usar o ternário.