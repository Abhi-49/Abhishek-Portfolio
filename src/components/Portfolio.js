import React from 'react';
import './Portfolio.css';
import IMG1 from '../assets/portfo1.png';
import IMG2 from '../assets/portfo2.png';
import IMG3 from '../assets/portfolio4.png';
import IMG4 from '../assets/portfolio5.png';
import IMG5 from '../assets/portfolio6.png';
import IMG6 from '../assets/portfolio7.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Website For Explore Global General Trading',
    github: 'https://github.com',
    demo: 'https://exploreglobalgentrad.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Website for Explore DMCC',
    github: 'https://github.com',
    demo: 'https://exploredmcc.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
