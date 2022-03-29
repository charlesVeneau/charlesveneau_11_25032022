import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import About from './pages/About';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/mainStyle.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
