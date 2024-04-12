'use client'
import Link from "next/link";

export default function IndicaJogo() {
    let dados = [
        {
            titulo: "The Last of Us",
            texto: "Em uma civilização devastada, em que infectados e sobreviventes veteranos estão à solta, Joel, um protagonista abatido, é contratado para tirar uma garota de 14 anos, Ellie, de uma zona de quarentena militar. No entanto, o que começa como um pequeno serviço se transforma em uma jornada brutal através do país.",
            line: "withLine",
        },
        {
            titulo: "Gris",
            texto: "Gris é uma jovem esperançosa, perdida em seu próprio mundo, que lida com uma dolorosa experiência. Sua jornada pela tristeza se manifesta em seu vestido, que concede a ela novas habilidades para navegar melhor por sua realidade desbotada. Ao longo da história, Gris evolui emocionalmente e passa a ver o mundo de outra forma, revelando novos caminhos para explorar com o uso de suas novas habilidades.",
            line: "withLine",
        },
        {
            titulo: "Life Is Strange",
            texto: "Siga a história de Max Caulfield, uma estudante de fotografia que descobre ser capaz de rebobinar o tempo ao salvar a melhor amiga, Chloe Price. As duas logo começam a investigar o desaparecimento misterioso da amiga e também estudante Rachel Amber, e desvendam o lado sombrio da vida em Arcadia Bay. Ao mesmo tempo, Max aprende rápido que alterar o passado pode por vezes levar a um futuro devastador.",
        }
    ]
    return (
        <>
            <Link href="/permita-se-sentir" className="link linkColor"> <div className="botaoVoltar"> <img className="imagemArrow" src="../arrow.png" />  <p>Voltar</p> </div></Link>
            <h2 className="nomePag pag3">Permita-se Sentir</h2>
            <p>Veja aqui alguns jogos recomendados!</p>
            <div className="cardGroup alinhaVert cardNew">
                {dados.map(dado => <Card {...dado} />)}
            </div>
        </>
    )
}

function Card({ titulo, texto, line }) {
    return (
        <article className={"cardDia " + line}>
            <h3 className="nimbus-sentimento" >{titulo}</h3>
            <div className="space">
                <div className="alinhaVert">
                    <p>{texto}</p>
                </div>
            </div>
        </article>
    );
}