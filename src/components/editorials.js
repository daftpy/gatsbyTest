import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Editorial (props) { 
  const editorials = useStaticQuery(graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {in: "editorial"}}}}, sort: {fields: date, order: DESC}, limit: 4) {
      edges {
        node {
          title
          date
          slug
        }
      }
    }
  }
  `
  )
  return (
    <editorial className="flex flex-col w-full mt-8 sm:mt-0 md:mt-8 sm:ml-8 md:ml-0 justify-between">
      {editorials.allWordpressPost.edges.map((node) => (
        <div className="mb-8">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-bold article-category">Editorial</div>
          <h3><a href={node.node.slug} className="block mt-1 leading-tight font-semibold text-gray-900 hover:underline">{node.node.title}</a></h3>
        </div>
      ))}
    </editorial>
  )
}

Editorial.propTypes = {
  siteTitle: PropTypes.string,
}

Editorial.defaultProps = {
  siteTitle: ``,
}

export default Editorial