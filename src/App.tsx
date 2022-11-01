import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
