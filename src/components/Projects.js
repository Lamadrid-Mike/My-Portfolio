import "../styles/Projects.css";
import Cards from "./Cards";
import { motion } from "framer-motion";
import jsLogo from "../img/super-m.png";
import todoLogo from "../img/todo-logo.png";
import clockInLogo from "../img/clock-in-app.png";
import guessGame from "../img/guess-game.png";
import tipApp from "../img/tip-app.png";
import cubeImage from "../img/cube.png";
import crystalImage from "../img/crystal-timer.png";

const Projects = function () {
  return (
    <div>
      <h1 className="about-h1">Projects...</h1>
      <div className="projects-container">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.1 }}
        >
          <Cards
            link="https://jazzy-treacle-e0ad5b.netlify.app/"
            src={crystalImage}
            info="Event Timer"
            about="This customer wanted a fun event timer on their website: a red square that spins around and shows the date when you hover over it. They also want to be able to adjust the dates."
          />
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.2 }}
        >
          <Cards
            link="https://benjamin-cube.netlify.app/"
            src={cubeImage}
            info="Cube Project"
            about="
This cube project was developed for a client seeking a dynamic slideshow to showcase their impactful programs. It involved complex CSS and presented a significant challenge."
          />
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        >
          <Cards
            link="https://codes-tip.netlify.app/"
            src={tipApp}
            info="Tip App"
            about="app for splitting bills and tips! Whenever I have a free moment and a fun idea, I dive in and make it happen. Now you can easily share the tab and add that extra tip with ease."
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.4 }}
        >
          <Cards
            link="https://supermproject.netlify.app/index.html"
            src={jsLogo}
            info="Super-M Project"
            about="Implemented dom-manipulation for this project, I created a cart feature
            that will be adding the number of products along with the final price of all the items."
          />
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5 }}
        >
          <Cards
            link="https://guess-flag-game.netlify.app/"
            src={guessGame}
            info="Guess Game"
            about="This was a small project I decided to make also practice some figma, and wireframing ideas. I still working on it, and I will be adding more features soon."
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
