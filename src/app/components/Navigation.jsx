import Link from "next/link";
import styles from "./menu.module.css";


/* const Navigation = ({ navLinks }) => {
    return (
        <nav className="topnav">
        <button className="btn-mobile">
            <span className="hamburguer"></span>
        </button>
        <ul className="menu">
        {navLinks.map((link) => {
                        return (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                            );
                    })}
        </ul>
        <Link href={"/"}><img src="logoGG.png" className="logo" /></Link>
        </nav>
    )
} */
const Navigation = () => {
    return (
        <nav className={styles.menu}>
           <Link className={styles.items} href="/tecnicas-de-relaxamento">
                <img className={styles.icon} src="relaxIcon.png"/>
                <div>
                    Técnica de Relaxamento
                </div>
           </Link>

           <Link className={styles.items} href="/rotina-leve">
                <img className={styles.icon} src="healthIcon.png"/>
                <div>
                    Rotina Leve
                </div>
           </Link>
           <Link className={styles.items} href="/permita-se-sentir">
                <img className={styles.icon} src="feeling.png"/>
                <div>
                    Permita-se Sentir
                </div>
           </Link>
           <img src="logoGG.png" className={styles.logo} />
        </nav>
    )
}

export default Navigation