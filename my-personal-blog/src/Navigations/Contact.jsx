import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-header">
      <h1>Contact Me</h1>

      <div className="contact">
        <div className="social-media-outlets">
          <div className="personal-details">
            <div className="logo">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="exact-item">
              <h3>Location</h3>
              <span>Kumasi,Ghana</span>
            </div>
          </div>
          <div className="personal-details">
            <div className="logo">
              <i className="bi bi-envelope-at-fill"></i>
            </div>
            <div className="exact-item">
              <h3>Email</h3>
              <span>ibrahimhamsik3@gmail.com</span>
            </div>
          </div>
          <div className="personal-details">
            <div className="logo">
              <i className="bi bi-telephone-forward"></i>
            </div>
            <div className="exact-item">
              <h3>Call</h3>
              <span>+233 597788861</span>
            </div>
          </div>
        </div>
        <div className="messagint-channel">
          <form>
            <div className="form">
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Subject" />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Your text"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
