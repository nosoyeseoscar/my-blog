import { getFileBySlug, getFiles } from '../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '../components/MDXComponents'
import { LayoutPost } from '../components/LayoutPost'

export default function Post ({ source, frontmatter }) {
  return (
    <LayoutPost frontmatter={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
    </LayoutPost>
  )
}

export async function getStaticProps ({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug)

  return {
    props: { source, frontmatter }
  }
}

export async function getStaticPaths () {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}
