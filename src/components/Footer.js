import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        ASN49
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="#home" target="_blank">
          <FaLinkedin />
        </a>
        <a href="#home" target="_blank">
          <FaGithub />
        </a>
        <a href="#home" target="_blank">
          <FaFacebook />
        </a>
        <a href="#home" target="_blank">
          <GrInstagram />
        </a>
        <a href="#home" target="_blank">
          <ImWhatsapp />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ASN49. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
