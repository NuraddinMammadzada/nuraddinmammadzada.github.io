import React, { useState, useEffect } from 'react';
import './styles/LoadingScreen.css'; // Import the CSS file

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;