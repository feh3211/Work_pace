class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupanca() {
        const taxa = 0.015; // 1,5% ao mês
        const novoSalario = this.salario * (1 - taxa);
        console.log(`Conta Poupança - Novo salário de ${this.nome}: R$${novoSalario}`);
    }

    contaCorrente() {
        const taxa = 0.036; // 3,6% ao mês
        const novoSalario = this.salario * (1 - taxa);
        console.log(`Conta Corrente - Novo salário de ${this.nome}: R$${novoSalario}`);
    }

    contaEstudante() {
        const taxa = 0.012; // 1,2% ao mês
        const novoSalario = this.salario * (1 - taxa);
        console.log(`Conta Estudante - Novo salário de ${this.nome}: R$${novoSalario}`);
    }
}

// Instanciar 3 objetos da classe ContaBancaria
const cliente1 = new ContaBancaria('Cliente1', 25, 3000, 'Feminino', '001', '12345-6', 'Poupança');
const cliente2 = new ContaBancaria('Cliente2', 30, 5000, 'Masculino', '002', '23456-7', 'Corrente');
const cliente3 = new ContaBancaria('Cliente3', 20, 2000, 'Feminino', '003', '34567-8', 'Estudante');

// Imprimir informações e o novo salário de cada cliente
cliente1.contaPoupanca();
cliente2.contaCorrente();
cliente3.contaEstudante();