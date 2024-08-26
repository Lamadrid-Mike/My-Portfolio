import Cards from "./Cards";
import { motion } from "framer-motion";
import firstDesign from "../img/web-design-1.png";
import reactLogo from "../img/miracles.png";
import adhocProject from "../img/adhoc-project.png";
import csrbenefits from "../img/csr-benefits.png";
import oneplanet from "../img/one-planet.png";
import barmenu from "../img/bar-menu.png";

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

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8 }}
      >
        <Cards
          link="https://csrbenefitshub.com"
          src={csrbenefits}
          info="CSR benefits"
          about="I contributed to a WordPress project utilizing Avada theme. This experience was enjoyable and provided valuable insights into the drag-and-drop interface of WordPress"
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.9 }}
      >
        <Cards
          link="https://oneplanet-onepeople.com/"
          src={oneplanet}
          info="One planet"
          about="I contributed to another WordPress project by developing various website sections and converting PDF image files into functional web pages."
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <Cards
          link="https://barmenusample.netlify.app/"
          src={barmenu}
          info="Bar menu"
          about="I have observed that some restaurants use QR codes to display their menus. I plan to replicate this approach by incorporating a QR code for similar purposes."
        />
      </motion.div>
    </div>
  );
}
