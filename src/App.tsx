import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Views/Home';
import Dev from './Views/Dev';

const App = () => {
  return (
    <Router>
      <div className="app" id="app">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dev" element={<Dev />}></Route>
          </Routes>
      </div>
    </Router>
  );
};

export default App;
