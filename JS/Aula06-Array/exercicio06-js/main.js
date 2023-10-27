// Unidimensional
var informacao = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];
console.log(informacao[6]);
console.log("Array completo: ", informacao);
console.log("Tamanho do Array:", informacao.length);

let receba = informacao.toString();
console.log(receba);

let textJoin = informacao.join("/");
console.log(textJoin);

let colocandoInicio = informacao.unshift("IOS");
console.log(informacao);
console.log(colocandoInicio);
//--------------------------------------------------------------------------------------------------------------
//Bidimensional
var matrix = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

console.log("Array completo: ", matrix);
console.log("Tamanho do Array:", matrix.length);
console.log(matrix[2][1]); // 2013

delete matrix[1][2]; // removendo "JS"

// Inserindo "JavaScript" no lugar de "JS"
matrix[1][2] = "JavaScript";
console.log("Array completo após a substituição: ", matrix);

// Removendo "Java"
delete matrix[2][2]; 
console.log("Array após a remoção de 'Java': ", matrix);

//Insere a informação pipoca no final do array;
matrix.push(["pipoca"]);

console.log("Array após a inserção de 'pipoca': ", matrix);