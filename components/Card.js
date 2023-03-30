import Link from 'next/link'
import styles from '../styles/Card.module.css'
import { TagsContainer } from './TagsContainer'
import Image from 'next/image'
import { dateFormat } from '../lib/dateFormat'

export const Card = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className={styles.card} key={post.slug}>
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <TagsContainer tags={post.tags} />
      <h4 className={styles.date}><Image src='/calendar.svg' alt='calendar' width={25} height={25} />{dateFormat(post.date)}</h4>
    </Link>
  )
}
