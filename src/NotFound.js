import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="row">
      <div className="col s12 m8">
        <h1>404 PAGE NOT FOUND</h1>
        <p className="sub-heading">What are you looking for... 👀. click <Link  to='/'>here</Link> to find my home page.</p>
      </div>
    </div>
  );
}

export default NotFound;
