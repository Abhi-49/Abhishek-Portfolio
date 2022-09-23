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
              <small>6 months</small>
            </article>

            <article className="about__card">
              <FaUserFriends className="about__icon" />
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit . Eaque eos
            voluptatem eius dolorem maiores nihil ducimus at rem ullam
            reprehenderit quidem quia deserunt , molestiae , eligendiamet
            repellat molestias quos totam .
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
