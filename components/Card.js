import Link from 'next/link'
import styles from '../styles/Card.module.css'

import { Tag } from './Tag'

export const Card = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className={styles.card} key={post.slug}>
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <div className={styles.tags}>
        <span className={styles.text}>Etiquetas:</span>
        {
          post.tags
            ? post.tags.map(tag => <Tag tag={tag} key={post.slug + tag} />)
            : <span className={styles.text}>Sin etiquetas</span>
        }
      </div>
      <h4>{`Fecha de publicación: ${post.date}`}</h4>
    </Link>
  )
}
