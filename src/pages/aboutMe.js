import React from "react";
import Footer from "../components/footer";
import "../styles/aboutMe.css";
import mySelf from "../img/profile.jpg";
import BackArrow from "../components/BackArrow";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "../components/ProgressBar";

const About = function () {
  return (
    <div className="about-me-parent-container">
      <Link to="/">
        <BackArrow />
      </Link>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.6 }}
      >
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
            <div className="skill-container">
              <ProgressBar type="Node.js" percentage={50} />
              <ProgressBar type="PHP" percentage={50} />
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
