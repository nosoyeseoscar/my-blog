import Link from 'next/link'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { dateFormat } from '../lib/dateFormat'

export const Card = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className={styles.card}>
      <div className={styles['logo-post']}>
        <Image src='/jslogo.png' alt='jslogo' width={45} height={45} />
      </div>
      <div>
        <h3>{post.title}</h3>
        <p className={styles.date}><Image src='/calendar.svg' alt='calendar' width={25} height={25} />{dateFormat(post.date)}</p>
      </div>
    </Link>
  )
}
