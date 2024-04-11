import Link from "next/link";


const Footer = () => {
    return (

        <footer className='footer'>
            <div>
                <Link href={"/tecnicas-de-relaxamento"} className="link corFooter"><p>Técnicas de Relaxamento</p></Link>
                <Link href={"/rotina-leve"} className="link corFooter"><p>Rotina Leve</p></Link>
                <Link href={"/permita-se-sentir"} className="link corFooter"><p>Permita-se Sentir</p></Link>

            </div>
            <p style={{ bordertop: "5px" }} className="final">© 2024 cavalo_sentado.png</p>
        </footer>
    )
}

export default Footer