import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

console.log('You shouldn\'t be looking here 🤓');
console.log('Check this hilarious video out.', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);