import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import Editorials from "./editorials"
import Newsletter from "./newsletter"
import { useStaticQuery, graphql } from "gatsby"

const ArticleLayout = (props) => {
  return (
    <>
      <div>
      <Header siteTitle={props.siteName} />
      <div className="md:flex max-w-screen-xl m-auto px-8 justify-around">
          <div className="flex md:w-2/3 mt-4 flex-col">
            {props.children}
          </div>
          <div className="flex md:w-1/3 flex-col mt-8 md:mt-0 sm:flex-row md:flex-col">
            <Newsletter/>
            <Editorials/>
          </div>
      </div>
    </div>
    </>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteName: PropTypes.string,
}

export default ArticleLayout
