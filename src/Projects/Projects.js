import ProjectCard from './ProjectCard';

const projectsRaw = [
  {
    title: 'Software Graphics Renderer',
    desc: 'A 3D Software renderer built in C++ from the ground up without the use of modern graphic APIs.',
    tech: ['C', 'C++'],
    git: 'https://github.com/AdamGPrice/Software-Graphics-Renderer',
  },
  {
    title: 'x86 Bootloader',
    desc: 'Bootloader written in x86 Assembly with some functionality to draw primitives to the screen.',
    tech: ['Assembly'],
    git: 'https://github.com/AdamGPrice/x86-Graphics',
  },
  {
    title: 'Table Booking Application',
    desc: 'Scalable table booking web application for bars/pubs using Docker containers for instant server deployment.',
    tech: ['JavaScript', 'Docker', 'MySQL'],
    git: 'https://github.com/AdamGPrice/Table-Booking-Application',
  },
  {
    title: 'Interpreter Language, SIMP',
    desc: 'SIMP is a simple interpreter language built with JavaCC.',
    tech: ['Java'],
    git: 'https://github.com/AdamGPrice/SIMP-Language-Interpreter',
  },
  {
    title: 'Generative Adverserial Network Project',
    desc: 'A project which evaluates the performance of GANs with and without the aid of transfer learning.',
    tech: ['Python', 'Tensorflow'],
    git: 'https://github.com/AdamGPrice/Generative-Adversarial-Network',
  },
]

function Projects() {
  const projects = projectsRaw.map((value, index) => {
    return(
      <ProjectCard 
        key={value.title + index}
        value={value}
      />
    )
  });

  return (
    <div className="row">
      <div className="col s12">
        <h2>Projects</h2>
        <p>Here are some cool projects I have worked on! A mix of university and personal projects.</p>
        <div className="row">
          {projects}
        </div>
      </div>
    </div>
  );
}

export default Projects;
