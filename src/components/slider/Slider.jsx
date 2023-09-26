import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+91 0124-689-2930",
  email: " info@amisotech.com",
};

const sliderContent = {
  name: "Welcome to our Digital Agency",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+91 0124-689-2930">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:info@amisotech.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">Get a Quate</a>
              </li>
              {/* <li>
                <a href="#">FR</a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Amisotech Software</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Full-stack Developer</p>
                  <p className="loop-text lead"> UI/UX Designer</p>
                  <p className="loop-text lead"> App Developer</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
