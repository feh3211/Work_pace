// Função alertCookie
function alertCookie() {
    alert('Você quer um cookie');
    console.log('Você quer um cookie');
}

// Arrow Function alertSucesso
const alertSucesso = () => {
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso');
};

// Conversão de anos para dias
function anosParaDias(anos) {
    const dias = anos * 365;
    console.log(`${anos} anos é igual a ${dias} dias.`);
}

// Teste de conversão de anos para dias
anosParaDias(5);