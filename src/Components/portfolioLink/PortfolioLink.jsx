import React from "react";
import "./PortfolioLink.css";
import { GoArrowUpRight } from "react-icons/go";
const PortfolioLink = () => {
  return (
    <>
      <div className="portfolio__main">
        <div className="portfolio__main__section">
          <p>
            I created this website to show off my skills in designing complex
            animations. The animations are smooth and engaging, making the site
            not just functional but also visually appealing. Take a look around
            to see how I use animation to create an interactive and immersive
            experience.
          </p>
          <div className="portfolio__button">
            <a
              href="https://prathameshh.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              MY PORTFOLIO
            </a>
            <GoArrowUpRight size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioLink;
