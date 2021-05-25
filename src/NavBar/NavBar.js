import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation().pathname;
  //console.log(location);

  return (
    <div className="row">
      <div className="col s12 m4">
        <h1 className="name">Adam Price</h1>
        <p className="sub-heading name-title">Software Developer</p>
        <div className="nav-btns-mobile left">
          <Link className="link" to='/'>
            <div 
              className={ location !== '/' ? 'custom-btn' : 'custom-btn-selected' }
            >About Me</div></Link>
          <Link className="link" to='/projects'>
            <div 
              className={ location !== '/projects' ? 'custom-btn' : 'custom-btn-selected' }
            >Projects</div></Link>
        </div>
      </div>
      <div className="col s8">
        <div className="nav-btns right">
          <Link className="link" to='/'>
            <div 
              className={ location !== '/' ? 'custom-btn' : 'custom-btn-selected' }
            >About Me</div></Link>
          <Link className="link" to='/projects'>
            <div 
              className={ location !== '/projects' ? 'custom-btn' : 'custom-btn-selected' }
            >Projects</div></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
