import React from "react";

let estilo = {listStyle: 'none', color: 'blue', fontSize: 
'67px', textAling: 'center'};

const Felipe = () => {
    return (
        <>
            <h1>Sexta-feira depressiva</h1>
            <p>Metade vai reprovar</p>
            <ul style={estilo}>
                <li>Maria Eduarda</li>
                <li>Anna Clara</li>
                <li>Leandro Jun</li>
                <li>O restante da Sala</li>
            </ul>
        </>        
    );
}

export default Felipe;