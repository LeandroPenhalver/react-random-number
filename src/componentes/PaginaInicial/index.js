import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
    const[randomNumber, setRandomNumber] = useState(0);

    return (
        <main>
            <h1>Número Aleatório</h1>
            <h2>{randomNumber}</h2>
            <p>Clique no botão abaixo para gerar um número aleatório</p>
            <button>
                Gerar Número
            </button>
        </main>
    );
}