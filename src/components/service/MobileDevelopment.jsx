import React from "react";
import Navbar from "../Navbar";
import "./webdesign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import DetailsItem from "./DetailsItem";
import CustomFooter from "../footer/CustomFooter";
import { Link } from "react-router-dom";
function MobileDevelopment() {
  return (
    <>
      <Navbar />
      <div>
        <div className="background">
          <div>
            <h2>Mobile App Development</h2>
          </div>
        </div>

        <div className="webdesign-container">
          <div className="first-div">
            <div className="webdesign-card">
              <Link to={"/website-designing-company-in-gurugram-india"}>
                <div>
                  <span>Website Designing</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
              <Link to={"/custom-web-development-services-in-gurugram-india"}>
                <div>
                  <span>Website Development</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
              <Link to={"/ecommerce-solution-provider-in-gurugram-india"}>
                <div>
                  <span>E-Commerce Solution</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
              <Link to={"/mobile-app-development-company-in-gurugram-india"}>
                <div>
                  <span style={{ color: "#ff3838" }}>
                    Mobile App Development
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
              <Link to={"/digital-marketing-company-in-gurugram-india"}>
                <div>
                  <span>Digital Marketing</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
            </div>
            <div className="need-help">
              <div>
                <span>Need Help? We're Here for You!</span>
                <p>
                  <br />
                Contact Us: <br />
                <br />
                Phone: +91 (124) 6892930 
                <br />
                Email: info[at]amisotech.com
                <br />
                Chat: Available during business hours
                <br />
                Support Hours: Mon-Fri: 9:00 AM - 9:00 PM
                <br />
                <br />
                Services: Explore our web design, development, and maintenance services.
                <br />
                <br />
                We're committed to your success – reach out anytime!
                </p>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>
                    <a href="tel:+919871171533">+91-9871171533</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="first-div-img">
              <img
                src="https://www.amisotechsoftware.com/wp-content/uploads/2023/01/bg23-1536x1024.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="second-div">
            <img
              src="https://www.amisotechsoftware.com/wp-content/uploads/2022/12/bg1.jpg"
              alt=""
            />
            <div className="webdesign-Business">
              <p>
                Welcome to AmisoTech Software Pvt Ltd, your trailblazing partner
                in the world of web development. We're delighted to introduce
                our avant-garde Mobile App Development services, meticulously
                crafted to redefine the way businesses engage with their
                audiences in the digital age. As mobile devices become an
                integral part of daily life, our solutions seamlessly bridge the
                gap between innovation and user-centric design, delivering
                mobile applications that captivate, empower, and drive growth.
              </p>
              <div className="webdesignborder">
                <span>
                  With a relentless focus on user experience, performance, and
                  security, our mobile apps are not just functional – they're
                  immersive digital journeys.
                </span>
              </div>
              <p>
                In the modern landscape, mobile apps are more than tools;
                they're transformative experiences that forge connections
                between brands and consumers. AmisoTech Software Pvt Ltd's
                Mobile App Development services embrace this ethos, harnessing
                cutting-edge technology, creativity, and user insights to
                construct mobile apps that transcend conventional boundaries.
              </p>
              <div className="benefits">
                <div>
                  <h3>Our Process</h3>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>
                        <b>Planning</b>: Understand the client's goals, target
                        audience, and content requirements.
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>
                        <b>Design</b>: Create mockups showcasing the visual
                        appearance of the website.
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>
                        <b>Content</b>: Add text, images, and other media based
                        on the content plan.
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>
                        <b>Testing</b>: Test the website for functionality,
                        compatibility, and user experience.
                      </span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>
                        <b>Launch</b>: Deploy the website to a live server.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-container">
              <h3 style={{marginBottom:"20px"}}>Key Aspects of Mobile App Development</h3>
              <DetailsItem
                summary="User-Centric Design"
                content="Immerse your users in intuitive interfaces and seamless interactions, enhancing engagement and satisfaction."
              />
              <DetailsItem
                summary="Cross-Platform Compatibility"
                content="Reach a broader audience with apps that function flawlessly on various mobile platforms."
              />
              <DetailsItem
                summary="Performance Optimization"
                content="Crafted for speed and responsiveness, our apps provide an unmatched user experience."
              />
              <DetailsItem
                summary="Data Security"
                content="Prioritize user data safety with rigorous security measures that safeguard sensitive information."
              />
              <DetailsItem
                summary="Scalable Solutions"
                content="Our mobile apps are engineered for growth, accommodating future enhancements and updates."
              />
              <DetailsItem
                summary="Analytics-Driven Insights"
                content="Harness data insights to refine app performance, features, and engagement strategies."
              />
              <DetailsItem
                summary="Streamlined Checkout"
                content="Minimize cart abandonment with frictionless and intuitive checkout processes."
              />
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default MobileDevelopment;
