import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './About.css';

const About = () => {
  return (
    <div className="row">
      <div className="col s12 m8">
        <h2>About Me</h2>
        <p>Hello, my name is Adam. I'm a Software Developer 
          at <a href="https://www.redboxvoice.com/" target="_blank" rel="noreferrer">RedBox</a> who studied Computer Science 
          at <a href="https://www.derby.ac.uk/" target="_blank" rel="noreferrer">The University of Derby</a>.
          </p>
        <p>
          My main interests include problem solving, mathematics, machine learning and web development.
          I have experience with various programming languages and technologies from working on a range of projects 
          from embedded systems to distributed web applications.
        </p>

        <p>Check out my <Link  to='/projects'>Projects</Link> page to 
        find out about previous projects I have worked on and what I am working on next.</p>

        <h2>Contact</h2>
        <p>
          Feel free to reach out if you want a to build something together, have a question, or just want to connect.
        </p>
        <p><a href="mailto:adam.price9616@gmail.com" rel="noreferrer">adam.price9616@gmail.com</a></p>
        <p>
          <a 
            href="https://github.com/AdamGPrice" 
            target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-link" icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/adamgprice" 
            target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-link" icon={faLinkedinIn} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
