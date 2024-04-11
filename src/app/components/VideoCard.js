import Link from "next/link";


function VideoCard({ imagem, nome, link }) {
    return (
        <article className="alinhaVert padding">
            <div className="alinhaHoriz stretch">
                <img className="imagemVideo" src={imagem} />
                <a href={link} className="link"><h3 className="nimbusLink">{nome}</h3></a>
            </div>
        </article>
    );
}

export default VideoCard