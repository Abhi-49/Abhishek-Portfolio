import React, { useRef } from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6xh8ohj',
        'template_fgaym7t',
        form.current,
        'vCc-H_3lW8SFJqffI'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abhisheknadar49@gmail.com</h5>
            <a
              href="mailto:abhisheknadar49@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GrInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>__heavenly_demon__</h5>
            <a
              href="https://www.instagram.com/___heavenly_demon___/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+971-525031087</h5>
            <a
              href="mailto:abhisheknadar49@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
