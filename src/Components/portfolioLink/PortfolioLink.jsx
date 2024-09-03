import React from 'react'
import  "./PortfolioLink.css"
import { GoArrowUpRight } from "react-icons/go";
const PortfolioLink = () => {
  return (
    <>
      <div className="portfolio__main">
        <div className="portfolio__main__section">
        <p>
          I've crafted This website to showcase my expertise in API integration
          and data handling. Its user-friendly design incorporates captivating
          animations for visual appeal. Dive into live API demos and interactive
          data visualizations to witness firsthand how I excel in these areas.
        </p>
        <div className="portfolio__button">
        <a href="https://prathameshh.netlify.app/"> MY PORTFOLIO</a>
          <GoArrowUpRight size={30} />
        </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioLink