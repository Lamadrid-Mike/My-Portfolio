import * as React from "react";
import "../styles/NavBar.css";
import myAvatar from "../img/profile.jpg";
import myStamp from "../img/my-stamp.png";
import SocialIcons from "./SocialIcons";
import UseScroll from "./UseScroll";
import { Avatar } from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";

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
      <div className="nav-bar-icons-container">
        <Avatar alt="Mike" src={myAvatar} sx={{ width: 66, height: 66 }} />
        <img alt="stamp" src={myStamp} style={{ width: 70, height: 55 }} />
      </div>

      <div className="nav-bar-icons-container">
        <SocialIcons
          name="github"
          link="https://github.com/Lamadrid-Mike"
          icon={<GoMarkGithub fontSize={25} />}
        />
        <SocialIcons
          name="instagram"
          link="https://www.instagram.com/trapcodes/"
          icon={<GrInstagram fontSize={25} />}
        />

        <SocialIcons
          name="codewars"
          link="https://www.codewars.com/users/trapcodes"
          icon={<SiCodewars fontSize={25} />}
        />

        <SocialIcons
          name="linkedin"
          link="https://www.linkedin.com/in/mike-lamadrid-701521244/"
          icon={<BsLinkedin fontSize={25} />}
        />
      </div>
    </div>
  );
}
export default NavBar;
