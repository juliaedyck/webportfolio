import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from './pages/Home';
import Web from './pages/Web';
import Media from './pages/Media';
import Comms from './pages/Comms';
import About from './pages/About';

const CropMarks = styled.div`
  position: fixed;
  inset: 12px;
  pointer-events: none;
  z-index: 9999;
  background:
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) top    left  / 16px 1px  no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) top    left  / 1px  16px no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) top    right / 16px 1px  no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) top    right / 1px  16px no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) bottom left  / 16px 1px  no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) bottom left  / 1px  16px no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) bottom right / 16px 1px  no-repeat,
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) bottom right / 1px  16px no-repeat;

  @media (max-width: 820px) {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <CropMarks aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/media" element={<Media />} />
        <Route path="/comms" element={<Comms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
