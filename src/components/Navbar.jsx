import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo2 from "../img/logo2.png"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="first-nav flex">
        <div className="left flex">
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ff3838" }} />
            <span>
              <a
                href="mailto: info@amisotech.com"
                style={{ textTransform: "lowercase" }}
              >
                info[at]amisotech.com
              </a>
            </span>
          </div>
          <div className="location">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ff3838" }}
            />
            <span>
              791/5, Udyog Vihar, Phase 5, Sector - 19, Gurugram - 122016
            </span>
          </div>
        </div>
        <div className="right flex">
          <a href="https://twitter.com/amisotech" target="_blank" rel="noreferrer">
            <FaTwitter style={{ color: "#ff3838" }} />
          </a>
          <a href="https://www.facebook.com/amisotech" target="_blank" rel="noreferrer">
            <FaFacebook style={{ color: "#ff3838" }} />
          </a>
          <a href="https://www.linkedin.com/company/amisotech" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ color: "#ff3838" }} />
          </a>
          <a href="https://www.instagram.com/amisotech/" target="_blank" rel="noreferrer">
            <FaInstagram style={{ color: "#ff3838" }} />
          </a>
        </div>
      </div>

      <div className="second-nav flex">
        <div className="logo-div">
          <Link to={"/"}><img src={logo2} alt="" /></Link>
        </div>
        <div className="home-button">
        <div>
          <Link to="/"><b>Home</b></Link> |
          <Link to="/getaquote"><b>Get a Quote</b></Link>
        </div>
        <div className="call-to-action flex">
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+911246892930">
              <div>
                <span className="default-text">Call Anytime</span>
                <span className="hover-text">Call Now</span>
                <span>+91 (124) 689 2930</span>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
