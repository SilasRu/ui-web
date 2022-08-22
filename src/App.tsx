import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from './Views/Template';

const App = () => {
  return (
    <Router>
      <div className="app" id="app">
          <Routes>
            <Route path="/template" element={<Template />}></Route>
          </Routes>
      </div>
    </Router>
  );
};

export default App;
