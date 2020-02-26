import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Article = (props) => (
  <article className="border-b-2 last:border-b-0 sm:flex mt-4 items-center pb-6 md:mr-8">
  {props.articleImage && 
    <div className="sm:flex-shrink-0">
      <img className="rounded-sm sm:w-56 w-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"></img>
    </div>
  }
    <div className={props.articleImage ? "mt-4 sm:mt-0 sm:mx-6 items-center" :  "mt-4 sm:mt-0 mr-4 items-center"}>
      <div className="uppercase tracking-wide text-sm text-red-600 font-bold">{props.articleCategory}</div>
      <a href={props.articlePath} className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{props.articleTitle}</a>
      {/* <p className="mt-2 text-gray-600 overflow-hidden">{props.articleText}</p> */}
      
      <div
        className="mt-2 text-gray-600 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: props.articleText }}
      />
      
    </div>
  </article>
)

Article.propTypes = {
  articleTitle: PropTypes.string,
  articleCategory: PropTypes.string,
  articlePath: PropTypes.string,
}

Article.defaultProps = {
  articleTitle: `Finding customers for your new business`,
  articleCategory: 'State',
  articleText: 'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.'
}

export default Article
