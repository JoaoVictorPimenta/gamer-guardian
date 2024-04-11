'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import { Abel } from 'next/font/google'
export default function Relaxamento() {
    let dados = [
        {
            imagem: "muscIcon.png",
            nome: "RELAXAMENTO MUSCULAR",
            texto: "Realize relaxamentos para poder reduzir a tensão muscular no corpo causada pelo estresse e sinta-se mais leve.",
            link: "/tecnicas-de-relaxamento/relaxamento-muscular",
        },
        {
            imagem: "mindIcon.png",
            nome: "RELAXAMENTO MENTAL",
            texto: "Nosso cérebro está em constante atuação, principalmente ao estudar e superar desafios em jogos. Conheça alguns exercícios para tranquilizar e acalmar a mente.",
            link: "/tecnicas-de-relaxamento/relaxamento-mental",
        }
    ]
    return (
        <>
            <h2 className="nomePag pag1">Técnicas de Relaxamento</h2>
            <div>
                <section className="cardGroup">
                    {dados.map(dado => <Card {...dado} />)}
                </section>
            </div>
        </>
    )
}

function Card({ imagem, nome, texto, link }) {
    return (
        <article className="alinhaVert card">
            <div className="alinhaHoriz stretch">
                <img className="imagem" src={imagem} />
                <div className="alinhaVert">
                    <h3 className="titulo nimbus atividade">{nome}</h3>
                    <p className="nimbus">{texto}</p>
                </div>
            </div>
            <Link className="botao nimbus" href={link}>+ Ver mais</Link>
        </article>
    );
}