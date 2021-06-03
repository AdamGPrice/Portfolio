import image from '../../assets/Software_Renderer.gif';

const SoftwareRenderer = () => {
  return(
    <div>
      <p>
        This 3D renderer was created at university for a graphics module. 
        The renderer can load models that use the 
        <a href="http://tfc.duke.free.fr/coding/md2-specs-en.html" target="_blank" rel="noreferrer">.MD2</a>
        (Quake 2 model format) with or without its associated texture and render it to the 
        screen. This project taught me a lot of the core graphics fundamentals 
        for programming because I had to write all of the graphics algorithms 
        myself without the use of modern graphics api's or math libraries. 
        Starting from the basic matrix math operations transforming 3D objects around 
        world space to the rasterisation stage where each
        pixel colour on the screen is set through interpolation.
      </p>

      <h3>Example Model (Marvin the Martian)</h3>
      <img src={image} alt="3D Renderer showcase"></img>

      <h3>Renderer Features</h3>
      <ul className="browser-default">
        <li>Wireframe model view</li>
        <li>object transformations</li>
        <ul className="browser-default">
            <li>Translation</li>
            <li>Rotation</li>
            <li>Scaling</li>
        </ul>
        <li>Backface culling</li>
        <li>Solid flat shading</li>
        <li>Lighting sources</li>
        <ul className="browser-default">
            <li>Ambient light</li>
            <li>Directional light</li>
            <li>Point light</li>
            <li>Spot light</li>
        </ul>
        <li>Diffuse/Specular reflection</li>
        <ul className="browser-default">
            <li>Phong lighting model</li>
        </ul>
        <li>Rasteriser (triangle algorithm)</li>
        <li>Object Textures (with perspective correction)</li>
      </ul>
    </div>
  );
}

export default SoftwareRenderer;