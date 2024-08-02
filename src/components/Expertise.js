import "../styles/Expertise.css";

const skills = [
  "html",
  "javascript",
  "canva",
  "express.js",
  "mongodb",
  "css",
  "bootstrap",
  "react.js",
  "figma",
  "scss",
  "php",
  "wordpress",
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
