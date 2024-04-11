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
            line: "withLine",
        },
        {
            nome: "Terça",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
            line: "withLine",
        },
        {
            nome: "Quarta",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
            line: "withLine",
        },
        {
            nome: "Quinta",
            hrEstudo: "4hrs",
            hrJogo: "3hrs",
            hrTarefa: "2hrs",
            line: "withLine",
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
            <div className="cardGroup alinhaVert cardNew">
                {dados.map(dado => <Card {...dado} />)}
            </div>
        </>
    )
}

function Card({ nome, hrEstudo, hrJogo, hrTarefa, line }) {
    return (
        <article className={"cardDia " + line}>
            <h3 className="diaSem" >{nome}</h3>
            <div className="space">
                <div className="alinhaVert">
                    <p>Estudo</p>
                    <p>Jogo</p>
                    <p>Tarefa de Casa</p>
                </div>

                <div className="alinhaVert">
                    <p>{hrEstudo}</p>
                    <p>{hrJogo}</p>
                    <p>{hrTarefa}</p>
                </div>
            </div>
        </article>
    );
}