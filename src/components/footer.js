import React from "react";
import "../styles/footer.scss";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer-icon">
        <GoMarkGithub />
      </div>
      <div className="footer-icon">
        <GrInstagram />
      </div>
      <div className="footer-icon">
        <BsFacebook />
      </div>
    </footer>
  );
};

export default Footer;
