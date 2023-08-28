// let x = '';
// console.log(x);
// x = 'oi';
// console.log(x)

// let é REATRIBUÍVEL


//////// 3 formas de escrever funções:

//////DECLARAÇÃO DE FUNÇÃO:

/// 1) declaração:
                        //string
function imprimirTexto(texto) {
    console.log(texto)
}

/// 2) executa a função uma ou mais vezes

imprimirTexto(soma(1,1));
// imprimirTexto('outro texto');
// imprimirTexto(2190);

    function soma(x, y) {
    // outros códigos
    //varios console.log()....
      return x + y;
    //Aqui nao será executado
}

// console.log(soma(1, 1));