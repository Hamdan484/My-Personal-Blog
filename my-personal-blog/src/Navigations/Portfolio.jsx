import React from "react";
import estate from "../assets/estate.jpg";
import "./portfolio.css";
import Projects from "../Navigations/Projects";

function Portfolio() {
  
  const projectItems = Projects.map((e) => (

    <ul key={e.name}>
      <div className="projects">
        <li>
          <div className="project">
            <h2>{e.name}</h2>
            <a href={e.link}>
              <img src={e.image} alt="real-estate-website" />
            </a>
          </div>
          
        </li>
      </div>
    </ul>
  ));
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio">
        <button>All</button>
        <button>Personal projects</button>
        <button>Contracts</button>
      </div>
      {projectItems}
    </div>
  );
}

export default Portfolio;
