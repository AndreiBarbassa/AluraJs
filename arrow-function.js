// =>

function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//Arrow function:
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2

//NAO PODE SER NOMEADA, VEM COM O NOME DA VARIAVEL ANTERIOR
//SE TIVER MAIS DE UMA LINHA É NECESSÁRIO USAR {} E RETURN:

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) { // || significa ou
        return "Somente números de 1 a 9";
    } else {
        num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão (nao da pra chamar antes de definir)

//vantagem em orientação de objetos
