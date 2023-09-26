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
function WebDesign() {
  return (
    <>
      <Navbar />
      <div>
        <div className="background">
          <div>
            <h2>Website Designing</h2>
          </div>
        </div>

        <div className="webdesign-container">
          <div className="first-div">
            <div className="webdesign-card">
              <Link to={"/website-designing-company-in-gurugram-india"}>
                <div style={{ color: "#ff3838" }}>
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
                Welcome to the world of website design, where creativity meets
                technology to shape the digital landscapes of tomorrow. In this
                era of online prominence, having an impressive website is not
                just a luxury but a necessity. It's your digital storefront,
                your brand's first impression, and a powerful tool to engage,
                inform, and convert visitors. At AmisoTech Software, we
                understand the significance of impactful web design, and we're
                here to guide you through the journey of creating a website
                that's not only visually stunning but also highly functional,
                user-friendly, and optimized for success.
              </p>
              <div className="webdesignborder">
                <span>
                Website designing is a multifaceted discipline that encompasses
                various key aspects to create a visually appealing, functional,
                and user-friendly online presence. Here are the key aspects of
                website designing
                </span>
              </div>
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
              <h3 style={{marginBottom:"20px"}}>Key Aspects of Website Designing</h3>
              <DetailsItem
                summary="User-Centric Design"
                content="Prioritizing the needs and preferences of the users is essential. Design the website with a focus on user experience, ensuring easy navigation, clear information hierarchy, and intuitive interface elements."
              />
              <DetailsItem
                summary="Responsive Design"
                content="With the prevalence of various devices and screen sizes, it's crucial to create a responsive design that adapts seamlessly to different platforms, providing a consistent and optimized experience."
              />
              <DetailsItem
                summary="Visual Appeal"
                content="Use appealing graphics, imagery, typography, and color schemes that align with the brand identity, creating a visually cohesive and attractive design that resonates with the target audience."
              />
              <DetailsItem
                summary="Content Strategy"
                content="Design should complement content, not overshadow it. Plan how content will be presented, including text, images, videos, and other media, ensuring it's easily readable and engaging."
              />
              <DetailsItem
                summary="Navigation"
                content="Implement a clear and logical navigation structure that helps users find the information they need quickly and effortlessly. User-friendly menus, breadcrumbs, and search functionality contribute to a positive user experience."
              />
              <DetailsItem
                summary="Page Speed Optimization"
                content="Slow-loading websites can drive away users. Optimize images, minimize HTTP requests, and use efficient coding practices to ensure fast page load times."
              />
              <DetailsItem
                summary="SEO Integration"
                content="Design with search engine optimization in mind. Implement SEO-friendly elements such as clean URLs, proper meta tags, XML sitemaps, and semantic HTML to enhance search engine visibility."
              />
              <DetailsItem
                summary="Interactive Elements"
                content="Incorporate interactive features, such as forms, sliders, animations, and micro-interactions, to engage users and create a dynamic experience."
              />
              <DetailsItem
                summary="Accessibility"
                content="Ensure that the website is accessible to individuals with disabilities. Use semantic HTML, provide alternative text for images, and follow accessibility guidelines to make the site usable for everyone."
              />
              <DetailsItem
                summary="Security"
                content="Prioritize website security by implementing best practices, using secure hosting, keeping software up-to-date, and employing encryption (HTTPS) to protect user data."
              />
              <DetailsItem
                summary="Scalability"
                content="Design the website to be scalable, allowing for future growth and additions without compromising the overall design and performance."
              />
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default WebDesign;
