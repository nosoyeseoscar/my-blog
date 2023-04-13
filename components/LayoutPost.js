import styles from '../styles/Post.module.css'
import { TagsContainer } from './TagsContainer'
import Image from 'next/image'
import { dateFormat } from './../lib/dateFormat'
import Link from 'next/link'

export const LayoutPost = ({ children, frontmatter }) => {
  return (
    <div className={styles['single-post']}>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.subtitle}</h2>
      <TagsContainer tags={frontmatter.tags} />
      <div className={styles.misc}>
        <p className={styles.text}>
          <Image
            src='/calendar.svg'
            alt='calendar'
            width={25}
            height={25}
          />

          {dateFormat(frontmatter.date)}
        </p>
        <p className={styles.text}>
          <Image
            src='/clock.svg'
            alt='clock'
            width={25}
            height={25}
          />
          {Math.round(frontmatter.readingTime.minutes)} minutos
        </p>
      </div>
      {children}
      <Link className={styles.home} href='/'>
        <Image src='/home.svg' alt='home' width={50} height={50} />
      </Link>
    </div>

  )
}
