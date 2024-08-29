import Cards from "./Cards";
import { motion } from "framer-motion";

export default function Designs() {
  const importImages = (r) => r.keys().map(r);
  const images = importImages(
    require.context("../img/designs", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="projects-container">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.6 }}
      >
        <Cards
          link="https://mockup-mikedev.netlify.app/"
          src={images[5]}
          info="Website"
          about="I came across this cool website design and decided to build it myself—lots of CSS fun involved!"
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.7 }}
      >
        <Cards
          link="https://nexustential.github.io/MiraclesMassage"
          src={images[3]}
          info="Miracles-Massage"
          about="This was one of my first projects, after I was done with my Bootcamp, we created this static website really well designed, I was in charge of the navbar and the mobile-friendly feature."
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8 }}
      >
        <Cards
          link="https://adhoc-project.netlify.app/"
          src={images[0]}
          info="Adhoc Project"
          about="This is just a HTML, CSS project I decided to make a long time ago for practicing purposes, I been modifying the website little by little."
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.9 }}
      >
        <Cards
          link="https://csrbenefitshub.com"
          src={images[2]}
          info="CSR benefits"
          about="I contributed to a WordPress project utilizing Avada theme. This experience was enjoyable and provided valuable insights into the drag-and-drop interface of WordPress"
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <Cards
          link="https://oneplanet-onepeople.com/"
          src={images[4]}
          info="One planet"
          about="I contributed to another WordPress project by developing various website sections and converting PDF image files into functional web pages."
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1.1 }}
      >
        <Cards
          link="https://barmenusample.netlify.app/"
          src={images[1]}
          info="Bar menu"
          about="I have observed that some restaurants use QR codes to display their menus. I plan to replicate this approach by incorporating a QR code for similar purposes."
        />
      </motion.div>
    </div>
  );
}
