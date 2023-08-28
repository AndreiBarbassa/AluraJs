// function minhaFuncao(params) {
//     //bloco de códigos
// }

// minhaFuncao("param")

//EXPRESSAO DE FUNCAO

// const soma = function(x, y) {return x + y} // atribuiu a função a variável (nome da funcao é opcional), o que tem nome é a variavel(const)

// console.log(soma(1,2))

//diferença principal entre declaração de funcoes e expressao de funcoes: HOISTING
//funções são "listadas" no topo do arquivo.
console.log(apresentar()) // funciona mesmo fora de ordem

function apresentar() {
    return "olá";
}

console.log(soma(1,1)) // VARIAVEIS NAO FUNCIONAM FORA DE ORDEM 
const soma = function(x, y) {return x + y}

