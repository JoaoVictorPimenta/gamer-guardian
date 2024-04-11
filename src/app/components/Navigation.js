import Link from "next/link";


const Navigation = ({ navLinks }) => {
    return (
        <nav>
            <ul>
                {navLinks.map((link) => {
                        return (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                            );
                    })}
            </ul>
        </nav>
    )
}

export default Navigation