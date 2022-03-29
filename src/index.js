import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import About from './pages/About';
import Error from './pages/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/mainStyle.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
