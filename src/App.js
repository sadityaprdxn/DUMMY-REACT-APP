import React from 'react';
import logo from './images/logo.png';
import background from './images/chai.jpg'
import './App.css';

function App() {
  return (
	  <header>
      <div className="wrapper">
        <h1>
          <a href="index.html" title="Logo">
            <img src={logo} alt="Logo"/>
          </a>
        </h1>

        <nav>
					<div className="hamburger">
						<span>bar</span>
						<span>bar</span>
						<span>bar</span>
          </div>
          
          <ul class="navbar">
            <li className="active">
              <a href="#banner" title="Home" className="home-section">home</a>
            </li>
            <li>
              <a href="#profession" title="Professional" className="professional-section">profession</a>
            </li>
            <li>
              <a href="#portfolio" title="Portfolio" className="portfolio-section">portfolio</a>
            </li>
            <li>
              <a href="#experience" title="Experience" className="experience-section">experience</a>
            </li>
            <li>
              <a href="#contact" title="Contact" className="contact-section">contact</a>
            </li>
            <li>
              <a href="#FIXME" title="Ellipsis" className="ellipsis">ellipsis</a>
            </li>
          </ul>

					<ul className="social-links">
						<li><a href="#FIXME" target="_blank" className="facebook" title="Facebook" rel="nofollow">facebook</a></li>
						<li><a href="#FIXME" target="_blank" className="instagram" title="Instagram" rel="nofollow">instagram</a></li>
						<li><a href="#FIXME" target="_blank" className="twitter" title="Twitter" rel="nofollow">twitter</a></li>
						<li><a href="#FIXME" target="_blank" className="youtube" title="You Tube" rel="nofollow">you tube</a></li>
					</ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
