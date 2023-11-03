const alunos = [
    { nome: "Ana", 
    idade: 17, 
    nota: 8, 
    ano: "2B" 
},
    { nome: "Bruno",
    idade: 16,
    nota: 6,
    ano: "2C" 
},
    { nome: "Veronica",
    idade: 16,
    nota: 9,
    ano: "2C" 
},
    { nome: "Marta",
    idade: 15,
    nota: 5, 
    ano: "3C" 
},
    { nome: "Brenno", 
    idade: 19, 
    nota: 6, 
    ano: "3C" 
},
    { nome: "Maria", 
    idade: 14, 
    nota: 4, 
    ano: "1F" 
}
];

// Retornando todo o array de objetos 'alunos'
console.log(alunos);

// Retornando todas as informações do aluno 'Bruno'
const alunoBruno = alunos.find(aluno => aluno.nome === "Bruno");
console.log(alunoBruno);

// Retornando apenas a nota da aluna 'Maria'
const notaMaria = alunos.find(aluno => aluno.nome === "Maria").nota;
console.log(notaMaria);

// Retornando todo o array de objeto em formato JSON
const alunosJSON = JSON.stringify(alunos);
console.log(alunosJSON);