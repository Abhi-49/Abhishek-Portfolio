import React from 'react';
import './Portfolio.css';
import IMG1 from '../assets/portfo1.png';
import IMG2 from '../assets/portfo2.png';
import IMG3 from '../assets/portfo3.png';
import IMG4 from '../assets/portfo4.png';
import IMG5 from '../assets/portfo5.png';
import IMG6 from '../assets/portfo6.png';
import IMG7 from '../assets/portfo7.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Explore Global General Trading',
    demo: 'https://exploreglobalgentrad.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Explore DMCC',
    demo: 'https://exploredmcc.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ziggy Store',
    demo: 'http://ziggystore.ml',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Explore IT',
    demo: 'http://it.exploreglobalgentrad.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Facial Aesthetics',
    demo: 'https://facialaestheticsfordentists.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Jothsna E&C',
    demo: 'http://jothsnaeandc.com',
  },
  {
    id: 7,
    image: IMG7,
    title: 'The Perio Institute',
    demo: 'http://theperioinstitute.com',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
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
