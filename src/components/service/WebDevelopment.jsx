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
function WebDevelopment() {
  return (
    <>
      <Navbar />
      <div>
        <div className="background">
          <div>
            <h2>Website Development</h2>
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
                  <span style={{ color: "#ff3838" }}>Website Development</span>
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
                At AmisoTech Software Pvt Ltd, we are your reliable partner in
                web development. Our team creates cutting-edge web solutions for
                businesses, providing exceptional custom web development
                services to elevate your online presence. Trust us to deliver
                unparalleled results for your digital needs.
              </p>
              <div className="webdesignborder">
                <span>
                  Our team is skilled in both technical and creative web
                  development. We create visually stunning and functional
                  websites that work seamlessly on all devices.
                </span>
              </div>
              <p>
                We use the latest web technologies to build robust and scalable
                websites. From the initial concept to the final launch, we work
                closely with you to bring your vision to life. Our web
                development service includes front-end and back-end development,
                e-commerce solutions, content management systems (CMS), and
                integration of third-party tools, all aimed at maximizing your
                online potential.
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
              <h3 style={{marginBottom:"20px"}}>Key Aspects of Website Development</h3>
              <DetailsItem
                summary="Tailored Solutions"
                content="Custom website development services are all about creating a unique digital identity for your business. Unlike templated solutions, custom development allows for personalization in design, layout, and features, ensuring that your website stands out in the crowd."
              />
              <DetailsItem
                summary="Scalability"
                content="A custom-built website is designed with scalability in mind. As your business grows and your website's needs evolve, it's easier to integrate new features and functionalities without overhauling the entire platform."
              />
              <DetailsItem
                summary="Optimized Performance"
                content="Custom development enables the optimization of your website's performance, ensuring fast loading times, smooth navigation, and a seamless user experience. This is crucial for retaining visitors and reducing bounce rates."
              />
              <DetailsItem
                summary="Responsive Design"
                content="With the rise of mobile browsing, responsive design is a necessity. Custom development ensures that your website functions flawlessly across various devices and screen sizes, catering to a wider audience."
              />
              <DetailsItem
                summary="SEO-Friendly"
                content="Custom websites are built with clean and efficient code that search engines can easily crawl and index. This improves your website's visibility in search engine results, driving organic traffic."
              />
              <DetailsItem
                summary="Enhanced Security"
                content="Security is a top priority for any online platform. Custom development allows for the implementation of robust security measures, safeguarding your website and user data from potential threats."
              />
              <DetailsItem
                summary="Integration Capabilities"
                content="Businesses often rely on third-party tools and services. Custom websites can be seamlessly integrated with various plugins, APIs, and software, enhancing the overall functionality and user experience."
              />
              <DetailsItem
                summary="Brand Consistency"
                content="A custom-built website ensures that your brand identity is consistently represented throughout the design, fonts, colors, and imagery. This contributes to building a strong brand image in the minds of your audience."
              />
              <DetailsItem
                summary="Support and Maintenance"
                content="Custom website development services often come with ongoing support and maintenance options. This ensures that your website remains up-to-date, secure, and functional even as technology evolves."
              />
              <DetailsItem
                summary="Analytics and Insights"
                content="Custom websites can be integrated with advanced analytics tools, providing valuable insights into user behavior and engagement. This data empowers you to make informed decisions and optimize your website further."
              />
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default WebDevelopment;
