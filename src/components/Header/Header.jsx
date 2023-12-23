import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon , } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  return (
    <div className="container">
      <header className={isScrolled ? 'scrolled' : 'header'}>
        <div className="mail-container header-top">
          <p>
            <FontAwesomeIcon className="envelop" icon={faEnvelope} /> info@company.com
          </p>
          <p>
            <FontAwesomeIcon className="envelop" icon={faMap} /> Sunny Isles Beach,FL 33160
          </p>
        </div>
        <div className="icon-container header-top">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </header>
      <header className="topbar">
        <nav className="navbar">
          <h2 className="logo"> VILLA  </h2>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#properties">Properties</a>
            <a href="#property-details">Property Details</a>
            <a href="#contact">Contact Us</a>
            <a href="#visit">Schedule a visit</a>
        </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
