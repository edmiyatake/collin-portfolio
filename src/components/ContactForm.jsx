import React, { useState } from 'react';
import './ContactForm.css';
import { FaPaperPlane, FaMapMarker, FaPhone, FaEnvelope, FaGithub, FaCodepen, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    setTimeout(() => {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 1000);
  };

  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>

      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn btn-primary send-button" id="submit" type="submit" disabled={submitted}>
            <div className="alt-send-button">
              <FaPaperPlane />
              <span className="send-text">{submitted ? 'SENDING...' : 'SEND'}</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FaMapMarker className="fa-2x" />
              <span className="contact-text place">Arcadia, California</span>
            </li>
            <li className="list-item">
              <FaPhone className="fa-2x" />
              <span className="contact-text phone">
                <a href="tel:1-212-555-5555">(111) 111-1111</a>
              </span>
            </li>
            <li className="list-item">
              <FaEnvelope className="fa-2x" />
              <span className="contact-text gmail">
                <a href="mailto:hitmeup@gmail.com">hitmeup@gmail.com</a>
              </span>
            </li>
          </ul>

          <hr />

          <ul className="social-media-list">
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaGithub /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaCodepen /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaTwitter /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaInstagram /></a></li>
          </ul>

          <hr />
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
