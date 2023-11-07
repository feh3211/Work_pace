// Método forEach()
/*O método forEach() executa uma determinada função para cada um dos elementos de um array. 
Ele não é executado em elementos vazios do array. A sintaxe do método é:*/
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
console.log(`Índice: ${index}`);
console.log(`Frutas: ${item}`);
}

// Método forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
});

// Método filter
console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});
console.log(filtroIdade);

// Método find()
console.clear();
const meuArray = [
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
];

console.log(
meuArray.find((fruta) => {
return fruta.nome === 'apples';
})
);

// Outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
return valor.texto;
});
//Imprime o novo array
console.log(mapText);