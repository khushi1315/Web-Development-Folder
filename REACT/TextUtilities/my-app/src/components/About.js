import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="about-box">
        
        <h1>About TextUtils</h1>
        <p>
          TextUtils is a powerful and user-friendly utility tool to manipulate and analyze text efficiently.
          Whether you're a student, developer, or writer, this app provides fast and effective text transformations.
        </p>
        <h2>✨ Features</h2>
        <ul className="features-list">
          <li>🔠 Convert text to <strong>Uppercase</strong></li>
          <li>🔡 Convert text to <strong>Lowercase</strong></li>
          <li>🧹 <strong>Clear</strong> the entire <strong>text</strong></li>
          <li>📝 Convert to <strong>Title Case</strong></li>
          <li>🚫 <strong>Remove</strong> extra <strong>spaces</strong></li>
          <li>📋 <strong>Copy</strong> text to <strong>clipboard</strong></li>
          <li>🔢 <strong>Count</strong> characters and <strong>words</strong></li>
        </ul>


        <p>
          Designed with simplicity in mind, TextUtils helps you process text quickly without distractions.
        </p>

        <p>
          Made with ❤️ using <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong> & modern design principles.
        </p>
      </div>
    </div>
  );
};

export default About;
