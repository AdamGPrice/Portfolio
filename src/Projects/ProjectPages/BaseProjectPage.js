import './BaseProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';  

import projects from '../rawInfo';

// Pages
import SoftwareRenderer from './SoftwareRenderer';
import Dissertation from './Dissertation';

const getProjectInfo = (location) => {
  const project = projects.showcase.filter((project) => {
    return project.dir === location;
  });
  return project[0];
}

const getProjectBody = (project) => {
  let body = <div></div>;
  switch(project.body) {
    case 'SoftwareRenderer':
      body = <SoftwareRenderer/>;
      break;
    case 'Dissertation':
      body = <Dissertation/>;
      break;
    default:
      break;
  }
  return body;
}

const TechBadge = (props) => {
  return(
    <span><p className="techbadge-page">{props.tech}</p> </span>
  );
}

const BaseProjectPage = () => {
  const location = useLocation().pathname;
  const project = getProjectInfo(location);
  console.log(project);

  const techbadges = project.techlong.map((tech, index) => {
    return(
        <TechBadge
        key={tech + index}
          tech={tech}
        />
    );
  });

  const body = getProjectBody(project);
  
  return(
    <div className="row">
      <div className="col s12 m12 l8">
        <h2>{project.title}</h2>
        <div>
          {techbadges}
        </div>
        {body}
        <h3>
          Check out the code
        </h3>
        <a 
          href={project.git} 
          target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="social-link" icon={faGithub} />
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default BaseProjectPage;