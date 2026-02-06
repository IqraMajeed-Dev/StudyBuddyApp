
import React from "react";
import "./contact.css"; // Make sure path is correct

function Contact() {
  return (
    <div className="page contact-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Contact Study Buddy Hub</h1>
        <p>
          Have a question or need assistance? Reach out to us and our team will be happy to help you.
        </p>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-section">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Our Contact Info</h2>
          <p><strong>Email:</strong> usman5118604@gmail.com</p>
          <p><strong>Phone:</strong> +92 3075118604</p>
          <p><strong>Address:</strong> 123 Education Lane, Islamabad, Pakistan</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
