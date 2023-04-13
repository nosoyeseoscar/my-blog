import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a target='_blank' href='https://twitter.com/nosoyeseoscar' rel='noopener noreferrer'>
          <Image src='/twitter.svg' alt='twitter' width={30} height={30} />
        </a>
        <a className={styles['github-icon']} target='_blank' href='https://github.com/nosoyeseoscar' rel='noopener noreferrer'>
          <Image src='/github.svg' alt='github' width={30} height={30} style='margin-left:10px' />
        </a>
      </div>
      <p>
        ©2023 Oscar Fuentes
      </p>
    </footer>
  )
}
