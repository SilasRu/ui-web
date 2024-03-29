import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from './Views/Template';
import Transcript from './Views/Transcript'
import Info from './Views/Info';

const App = () => {
  return (
    <Router>
      <div className="app" id="app">
          <Routes>
            <Route path="/analyzer" element={<Template />}></Route>
            <Route path="/transcript" element={<Transcript />}></Route>
            <Route path="/info" element={<Info />}></Route>
          </Routes>
      </div>
    </Router>
  );
};

export default App;
