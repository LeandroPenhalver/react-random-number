import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
    const[randomNumber, setRandomNumber] = useState(0);

    function generateNumber(){
        setRandomNumber(Math.floor(Math.random() * (100-1) + 1));

        var red = Math.floor(Math.random() * (255-1) + 1);
        var green = Math.floor(Math.random() * (255-1) + 1);
        var blue = Math.floor(Math.random() * (255-1) + 1);

        document.getElementsByTagName('MAIN')[0].style.backgroundImage = 'linear-gradient(141deg, rgb('+red+','+green+','+blue+') 0%, rgb('+green+','+red+','+blue+') 51%, rgb('+blue+','+green+','+red+') 75%)';
    }

    return (
        <main>
            <h1>Número Aleatório</h1>
            <h2>{randomNumber}</h2>
            <p>Clique no botão abaixo para gerar um número aleatório</p>
            <button onClick={ generateNumber }>
                Gerar Número
            </button>
        </main>
    );
}
