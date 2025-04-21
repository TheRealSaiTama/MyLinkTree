import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark/light theme">
      <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
      <span className="tooltip">Toggle theme</span>
    </button>
  );
}

export default ThemeToggle; 