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
import Logo from "../img/profile.jpg";
import Fade from "react-reveal/Fade";

// page
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPressed: false,
    };
  }

  resumeBtn = () => {
    this.setState({ btnPressed: true });
  };

  render() {
    return (
      <div>
        <Link to="/">
          <BackArrow />
        </Link>
        <h1 className="contact-h1">Contact me...</h1>
        <Fade left>
          <div className="contact-container">
            <img src={Logo} />
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
        </Fade>
        <Footer />
      </div>
    );
  }
}

export default Resume;
