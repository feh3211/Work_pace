function calcularNovoSalario() {
    var salarioAtual = parseFloat(document.getElementById('salarioAtual').value);

    
    if (isNaN(salarioAtual)) {
        alert("Por favor, insira um valor válido para o salário.");
        return;
    }

   
    var aumento = salarioAtual * 0.17;

    var reajusteAnual = 215;

    var novoSalario = salarioAtual + aumento + reajusteAnual;

    document.getElementById('novoSalario').textContent = "R$ " + novoSalario.toFixed(2);
}