document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.B_12');

    buttons.forEach(function(button, index) {
        button.style.border = '2px solid #D9BC66';
        button.style.padding = '.5rem';
        button.style.backgroundColor = '#BFBFBF';
        button.style.margin = '.7rem';

        button.onclick = function() {
            if (index === 0) {
                adicionarImagemECor();
            } else if (index === 1) {
                saudacaoUsuario();
            } else if (index === 2) {
                exibirTabuada();
            }
        };
    });

    function adicionarImagemECor() {
        var body = document.body;
        var img = document.createElement('img');
        img.src = 'C:\Users\felip\OneDrive\Documentos\Felipe Soares Nepomuceno\Work_pace\JS\Aula12-DOM-parte2\exercicio\img';
        body.appendChild(img);
        body.style.backgroundColor = '#262525';
    }

    function saudacaoUsuario() {
        var nome = prompt('Digite seu nome:');
        if (nome !== null && nome !== "") {
            alert('Olá ' + nome + '! Bem-vindo à nossa academia');
        }
    }

    function exibirTabuada() {
        var numero = prompt('Digite um número:');

        if (numero === null || numero === "") {
            return;
        }

        numero = parseInt(numero);

        var resultado = 'Tabuada do ' + numero + ':<br>';

        for (var i = 1; i <= 10; i++) {
            resultado += numero + ' x ' + i + ' = ' + (numero * i) + '<br>';
        }

        var divResultado = document.createElement('div');
        divResultado.innerHTML = resultado;

        button.parentNode.insertBefore(divResultado, button.nextSibling);
    }
});
