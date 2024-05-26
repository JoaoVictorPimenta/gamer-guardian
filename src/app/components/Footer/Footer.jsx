import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href={"/tecnicas-de-relaxamento"} className={styles.corFooter}><p>Técnicas de Relaxamento</p></Link>
                <Link href={"/rotina-leve"} className={styles.corFooter}><p>Rotina Leve</p></Link>
                <Link href={"/permita-se-sentir"} className={styles.corFooter}><p>Permita-se Sentir</p></Link>

            </div>
            <p style={{ bordertop: "5px" }} className={styles.final}>© 2024 cavalo_sentado.png</p>
        </footer>
    )
}

export default Footer