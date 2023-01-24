import React from 'react';
import './About.css';
import Ab from '../assets/pic2.png';
import { FaAward, FaUserFriends, FaFolder } from 'react-icons/fa';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Ab} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>8+ months</small>
            </article>

            <article className="about__card">
              <FaUserFriends className="about__icon" />
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div> 

          <p>
            Hey, I'm Nadar Abhishek Shobanam but I like being called Abhishek as
            it's my first name. I am a Frontend Web Developer and Web Developer.
            I like working with Wordpress which is a CMS tool. Passionate about
            music as it is stress buster and am willing to learn new
            technologies and creative coding.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
