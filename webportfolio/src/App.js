import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Web from './components/Web';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
    <Router>
  

        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/Web" element={<Web />} /> */}

          </Routes>

      </Router>
    </>
  );
}

export default App;
