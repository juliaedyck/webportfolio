import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
  

        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>

      </Router>
    </>
  );
}

export default App;
