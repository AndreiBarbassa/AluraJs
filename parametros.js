// parametros de função

function soma(parametro1, parametro2) {
    return parametro1 + parametro2;
}

console.log(soma("argumento1 ", "argumento2"))
// console.log(soma("Olá, meu nome é ", "Andrei", 'ok', 9041996)) // vai ignorar os parâmetros nao definidor, nesse caso o 3 e o 4.
// console.log(soma(2.4, 123))
// console.log(soma(-900, 400))

// ordem dos parametros:

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, minha idade é ${idade}`;
}

// console.log(nomeIdade("Andrei", 27))
// console.log(nomeIdade(27, "a ordem importa, imbecil"))

                    // se nao receber nada, vai retornar os valores de numero1 = 1 e numero 2= 2
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2    
}
                            //2         //6
console.log(multiplica(soma(2, 0),soma(3, 3)))
console.log(multiplica(soma(4, 5)))
console.log(multiplica())



//boa pratica é nao usar muitos argumentos em uma mesma função e sim quebrar o código em varias outras funções menores.

// função se retorno e sem parametro:
function cumprimentar(){
    console.log('oi gente!')
}
   
cumprimentar()

//função sem retorno, com parâmetro;
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoa('Helena')

//função com retorno e sem parametro:
function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”