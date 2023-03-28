import styles from '../styles/Tag.module.css'

export const Tag = ({ tag }) => {
  return (
    <div className={styles.tag}>
      {tag}
    </div>
  )
}
