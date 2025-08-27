import React from 'react';
import './footer.css';
import logo from '../assest/img/logo/We3vision Private Limited Dark.png';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* Leftmost Column - Company Information */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <div className="footer-logo">
                  <div className="logo-container">
                    <img src={logo} alt="We3Vision Logo" height={50} width={200}/>
                  </div>
                </div>
                <div className="welcome-message">
                  <p>
                    We're thrilled to have you on board. At We3vision Private Limited, 
                    we value innovation, collaboration, and growth. We're excited to see 
                    the impact you'll make as part of our team. Let's achieve great things together!
                  </p>
                </div>
                <div className="social-media">
                  <a href="https://www.linkedin.com/company/we3visioninfotech/" className="social-icon">
                    <FaLinkedinIn/>
                  </a>
                  <a href="https://www.instagram.com/we3vision_infotech/" className="social-icon">
                    <FaInstagram/>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Column - Services */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-heading">Services</h4>
                <ul className="footer-links">
                  <li><a href="/metaverse">Metaverse</a></li>
                  <li><a href="/ai">AI Development</a></li>
                  <li><a href="/brand-identity">Brand Design</a></li>
                  <li><a href="/webdev">Web/App Development</a></li>
                  <li><a href="/animation">2D/3D Animation</a></li>
                  <li><a href="/animation">3D Modeling</a></li>
                  <li><a href="/cgi">Creative Design</a></li>
                  <li><a href="/graphics">Graphic Design</a></li>
                </ul>
              </div>
            </div>

            {/* Third Column - Contact Us */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-heading">Contact Us</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">Phone:</span>
                    <a href="tel:+917383216096" className="contact-link">+91 7383216096</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <a href="mailto:info@we3visioninfotech.com" className="contact-link">info@we3visioninfotech.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Address:</span>
                    <p className="contact-address">
                      936 A, Ishwar Darshan, Bhim Kachchhi Mohallo, 
                      Nanpura, Surat-305003, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rightmost Column - Any inquiry? */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-heading">Any inquiry?</h4>
                <div className="email-subscription">
                <a href='/contact'>
                  <div className="email-input-container">
                    <input 
                      type="email" 
                      placeholder="Enter Your Email" 
                      className="email-input"
                    />
                    <button className="email-submit-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                  </a>
                  <p className="subscription-text">
                    Looking for the best solutions for your business or project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <div className="container1">
          <div className="copyright-line"></div>
          <p className="copyright-text">
            Copyright © 2025 We3vision Private Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;