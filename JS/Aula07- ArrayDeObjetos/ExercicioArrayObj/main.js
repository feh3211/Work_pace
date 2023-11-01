var alunos = [
{
    nome: "Ana", 
    idade: 17,
    nota: 8,
    ano: "2B",
},
{
    nome: "Bruno", 
    idade: 16,
    nota: 6,
    ano: "2C",
    
},
{
    nome: "Veronica", 
    idade: 16,
    nota: 9,
    ano: "2C",
    
},
{
    nome: "Marta", 
    idade: 15,
    nota: 5,
    ano: "3C",
    
},
{
    nome: "Brenno", 
    idade: 19,
    nota: 6,
    ano: "3C",
    
},
{
    nome: "Maria", 
    idade: 14,
    nota: 4,
    ano: "1F",
    
},
];

console.log(alunos);

// Retorne todas as informações do aluno Bruno
const alunoBruno = alunos.find(aluno => aluno.nome === "Bruno");
console.log(alunoBruno);

// Retorne apenas a nota da Maria
const notaMaria = alunos.find(aluno => aluno.nome === "Maria").nota;
console.log(notaMaria);

// Retorno todo o array de objeto em formato JSON
const jsonAlunos = JSON.stringify(alunos);
console.log(jsonAlunos);





/*
var voce = [
    {
        nome: "Felipe",
        idade: 22,
        ano: 2001,
    },
    {
        nome: "Monique",
        idade: "30",
        ano: 1995,
        sexo: "femino",
    },
]

const id = voce.find(id => id.nome === "Felipe");
console.log(id);

const id3 = voce.find(id3 => id3.nome === "Monique");
console.log(id3);

*/

