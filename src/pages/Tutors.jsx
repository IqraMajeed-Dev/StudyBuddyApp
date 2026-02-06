
import React from "react";
import "./tutors.css";

function Tutors() {
  return (
    <div className="tutors-page">

      <h1>Our Trusted Tutors</h1>
      <p className="tutor-intro">
        All tutors are verified. Contact us to arrange a FREE demo class.
      </p>

      <div className="tutor-grid">

        <div className="tutor-card">
          <h3>Ahmed Khan</h3>
          <p><strong>Subject:</strong> Mathematics</p>
          <p><strong>Level:</strong> Grade 6 – 10</p>
          <p><strong>Experience:</strong> 5 Years</p>
          <p><strong>Mode:</strong> Online / Home</p>
        </div>

        <div className="tutor-card">
          <h3>Sara Ali</h3>
          <p><strong>Subject:</strong> English</p>
          <p><strong>Level:</strong> O Level</p>
          <p><strong>Experience:</strong> 4 Years</p>
          <p><strong>Mode:</strong> Online</p>
        </div>

        <div className="tutor-card">
          <h3>Usman Raza</h3>
          <p><strong>Subject:</strong> Physics</p>
          <p><strong>Level:</strong> FSC / A Level</p>
          <p><strong>Experience:</strong> 6 Years</p>
          <p><strong>Mode:</strong> Home Tutor</p>
        </div>

      </div>

      <div className="tutor-note">
        <p>
          📌 To contact a tutor or arrange a demo, please reach out to us directly.
        </p>
      </div>

    </div>
  );
}

export default Tutors;
