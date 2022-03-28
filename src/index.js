import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Main';
import { BrowserRouter } from 'react-router-dom'

import './styles/mainStyle.scss'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
