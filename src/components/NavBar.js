import * as React from "react";
import "../styles/NavBar.css";
import myAvatar from "../img/profile.jpg";
import { Avatar } from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div>
        <Avatar alt="Mike" src={myAvatar} sx={{ width: 58, height: 58 }} />
      </div>
      <div className="nav-bar-icons-container">
        <div className="footer-icon">
          <GoMarkGithub />
        </div>
        <div className="footer-icon">
          <GrInstagram />
        </div>
        <div className="footer-icon">
          <BsFacebook />
        </div>
        <div className="footer-icon">
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
}
export default NavBar;
