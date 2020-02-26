import React from "react"
import ArticleLayout from "../components/article-layout"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.wordpressPost
  return (
    <ArticleLayout siteName={data.site.siteMetadata.title} >
      <div>
          <h1><a className="block mt-1 text-2xl leading-tight font-bold text-gray-900 mb-2">{post.title}</a></h1>
          <h2 className="uppercase tracking-wide text-sm text-gray-600 font-bold">{post.date}
            <span className="uppercase tracking-wide text-sm text-red-600 font-bold ml-2">
              {post.category}
            </span>
          </h2>
          <div
            className="article-content mt-4 md:mr-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
      </div>
    </ArticleLayout>
  )
}
export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`