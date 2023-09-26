import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rama from "../../img/Rama.jpg"
import Adam from "../../img/Adam.jpg"
import Srinivas from "../../img/Srinivas.jpg"
export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: Adam,
      desc: `  Working with AmisoTech was a pleasure from start to finish. They made the process easy and delivered an exceptional website.`,
      reviewerName: "Adam S. Weinberg",
      designation: "President",
      delayAnimation: "",
    },
    {
      imageName: Rama,
      desc: ` I highly recommend AmisoTech to anyone in need of web development. They were responsive, reliable, and produced top-quality work.`,
      reviewerName: "Rama K Reddy",
      designation: "CEO & Founder",
      delayAnimation: "200",
    },
    {
      imageName: Srinivas,
      desc: ` The team at AmisoTech did an incredible job on my website. They were professional, efficient, and delivered a fantastic end result.`,
      reviewerName: "Srinivas Adimulam",
      designation: "Co-Founder",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={val.imageName}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
