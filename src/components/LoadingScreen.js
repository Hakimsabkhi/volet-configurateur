import React from 'react';
import './LoadingScreen.css'; // Import your CSS file here

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}>
          {progress}% {/* Display the progress percentage label */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
