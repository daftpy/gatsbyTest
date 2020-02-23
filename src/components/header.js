import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
  <div className="bg-blue-700 text-white">
    <div className="flex max-w-screen-xl justify-between mx-auto p-2 px-8">
      <div className="text-white font-bold text-2xl"><Link to="/">{siteTitle}</Link></div>
      <ul className="hidden md:visible md:flex justify-between text-center items-center">
        <li className="mx-4">
          <a href="#">Local</a>
        </li>
        <li className="mx-4">
          <a href="#">National</a>
        </li>
        <li className="mx-4">
          <a href="#">Editorial</a>
        </li>
        <li className="mx-4">
          <a href="#">Economy</a>
        </li>
        <li className="mx-4">
          <a href="#">Culture</a>
        </li>
        <li className="ml-4">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="md:hidden my-auto"><a href="#"><i class="fas fa-bars"></i></a></div>
    </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
