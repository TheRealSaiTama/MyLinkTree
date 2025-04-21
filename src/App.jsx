import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [loadingFadeOut, setLoadingFadeOut] = useState(false);
  const [containerLoaded, setContainerLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingFadeOut(true);
      setContainerLoaded(true);
    }, 1500);
    const timer2 = setTimeout(() => {
      const el = document.getElementById('loading-screen');
      if (el) el.style.display = 'none';
    }, 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.magical-particle').forEach((particle, idx) => {
        const speed = 0.05 * (idx + 1);
        particle.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      const effect = link.querySelector('.link-hover-effect');
      link.addEventListener('mouseenter', () => effect.classList.add('active'));
      link.addEventListener('mouseleave', () => effect.classList.remove('active'));
    });
    return () => {
      links.forEach(link => {
        const effect = link.querySelector('.link-hover-effect');
        link.removeEventListener('mouseenter', () => effect.classList.add('active'));
        link.removeEventListener('mouseleave', () => effect.classList.remove('active'));
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <LoadingScreen fadeOut={loadingFadeOut} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className={`container${containerLoaded ? ' container-loaded' : ''}`}>
        <div className="magical-particle particle-1"></div>
        <div className="magical-particle particle-2"></div>
        <div className="magical-particle particle-3"></div>

        <div className="profile">
          <div className="profile-img-container">
            <img
              src="/me.png"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile-content">
            <h1 className="title">TheRealSaitama</h1>
            <div className="tagline">
              2200+ DSA • LeetCode Knight & CodeChef 5⭐ • GFG 5⭐
            </div>
            <p className="bio">
              Built real‑time emotion recognition & personalized healthcare RL engines. Proficient in Python, Flask, TensorFlow, Golang, and REST API design.
            </p>
          </div>
        </div>

        <div className="links">
          <a href="https://www.instagram.com/stillhatetrigo/" target="_blank" rel="noopener" className="link primary-link">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
            <div className="link-hover-effect"></div>
          </a>
          <a href="https://x.com/CodesPasta" target="_blank" rel="noopener" className="link">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
            <div className="link-hover-effect"></div>
          </a>
          <a href="https://www.linkedin.com/in/therealsaitama" target="_blank" rel="noopener" className="link">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
            <div className="link-hover-effect"></div>
          </a>
          <a href="https://github.com/TheRealSaiTama" target="_blank" rel="noopener" className="link">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
            <div className="link-hover-effect"></div>
          </a>
          <a href="mailto:keshavsde@gmail.com" className="link">
            <i className="fas fa-envelope"></i>
            <span>Contact Me</span>
            <div className="link-hover-effect"></div>
          </a>
        </div>

        <div className="footer">
          <div className="footer-content">
            <p>
              © 2025 TheRealSaiTama | <span className="accent-text">Welcome Hunter</span>
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/stillhatetrigo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/CodesPasta" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/TheRealSaiTama" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
