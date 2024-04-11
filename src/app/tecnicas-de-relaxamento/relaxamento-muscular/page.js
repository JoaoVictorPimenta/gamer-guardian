'use client'
import Link from "next/link";
import VideoCard from "@/app/components/VideoCard";

export default function RelaxamentoMusc() {
    let videosMusc = [
        {
            imagem: "../V1-musc.png",
            nome: "RELAXAMENTO MUSCULAR PELA TÉCNICA JACOBSON",
            link: "https://www.youtube.com/watch?v=fVTenYDgvgg&t=1077s"
        },
        {
            imagem: "../V2-musc.png",
            nome: "TÉCNICA DE RELAXAMENTO PROGRESSIVO JACOBSON",
            link: "https://www.youtube.com/watch?v=hB9cB8ORf2E"
        },
        {
            imagem: "../V3-musc.png",
            nome: "RELAXAMENTO PROGRESSIVO DE JACOBSON - DIMINUA SUA ANSIEDADE AGORA",
            link: "https://www.youtube.com/watch?v=C2hFGeJj48k&t=2s"
        },
    ]
    return (
        <>
            <div className="cardGroup">
            <Link href="/tecnicas-de-relaxamento"  className="link linkColor"><div className="botaoVoltar"> <img className="imagemArrow" src="../arrow.png" />  <p>Voltar</p> </div></Link>
                <h2 className="nomePag pag1">Relaxamento Muscular</h2>
                <h3 className="nomePag pag2">TRM</h3>
                <p className="textinho">A técnica de relaxamento de Jacobson (TRM) se trata de um método para redução da tensão, utilizando o princípio de contração e descontração dos músculos, no intuito de reduzir ansiedade, estresse e sintomas físicos.</p>
                <h3 className="recomendacoes">Recomendações de vídeos:</h3>
                <div>
                    <section>
                        {videosMusc.map(video => <VideoCard {...video} />)}
                    </section>
                </div>
            </div>
        </>
    )
}