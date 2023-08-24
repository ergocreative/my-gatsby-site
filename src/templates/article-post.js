import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ArticlePage = ({ data }) => {
  const article = data.restApiBlogs

  return (
    <Layout as="article">
      
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        {article.mainContent &&
          article.mainContent.map((data) => (
            <article key={data.id}>
              {data.contentHighlight && <p><strong>{data.contentHighlight}</strong></p>}
              {data.content && <p>{data.content}</p>}
              {data.dynImageBlock && <img src={"http://3.10.58.63:1337" + data.dynImageBlock.url} alt={data.dynImageBlock.alternativeText} />}
            </article>
          ))
        }
      </header>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    restApiBlogs(slug: { eq: $slug }) {
      id
      slug
      title
      mainContent {
        content
        contentHighlight
        dynImageBlock {
          url
          alternativeText
        }
      }
    }
  }
`

export default ArticlePage