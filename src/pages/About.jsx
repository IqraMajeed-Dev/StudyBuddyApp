
import React from "react";
import studyImage1 from "../assets/study1.jpg";
import studyImage2 from "../assets/study2.jpg";

function About() {
  return (
    <div className="page about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Connecting Students with Expert Tutors Worldwide</h1>
        <p>
          At Study Buddy Hub, we understand the challenges students face in their academic journey.
          We go beyond traditional tutoring methods to provide personalized support, mentorship, and
          guidance to help every student succeed.
        </p>
      </section>

      {/* Mission Section (Text + Images Inline) */}
      <section className="about-section">
        <div className="about-block">
          <div className="about-block-text">
            <h2>Our Mission</h2>
            <p>
              Study Buddy Hub links students with trusted tutors who guide, motivate, and help them achieve their academic goals.
              {/* Study Buddy Hub is dedicated to connecting students with highly qualified tutors from */}
              {/* top institutions. Our mission is to not only improve academic performance but also build
              confidence, inspire learning, and develop essential skills that last a lifetime. */}
            </p>
            {/* <p>
              We believe that every student deserves a mentor who can guide them effectively and help
              them reach their academic goals.
            </p> */}
          </div>
          <div className="about-block-images">
            <img src={studyImage1} alt="Students learning together" />
            <img src={studyImage2} alt="Tutor helping a student" />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Study Buddy Hub started with a vision to make high-quality tutoring accessible to all
          students. We connect learners with top-tier tutors from prestigious universities and
          institutions. Our tutors not only provide academic guidance but also act as mentors,
          helping students set goals, stay motivated, and develop effective study habits.
        </p>
        <p>
          We believe in personalized learning experiences. Every student is unique, and we design
          our approach to match their individual learning style, pace, and academic goals.
          Study Buddy Hub empowers students to thrive academically and personally.
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h3>100% Positive Feedback</h3>
        </div>
        <div className="stat-card">
          <h3>95% Exam Success Rate</h3>
        </div>
        <div className="stat-card">
          <h3>100% Verified Tutors</h3>
        </div>
      </section>

      {/* FAQ Card Section */}
      <section className="faq-card">
        <h2>Frequently Asked Questions</h2>
        <p>
          Welcome to Study Buddy Hub – your platform to connect with expert tutors. We ensure that
          every student receives personalized guidance and mentorship to excel academically.
        </p>

        <h3>Is registration required with Study Buddy Hub?</h3>
        <p>Yes, all students and parents must register to access our services and connect with tutors.</p>

        <h3>What are the charges for using Study Buddy Hub?</h3>
        <p>
          Charges depend on the tutor, subject, and session duration. We maintain transparent
          pricing and provide flexible options for every student.
        </p>

        <h3>What information is shared publicly?</h3>
        <p>
          Only essential details like your learning needs and tutor match preferences are shared.
          Personal information remains confidential.
        </p>

        <h3>Can Study Buddy Hub help me find a tutor?</h3>
        <p>
          Absolutely! Our team can assist in finding the perfect tutor for your needs based on
          subject, level, and learning style.
        </p>
      </section>
    </div>
  );
}

export default About;
