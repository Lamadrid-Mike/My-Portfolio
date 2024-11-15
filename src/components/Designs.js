import Cards from "./Cards";
import { motion } from "framer-motion";
import evWebsiteImg from "../img/designs/ev-website.png";
import mockUpImg from "../img/designs/mock-up.png";
import miraclesImg from "../img/designs/miracles.png";
import adhocImg from "../img/designs/adhoc-project.png";
import csrImg from "../img/designs/csr-benefits.png";
import oneImg from "../img/designs/one-planet.png";

export default function Designs() {
  return (
    <div className="projects-container">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.7 }}
      >
        <Cards
          link="https://evchargerinstallnj.com/"
          src={evWebsiteImg}
          info="Ev-Charger"
          about="A company specializing in installing vehicle chargers requested a website, which I developed using WordPress, ensuring it was optimized for mobile responsiveness."
        />
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8 }}
      >
        <Cards
          link="https://mockup-mikedev.netlify.app/"
          src={mockUpImg}
          info="Portfolio Website"
          about="I came across this cool website design and decided to build it myself—lots of CSS fun involved!"
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.9 }}
      >
        <Cards
          link="https://nexustential.github.io/MiraclesMassage"
          src={miraclesImg}
          info="Miracles Massage"
          about="This was one of my first projects, after I was done with my Bootcamp, we created this static website really well designed, I was in charge of the navbar and the mobile-friendly feature."
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.9 }}
      >
        <Cards
          link="https://adhoc-project.netlify.app/"
          src={adhocImg}
          info="Adhoc Project"
          about="This is just a HTML, CSS project I decided to make a long time ago for practicing purposes, I been modifying the website little by little."
        />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <Cards
          link="https://csrbenefitshub.com"
          src={csrImg}
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
          src={oneImg}
          info="One planet"
          about="I contributed to another WordPress project by developing various website sections and converting PDF image files into functional web pages."
        />
      </motion.div>
    </div>
  );
}
