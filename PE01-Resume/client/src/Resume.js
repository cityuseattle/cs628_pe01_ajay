import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>Ajay</h1>
        <p>123 Main Street, Anytown USA, 12345 | (123) 456-7890 | studentname@email.com</p>
      
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>Master of Science in Computer Science</p>
        <p> University of XYZ, Anytown USA | May 2023 </p>
        <p> GPA: 3.9/4.0 </p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <p> Programming languages: Java, Python, JavaScript, C++</p>
        <p>   Frameworks and libraries: React, Spring Boot, Django, Node.js, Express.js</p>
        <p>    Database systems: MySQL, MongoDB</p>
        <p>    Operating systems: Windows, linux</p>
        <p>    Version control: Git</p>
      </div>

      <div className="resume-section">
        <h2>Work Experience</h2>
        <h3>Software Development Intern</h3>
        <p>XYZ Corporation, Anytown USA | May 2022 - August 2022</p>
        <p>Worked on a team to develop a new web apppcation using React and Node.js </p>
        <p>Collaborated with team members to design and implement features </p>
        <p>Debugged and fixed issues in the codebase</p>
      </div>

      <div className="resume-section">
        <h2>Teaching Assistant</h2>
        <p>Department of Computer Science, University of XYZ | August 2021 - Present</p>
        <p>Assist with grading and holding office hours for an undergraduate computer science</p>
        <p>course</p>
        <p>Help students with assignments and answer questions about course material Projects</p>
      </div>
      <div className="resume-section">
      <h2>Projects</h2>
        <h3>Personal Website</h3>
       <p>Built a personal website using React and deployed it on GitHub Pages  </p>
        <p>Source code: https://github.com/studentname/personal-website </p>
     
      </div>
      <div className="resume-section">
        <h3>Online Bookstore</h3>
      
        <p>Developed a web application for an online bookstore using Spring Boot and MySQL</p>
      
        <p>Source code: https://github.com/studentname/online-bookstore</p>
     
      </div>
      
    </div>
  );
};

export default Resume;
