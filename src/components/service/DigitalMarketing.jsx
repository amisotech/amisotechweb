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
function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <div>
        <div className="background">
          <div>
            <h2>Digital Marketing</h2>
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
                  <span>Mobile App Development</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
              <Link to={"/digital-marketing-company-in-gurugram-india"}>
                <div>
                  <span style={{ color: "#ff3838" }}>Digital Marketing</span>
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
                Welcome to AmisoTech Software Pvt Ltd, a beacon of innovation in
                the realm of web development. We are thrilled to introduce our
                transformative Digital Marketing services, meticulously designed
                to reshape the way businesses engage, captivate, and conquer in
                the digital realm. In a world driven by digital interactions,
                our solutions seamlessly blend creativity, strategy, and data
                insights to deliver unparalleled digital marketing experiences
                that elevate brands and drive tangible growth.
              </p>
              <div className="webdesignborder">
                <span>
                Digital Marketing is more than promotion; it's a dynamic
                narrative that connects brands with their audience
                </span>
              </div>
              <p>
                 AmisoTech
                Software Pvt Ltd's Digital Marketing services embrace this
                ethos, leveraging cutting-edge technology, strategic thinking,
                and a deep understanding of consumer behavior to craft campaigns
                that transcend traditional boundaries.
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
              <h3 style={{marginBottom:"20px"}}>Key Aspects of Digital Marketing</h3>
              <DetailsItem
                summary="Strategic Content Creation"
                content="Craft compelling content that speaks to your audience, educates, entertains, and fosters connections."
              />
              <DetailsItem
                summary="Data-Driven Insights"
                content="Leverage analytics to understand user behavior, refine strategies, and optimize campaign performance."
              />
              <DetailsItem
                summary="Social Media Engagement"
                content="Create meaningful interactions on social platforms, fostering a loyal and engaged audience."
              />
              <DetailsItem
                summary="Search Engine Optimization (SEO)"
                content="Enhance brand visibility and organic traffic with strategies that align with search algorithms."
              />
              <DetailsItem
                summary="Paid Advertising"
                content="Boost reach and conversions with targeted advertising campaigns across various platforms."
              />
              <DetailsItem
                summary="Conversion Optimization"
                content="Transform visitors into customers through optimized user journeys and persuasive strategies."
              />
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default DigitalMarketing;
