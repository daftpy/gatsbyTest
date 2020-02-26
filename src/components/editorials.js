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
    <editorial className="flex flex-col min-h-full md:min-h-0 md:h-full w-full mt-8 sm:mt-0 md:mt-16 sm:ml-8 md:ml-0 justify-between">
      {editorials.allWordpressPost.edges.map((node) => (
        <div className="mb-8">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">Editorial</div>
          <a href={node.node.slug} className="block mt-1 leading-tight font-semibold text-gray-900 hover:underline">{node.node.title}</a>
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