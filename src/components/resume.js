import React from "react";
import "./resume.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

class Resume extends React.Component {
  render() {
    return (
      <>
        <div className="resume">
          <div className="tittle">
            <h2>Full Stack Web Developer</h2>
          </div>
          <div className="contactInfo">
            <h3>Mike Lamadrid</h3>
            <p>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              mikealamadrid@hotmail.com <br />
              <FontAwesomeIcon className="icon" icon={faPhone} />
              1-862-888-4791 <br />
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              Passaic, New Jersey <br />
              <FontAwesomeIcon className="icon" icon={faCode} />
              github.com/Lamadrid-Mike <br />
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Resume;
