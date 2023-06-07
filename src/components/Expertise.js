import "../styles/Expertise.css";

const skills = [
  "html",
  "javascript",
  "node.js",
  "express.js",
  "mongodb",
  "css",
  "bootstrap",
  "react.js",
  "figma",
  "scss",
  "php",
  "procreate",
];

const Expertise = () => {
  return (
    <div className="skill-box-container">
      {skills.map((el, i) => {
        return (
          <div key={i} className="skill-box">
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Expertise;
