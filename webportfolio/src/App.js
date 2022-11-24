import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Web from './components/Web';

function App() {
  return (
    <>
    <Router>
  

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Web" element={<Web />} />

          </Routes>

      </Router>
    </>
  );
}

export default App;
