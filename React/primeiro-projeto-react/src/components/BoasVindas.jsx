import React from 'react';

function NomeAluno (props){
    return <h1>Seja bem vindo {props.name}</h1>
}

const mensagem = () => {
    return (
        <NomeAluno name="Felipe" />
    )
}

export default mensagem;