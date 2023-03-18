import { Link } from "react-router-dom";
import "./Projects.css";
import BackArrow from "./BackArrow";
import Footer from "./footer";
import jsLogo from "../img/JsLogo.png";
import reactLogo from "../img/react-logo.png";
import Cards from "./Cards";
import { motion } from "framer-motion";

const Projects = function () {
  return (
    <>
      <Link to="/">
        <BackArrow />
      </Link>
      <h1 className="about-h1">Projects...</h1>
      <div className="projects-container">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.6 }}
        >
          <Cards
            link="https://supermproject.netlify.app/index.html"
            src={jsLogo}
            info="Super-M Project DOM"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.7 }}
        >
          <Cards
            link="https://nexustential.github.io/MiraclesMassage"
            src={reactLogo}
            info="Miracles-Massage"
          />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
