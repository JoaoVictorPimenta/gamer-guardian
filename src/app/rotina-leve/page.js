'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import { Abel } from 'next/font/google'
export default function SaudeMental() {
    let dados = [
        {
            nome: "Segunda",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
        },
        {
            nome: "Terça",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
        },
        {
            nome: "Quarta",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
        },
        {
            nome: "Quinta",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
        },
        {
            nome: "Sexta",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
        },
    ]
    return (
        <>
            <h2 className="nomePag pag2">Rotina Leve</h2>
            {/* <div className="cardGroup">
                    {dados.map(dado => <Card {...dado} />)}
            </div> */}
        </>
    )
}

function Card({ nome, hrEstudo, hrJogo, hrTarefa }) {
    return (
        <article className="alinhaVert card">
            <h3 className="titulo nimbus atividade" >{nome}</h3>
            <div className="alinhaHoriz stretch">
            <div className="alinhaVert">
                <h3 className="titulo nimbus atividade">{nome}</h3>
                <p className="nimbus">{texto}</p>
            </div>
            </div>
            <Link className="botao nimbus" href={`/{nome}`}>+ Ver mais</Link>
        </article>
    );
}