import React from "react";
import "../Navigations/homepage.css";
import profile from "../assets/website-profile.jpg";
import Contact from "./Contact";
import Services from "./Services";
import Education from "./Education";
import Portfolio from "./Portfolio";
function Homwpage() {
  /*
       
        
      
     
      */
  return (
    <div className="homepage">
      <div className="homepage-particulars">
        <div>
          <h1>Hello</h1> <br />I am{" "}
          <span className="name-highlight">Hamdan Ibrahim</span> <br />
          Frontend Developer | Student <br />
          I'm a web developer who loves turning ideas into sleek, functional web
          experiences. I specialize in front-end development using HTML, CSS,
          JavaScript, and React — but I am always learning and evolving. This
          blog is where I share my coding journey, challenges I face, projects I
          build, and thoughts on tech, growth, and life. Whether you're here to
          learn, connect, or just explore — welcome to my digital home.
          <div className="social-media-handles">
            <a href="https://www.facebook.com/share/1ECWyJLC2s/">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/hamdan-ibrahim-907629348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ibrahim_hamdan801">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <button>Contact Me</button>
        </div>
        <div className="homepageimage">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div>
        <section id="Services">
          <Services />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <section id="Education">
          <Education />
        </section>
      </div>
      <Portfolio/>
    </div>
  );
}

export default Homwpage;
