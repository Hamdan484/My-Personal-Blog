import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const response={name,email,subject,comment}
    fetch('http://localhost:5000/contacts',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body: JSON.stringify(response)
    })
  };

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
              <span>
                <a href="mailto:ibrahimhamsik3@gmail.com">
                  ibrahimhamsik3@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="personal-details">
            <div className="logo">
              <i className="bi bi-telephone-forward"></i>
            </div>
            <div className="exact-item">
              <h3>Call</h3>
              <span>
                <a href="tel:+233597788861">+233 597788861</a>
              </span>
            </div>
          </div>
        </div>
        <div className="messagint-channel">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Leave a comment "
                value={comment}
                onChange={(e) => setComment(e.target.value)}
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
