let n = 5


for(index = 1; index <= n; index += 1){
    let conteudoDaLinha = "*";
    let linha = conteudoDaLinha.repeat(index)
    
    console.log(linha)
    if( index === n){
        break;
    }
}


//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****