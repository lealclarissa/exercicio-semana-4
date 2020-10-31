// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884 - Vou testar este
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

const cartao = [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 4]

///1ª etapa: retire o último dígito do número. Ele é o verificador;

const  verificador = cartao.pop()
  console.log(`Esta é a array verificador: ${verificador}`) // [4]
  console.log(`Esta é a array cartao após o pop: ${cartao}`) // [5,5,5,5,6,6,6,6,7,7,7,7,8,8,8]

///2ª etapa: escreva os números na ordem inversa;

const cartaoInvertido = cartao.reverse()
  console.log(`Esta é a array cartaoInvertido: ${cartaoInvertido}`) // [8,8,8,7,7,7,7,6,6,6,6,5,5,5,5]

///3ª etapa: multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;

// Multiplicar por 2 todos os valores do indexes impares. Após isto, subtrair 9 dos resultados maiores que 9.
       //// array mul: todos os ímpares*2 / array maiorQueNove: todos os mul>9  // array indexespares

const mult = []
const maiorQueNove = []
const indexPares = []

function somarTudo(arr) {
  for (let i = 0; i < cartaoInvertido.length; i++) {
    if (cartaoInvertido[i % 2 === 0] > 9) {
      const mult = cartaoInvertido.filter(item => item * 2)
      console.log(`Array de todos os indexes pares: ${mult}`)
            
    } else if ((cartaoInvertido[i%2 === 0]*2) > 9) {
      const maiorQueNove = cartaoInvertido.map(item => item - 9).push()
      console.log(`Array subtração dos resultados maiores que nove: ${maiorQueNove}`)
        
    } else if (cartaoInvertido [i % 2 !== 0]) {
      const indexPares = cartaoInvertido.map(item => item).push()
      console.log(`Array de todos os indexes pares: ${indexPares}`)
    }
  } 
}

somarTudo(cartaoInvertido)



// 4. Some todos os números;

const auxiliar = mult.concat(maiorQueNove, indexPares) 
const somaFinal = auxiliar.reduce((acumulador, itemAtual) => acumulador + itemAtual)
console.log(`A soma de todos os valores ímpares é: ${somaFinal}`)

// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;

let total = somaFinal[0] + verificador
console.log(`Este é a soma total:  ${total}`)


// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0).

if (total % 10 === 0) {
  return `Seu número de cartão é valido!`
  
} else {
  return `Desculpe, o número de seu cartão de crédito é inválido!`
}