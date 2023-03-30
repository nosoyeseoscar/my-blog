import styles from '../styles/Post.module.css'
import { TagsContainer } from './TagsContainer'

export const LayoutPost = ({ children, frontmatter }) => {
  return (
    <div className={styles['single-post']}>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.subtitle}</h2>
      <TagsContainer tags={frontmatter.tags} />
      {children}
    </div>
  )
}
