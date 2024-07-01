import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="MovieMania Logo" className="logo" />
        <span className="site-name">MovieMania</span>
      </div>
      <div className="nav-links">
        <Link to="/main" className="nav-button red">Main Page</Link>
        <Link to="/movies" className="nav-button green">Movies</Link>
        <button onClick={handleLogout} className="nav-button green">Log Out</button>
      </div>
    </div>
  );
};

export default NavBar;
