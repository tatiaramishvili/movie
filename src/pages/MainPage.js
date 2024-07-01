import React from 'react';
import NavBar from '../components/NavBar';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <NavBar />
      <div className="content">
        <h1>Welcome to MovieMania</h1>
      </div>
    </div>
  );
};

export default MainPage;
