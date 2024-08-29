import React from 'react';  // Import React library for building components
import Layout from '../layout/Layout.js';  // Import Layout component which includes Header and Footer
import '../../css/Contact.css';

const Contact = () => {
  return (
    <Layout>
      <main>
        <div className="black-bg"></div>
        <div className="contact-container">
          <div className="find-us">
            <h2>FIND US</h2>
            <div className="location">
              <span role="img" aria-label="location">📍</span>
              <h3><strong>Our location</strong></h3>
              <p>Street 143, Woodland, State 1, UK, 12345</p>
            </div>
            <div className="contact">
              <span role="img" aria-label="phone">📞</span>
              <h3><strong>Contact Us</strong></h3>
              <p>9898989898, 01-4141411</p>
              <p>enquery@woodland.edu</p>
            </div>
          </div>
          <div className="contact-form">
            <h2>Contact With Us</h2>
            <form>
              <div className="input-container">
                <input type="text" id="name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="input-container">
                <input type="email" id="email" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="input-container">
                <input type="text" id="phone" required />
                <label htmlFor="phone">Your Phone Number</label>
              </div>
              <div className="input-container">
                <textarea id="message" rows="4" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.6349507465835!2d85.3386331733401!3d27.690121492992365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc4a60df7d%3A0xa3d62c8a38b7e837!2sNAMI%20COLLEGE%20bachelors%20block!5e0!3m2!1sen!2snp!4v1724502521197!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
