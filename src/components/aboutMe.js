import React from "react";
import Footer from "./footer";
import "./aboutMe.css";
import profilePic from "../img/profile.jpg";
import BackArrow from "./BackArrow";
import { Link } from "react-router-dom";

const About = function () {
  return (
    <>
      <Link to="/">
        <BackArrow />
      </Link>
      <div>
        <h1 className="about-h1">
          Hello
          <br />
          <span>A bit about me...</span>
        </h1>
        <div className="about-container">
          <div>
            <img src={profilePic} />
            <h4>Web Developer</h4>
          </div>
          <div className="about-text">
            Always in love with coding, took the stand and decided to join a
            bootcamp a while ago and, today I still learning Javascript.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
