import React from "react"
import ArticleLayout from "../components/article-layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.wordpressPost
  return (
    <ArticleLayout siteName={data.site.siteMetadata.title} >
      <SEO title={post.title} />
      <div>
          {post.featured_media && (
            <img className="w-full" src={post.featured_media.source_url} />
          )}
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
      date(formatString: "MMMM DD, YYYY")
      excerpt
      categories {
        name
      }
      author {
        name
      }
      featured_media {
        source_url
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`