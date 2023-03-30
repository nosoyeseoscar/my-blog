import { Tag } from './Tag'
import styles from '../styles/TagsContainer.module.css'

export const TagsContainer = ({ tags }) => {
  return (
    <div className={styles['tags-container']}>
      <h3>Etiquetas: </h3>
      {
        tags
          ? tags.map((tag, index) => {
            return <Tag tag={tag} key={index} />
          })
          : <h3>Tema Random</h3>
    }
    </div>
  )
}
