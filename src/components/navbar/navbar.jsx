import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">D</span>
          <span>Dhamodharan<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="nav-social">
            <a href="https://github.com/Dhamu-code" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dhamodharanp13/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
