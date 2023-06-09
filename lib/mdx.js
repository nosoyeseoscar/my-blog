import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import readingTime from "reading-time";

import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

const root = process.cwd()

export const getFiles = () => {
  return fs.readdirSync(path.join(root, 'data'))
}

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf8')

  const { data, content } = await matter(mdxSource)

  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism
      ]
    }
  })

  return {
    source,
    frontmatter: {
      readingTime: readingTime(content),
      slug,
      ...data
    }
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, 'data', postSlug), 'utf8')
    const { data } = matter(mdxSource)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ]
  }, [])
}
