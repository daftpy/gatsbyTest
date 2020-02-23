import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Newsletter = () => (
  <newsletter className="bg-gray-200 p-3 w-full text-center flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <i class="icon-newspaper mr-2 md:-mb-4 text-2xl"></i> <h2 className="font-bold flex-shrink-1 text-sm md:mt-4">Sign Up For Our Newsletter!</h2>
      </div>
      <p className="text-xs mt-2">Keep up with the latest local and national news. Get access to exclusive news and content.</p>
      <h3 className="mt-4 font-bold text-xs">Email</h3>
      <input className="mt-2 w-full" type="text" />
      <div className="text-center">
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Subscribe</button>
      </div>
      <p className="text-xs mt-2 text-center">No spam, unsubscribe at anytime.</p>

  </newsletter>
)

Newsletter.propTypes = {
  siteTitle: PropTypes.string,
}

Newsletter.defaultProps = {
  siteTitle: ``,
}

export default Newsletter
