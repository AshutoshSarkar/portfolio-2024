import  { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';  // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      (result) => {
        console.log('Email sent:', result);
        alert('Message sent successfully!');
        setFormData({
          from_name: '',
          from_email: '',
          message: '',
        });
      },
      (error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send message, please try again.');
      }
    );
  };

  return (
    <div className="container">
      <div className="form">
        <div className="contact-form">
          <div className="circle one"></div>
          <div className="circle two"></div>
          <form onSubmit={sendEmail}>
            <div className="title">Contact Me</div>
            <div className="input-container">
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="input"
                placeholder="Name"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                className="input"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container textarea">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="title">Contact Info</div>
          <div className="text">
            <div className="information">
              <span className="icon"><FontAwesomeIcon icon={faLocationDot} size='xl' style={{color: "#00b4d8",}} /></span>
              <span> Chaitanya Vihar, Vrindavan, Mathura.</span>
            </div>
            <div className="information">
              <span className="icon"><FontAwesomeIcon icon={faPhone} size='xl' style={{color: "#00b4d8",}} /></span>
              <span>+91-6397534598</span>
            </div>
            <div className="information">
              <span className="icon"><FontAwesomeIcon size='xl' icon={faEnvelope} style={{color:"#00b4d8"}} /></span>
              <span>ashut.sarkar8187@gmail.com</span>
            </div>
          </div>
          <div className="social-media">
            <p>Follow Me</p>
            <div className="social-icons">
              <a href="https://github.com/AshutoshSarkar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} size='2xl' style={{color: "#000000",}} /></a>
              <a href="https://x.com/unicontenthub" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} size="2xl" style={{color: "#000000",}} /></a>
              <a href="https://www.linkedin.com/in/ashutosh-sarkar-07362322b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#0077b5",}} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="big-circle"></div>
      <div className="square"></div>
    </div>
  );
};

export default ContactForm;
