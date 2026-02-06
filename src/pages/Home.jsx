
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <h1>Find Trusted Tutors for Every Subject</h1>
        <p>
          Study Buddy connects students with verified tutors.  
          Get 2 days FREE demo classes before you decide.
        </p>
        <div className="hero-buttons">
          <Link to="/find-tutor" className="btn-primary">Find a Tutor</Link>
          <Link to="/become-tutor" className="btn-secondary">Become a Tutor</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How Study Buddy Works</h2>
        <div className="steps">
          <div className="step-card">
            <h3>1. Share Your Requirement</h3>
            <p>Tell us your subject, class and preferred timing.</p>
          </div>
          <div className="step-card">
            <h3>2. Get Free Demo</h3>
            <p>We arrange a 2-day FREE demo with a suitable tutor.</p>
          </div>
          <div className="step-card">
            <h3>3. Continue Confidently</h3>
            <p>If satisfied, continue learning with full support.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Study Buddy?</h2>
        <div className="features">
          <div>✔ Verified & Experienced Tutors</div>
          <div>✔ 2 Days Free Demo Classes</div>
          <div>✔ Personal Support & Guidance</div>
          <div>✔ Online & Home Tutors Available</div>
        </div>
      </section>

      {/* Subjects */}
      <section className="subjects">
        <h2>Subjects We Offer</h2>
        <div className="subject-list">
          <span>Mathematics</span>
          <span>Physics</span>
          <span>Chemistry</span>
          <span>Biology</span>
          <span>English</span>
          <span>Computer Science</span>
          <span>Islamiyat</span>
          <span>Urdu</span>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Looking for a Tutor?</h2>
        <p>Contact us today and get matched with the right tutor.</p>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </section>

    </div>
  );
}

export default Home;
