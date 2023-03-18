import React from "react";
import Footer from "./footer";
import "./aboutMe.css";
import mySelf from "../img/profile.jpg";
import BackArrow from "./BackArrow";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

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
          <div className="about-profile">
            <img alt="my-self" src={mySelf} />
            <h4>Web Developer</h4>
          </div>
          <div className="about-text">
            Coding has always caught my eye, so I made the decision to enroll in
            a bootcamp. I haven't looked back since, love learning new
            programming skills every day.
          </div>
          <div className="skill-parent-container">
            <h3>SKILLS</h3>
            <div className="skill-container">
              <ProgressBar type="CSS" percentage={90} />
              <ProgressBar type="HTML" percentage={80} />
            </div>
            <div className="skill-container">
              <ProgressBar type="Java Script" percentage={80} />
              <ProgressBar type="React.js" percentage={70} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
