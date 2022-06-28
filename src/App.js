import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Divisions from './Divisions.js';
import Islanders from './Islanders.js';
import Graphs from './Graphs.js';
import Offers from './Offers.js';

function App() {
  return (
    // kumalala
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Divisions" element={<Divisions />} />
          <Route path="/Graphs" element={<Graphs />} />
          <Route path="/Offers" element={<Offers />} />
        </Routes>
    </Router>
  );
}

export default App;
