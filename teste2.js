const nome = "Andrei";
const idade = 27;
const bebidaMaior = 'cerveja';
const bebidaMenor = 'água com gás';

const pedido = `Olá, meu nome é ${nome} e eu gostaria de pedir ${idade >= 18 ? bebidaMaior : bebidaMenor}.`
const templateSemVar = `Olá, meu nome é e eu gostaria de pedir.`

console.log(pedido, templateSemVar)