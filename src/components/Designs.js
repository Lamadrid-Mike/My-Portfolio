import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import "../styles/Projects.css";

//this has become a re-usable component!
export default function Designs({ data, tabTitle }) {
  const [visibleElements, setVisibleElements] = useState({});
  const elementRefs = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = {};
        entries.forEach((entry) => {
          updatedVisibility[entry.target.dataset.id] = entry.isIntersecting;
        });
        setVisibleElements((prevVisibility) => ({
          ...prevVisibility,
          ...updatedVisibility,
        }));
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    elementRefs.current.forEach((ref, id) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="projects-container">
      <h1 className="about-h1">{tabTitle}</h1>
      {data.map((obj) => (
        <div
          key={obj.id}
          data-id={obj.id}
          className={`card-container ${
            visibleElements[obj.id] ? "observer-visible" : ""
          }`}
          ref={(el) => {
            elementRefs.current.set(obj.id, el);
          }}
        >
          <motion.div
            className="motion-div"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
          >
            <Cards
              link={obj.link}
              src={obj.src}
              info={obj.info}
              about="Transform your business with our custom digital menus, designed to enhance your customers' dining experience effortlessly."
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
