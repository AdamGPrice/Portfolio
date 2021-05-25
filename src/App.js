import NavBar from './NavBar/NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App container">
      <NavBar />
      <Route exact path='/' component={About}/>
      <Route exact path='/projects' component={Projects}/>
    </div>
  );
}

export default App;
