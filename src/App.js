import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/knowledge" element={<Knowledge />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
