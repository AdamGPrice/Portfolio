import ProjectCard from './ProjectCard';
import projects from './rawInfo';

const Projects = () => {
  const projectsShowcase = projects.showcase.map((project, index) => {
    return(
      <ProjectCard
        key={project.title + index}
        project={project}
        isShowcase={true}
      />
    )
  });

  const projectsSimple = projects.simple.map((project, index) => {
    return(
      <ProjectCard 
        key={project.title + index}
        project={project}
        isShowcase={false}
      />
    )
  });

  return (
    <div className="row">
      <div className="col s12">
        <h2>Projects</h2>
        <p>Here are some cool projects I have worked on! A mix of university and personal projects.</p>
        <div className="row">
          {projectsShowcase}
        </div>
        <h2>More on Github</h2>
        <div className="row">
          {projectsSimple}
        </div>
      </div>
    </div>
  );
}

export default Projects;
