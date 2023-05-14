import "../styles/Projects.css";
import Cards from "./Cards";
import { motion } from "framer-motion";
import jsLogo from "../img/super-m.png";
import reactLogo from "../img/miracles.png";
import todoLogo from "../img/todo-logo.png";
import clockInLogo from "../img/clock-in-app.png";

const Projects = function () {
  return (
    <div>
      <h1 className="about-h1">Projects...</h1>
      <div className="projects-container">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.6 }}
        >
          <Cards
            link="https://nexustential.github.io/MiraclesMassage"
            src={reactLogo}
            info="Miracles-Massage"
            about="This was one of my first projects, after I was done with my Bootcamp, we created this static website really well designed, I was in charge of the navbar and the mobile-friendly feature."
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.7 }}
        >
          <Cards
            link="https://supermproject.netlify.app/index.html"
            src={jsLogo}
            info="Super-M Project DOM"
            about="Implemented dom-manipulation for this project, I created a cart feature
            that will be adding the number of products along with the final price of all the items."
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
            about="I built this simple todo-app using object-oriented programming with classes and capsulation, I have to admit object oriented programming is way more organized."
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
            about="Again I used object-oriented programming for this app, really challenging, and learned a lot about classes, I will be soon adding a backend feature to save all the usernames and worked."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
