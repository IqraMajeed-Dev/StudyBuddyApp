
import React, { useEffect, useState } from "react";
import "../styles/register.css";

function AdminDashboard() {
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setTutors(JSON.parse(localStorage.getItem("tutors")) || []);
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  const updateTutorStatus = (index, status) => {
    const newTutors = [...tutors];
    newTutors[index].status = status;
    setTutors(newTutors);
    localStorage.setItem("tutors", JSON.stringify(newTutors));
  };

  return (
    <div className="admin-wrapper">
      <h2>Admin Dashboard</h2>

      {/* Tutors */}
      <div className="admin-section">
        <h3>Registered Tutors</h3>
        {tutors.length === 0 && <p>No tutors registered yet.</p>}
        {tutors.map((tutor, index) => (
          <div className="card" key={index}>
            <p><b>Name:</b> {tutor.name}</p>
            <p><b>Email:</b> {tutor.email}</p>
            <p><b>Subject:</b> {tutor.subject}</p>
            <p><b>Phone:</b> {tutor.phone}</p>
            <p><b>Experience:</b> {tutor.experience} years</p>
            <span className="status">{tutor.status}</span>
            {tutor.status === "Pending" && (
              <div>
                <button onClick={() => updateTutorStatus(index, "Approved")}>
                  Approve
                </button>
                <button onClick={() => updateTutorStatus(index, "Rejected")}>
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Students */}
      <div className="admin-section">
        <h3>Student Requests</h3>
        {students.length === 0 && <p>No students yet.</p>}
        {students.map((student, index) => (
          <div className="card" key={index}>
            <p><b>Name:</b> {student.name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Class:</b> {student.classLevel}</p>
            <p><b>Subject:</b> {student.subject}</p>
            <p><b>Phone:</b> {student.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
