import ProgressBar from "./ProgressBar";
import LoadingProgressBar from "./LoadingProgressBar";
import Expertise from "./Expertise";

function Skills() {
  return (
    <div className="skill-parent-container">
      <h3>Expertise</h3>
      <Expertise />
      <div className="skill-container">
        <LoadingProgressBar type="Node.js" percentage={"Learning"} />
        <LoadingProgressBar type="PHP" percentage={"Learning"} />
      </div>
    </div>
  );
}

export default Skills;
