import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Podcast = () => (
  <podcast>
  <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto px-8 items-center">
    <div className="mr-4 w-40 min-w-40 flex-shrink-0 mb-4 sm:mb-0">
      <img className="shadow-xl" src="https://reason.com/wp-content/uploads/powerpress/interviewwithNG-podcast.jpg" />
    </div>
    <div className="ml-4">
      <h2 className="text-xl md:text-3xl font-bold italic">Podcast</h2>
      <h3 className="text-sm md:text-xl font-bold">Has Trump Drained the Swamp or Stocked It With His Own Fish?</h3>
      <p className="text-sm md:text-lg lg:text-2xl font-light">Sinking in the Swamp authors Lachlan Markay and Asawin Suebsaeng are documenting all the president's grifters for The Daily Beast.</p>
    </div>
  </div>
  </podcast>
)

export default Podcast
