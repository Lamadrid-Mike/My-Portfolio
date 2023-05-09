import ProgressBar from "./ProgressBar";
import LoadingProgressBar from "./LoadingProgressBar";

function Skills() {
  return (
    <div className="skill-parent-container">
      <h3>Expertise</h3>
      <div className="skill-container">
        <ProgressBar type="CSS" percentage={90} />
        <ProgressBar type="HTML" percentage={80} />
      </div>
      <div className="skill-container">
        <ProgressBar type="Java Script" percentage={80} />
        <ProgressBar type="React.js" percentage={70} />
      </div>
      <div className="skill-container">
        <LoadingProgressBar type="Node.js" percentage={"Learning"} />
        <LoadingProgressBar type="PHP" percentage={"Learning"} />
      </div>
    </div>
  );
}

export default Skills;
