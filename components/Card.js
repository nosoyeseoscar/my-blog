import Link from 'next/link'
import styles from '../styles/Card.module.css'
import { TagsContainer } from './TagsContainer'

export const Card = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className={styles.card} key={post.slug}>
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <TagsContainer tags={post.tags} />
      <h4>{`Fecha de publicación: ${post.date}`}</h4>
    </Link>
  )
}
