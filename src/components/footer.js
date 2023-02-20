import React from "react";
import "./footer.scss";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="icon">
        <GoMarkGithub />
      </div>
      <div className="icon">
        <GrInstagram />
      </div>
      <div className="icon">
        <BsFacebook />
      </div>
    </footer>
  );
};

export default Footer;
