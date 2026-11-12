import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import pro1 from "../../assets/project-1.jpg";
import pro2 from "../../assets/project-2.jpg";
import pro3 from "../../assets/project-3.jpg";

const projects = [
  {
    title: "Employee Attendance & Payroll Tracking System",
    type: "Full Stack · MERN",
    image: pro1,
    description: "A role-based attendance application with employee check-in/check-out, monthly reports and payroll calculation.",
    stack: "React · Node.js · Express · MongoDB · JWT",
    link: "https://github.com/Dhamu-code",
    linkLabel: "GitHub profile",
  },
  {
    title: "Restaurant Ordering & Kitchen Management",
    type: "Full Stack · MERN",
    image: pro2,
    description: "A restaurant workflow concept for managing food items, incoming orders, kitchen activity and employee roles.",
    stack: "React · Node.js · Express · MongoDB",
    link: "https://github.com/Dhamu-code",
    linkLabel: "GitHub profile",
  },
  {
    title: "Online Grocery & Meat Delivery Platform",
    type: "Web application project",
    image: pro3,
    description: "A planned online ordering experience for browsing grocery and meat products with a simple customer journey.",
    stack: "Web UI · Responsive Design",
    link: "https://github.com/Dhamu-code",
    linkLabel: "GitHub profile",
  },
];

export default function Projects() {
  return (
    <section className="section section-light section-anchor" id="projects">
      <div className="container">
        <div className="section-heading heading-row">
          <div><p className="section-kicker">Selected work</p><h2>Projects I've <span>worked on.</span></h2></div>
          <a className="text-link" href="https://github.com/Dhamu-code" target="_blank" rel="noreferrer">More on GitHub <FaExternalLinkAlt /></a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image"><img src={project.image} alt={`${project.title} preview`} /></div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-stack">{project.stack}</p>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer"><FaGithub /> {project.linkLabel}</a>
              </div>
            </article>
          ))}
        </div>
        <p className="project-note">Note: Add individual repository and live-demo links when each project is published. The links above currently point to your GitHub profile.</p>
      </div>
    </section>
  );
}
