import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/amisotech" },
  { Social: <FaTwitter />, link: "https://twitter.com/amisotech" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/amisotech/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/company/amisotech" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/@amisotech" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
