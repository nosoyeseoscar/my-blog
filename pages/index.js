import styles from '../styles/Home.module.css'
import { Card } from '../components/Card'
import { getAllFilesMetadata } from '../lib/mdx'

export default function Home ({ posts }) {
  return (
    <>
      <h1 className={styles.title}>
        Bienvenido a mi Blog, sin nombre aún.
      </h1>
      <p className={styles.description}>
        El mejor blog del mundo
        <code className={styles.code}>Para tirar código</code>
      </p>
      <div className={styles.grid}>
        {posts.map((post) => {
          return (
            <Card post={post} key={post.slug} />
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps () {
  const posts = await getAllFilesMetadata()

  // console.log(posts)

  return {
    props: { posts }
  }
}
