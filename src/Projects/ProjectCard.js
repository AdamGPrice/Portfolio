import './ProjectCard.css'

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
  const techbadges = props.value.tech.map((tech, index) => {
    return(
      <TechBadge 
        key={tech + index}
        tech={tech}
      />
    );
  });

  return (
    <div 
      onClick={() => openInNewTab(props.value.git)}
      className="projectcard-box col s12 m6 l4">
      <div className="projectcard-innerbox">
        <p className="sub-heading">{props.value.title}</p>
        <i className="material-icons open-icon">open_in_new</i>
        <p>{props.value.desc}</p>
      </div>
        {techbadges}
    </div>
  );
}

export default ProjectCard;
