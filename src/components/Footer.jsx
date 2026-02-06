
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* City Filter */}
        <div>
          <h4>Studdy Buddy Hubby City</h4>
          <ul>
            <li>Home / Online Tutors in Karachi</li>
            <li>Home / Online Tutors in Lahore</li>
            <li>Home / Online Tutors in Islamabad</li>
            <li>Home / Online Tutors in Quetta</li>
            <li>Home / Online Tutors in Multan</li>
          </ul>
        </div>

        {/* Subject Filter */}
        <div>
          <h4>Studdy Buddy Hub by Subject</h4>
          <ul>
            <li>Mathematics</li>
            <li>Science</li>
            <li>English</li>
            <li>IELTS</li>
            <li>Quran</li>
          </ul>
        </div>

        {/* Level Filter */}
        <div>
          <h4>Studdy Buddy Hub by Level</h4>
          <ul>
            <li>Matric</li>
            <li>Intermediate</li>
            <li>O Levels</li>
            <li>Masters</li>
            <li>IELTS</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4>More</h4>
          <ul>
            <li>Jobs</li>
            <li>Blogs</li>
            <li>FAQs</li>
            <li>WhatsApp</li>
            <li>Email</li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Center Section ===== */}
      <div className="footer-bottom-center">
        {/* Row 1 */}
        <p>© 2026 Study Buddy Hub. All rights reserved.</p>
        <p>📞 +92 3075118604</p>

        {/* Row 2 Icons */}
        <div className="footer-icons-center">
          <a
            href="https://www.instagram.com/studdybuddy854/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/1BnpXDJuVH/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>

          <a href="usman5118604@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/923075118604"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




// import React from "react";
// import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-grid">
//         {/* Footer main content can be added here if needed */}
//       </div>

//       {/* Footer bottom center */}
//       <div className="footer-bottom-center">
//         <p>© 2026 Study Buddy Hub. All rights reserved.</p>
//         <p>📞 +92 3075118604</p>
//         <div className="footer-icons-center">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://wa.me/923075118604" target="_blank" rel="noopener noreferrer">
//             <FaWhatsapp />
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebookF />
//           </a>
//           <a href="mailto:studybuddyhub@example.com">
//             <FaEnvelope />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
