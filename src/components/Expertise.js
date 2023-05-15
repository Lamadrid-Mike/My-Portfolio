import "../styles/Expertise.css";
import LoadingProgressBar from "./LoadingProgressBar";

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
];

const Expertise = () => {
  return (
    <div className="skill-box-container">
      {skills.map((el) => {
        return <div className="skill-box">{el}</div>;
      })}
      <LoadingProgressBar type="Node.js" percentage={"Learning"} />
      <LoadingProgressBar type="PHP" percentage={"Learning"} />
    </div>
  );
};

export default Expertise;
