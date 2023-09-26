import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import "../../assets/scss/additional.scss";
import {
  faCircleXmark,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/amisotech" },
  { Social: <FaTwitter />, link: "https://twitter.com/amisotech" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/amisotech/" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/amisotech",
  },
  { Social: <FaYoutube />, link: "https://www.youtube.com/@amisotech" },
];

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");


  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {/* <div className="flex justify-between"> */}
      <div className="d-flex m-auto">
        <div className="nav justify-content-center justify-content-md-start">
          {SocialShare.map((val, i) => (
            <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
              {val.Social}
            </a>
          ))}
        </div>
        {/* End .nav */}
      </div>
      {/* End .col */}

      <div className="d-flex m-auto">
        <Link to={"/privacypolicy"} style={{ marginRight: "5px" }}>
          Privacy Policy | 
        </Link>
        <Link to={"/termscondition"} style={{ marginRight: "5px" }}>
          Terms & Condition | 
        </Link>
        <Link to={"/refundpolicy"} >Refund Policy</Link>
      </div>

      <div className="d-flex m-auto">
        <p>
          © {new Date().getFullYear()} copyright{" "}
          <a
            href="https://www.amisotech.com"
            target="_blank"
            rel="noreferrer"
          >
            AmisoTech Software Pvt. Ltd.
          </a>{" "}
        </p>
      </div>
      {/* End .col */}

      {/* Modal */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Privacy Policy Modal"
        ariaHideApp={false}
      >
        <div className="max-w-3xl mx-auto p-4">
          <button onClick={closeModal}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#ff3838", fontSize: "45px" }}
            />
          </button>
          {modalContent}
        </div>
      </Modal> */}

      {/* </div> */}
      {/* End .row */}
    </>
  );
};

export default Footer;
