import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from './Views/Template';
import Transcript from './Views/Transcript'
import Test from './Views/Test'

const App = () => {
  return (
    <Router>
      <div className="app" id="app">
          <Routes>
            <Route path="/analyzer" element={<Template />}></Route>
            <Route path="/transcript" element={<Transcript />}></Route>
            <Route path="/" element={<Test />}></Route>
          </Routes>
      </div>
    </Router>
  );
};

export default App;
