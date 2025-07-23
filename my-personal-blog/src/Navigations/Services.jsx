import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <h2>My Services</h2>
      <div className="service">
      <div className="service-box">
        <i class="bi bi-filetype-css"></i>
        <h2>CSS & UI DESIGN</h2>
        <p>
          Beautiful, responsive layouts using modern CSS, Flexbox, and Grid.
        </p>
      </div>
      <div className="service-box">
        <i class="bi bi-file-code"></i>
        <h2>CSS & UI DESIGN</h2>
        <p>
          I build clean, semantic HTML5 pages optimized for accessibility and
          search engine optimization.
        </p>
      </div>
      <div className="service-box">
        <i class="bi bi-filetype-js"></i>
        <h2>JavaScript functionality</h2>
        <p>
          Interactive features like form validation, dynamic content, and DOM
          manipulation.
        </p>
      </div>
      <div className="service-box">
        <i class="bi bi-filetype-jsx"></i>
        <h2>React Web Apps</h2>
        <p>
          Single-page apps with React: fast, scalable, and component-driven
          architecture.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Services;
