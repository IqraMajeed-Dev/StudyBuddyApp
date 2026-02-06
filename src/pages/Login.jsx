
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const students = JSON.parse(localStorage.getItem("students")) || [];
//     const tutors = JSON.parse(localStorage.getItem("tutors")) || [];

//     const allUsers = [...students, ...tutors];

//     const user = allUsers.find(
//       (u) => u.email === form.email && u.password === form.password
//     );

//     if (user) {
//       localStorage.setItem("currentUser", JSON.stringify(user));
//       alert(`Welcome ${user.name}!`);
//       navigate("/");
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <>
//       {/* ===== INLINE CSS ===== */}
//       <style>{`
//         body {
//           margin: 0;
//           padding: 0;
//           background: #f7f7f7;
//         }

//         .auth-page {
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #f7f7f7;
//         }

//         .form-container {
//           width: 100%;
//           max-width: 420px;
//           background: #f4f6f8;
//           padding: 35px 30px;
//           border-radius: 15px;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.12);
//           text-align: center;
//         }

//         .form-container h2 {
//           color: navy;
//           margin-bottom: 25px;
//           font-size: 1.8rem;
//         }

//         .form-container form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .form-container input {
//           padding: 12px 14px;
//           font-size: 1rem;
//           border-radius: 6px;
//           border: 1px solid #ccc;
//           outline: none;
//         }

//         .form-container input:focus {
//           border-color: navy;
//           box-shadow: 0 0 5px rgba(0,0,128,0.3);
//         }

//         .form-container button {
//           margin-top: 10px;
//           padding: 12px;
//           background: navy;
//           color: white;
//           font-size: 1rem;
//           font-weight: 500;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .form-container button:hover {
//           background: #1b2f5c;
//         }

//         @media (max-width: 480px) {
//           .form-container {
//             margin: 0 15px;
//             padding: 25px 20px;
//           }

//           .form-container h2 {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>

//       {/* ===== LOGIN FORM ONLY ===== */}
//       <div className="auth-page">
//         <div className="form-container">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
