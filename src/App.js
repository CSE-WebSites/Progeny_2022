import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Homealt/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About"
function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
  );
}

export default App;
