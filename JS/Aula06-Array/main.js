//array unidimensional 
//            -  0   1   2   3    4   5    6    7
var numeros = [32, 58, 111, 44, 88, 989, 565, 30]
console.log(numeros)
console.log(numeros[7])

/*console.log("Antes: " + numeros)
numeros[3] = 'hora do lanche'
console.log("Depois: " + numeros)*/

//--------------------------------------------------------------
//array bidimensional
var matrix = [
    ["Icarly", 2011,  10], //0
     // 0        1      2
    ["Os Fet de EverlyPace" ,2009, 10], //1
     // 0                      1    2   
    ["Doug", 1999, 8.7] // 2
]    // 0      1     2     
console.log(matrix)
console.log(matrix[0][2]) // 
console.log(matrix[2][1]) // 
console.clear()

//_____________________________________________________________
//transformar Array em stryng:
var numArray = [2, 3, 6, 7, 45, 86]

console.log(numArray)
let receba = numArray.toString()

console.log(receba)

//-------------------------------------------------------------
//Metodo join *** "separador"
let = textJoin = numArray.join("***")
console.log(textJoin)

//-------------------------------------------------------------
//Retornar o tamanho do array   1  2  3  4   5   6
console.log(numArray.length) //[2, 3, 6, 7, 45, 86]

//-------------------------------------------------------------
//pop: (retira o ultimo elemento do Array)
       //variavel         //element
 let retiraUltimoElemento = numArray.pop()
console.log(retiraUltimoElemento)
//agora se colocar:
console.log(numArray)//ele retira o ultimo elemento

//------------------------------------------------------------
//push() adiciona um array no final do elemento.
let novaInformacao = numArray.push("Kiwi")
console.log(numArray)
console.log(novaInformacao)

//-------------------------------------------------------------
//shift remove o elemento do inicio 
let retiraInicio = numArray.shift()
console.log(numArray)
console.log(retiraInicio)

//-------------------------------------------------------------
//unshift() insere um elemento no início do array 
let inserindoIncio = numArray.unshift("pipoca")
console.log(numArray)
console.log(inserindoIncio)

//-------------------------------------------------------------
//delete
 console.log(numArray)
 delete numArray(45)
 console.log(numArray)