// Funções
// exemplo: isso pode ser usado deixar o site em modo escuro
// exemplo,: você pode colocar uma imagem clicavel para fazer o dowload de algum arquivo.
// serve para deixar o seu código organizado
             //    4         5
function somaNumeros(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
   }
   let x = somaNumeros(4, 5, 1503,); // Chamada da função addNums
   console.log(x);

   let soma = somaNumeros(10, 10, 3); // Chamada da função myFunc
   console.log(" Essa é a variavel soma " + soma);

   console.clear()

   //Arrow Function
   function myFunc(num1, num2) {
    return num1 * num2;
   }

   const hello = () => {
    return 'Olá Arrow Function!';
   };

   console.log(hello())
   
   console.clear()

   //Função com IF
   //num % 2 == 0 Par  num % 2 == 1 impar
   function imparPar(num){
    if(num % 2 == 0){
        return `O numero ${num} é Par` 
    }else if(num % 2 == 1){
        return `O numero ${num} é Impar`
    }else{
        return `Não consegui identificar se é mar ou Par`;
    }
   }

   let recebePrimeiroNumero = imparPar(5)
   console.log(recebePrimeiroNumero)

   let reberSegundoNumero = imparPar(5.75)
   console.log(recebeSegundoNumero)

   var contexto = 5.75 % 2;
   console.log(contexto)

   console.clear()

