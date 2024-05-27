'use client'
import Link from "next/link";
import { useState, useEffect } from 'react';


export default function IndicaJogo() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames();
    }, []);
    const getGames = async () => {
        try {
            const response = await fetch('../api/games');
            const data = await response.json(); 
            setGames(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            <Link href="/permita-se-sentir" className="link linkColor"> <div className="botaoVoltar"> <img className="imagemArrow" src="../arrow.png" />  <p>Voltar</p> </div></Link>
            <h2 className="nomePag pag3">Permita-se Sentir</h2>
            <p className="textinho">Veja aqui alguns jogos recomendados!</p>
            <div>
               {games.map(game => <Card {...game}/>)}
            </div>
        </>
    )
}

function Card({ titulo, texto, platform }) {
    return (
        <article className="cardDia">
            <h3 className="nimbus-sentimento" >{titulo}</h3>
            <div className="space">
                <div className="alinhaVert">
                    <p>{texto}</p>
                    <div>
                        {platform}
                    </div>
                </div>
            </div>
        </article>
    )
}