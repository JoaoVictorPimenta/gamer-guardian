import Link from "next/link";
import styles from "./menu.module.css";

const Navigation = () => {
    return (
        <nav className={styles.menu}>
            <Link  href={"/"}>
            <img src="logoGG.png" className={styles.logo} />
            </Link>
            <div className={styles.items}>

            <Link className={styles.itemHidden} href="/">
                <img className={styles.icon} src="home.png"/>
                <p className={styles.name}>
                    Home
                </p>
           </Link>

           <Link className={styles.item} href="/tecnicas-de-relaxamento">
                <img className={styles.icon} src="relaxIconPink.png"/>
                <p className={styles.name}>
                    Técnica de Relaxamento
                </p>
           </Link>

           <Link className={styles.item} href="/rotina-leve">
                <img className={styles.icon} src="healthIconPink.png"/>
                <p className={styles.name}>
                    Rotina Leve
                </p>
           </Link>
           <Link className={styles.item} href="/permita-se-sentir">
                <img className={styles.icon} src="feelingPink.png"/>
                <p className={styles.name}>
                    Permita-se Sentir
                </p>
           </Link>
            </div>
        </nav>
    )
}

export default Navigation