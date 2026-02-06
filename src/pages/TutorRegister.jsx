
import React, { useState } from "react";
import "../styles/register.css";

function TutorRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    experience: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const tutors = JSON.parse(localStorage.getItem("tutors")) || [];
    tutors.push({ ...form, status: "Pending" });
    localStorage.setItem("tutors", JSON.stringify(tutors));
    alert("Tutor registered successfully! Waiting for approval.");
    setForm({ name: "", email: "", subject: "", phone: "", experience: "" });
  };

  return (
    <div className="form-wrapper">
      <h2>Become a Tutor</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Subject (Math, Physics etc)"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          required
        />
        <input
          placeholder="Phone / WhatsApp"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          placeholder="Experience (years)"
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
          required
        />
        <button type="submit">Register as Tutor</button>
      </form>
    </div>
  );
}

export default TutorRegister;
