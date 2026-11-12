import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="section contact-section section-anchor" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Get in touch</p>
          <h2>Have a project or opportunity? <span>Let's talk.</span></h2>
          <p className="section-intro">I'm interested in web development opportunities and meaningful projects. Feel free to reach out.</p>
        </div>
        <div className="contact-layout">
          <form className="contact-form" action="https://formspree.io/f/mvzgqnbn" method="POST">
            <label>Full name<input type="text" name="name" placeholder="Your name" required /></label>
            <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
            <label>Subject<input type="text" name="subject" placeholder="How can I help?" required /></label>
            <label>Message<textarea name="message" rows="5" placeholder="Write your message..." required /></label>
            <button className="button button-primary" type="submit">Send message</button>
          </form>
          <aside className="contact-info">
            <a href="tel:+918189820917" className="contact-item"><span><FaPhoneAlt /></span><div><small>Phone</small><strong>+91 8189820917</strong></div></a>
            <a href="mailto:dhamodharan130602@gmail.com" className="contact-item"><span><HiOutlineMail /></span><div><small>Email</small><strong>dhamodharan130602@gmail.com</strong></div></a>
            <div className="contact-item"><span><FaMapMarkerAlt /></span><div><small>Location</small><strong>Puducherry, India</strong></div></div>
            <div className="contact-socials">
              <a href="https://github.com/Dhamu-code" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/dhamodharanp13/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
