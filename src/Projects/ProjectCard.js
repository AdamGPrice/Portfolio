import React from 'react';
import './ProjectCard.css'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


class TechBadge extends React.Component {
  render() {
    return(
      <p className="techbadge">{this.props.tech}</p>
    );
  }
}

class ProjectCard extends React.Component {
  render() {
    const techbadges = this.props.value.tech.map((tech, index) => {
      return(
        <TechBadge 
          key={tech + index}
          tech={tech}
        />
      );
    });

    return (
      <div 
        onClick={() => openInNewTab(this.props.value.git)}
        className="projectcard-box col s12 m6 l4">
        <div className="projectcard-innerbox">
          <p className="sub-heading">{this.props.value.title}</p>
          <i class="material-icons open-icon">open_in_new</i>
          <p>{this.props.value.desc}</p>
        </div>
          {techbadges}
      </div>
    );
  }
}

export default ProjectCard;
