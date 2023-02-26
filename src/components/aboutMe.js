import React from "react";
import Footer from "./footer";
import "./aboutMe.css";
import profilePic from "../img/profile.jpg";
import BackArrow from "./BackArrow";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import ProgressBar from "./ProgressBar";

const About = function () {
  return (
    <>
      <Link to="/">
        <BackArrow />
      </Link>
      <Fade left cascade>
        <div>
          <h1 className="about-h1">
            Hello
            <br />
            <span>A bit about me...</span>
          </h1>
          <div className="about-container">
            <div className="about-profile">
              <img src={profilePic} />
              <h4>Web Developer</h4>
            </div>
            <div className="about-text">
              I made a decision to enroll at a bootcamp because I've always been
              interested in coding. I recently attended bootcamp, and I'm still
              learning Javascript till today.
            </div>
            <div className="skill-parent-container">
              <h3>SKILLS</h3>
              <div className="skill-container">
                <ProgressBar type="CSS" percentage={90} />
                <ProgressBar type="HTML" percentage={80} />
              </div>
              <div className="skill-container">
                <ProgressBar type="Java Script" percentage={75} />
                <ProgressBar type="React.js" percentage={70} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Footer />
    </>
  );
};

export default About;