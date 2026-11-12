import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiGithub, SiPostman
} from "react-icons/si";
import { FaLock } from "react-icons/fa";

const skills = [
  ["HTML5", <SiHtml5 />],
  ["CSS3", <SiCss3 />],
  ["JavaScript", <SiJavascript />],
  ["React", <SiReact />],
  ["Node.js", <SiNodedotjs />],
  ["Express.js", <SiExpress />],
  ["MongoDB", <SiMongodb />],
  ["MySQL", <SiMysql />],
  ["Git", <SiGit />],
  ["GitHub", <SiGithub />],
  ["Postman", <SiPostman />],
  ["JWT & bcrypt", <FaLock />],
];

const experience = [
  {
    date: "Feb – May 2026",
    role: "Product Specialist",
    company: "Ather Experience Centre · Pondicherry",
    points: [
      "Explained electric vehicle features, charging solutions and smart technology to prospective customers.",
      "Conducted product demonstrations and test rides, answering product-related questions.",
      "Coordinated vehicle handovers, delivery documentation and customer onboarding.",
      "Maintained customer records and coordinated with sales and service teams.",
    ],
  },
  {
    date: "Jun – Dec 2025",
    role: "Delivery Executive & Purchase In-Charge",
    company: "Taka Pizza · Pondicherry",
    points: [
      "Coordinated customer orders and completed timely food deliveries.",
      "Handled purchase requirements and coordinated with suppliers.",
      "Monitored stock requirements and maintained purchase and delivery records.",
    ],
  },
  {
    date: "Dec 2020 – Jun 2024",
    role: "Sales Executive",
    company: "Sri Vinayaga Electricals · Pondicherry",
    points: [
      "Supported daily store operations and advised customers on electrical products.",
      "Contributed to a 15% increase in store sales and exceeded monthly sales targets by 20%.",
      "Helped reduce stockouts by 10% through stock monitoring and coordination.",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <section className="section section-tint section-anchor" id="skills">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">My toolkit</p>
            <h2>Skills & <span>technologies.</span></h2>
            <p className="section-intro">Technologies I've studied and used while building web applications and learning full stack development.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, icon]) => (
              <div className="skill-chip" key={name}>
                <span>{icon}</span><strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light section-anchor experience-section" id="experience">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Professional journey</p>
            <h2>Work <span>experience.</span></h2>
            <p className="section-intro">My professional experience across customer engagement, operations and retail.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
