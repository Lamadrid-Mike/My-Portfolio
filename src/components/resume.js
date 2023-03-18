import React from "react";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import BackArrow from "./BackArrow";
import { Link } from "react-router-dom";
import avatar from "../img/profile.jpg";
import { Slide } from "react-awesome-reveal";

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
        <Link to="/">
          <BackArrow />
        </Link>
        <h1 className="contact-h1">Contact me...</h1>
        <Slide>
          <div className="contact-container">
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
                <a href="tel:862-888-4791">862-888-4791</a>
              </p>
            </div>
          </div>
          <div className="btn-container">
            <button onClick={this.resumeBtn} className="resume-btn">
              <FontAwesomeIcon className="icon" icon={faDownload} />
              My Resume
            </button>
          </div>
        </Slide>
        <Footer />
      </div>
    );
  }
}

export default Resume;
