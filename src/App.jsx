




import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tutors from "./pages/Tutors";

// ✅ NEW PAGES
import TutorRegister from "./pages/TutorRegister";
import StudentRegister from "./pages/StudentRegister";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // State to store all registered users (login/register users)
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <div className="app-layout">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home users={users} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tutors" element={<Tutors />} />

            {/* Auth Pages */}
            {/* <Route path="/register" element={<Register addUser={addUser} />} />
            <Route path="/login" element={<Login users={users} />} /> */}

            {/* Study Buddy Core Features */}
            <Route path="/become-tutor" element={<TutorRegister />} />
            <Route path="/find-tutor" element={<StudentRegister />} />

            {/* Admin (Only You) */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




