import React from "react";
import "./home.scss";
import Logo from "./avatar.jpg";
import { Link } from "react-router-dom";
import Footer from "./footer";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="avatar1">
            <img src={Logo} />
          </div>
        </div>
        <h2>Mike Lamadrid</h2>
        <p className="text">Passaic, New Jersey</p>
        <div className="btn">
          <Link className="btns" to="/about">
            About me
          </Link>
          <Link className="btns" to="/projects">
            Projects
          </Link>
          <Link className="btns" to="/resume">
            Resume
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
