import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import Allgames from './Allgames';
import Gift from './Gift.jsx';
import Gallery from './Gallery';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="/allgames" element={isAuthenticated ? <Allgames /> : <Navigate to="/login" />} />
        <Route path="/gift" element={isAuthenticated ? <Gift /> : <Navigate to="/login" />} />
        <Route path="/gallery" element={isAuthenticated ? <Gallery /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
