import React from "react";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

const strengths = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Building responsive, accessible interfaces with React, JavaScript, HTML and CSS.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Applications",
    text: "Connecting user interfaces with REST APIs, server-side logic and authentication.",
  },
  {
    icon: <FaDatabase />,
    title: "Database & Problem Solving",
    text: "Working with MongoDB and MySQL to organize application data and solve practical problems.",
  },
];

export default function Domain() {
  return (
    <section className="section section-light section-anchor" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">A little about me</p>
          <h2>Building useful things with <span>technology.</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p>
              I'm a Computer Science graduate with hands-on training in MERN
              Stack development and experience across customer-facing and
              operational roles. I completed a Full Stack Development course
              at Easto Technologies and have built practical web application
              projects using React, Node.js, Express.js and MongoDB.
            </p>
            <p>
              I enjoy learning new technologies, debugging problems and
              creating clean, user-friendly applications. I'm currently
              focused on strengthening my development skills and pursuing
              opportunities in web and software development.
            </p>
            <div className="about-facts">
              <div><strong>B.Sc.</strong><span>Computer Science</span></div>
              <div><strong>MERN</strong><span>Full Stack Training</span></div>
              <div><strong>3+</strong><span>Practical projects / concepts</span></div>
            </div>
          </div>
          <div className="strength-list">
            {strengths.map((item) => (
              <article className="strength-card" key={item.title}>
                <div className="strength-icon">{item.icon}</div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
