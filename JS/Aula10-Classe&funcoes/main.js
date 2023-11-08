//classes 
class celular {
    constructor(marca, modelo, cor, memoria, meriaRam){
        //atributos:
        this.marca = "pipoca";
        this.modelo = "modelo";
        this.cor = "cor";
        this.memoria = "memoria";
        this.meriaRam = "memoriaRam"
    }

    ligar(){//metodos
        console.log("Ligando o celular......")
    }
    
    desligar(){
        console.log("Desligando.......")
    }
    
    pesquisa(){
        console.log("Pesquisando........")
    }
}

//instanciar classe          "criar cópia do que já existe"
var motorola = new celular();
console.log(motorola.cor = "amarelo")
console.log(motorola.marca = "nokia 1956")
console.log(motorola.memoria = "56")
console.log(motorola.memriaRam = "12")
console.log(motorola.modelo = "tijolão")

var motorola = new celular("amarelo","nokia 1956", "56", "12", "tijolão")
console.log(motorola)
console.log(motorola.desligar)

var positivo = new celular("positivo", "jubileu", "preo", "8GB", "242mb")
console.log(positivo)