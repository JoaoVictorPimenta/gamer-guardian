import Link from "next/link";
import styles from "./menu.module.css";

const Navigation = () => {
    return (
        <nav className={styles.menu}>
            <Link  href={"/"}>
            <img src="logoGG.png" className={styles.logo} />
            </Link>
            <div className={styles.items}>
           <Link className={styles.item} href="/tecnicas-de-relaxamento">
                <img className={styles.icon} src="relaxIconPink.png"/>
                <div>
                    Técnica de Relaxamento
                </div>
           </Link>

           <Link className={styles.item} href="/rotina-leve">
                <img className={styles.icon} src="healthIconPink.png"/>
                <div>
                    Rotina Leve
                </div>
           </Link>
           <Link className={styles.item} href="/permita-se-sentir">
                <img className={styles.icon} src="feelingPink.png"/>
                <div>
                    Permita-se Sentir
                </div>
           </Link>
            </div>
        </nav>
    )
}

export default Navigation