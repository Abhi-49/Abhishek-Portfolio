import React from 'react';
import './Header.css';
import { Typewriter } from 'react-simple-typewriter';
import CV from '../assets/AbhiResume.pdf';
import ME from '../assets/pic1.png';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nadar Abhishek Shobanam</h1>
        <h5 className="text-light">
          <Typewriter
            words={['Front End Developer', 'Web Developer']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>

        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="header__socials">
          <a href="#home" target="_blank">
            <FaLinkedin />
          </a>
          <a href="#home" target="_blank">
            <FaGithub />
          </a>
          <a href="#home" target="_blank">
            <FaFacebook />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
