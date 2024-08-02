import Cards from "./Cards";
import { motion } from "framer-motion";
import firstDesign from "../img/web-design-1.png";
import reactLogo from "../img/miracles.png";
import adhocProject from "../img/adhoc-project.png";

export default function Designs() {
  return (
    <div className="projects-container">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4 }}
      >
        <Cards
          link="https://mockup-mikedev.netlify.app/"
          src={firstDesign}
          info="Website"
          about="I came across this cool website design and decided to build it myself—lots of CSS fun involved!"
        />
      </motion.div>

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
          link="https://adhoc-project.netlify.app/"
          src={adhocProject}
          info="Adhoc Project"
          about="This is just a HTML, CSS project I decided to make a long time ago for practicing purposes, I been modifying the website little by little."
        />
      </motion.div>
    </div>
  );
}
