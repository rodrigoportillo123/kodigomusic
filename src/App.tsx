// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Login from './pages/Login';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
