import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import BackArrow from "./BackArrow";
import ReactLogo from "../img/react-logo.png";
import JsLogo from "../img/JsLogo.png";

const Projects = function (props) {
  return (
    <>
      <Link to="/">
        <BackArrow />
      </Link>
      <div className="projects-container">
        <div className="projects-cards">
          <img src={ReactLogo} className="first-project-logo logo-properties" />
          <h1 className="align-text">
            {/* Implemented React.js for this project, my main goal was to make it
            mobile responsive, and creation of the footer. */}
            Work in progress...
          </h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
