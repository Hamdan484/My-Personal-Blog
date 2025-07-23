import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


function Header() {
  return (
    <div className="links">
      <nav >
        <a href="#">Home</a>
        <a href="#Services">Services</a>
        <a href="#Education">Education</a>
        <a href="#Contact">Contact Me</a>
      </nav>
    </div>
  );
}
export default Header;
