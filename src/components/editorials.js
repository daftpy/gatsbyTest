import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Editorial = ({ siteTitle }) => (
  <editorial className="flex flex-col min-h-full md:min-h-0 md:h-full w-full mt-8 sm:mt-0 md:mt-8 sm:ml-8 md:ml-0 justify-between">
      <div className="mb-8 h-16">
        <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">Editorial</div>
        <a href="#" className="block mt-1 leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
      </div>
      <div className="mb-8 h-16">
        <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">Editorial</div>
        <a href="#" className="block mt-1 leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
      </div>
      <div className="mb-8 h-16">
        <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">Editorial</div>
        <a href="#" className="block mt-1 leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
      </div>
      <div className="h-16">
        <div className="uppercase tracking-wide text-sm text-blue-600 font-bold">Editorial</div>
        <a href="#" className="block mt-1 leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
      </div>
  </editorial>
)

Editorial.propTypes = {
  siteTitle: PropTypes.string,
}

Editorial.defaultProps = {
  siteTitle: ``,
}

export default Editorial