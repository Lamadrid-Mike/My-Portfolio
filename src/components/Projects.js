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
        <img src={ReactLogo} className="first-project-logo logo-properties" />
        <p className="first-project-desc">
          Implemented React.js for this project, my main goal was to make it
          mobile responsive, and creation of the footer.
        </p>
        <img src={JsLogo} className="second-project-logo logo-properties" />
        <p className="second-project-desc">
          Created a shopping cart with Vainilla javascript Dom manipulation
          implemented 😀
        </p>
      </div>
    </>
  );
};

export default Projects;
