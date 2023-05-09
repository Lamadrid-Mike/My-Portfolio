import React from "react";
import "../styles/resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import avatar from "../img/profile.jpg";
import { motion } from "framer-motion";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPressed: false,
    };
  }

  resumeBtn = () => {
    fetch("Mike-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Mike-Resume.pdf";
        alink.click();
      });
    });
  };

  render() {
    return (
      <div>
        <h1 className="about-h1">Contact me...</h1>
        <div className="contact-parent-container">
          <motion.div
            className="contact-container"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <img alt="logo" src={avatar} />
            <div className="contact-info">
              <p>
                <FontAwesomeIcon className="icon" icon={faUser} />
                Mike Lamadrid
              </p>
              <p>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <a href="mailto:mikealamadrid@hotmail.com?subject=Hello world!&body=">
                  mikealamadrid@hotmail.com
                </a>
              </p>
              <p>
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <a href="tel:862-249-8300">862-249-8300</a>
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="btn-container"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.6 }}
        >
          <button onClick={this.resumeBtn} className="resume-btn">
            <FontAwesomeIcon className="icon" icon={faDownload} />
            My Resume
          </button>
        </motion.div>
      </div>
    );
  }
}

export default Resume;
