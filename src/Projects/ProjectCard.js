import { Link } from 'react-router-dom';
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const TechBadge = (props) => {
  return(
    <p className="techbadge">{props.tech}</p>
  );
}

const ProjectCard = (props) => {
  const techbadges = props.project.tech.map((tech, index) => {
    return(
      <TechBadge 
        key={tech + index}
        tech={tech}
      />
    );
  });

  if (props.isShowcase) {
    return(
      <Link to={`${props.project.dir}`}>
      <div 
        className="projectcard-box col s12 m6 l4">
        <div className="projectcard-innerbox">
          <p className="sub-heading showcase-heading">{props.project.title}</p>
          <i className="material-icons open-icon">read_more</i>
          <p>{props.project.desc}</p>
        </div>
          {techbadges}
      </div>
      </Link>
    )
  } else {
    return (
      <div 
        onClick={() => openInNewTab(props.project.git)}
        className="projectcard-box col s12 m6 l4">
        <div className="projectcard-innerbox">
          <p className="sub-heading">{props.project.title}</p>
          <FontAwesomeIcon className="github-icon" icon={faGithub} />
          <i className="material-icons open-icon">open_in_new</i>
          <p>{props.project.desc}</p>
        </div>
          {techbadges}
      </div>
    );
  }
}

export default ProjectCard;
