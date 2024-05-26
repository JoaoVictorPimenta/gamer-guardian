import Link from "next/link";


function VideoCard({ imagem, nome, link }) {
    return (
        <article className="alinhaVert padding">
            <a href={link} target="_blank" className="link">
                <div className="alinhaHoriz stretch">
                    <img className="imagemVideo" src={imagem} />
                    <h3 className="nimbusLink">{nome}</h3>
                </div>
            </a>
        </article>
    );
}

export default VideoCard