
//exercicio 2

// Criar o Array unidimensional com 14 posições
const array = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

// Utilizar o método filter com uma arrow function para filtrar valores entre 20 e 80
const valoresEntre20e80 = array.filter((valor) => valor > 20 && valor < 80);

// Exibir o array resultante
console.log(valoresEntre20e80);