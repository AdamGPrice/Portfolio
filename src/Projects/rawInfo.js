const showcase = [
  {
    title: 'Software Graphics Renderer',
    desc: 'A 3D Software renderer built in C++ from the ground up without the use of modern graphic APIs.',
    shortdesc: '3D Renderer built from the ground up.',
    tech: ['C', 'C++'],
    techlong: ['C', 'C++', 'Renderer', 'Rasteriser'],
    git: 'https://github.com/AdamGPrice/Software-Graphics-Renderer',
    dir: '/software-renderer',
    body: 'SoftwareRenderer',
  },
  {
    title: 'Generative Adversarial Network Evaluation',
    desc: 'Evaluating the performance of GANs with and without the aid of transfer learning.',
    shortdesc: 'Evaluating the performance of GANs.',
    tech: ['Python', 'Machine Learning'],
    techlong: ['Python', 'Tensorflow', 'Machine Learning', 'Image Synthesis'],
    git: 'https://github.com/AdamGPrice/Generative-Adversarial-Network',
    dir: '/generative-adversarial-networks-evaluation',
    body: 'Dissertation'
  },
]

const simple = [
  {
    title: 'x86 Bootloader',
    desc: 'Bootloader written in x86 Assembly with some functionality to draw primitives to the screen.',
    tech: ['Assembly'],
    git: 'https://github.com/AdamGPrice/x86-Graphics',
  },
  {
    title: 'Table Booking App',
    desc: 'Scalable table booking web application for bars/pubs using Docker containers and kubernetes.',
    tech: ['JS', 'Node', 'Docker', 'MySQL'],
    techlong: ['JavaScript', 'Node', 'Express', 'Docker', 'Kubernetes', 'MySQL'],
    git: 'https://github.com/AdamGPrice/Table-Booking-Application',
    dir: '/table-booking-app',
    body: 'TableBookingApp',
  },
  {
    title: 'Interpreter Language, SIMP',
    desc: 'SIMP is a simple interpreter language built with JavaCC.',
    tech: ['Java'],
    git: 'https://github.com/AdamGPrice/SIMP-Language-Interpreter',
  },
  {
    title: 'Extending Xv6 Operating System',
    desc: 'Adding extra functionality to the Xv6 Operating System through system calls.',
    tech: ['C', 'Linux', 'OS'],
    git: 'https://github.com/AdamGPrice/Xv6-Operating-System',
  },
  {
    title: 'JS Neural Network Library',
    desc: 'Fully connected neural network library built in JavaScript for fun.',
    tech: ['JS', 'Machine Learning'],
    git: 'https://github.com/AdamGPrice/JavaScript-Neural-Network',
  },
]

const projects = { showcase, simple };

export default projects;