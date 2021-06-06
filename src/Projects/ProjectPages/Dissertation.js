import pdf from '../../assets/Generative_Adversarial_Network_Dissertation.pdf';


const Dissertation = () => {
  return(
    <div>
      <p>
        'Performance Evaluation of Generative Adversarial Networks with Transfer Learning' is the result of a research project
        at university for my independent studies where i evaluate the performance GANs, 
        one with transfer learning and one without and then compare the differences with a classifier network trained on the same dataset. 
      </p>

      <h3>Paper</h3>
      <p><a href="/Generative_Adversarial_Network_Dissertation.pdf" target="_blank" rel="noreferrer">Click here</a> to open the pdf in fullscreen</p>
      <iframe src={pdf} title="Dissertatopm PDF"></iframe>
    </div>
  );
}

export default Dissertation;