import React from "react";
import launch from "../../img/launch.png"
import development from "../../img/development.png"
import design from "../../img/design.png"
const AwardContnet = [
  {
    img: design ,
    awardName: "Design concept",
    awardFor: "In the first stage, We gather information, create a plan and design, and choose a web development platform and tools.",
    delayAnimation: "0",
  },
  {
    img: development,
    awardName: "Web development",
    awardFor: "In the second stage, We write code, create the database and integrate components, and test the website thoroughly.",
    delayAnimation: "200",
  },
  {
    img: launch,
    awardName: "Launch website",
    awardFor: "And lastly, We upload the website, make it live, monitor regularly, and provide ongoing maintenance and support.",
    delayAnimation: "400",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={val.img} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
