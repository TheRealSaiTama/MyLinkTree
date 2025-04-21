import React from 'react';

function LoadingScreen({ fadeOut }) {
  return (
    <div id="loading-screen" className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
      <div className="loading-icon">
        <i className="fas fa-tree"></i>
      </div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
}

export default LoadingScreen; 