import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import MoviesPage from './pages/MoviesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
