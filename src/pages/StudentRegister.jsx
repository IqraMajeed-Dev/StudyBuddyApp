
import React, { useState } from "react";
import "../styles/register.css";

function StudentRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    classLevel: "",
    subject: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(form);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Request submitted! We will contact you soon.");
    setForm({ name: "", email: "", classLevel: "", subject: "", phone: "" });
  };

  return (
    <div className="form-wrapper">
      <h2>Find a Tutor</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          placeholder="Student Name"
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
          placeholder="Class / Grade"
          value={form.classLevel}
          onChange={(e) => setForm({ ...form, classLevel: e.target.value })}
          required
        />
        <input
          placeholder="Subject Needed"
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
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default StudentRegister;
