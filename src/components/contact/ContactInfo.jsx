import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Get in touch</h4>
        <p>
        At AmisoTech Software, we're here to simplify your technology needs and amplify your business potential
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            
            <span className="media-body" >
            <b style={{color:"#ff3838"}}>Registered Office</b>
            <br />
            791/5, Udyog Vihar, Phase 5, Sector 19, Gurugram - 122016
            </span>
          </li>
          
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
            <b style={{color:"#ff3838"}}>Sales Office</b>
            <br />
            Unit - 14146, 14th Floor, Sector -4, Gaur City Mall, Gaur Office Floors, Greater Noida West - 201009
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body" style={{textTransform:"lowercase"}}> info[at]amisotech.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+91 (124) 689 2930</span>
          </li>

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+91 9871171533</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
