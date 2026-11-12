import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    icon: <FaGraduationCap />,
    qualification: "B.Sc. Computer Science",
    institution: "Rajiv Gandhi Arts & Science College",
    location: "Thavalakuppam, Puducherry",
    year: "2020",
    result: "CGPA: 6.07",
  },
  {
    icon: <FaGraduationCap />,
    qualification: "Higher Secondary (HSC)",
    institution: "Government Higher Secondary School",
    location: "Thavalakuppam, Puducherry",
    year: "2017",
    result: "48.4%",
  },
  {
    icon: <FaGraduationCap />,
    qualification: "SSLC",
    institution: "Government Higher Secondary School",
    location: "Thavalakuppam, Puducherry",
    year: "2015",
    result: "77.8%",
  },
  {
    icon: <FaCertificate />,
    qualification: "MERN Full Stack Development",
    institution: "Easto Technologies",
    location: "Pondicherry",
    year: "Sep – Dec 2025",
    result: "Professional training",
  },
];

export default function Client() {
  return (
    <section className="section section-tint section-anchor" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Learning journey</p>
          <h2>Education & <span>training.</span></h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.qualification}>
              <div className="education-icon">{item.icon}</div>
              <div className="education-year">{item.year}</div>
              <h3>{item.qualification}</h3>
              <p className="education-institution">{item.institution}</p>
              <p>{item.location}</p>
              <strong>{item.result}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
