import React from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css"; // Import the styles for the WhatsApp widget
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import CarouselComponent from "../../components/slider/CarouselComponent";
import Blog from "../../components/blog/BlogAnimation"
import { ReactComponent as CompanyIcon } from '../../img/whatsapplogo.svg';
import "../../assets/scss/additional.scss"
import CookieConsent from "../../components/CookieConsent";
const HomeOne = () => {
  useDocumentTitle(
    "Digital Marketing Company in Gurgaon, India | Website Developer Service | AmisoTech Software Pvt Ltd"
  );
  document.body.classList.add("theme-light");

  const separatedDivStyle = {
    backgroundImage: 'url("img/border-dark.png")',
    /* Add other CSS styles here if needed */
    paddingTop: "-41px",
    paddingBottom: "-18px",
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto 6px",
    backgroundPosition: "center",
  };

  const customMessage = `Welcome to AmisoTech Software Pvt Ltd! 🚀\n\nHello,\n\nThank you for connecting with AmisoTech! We're thrilled to explore the possibilities of working together to elevate your online presence. Our expert team is eager to assist you. Let's get started on your digital journey today! 🌟\n\nBest regards,\nAmisoTech Software Pvt Ltd`;

  


  return (
    <div className="main-left">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Slider Section */}
      {/* <a href="https://api.whatsapp.com/send?phone=6206379459">
      <img src={img_whatsapp} alt="" />
      </a> */}
      <About />
      {/* End About Section */}

      {/* <Resume /> */}
      {/* End Resume Section */}

      <section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}



      <section id="CarouselComponent" className="section theme-light dark-bg">
        <div className="container">
      <div className="separated" style={separatedDivStyle}></div>
          <div className="title">
            <h3>Tech Stack</h3>
          </div>
          <CarouselComponent />
      <div className="separated" style={separatedDivStyle}></div>
        </div>
      </section>
      {/* CarouselComponent */}


      {/* <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section> */}
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Map />
              {/* End google-map */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="d-flex justify-content-between px-5" id="footer_container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
      {/* <WhatsAppWidget phoneNumber="9871171533" message={customMessage} style={{position:"fixed",bottom:"20px",left:"90px",zIndex:"999"}} /> */}
      <div className="whatsapp-widget-container">
        <WhatsAppWidget
          phoneNumber="9871171533"
          message={customMessage}
          chatButtonLabel="Chat with Us" // Change the text of the chat button
          CompanyIcon={CompanyIcon}
          companyName="Support"
          replyTimeText="We replies within a minutes"
        />
      </div>
      {/* <div style={{display:"flex",justifyContent:"center"}}>
      <CookieConsent/>
      </div> */}

    </div>
  );
};

export default HomeOne;
