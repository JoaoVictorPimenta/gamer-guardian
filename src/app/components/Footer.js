import Link from "next/link";


const Footer = () => {
    return (

        <footer className='footer'>
            <div>
                <Link href={"/tecnicas-de-relaxamento"} className="link"><p>Técnicas de Relaxamento</p></Link>
                <Link href={"/rotina-leve"} className="link"><p>Rotina Leve</p></Link>
                <Link href={"/permita-se-sentir"} className="link"><p>Permita-se Sentir</p></Link>

            </div>
            <p style={{ bordertop: "5px" }} className="final">© 2024 cavalo_sentado.png</p>
        </footer>
    )
}

export default Footer