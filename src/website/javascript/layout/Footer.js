import React from 'react';
import '../../css/Footer.css'; // Importing Footer CSS
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importing FontAwesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing Instagram and Facebook icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importing Envelope icon

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        {/* Footer flexbox structure with four main sections */}
        <div className="footer-flex">

            {/* Contact Us section */}
            <div>
                <h2>Contact Us</h2>
                <div className="footer-inner-container">
                    <h3>9898989898</h3>
                    <h3>01-4141411</h3>
                    <h3>enquiry@woodland.edu</h3>
                </div>
            </div>

            {/* Quick Links section */}
            <div>
                <h2>Quick Link</h2>
                <div className="footer-inner-container">
                    <a href="./news"><h3>News</h3></a>
                    <a href="./course"><h3>Courses</h3></a>
                    <a href="./contact"><h3>Location Guide</h3></a>
                </div>
            </div>

            {/* Recent News section */}
            <div>
                <h2>Recent News</h2>
                <div className="footer-inner-container">
                    <a href="./news"><h3>Blog 1</h3></a>
                    <a href="./news"><h3>Blog 2</h3></a>
                    <a href="./news"><h3>Blog 3</h3></a>
                </div>
            </div>

            {/* Newsletter subscription section */}
            <div>
                <h2>Subscribe to Newsletter</h2>
                <div className="footer-inner-container">
                    <form>
                        <input type="email" name="email" placeholder="Enter Your Email" required/> {/* Input field for email */}
                        <button type="submit">→</button> {/* Button to submit the form */}
                    </form>
                </div>
            </div>
        </div>

        {/* Footer bottom section */}
        <div className="footer-bottom">

            {/* Copyright information */}
            <div className="copyright-container-div">
                <text>©{currentYear} Woodland University. All Rights Reserved.</text> {/* Dynamically displays the current year */}
            </div>

            {/* Social media follow us section */}
            <div className="social-connect-div">
                <div className="social-connect-inner-div">

                    {/* Follow us title */}
                    <div className="follow-us-title">
                        <h2 className="follow-us-h3">Follow us</h2>
                    </div>

                    {/* Social media icons container */}
                    <div className="social-icon-container-main-div">
                        <div className="social-icon-container-mid-div">
                            {/* Instagram icon */}
                            <div className="social-icon-container-inner-div">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'white' }} />
                                </a>
                            </div>
                            {/* Facebook icon */}
                            <div className="social-icon-container-inner-div">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'white' }} />
                                </a>
                            </div>
                            {/* Email icon */}
                            <div className="social-icon-container-inner-div">
                                <a href="mailto:enquiry@woodland.edu">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: 'white' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
