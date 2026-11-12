import React from "react";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Dhamodharan P. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Dhamu-code" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dhamodharanp13/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#home" aria-label="Back to top"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
