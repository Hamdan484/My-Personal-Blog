import React from "react";
import estate from "../assets/estate.jpg";
import './portfolio.css'

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio">
        <button>All</button>
        <button>Personal projects</button>
        <button>Contracts</button>
      </div>
      <div className="projects">
        <div className="project">
          <h2>Real Estate Website</h2>
          <a href="https://hamdan484.github.io/Real-Estate-Website/">
          <img src={estate} alt="real-estate-website" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
