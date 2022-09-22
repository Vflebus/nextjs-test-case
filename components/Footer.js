import Link from 'next/link'
import styles from '../styles/Footer.module.scss'

export default function footer() {
    return (
        <nav className={styles.navLinks}>
            <Link href="/">Table test case</Link> |
            <Link href="/form">Form test case</Link> |
            <Link href="/http">Http test case</Link>
        </nav>
    )
}