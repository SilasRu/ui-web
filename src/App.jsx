import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SliderDemo from './Pages/SliderDemo';

const App = () => {
  return (
    <Router>
      <div className="app" id="app">
        <div className="content" id="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sliderDemo" element={<SliderDemo />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
