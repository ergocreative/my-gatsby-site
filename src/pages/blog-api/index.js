import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="My Blog Posts">
       {
        data.allRestApiBlogs.nodes.map((node) => (
          <article key={node.id}>
            <p>title: {node.title}</p>
            <h2>
              <Link to={`/blog-api/${node.slug}`}>
                {node.title}
              </Link>
            </h2>
          </article>
        ))
      }
      </Layout>
    )
  }

  export const query = graphql`
  query {
    allRestApiBlogs {
      nodes {
        title
        slug
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage