import "../styles/Expertise.css";

const skills = [
  "html",
  "javascript",
  "node.js",
  "express.js",
  "mongodb",
  "css",
  "react.js",
  "figma",
];

const Expertise = (props) => {
  return (
    <div className="skill-box-container">
      {skills.map((el) => {
        return <div className="skill-box">{el}</div>;
      })}
    </div>
  );
};

export default Expertise;
