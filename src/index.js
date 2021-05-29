import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = 'https://twfneqbnbhgztyzhohno.supabase.co';
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

console.log('You shouldn\'t be looking here 🤓');
console.log('Check out this hilarious video.', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

axios.get('https://api.db-ip.com/v2/free/self')
.then((response) => {
  if (response.data.ipAddress !== '80.3.253.213') {
    supabase
      .from('Visitors')
      .insert([
        { info: response.data },
      ])
      .then(() => {});
  }
}).catch(() => {});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);