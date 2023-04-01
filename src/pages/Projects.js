import { Link } from "react-router-dom";
import "../styles/Projects.css";
import BackArrow from "../components/BackArrow";
import Footer from "../components/footer";
import Cards from "../components/Cards";
import { motion } from "framer-motion";
import jsLogo from "../img/JsLogo.png";
import reactLogo from "../img/react-logo.png";
import todoLogo from "../img/todo-logo.png";
import clockInLogo from "../img/clock-in-logo.png";

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
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8 }}
        >
          <Cards
            link="https://oop-todo-app.netlify.app/"
            src={todoLogo}
            info="OOP Todo app"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.9 }}
        >
          <Cards
            link="https://punch-in-app.netlify.app/"
            src={clockInLogo}
            info="Clock in app"
          />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
