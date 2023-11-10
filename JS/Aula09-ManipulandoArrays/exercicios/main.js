//exercicio 1

// Criar o Array unidimensional com 8 posições
const array = [17, 43, 8, 4, 97, 56, 29];

// Função para verificar se um número é par ou ímpar e exibir o resultado no console.log
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

// Utilizar o método forEach para chamar a função para cada valor do array
array.forEach(verificarParOuImpar);







//exercicio 2

// Criar o Array unidimensional com 14 posições
const array = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

// Utilizar o método filter com uma arrow function para filtrar valores entre 20 e 80
const valoresEntre20e80 = array.filter((valor) => valor > 20 && valor < 80);

// Exibir o array resultante
console.log(valoresEntre20e80);