import Link from "next/link";


const Navigation = ({ navLinks }) => {
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
}

export default Navigation