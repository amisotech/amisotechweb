import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import Denison from "../../img/Denison.png"
import Mid from "../../img/Mid.png"
import Statcon from "../../img/Statcon.png"
import HumanNetwork from "../../img/HumanNetwork.png"
import Dew from "../../img/Dew.png"
import NuYou from "../../img/NuYou.png"
import Azamara from "../../img/Azamara.png"
import Carelon from "../../img/Carelon.png"
import Orbit from "../../img/Orbit.png"
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Web Design", "Digital Marketing", "Web Development", "Web Hosting"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: Denison,
        width: 400,
        height: 550,
        title: "Denison",
        subTitle: "Career Lunch",
        alterText: "Denison",
        delayAnimation: "",
        portfolioLink:
          "https://denison.edu/",
      },
      {
        img: Mid,
        width: 400,
        height: 400,
        title: "Miid",
        subTitle: "Malaysian Institute of Interior Designers",
        alterText: "Miid",
        delayAnimation: "100",
        portfolioLink:
          "https://miid.org.my/",
      },
      {
        img: Statcon,
        width: 400,
        height: 700,
        title: "Statcon Powtech",
        subTitle: "Energizing A Sustainable World",
        alterText: "Statcon Powtech",
        delayAnimation: "200",
        portfolioLink:
          "https://powtech.in/",
      },
      {
        img:HumanNetwork,
        width: 400,
        height: 400,
        title: "Human Network",
        subTitle: "Your Trusted Recruitment Partner",
        alterText: "Human Network",
        delayAnimation: "0",
        portfolioLink:
          "http://hnonline.in/",
      },
      {
        img: Dew,
        width: 400,
        height: 700,
        title: "Dew",
        subTitle: "Engineering And Development",
        alterText: "Dew",
        delayAnimation: "100",
        portfolioLink:
          "https://www.dewengineering.com/",
      },
      {
        img:NuYou,
        width: 400,
        height: 500,
        title: "NuYou Homoeo",
        subTitle: "Clinic",
        alterText: "NuYou Homoeo",
        delayAnimation: "200",
        portfolioLink:
          "https://www.nuyouhomoeo.com/",
      },
      {
        img: Azamara,
        width: 400,
        height: 700,
        title: "Azamara",
        subTitle: "Cruises",
        alterText: "Azamara",
        delayAnimation: "0",
        portfolioLink:
          "https://connect.azamara.com/home",
      },
      {
        img: Carelon,
        width: 400,
        height: 550,
        title: "Carelon",
        subTitle: "Global Solution",
        alterText: "Carelon",
        delayAnimation: "100",
        portfolioLink:
          "https://www.carelonglobal.in/",
      },
      {
        img: Orbit,
        width: 400,
        height: 400,
        title: "Orbit",
        subTitle: "Solar Energy",
        alterText: "Orbit",
        delayAnimation: "200",
        portfolioLink: "http://www.orbitsenergy.com/",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: NuYou,
        width: 400,
        height: 550,
        title: "NuYou Homoeo",
        subTitle: "Clinic",
        alterText: "NuYou Homoeo",
        delayAnimation: "",
        portfolioLink:
          "https://www.nuyouhomoeo.com/",
      },
      {
        img: Statcon,
        width: 400,
        height: 700,
        title: "Statcon Powtech",
        subTitle: "Energizing A Sustainable World",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://powtech.in/",
      },
      {
        img: Carelon,
        width: 400,
        height: 550,
        title: "Carelon",
        subTitle: "Global Solution",
        alterText: "Carelon",
        delayAnimation: "200",
        portfolioLink:
          "https://www.carelonglobal.in/",
      },
      {
        img: HumanNetwork,
        width: 400,
        height: 400,
        title: "Human Network",
        subTitle: "Your Trusted Recruitment Partner",
        alterText: "Human Network",
        delayAnimation: "300",
        portfolioLink:
          "http://hnonline.in/",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: Mid,
        width: 400,
        height: 400,
        title: "Miid",
        subTitle: "Malaysian Institute of Interior Designers",
        alterText: "Miid",
        delayAnimation: "",
        portfolioLink:
          "https://miid.org.my/",
      },

      {
        img: Dew,
        width: 400,
        height: 700,
        title: "Dew",
        subTitle: "Engineering And Development",
        alterText: "Dew",
        delayAnimation: "100",
        portfolioLink:
          "https://www.dewengineering.com/",
      },
      {
        img: NuYou,
        width: 400,
        height: 550,
        title: "NuYou Homoeo",
        subTitle: "Clinic",
        alterText: "NuYou Homoeo",
        delayAnimation: "200",
        portfolioLink:
          "https://www.nuyouhomoeo.com/",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: Denison,
        width: 400,
        height: 550,
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: Azamara,
        width: 400,
        height: 700,
        title: "Azamara",
        subTitle: "Cruises",
        alterText: "Business Card",
        delayAnimation: "100",
        portfolioLink:
          "https://connect.azamara.com/home",
      },
      {
        img: Orbit,
        width: 400,
        height: 400,
        title: "Orbit",
        subTitle: "Solar Energy",
        alterText: "Orbit",
        delayAnimation: "200",
        portfolioLink: "http://www.orbitsenergy.com/",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: Mid,
        width: 400,
        height: 400,
        title: "Miid",
        subTitle: "Malaysian Institute of Interior Designers",
        alterText: "Miid",
        delayAnimation: "",
        portfolioLink:
          "https://miid.org.my/",
      },
      {
        img: Azamara,
        width: 400,
        height: 700,
        title: "Azamara",
        subTitle: "Cruises",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://connect.azamara.com/home",
      },

      {
        img: Dew,
        width: 400,
        height: 700,
        title: "Dew",
        subTitle: "Engineering And Development",
        alterText: "Dew",
        delayAnimation: "200",
        portfolioLink:
          "https://www.dewengineering.com/",
      },
      {
        img: NuYou,
        width: 400,
        height: 550,
        title: "NuYou Homoeo",
        subTitle: "Clinic",
        alterText: "NuYou Homoeo",
        delayAnimation: "300",
        portfolioLink:
          "https://www.nuyouhomoeo.com/ r",
      },
    ],
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
