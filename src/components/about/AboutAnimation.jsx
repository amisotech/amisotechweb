import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../img/Logo.jpg"
const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src={Logo} alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <h3>Are You Ready?</h3>
                  <p>To Grow your Businesses with <span style={{fontWeight:"500"}}>AmisoTech</span></p>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Get to Know</h3>
                </div>

                <div className="about-text">
                  <p>
                    Welcome to AmisoTech Software Pvt Ltd! We are a leading web
                    development company dedicated to providing high-quality web
                    solutions to our clients. Our team of experienced
                    developers, designers, and project managers work together to
                    deliver custom web applications tailored to meet the unique
                    needs of our clients.
                  </p>
                  <p>
                    We believe in building long-term relationships with our
                    clients, and we achieve this by providing exceptional
                    customer service and delivering projects on time and within
                    budget. Our commitment to quality and customer satisfaction
                    is evident in everything we do.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-12">
                      <ul>
                        <li style={{display:"flex",gap:"8px",alignItems:"center"}}>
                          <div style={{ color: '#ff3838'}}>
                          <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                          <span>We specialize in a wide range of web development services.</span>
                        </li>
                        <li style={{display:"flex",gap:"8px"}}>
                          <div style={{ color: '#ff3838'}}>
                          <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                          <span>Our team is well-versed in the latest web technologies.</span>
                        </li>
                        <li style={{display:"flex",gap:"8px"}}>
                          <div style={{ color: '#ff3838'}}>
                          <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                          <span>We use industry-standard development tools and methodologies.</span>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+38) 469 2344 2364</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>info@domainname.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title" id="services">
            <h3>What We're Offering</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Working Steps.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
