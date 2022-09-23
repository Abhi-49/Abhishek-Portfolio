import React from 'react';
import './Services.css';
import { FaCheck } from 'react-icons/fa';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Have experience building web pages using HTML, CSS and
                Javascript
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Worked with Bootstrap to find wide range of applications</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Proficient in HTML and CSS</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Listening to Clients Requirement and execute the work.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Have Good communication skills to coordinate with clients as
                well as Team leader.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Problem Solving and Error Handling before the application goes
                live.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Knowledgable about HTML, CSS and Javascript.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Also have some idea about Git and version control.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Love to work with CMS tools like Wordpress.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Wordpress</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>One of my favourite CMS tool used.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Have Knowledge regarding Elementor and Gutenberg Block editors.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Worked with Woocommerce for online shop creation.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Will patiently listen to clients and fulfill their needs.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Can do SEO using Yoast/All in One SEO plugin.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>SEO</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Knowledgable with On Page as well as Off Page SEO</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Can do Keyword Research and Volume tracking.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Experience with using SEO free tools like Uber Suggest.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
