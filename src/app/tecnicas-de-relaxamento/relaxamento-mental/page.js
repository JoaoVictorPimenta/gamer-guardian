'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import VideoCard from "@/app/components/VideoCard";
// import { Abel } from 'next/font/google'
export default function RelaxamentoMental() {
    let videos = [
        {
            imagem: "../V1-ment.png",
            nome: "MEDITAÇÃO ENQUANTO TRABALHA | FOCO, CONCENTRAÇÃO E PAZ INTERIOR",
            link: "https://www.youtube.com/watch?v=haPJjGn0XnQ"
        },
        {
            imagem: "../V2-ment.png",
            nome: "MEDITAÇÃO GUIADA 5 MINUTOS",
            link: "https://www.youtube.com/watch?v=fmBRuuQ0Gs8"
        },
        {
            imagem: "../V3-ment.png",
            nome: "MEDITAÇÃO PARA ATLETAS: MOMENTO PRESENTE",
            link: "https://www.youtube.com/watch?v=ilawiwNBDH4"
        },
    ]
    return (
        <>
            <div className="cardGroup">
                <Link href="/tecnicas-de-relaxamento" className="link linkColor"> <div className="botaoVoltar"> <img className="imagemArrow" src="../arrow.png" />  <p>Voltar</p> </div></Link>
                <h2 className="nomePag pag1">Relaxamento Mental</h2>
                <h3 className="nomePag pag2">Meditações guiadas</h3>
                <p className="textinho">A meditação é uma prática de regulação do corpo e da mente que treina a focalização da atenção, para alcançar tranquilidade, concentração, redução de estresse e ansiedade. </p>
                <h3 className="recomendacoes">Recomendações de vídeos:</h3>
                <section>
                    {videos.map(video => <VideoCard {...video} />)}
                </section>
            </div>
        </>
    )
}