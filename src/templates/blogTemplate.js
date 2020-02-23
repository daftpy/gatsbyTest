import React from "react"
import ArticleLayout from "../components/article-layout"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <ArticleLayout siteName={data.site.siteMetadata.title} >
      <div>
          <h1><a className="block mt-1 text-2xl leading-tight font-bold text-gray-900 mb-2">{frontmatter.title}</a></h1>
          <h2 className="uppercase tracking-wide text-sm text-gray-600 font-bold">{frontmatter.date}
            <span className="uppercase tracking-wide text-sm text-red-600 font-bold ml-2">
              {frontmatter.category}
            </span>
          </h2>
          <div
            className="article-content mt-4 md:mr-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
    </ArticleLayout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        category
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`