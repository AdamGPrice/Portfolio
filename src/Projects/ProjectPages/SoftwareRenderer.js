import image from '../../assets/Software_Renderer.gif';

const SoftwareRenderer = () => {
  return(
    <div>
      <p>
        This is a 3D renderer built in C++ from the ground up without the use of modern graphics APIs and GPU hardware acceleration.
        It's a real-time software renderer so all of the graphics calculation are done on the cpu 
        and the final result of each frame is displayed on screen using the Win32 GDI to plot pixels.
      </p>

      <h3>Example Model (Marvin the Martian)</h3>
      <img src={image} alt="3D Renderer showcase"></img>

      <p>
        The render can load models which are formatted using <a href="http://tfc.duke.free.fr/coding/md2-specs-en.html" target="_blank" rel="noreferrer">.MD2</a>
        &nbsp;(Quake 2 model format) with or without the models associated texture and render it to the screen.
        This project taught me a lot about C++ and the core funamentals of graphics programming
        because i had to write all of the graphics algorithms myself, Starting with the matrix operations
        to transform 3D objects around in world space, the lighiting calculation for the model
        and finally translating the 3D image to the 2D screen with rasterisation to set each pixel colour depending on textures and light sources.
      </p>

      <h3>Renderer Features</h3>
      <ul className="browser-default">
        <li>Wireframe model view</li>
        <li>Object transformations</li>
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