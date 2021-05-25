import NavBar from './NavBar/NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import React from 'react';
import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { rickroll: 0 };
  }

  incrementRickRoll() {
    this.setState({ rickroll: this.state.rickroll + 1});
    if (this.state.rickroll > 20) {
      window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
  }

  render() {
    return (
      <div className="App container">
        <NavBar
          incrementRickRoll={(value) => this.incrementRickRoll(value)}
        />
        <Route exact path='/' component={About}/>
        <Route exact path='/projects' component={Projects}/>
      </div>
    );
  }
}

export default App;
