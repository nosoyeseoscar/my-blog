import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['links-container']}>
        <Link href='/'>
          <Image src='/home.svg' alt='home' width={50} height={50} />
        </Link>
        <Link href='/latest' className={styles.items}>
          Artículos
        </Link>
        <Link href='/about' className={styles.items}>
          Acerca de
        </Link>
      </div>
    </nav>
  )
}
