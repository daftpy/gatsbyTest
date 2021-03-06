import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"
import Newsletter from "../components/newsletter"
import Podcast from "../components/podcast"
import Editorials from "../components/editorials"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="md:flex max-w-screen-xl m-auto px-8 justify-around">
      <div className="flex md:w-2/3 flex-col justify-around">
        <h2 className="text-3xl font-bold mt-8">Headlines</h2>
        {props.data.allWordpressPost.edges.map((node) => (
          <Article
            articleTitle={node.node.title}
            articleCategory={node.node.categories[0].name}
            articleText={node.node.excerpt}
            articleImage={node.node.featured_media ? node.node.featured_media.source_url : null}
            articlePath={node.node.slug}
          />
        ))}
      </div>
      <div className="flex md:w-1/3 flex-col mt-8 md:mt-0 sm:flex-row md:flex-col">
        <Newsletter/>
        <Editorials/>
      </div>
  </div>
  <div className="bg-indigo-100 mt-12 mb-8 py-8">
    <Podcast />
  </div>
  <div className="md:flex max-w-screen-xl m-auto mt-4 px-8 justify-around">
      <div className="mr-4">
        <h3 className="text-xl font-bold mt-4 border-b-2 border-black mb-2">
          Latest Stories <i class="fas fa-history"></i>
        </h3>
        <div className="flex flex-col justify-between">
          <Article/>
          <Article/>
          <Article/>
        </div>
      </div>
      <div className="md:ml-4">
        <h3 className="border-b-2 border-red-700 font-bold mt-4 text-xl text-red-700 mb-2">
          Most Read <i class="fas fa-fire"></i>
        </h3>
        <div className="flex flex-col justify-between">
          <Article/>
          <Article/>
          <Article/>
        </div>
      </div>
    </div>
  {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

IndexPage.propTypes = {
  siteTitle: PropTypes.array,
  articlePreview: PropTypes.string,
  articleImage: PropTypes.string
}

IndexPage.defaultProps = {
  siteTitle: [1,2,3],
  articlePreview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ullamcorper felis, interdum elementum metus condimentum vel. Donec eget ante diam.',
  articleImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
}

export const query = graphql`
query HomePageQuery {
  allWordpressPost(filter: {categories: {elemMatch: {name: {nin: "editorial"}}}}, sort: {fields: date, order: DESC}, limit: 3) {
    edges {
      node {
        id
        slug
        title
        date
        excerpt
        categories {
          name
        }
        featured_media {
          source_url
        }
      }
    }
  }
}
`

export default IndexPage
