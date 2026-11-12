import React from "react";
import { FaArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroImage from "../../assets/home-banner.jpg";

export default function Intro() {
  return (
    <section className="hero section-anchor" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Hello, I'm</p>
          <h1>Dhamodharan <span>P.</span></h1>
          <h2>MERN Stack Developer</h2>
          <p className="hero-description">
            I build responsive web applications and practical digital solutions
            using React, Node.js, Express.js and MongoDB. I enjoy turning ideas
            into useful, easy-to-use products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work</a>
            <a className="button button-outline" href="#contact">Let's talk</a>
          </div>
          <div className="hero-social">
            <span>Find me on</span>
            <a href="https://github.com/Dhamu-code" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dhamodharanp13/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Developer workspace illustration" />
          </div>
          <div className="hero-note"><span className="status-dot" /> Open to developer opportunities</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><FaArrowDown /> Scroll to explore</a>
    </section>
  );
}
