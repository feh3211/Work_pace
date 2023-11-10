//querrySelectorAll
var pipoca = document.querySelectorAll('p');
//acesse todos os paragrafos e mude a cor deles
let c = 0;
while (c < pipoca.length) {
    pipoca[c].style.color = 'purple'
    c++
}


var j = document.querySelector('p.exemplo')
j.innerHTML = 'foi alterado aqui o texto com lagrimas dos alunos'

j.style.color = 'blue'



var y = document.querySelector('#exemplo2').style.color = 'red'







//eventos
var entradaNome;
function Nome() {
    entradaNome = prompt('Insira Nome');
    var mostrarNome = document.querySelector('#mostrarNome');
    console.log(entradaNome);
    mostrarNome.innerHTML = `olá ${entradaNome} bem vindo a academia`;
}





//addEventlist