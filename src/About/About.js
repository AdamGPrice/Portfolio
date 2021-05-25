import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="row">
      <div className="col s12 m8">
        <h2>About Me</h2>
        <p>Hello, My name is Adam. I'm a Computer Science graduate in Nottingham who studied at
          the <a href="https://www.derby.ac.uk/" target="_blank" rel="noreferrer">University of Derby</a>.
          </p>
        <p>
          My main interests include problem solving, mathematics, machine learning and web development.
          I have experience with various programmming languages and technologies from embedded systems to distributed web applications.
        </p>

        <p>Check out my <Link  to='/projects'>Projects</Link> page to 
        find out about previous projects I have worked on and what I am working on next.</p>

        <h2>Contact</h2>
        <p>
          Feel free to reach out if you want a to build something together, have a question, or just want to connect.
        </p>
        <p>&lt;SOCIAL LINKS HERE&gt;</p>
      </div>
    </div>
  );
}

export default About;
