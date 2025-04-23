import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="about-box">

      <h1>
  About <span style={{ fontFamily: 'cursive' }}>TextUtils</span>
</h1>


        <p>
          TextUtils is a powerful and user-friendly utility tool to manipulate and analyze text efficiently.
          Whether you're a student, developer, or writer, this app provides fast and effective text transformations.
        </p>
        <h2>✨ Features</h2>
        <ul className="features-list">
          <li>🔠 Convert text to&nbsp;<strong>Uppercase</strong></li>
          <li>🔡 Convert text to&nbsp;<strong>Lowercase</strong></li>
          <li>🧹&nbsp;<strong>Clear</strong>&nbsp;the entire&nbsp;<strong>text</strong></li>
          <li>📝 Convert to&nbsp;<strong>Title Case</strong></li>
          <li>🚫&nbsp;<strong>Remove</strong>&nbsp;extra&nbsp;<strong>spaces</strong></li>
          <li>📋&nbsp;<strong>Copy</strong>&nbsp;text to&nbsp;<strong>clipboard</strong></li>
          <li>🔢&nbsp;<strong>Count</strong>&nbsp;characters and&nbsp;<strong>words</strong></li>

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
