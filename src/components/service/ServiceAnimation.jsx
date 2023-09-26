import React from "react";
import web_design_icon from "../../img/web_design_icon.png"
import web_development_icon from "../../img/web_development_icon.png"
import web_hosting_icon from "../../img/web_hosting_icon.png"
import digital_markating_icon from "../../img/digital_markating_icon.png"
import e_commerce_icon from "../../img/e_commerce_icon.png"
import mobile_app_icon from "../../img/mobile_app_icon.png"
import {BsArrowRight} from "react-icons/bs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ServiceContent = [
  {
    icon: web_design_icon,
    title: "Website Designing",
    descriptions: `We believe that a well-designed website is the cornerstone of a successful online presence. Our expert team of web developers and designers is dedicated to crafting visually captivating and user-friendly websites that leave a lasting impression on your audience.`,
    delayAnimation: "",
    link:"/website-designing-company-in-gurugram-india"
  },
  {
    icon: web_development_icon,
    title: "Custom Web Development",
    descriptions: `Welcome to AmisoTech, your trusted partner for cutting-edge custom web development solutions. We are a team of passionate developers and experts dedicated to turning your unique business ideas into fully functional and dynamic web applications.`,
    delayAnimation: "200",
    link:"/custom-web-development-services-in-gurugram-india"
  },
  {
    icon: e_commerce_icon,
    title: "E-Commerce Solution",
    descriptions: `AmisoTech Software, your one-stop destination for comprehensive and innovative e-commerce solutions. We are a team of skilled developers and e-commerce experts committed to helping your business thrive in the digital marketplace.`,
    delayAnimation: "400",
    link:"/ecommerce-solution-provider-in-gurugram-india"
  },
  {
    icon: mobile_app_icon,
    title: "Mobile App Development",
    descriptions: `AmisoTech Software, where we turn your mobile app ideas into reality. As a leading web development company, we specialize in creating powerful and intuitive mobile applications that cater to your business needs and engage your target audience.`,
    delayAnimation: "400",
    link : "/mobile-app-development-company-in-gurugram-india"
  },
  {
    icon: digital_markating_icon,
    title: "Digital Marketing",
    descriptions: `We are a web development company that understands the significance of a robust online presence in today's competitive landscape. Our team of digital marketing experts is committed to helping your business thrive and stand out in the digital realm.`,
    delayAnimation: "400",
    link : "/digital-marketing-company-in-gurugram-india"
  },
  {
    icon: web_hosting_icon,
    title: "Web Hosting",
    descriptions: `We understand the critical role that a robust hosting infrastructure plays in the success of your online ventures. As a leading web development company, we offer hosting solutions tailored to meet your website's specific needs, ensuring seamless performance and maximum uptime.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                {/* <i className={`icon ${val.icon}`}></i> */}
                <img src={val.icon} alt="" />
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p style={{textAlign:"justify"}}>{val.descriptions}</p>
                <Link to={val.link}><button><FontAwesomeIcon icon={faArrowRight} /></button></Link>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
