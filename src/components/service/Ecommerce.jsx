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
function Ecommerce() {
  return (
    <>
      <Navbar />
      <div>
        <div className="background">
          <div>
            <h2>E-Commerce Solution</h2>
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
                  <span style={{ color: "#ff3838" }}>E-Commerce Solution</span>
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
                Welcome to AmisoTech Software Pvt Ltd, the vanguard of web
                development innovation. We're thrilled to present our
                trailblazing E-commerce Solutions, meticulously crafted to
                revolutionize the way businesses engage with the digital retail
                landscape. In a world driven by online commerce, our solutions
                seamlessly bridge the gap between aspiration and accomplishment,
                empowering brands to thrive in the ever-evolving virtual
                marketplace.
              </p>
              <div className="webdesignborder">
                <span>
                  Drawing upon our deep expertise in web development, we bring
                  together a symphony of creativity, technological prowess, and
                  market insights to curate E-commerce solutions that embody
                  excellence
                </span>
              </div>
              <p>
                At AmisoTech Software Pvt Ltd, we understand that E-commerce
                isn't merely about selling products online; it's about creating
                immersive digital experiences that resonate with consumers. Our
                E-commerce Solutions transcend the confines of traditional
                online stores, breathing life into digital storefronts that
                captivate, engage, and convert.
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
              <h3 style={{marginBottom:"20px"}}>Key Aspects of E-Commerce</h3>
              <DetailsItem
                summary="Strategic User Experience"
                content="Every click, scroll, and interaction is thoughtfully designed to engage and convert users effectively."
              />
              <DetailsItem
                summary="Mobile-First Approach"
                content="Our designs prioritize mobile users, ensuring a seamless experience across devices."
              />
              <DetailsItem
                summary="Custom Solutions"
                content="From personalized features to bespoke designs, we tailor solutions that mirror your brand's identity."
              />
              <DetailsItem
                summary="Secure Transactions"
                content="We integrate robust payment gateways to ensure safe and secure online transactions."
              />
              <DetailsItem
                summary="Scalability"
                content="Our E-commerce platforms are engineered to evolve, accommodating your growth seamlessly."
              />
              <DetailsItem
                summary="Analytics-Driven Insights"
                content="Leverage data-driven insights to refine strategies and optimize performance."
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

export default Ecommerce;
