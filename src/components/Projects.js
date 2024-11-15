import "../styles/Projects.css";
import Cards from "./Cards";
import projectsData from "../data/projectsData";

const Projects = function () {
  return (
    <div>
      <h1 className="about-h1">Projects...</h1>
      <div className="projects-container">
        {projectsData.map((e, i) => (
          <Cards
            key={e.id}
            link={e.link}
            src={e.src}
            info={e.info}
            about={e.about}
            duration={`0.${i + 4}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
