import React from "react";
import "./home.css";
import Logo from "./avatar.jpg";
import { Link } from "react-router-dom";
import Footer from "./footer";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="container">
          <div className="avatar1">
            <img alt="logo-picture" src={Logo} />
          </div>
        </div>
        <h2>Mike Lamadrid</h2>
        <p className="text">New Jersey, USA</p>
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
      </div>
    );
  }
}

export default Home;
