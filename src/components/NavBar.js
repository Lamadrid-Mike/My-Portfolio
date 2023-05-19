import * as React from "react";
import "../styles/NavBar.css";
import myAvatar from "../img/profile.jpg";
import SocialIcons from "./SocialIcons";
import UseScroll from "./UseScroll";
import { Avatar } from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function NavBar() {
  const [navClassList, setNavClassList] = React.useState([]);
  const scroll = UseScroll();

  React.useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className={`nav-bar-container ${navClassList.join(" ")}`}>
      <div>
        <Avatar alt="Mike" src={myAvatar} sx={{ width: 58, height: 58 }} />
      </div>
      <div className="nav-bar-icons-container">
        <SocialIcons
          name="github"
          link="https://github.com/Lamadrid-Mike"
          icon={<GoMarkGithub />}
        />
        <SocialIcons
          name="instagram"
          link="https://www.instagram.com/trapcodes/"
          icon={<GrInstagram />}
        />

        <SocialIcons
          name="facebook"
          link="https://www.facebook.com/zttaonline/"
          icon={<BsFacebook />}
        />

        <SocialIcons
          name="linkedin"
          link="https://www.linkedin.com/in/mike-lamadrid-701521244/"
          icon={<BsLinkedin />}
        />
      </div>
    </div>
  );
}
export default NavBar;
