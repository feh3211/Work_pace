//string serve para deixar o código minimalista e organizado
var texto1 = "texto aleatorio"

var texto2 = "texto aleatorio"

console.log(`${texto1} a vida é um sapinho na logoa ${texto2}`)

var numero1 = 4

var numero2 = 5 

console.log(`o resultado final é: ${numero1 + numero2}`)

console.clear()

//-----------------------------------------------------------------------
//chartAt()
const string01 = "instituto Da oportunidade social"

console.log(string01);
console.log("posição 10 é a letra: " + string01.charAt(10))

const string02 = "instituto da oportunidade social"


//.length
console.log("quantidade de caractere" + string02.length)
console.clear()


//toCase low e Upper
const string03 = "instituto da oportunidade social"

const string04 = "INSTITUTO DA OPORTUNIDADE SOCIAL"


console.log("tudo em maiusculo: " + string03.toUpperCase())

console.log("tudo em minusculo: " + string04.toLowerCase()) 
console.clear()

//--------------------------------------------------------------------
//substring
var navegador= "MOZILLA"

console.log(navegador.substring(3, 7));

console.log(navegador.substring(3));

//replace: substituir uma string dentro de outra

var trocaTexto = "Bem vindo ao jogo, roblox"

var outraTroca = trocaTexto.replace("roblox", "Felipe");

console.log("Texto original: " + trocaTexto)
console.log("texto alterado: " + outraTroca)

console.clear()


//trim:
var retirandoEspacos = "        A vida é uma uva       ";

console.log(retirandoEspacos.trim())