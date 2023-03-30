import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/' className={styles.items}>
        Home
      </Link>
      <Link href='/latest' className={styles.items}>
        Artículos
      </Link>
      <Link href='/about' className={styles.items}>
        Acerca de
      </Link>
    </nav>
  )
}
