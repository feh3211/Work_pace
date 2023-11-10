//getElementById   (obter elemento por ID)  chama o elemento, ou id já existente dentro do html
var paragrafo = document.getElementById("paragrafo01");

paragrafo.style.color = 'yellow'
paragrafo.style.backgroundColor = 'black'
paragrafo.style.textAlign = 'right'
paragrafo.style.margin = '50px'





//getElementsByClassName   (obter elementos por nome de classe)  chama o elemento com class   
var buscarClasse = document.getElementsByClassName("item")
//ou     posição                  
for(let c = 0; c <= buscarClasse.length; c++){
    buscarClasse[c].style.backgroundColor = 'green';
}




//getElementsByTagName   (obter elementos por TagName)
var acessandoParagrafos = document.getElementsByTagName("p")
console.log(acessandoParagrafos)
//percorra os paragrafos e altere a cor dos textos
for(var i = 0; i <= acessandoParagrafos.length; i++){
    acessandoParagrafos[i].style.color = "red";
}





//getElementsByName    (obter elementos por nome)
var acessaName = document.getElementsByName("name_item")
console.log(acessaName)
// percorra o array e altere apenas os itens que tem a posição par
for (var f = 0; f <= acessaName.length; f++) {
    if (acessaName[f] % 2 == 0) {
        acessando[f].style.color = 'red';
    }
}




// Remover um elemento no DOM
let item2 = document.getElementByld('item2');
item2.remove();

let lista = document.getElementById('lista');
let item5 = document.getElementById('item5')

lista.insertBefore(item2, item5.nextSibling)





var retiraEstilo = document.getElementById("messi");
retiraEstilo.style.listStyle = "none"