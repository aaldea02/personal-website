import React from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import DownloadResume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <div className="about-me-content">
            <img src="your_portrait_url_here" alt="Your portrait" className="portrait" />
            <p>
              I am a computer science student from the University of Florida, with a background in engineering from the University of Central Florida. I'm passionate about software development and have experience working as a software developer intern at PerfectServe. My nationality is [your nationality].
            </p>
            <div className="about-me-links">
              <a href="#contact" className="scroll-link">Contact</a>
              <a href="#projects" className="scroll-link">Projects</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <ContactForm />
            <div className="contact-links">
              <a href="mailto:your_email@example.com" className="contact-link">Email</a>
              <a href="https://github.com/your_username" className="contact-link">GitHub</a>
              <a href="https://www.linkedin.com/in/your_username/" className="contact-link">LinkedIn</a>
            </div>
            <div className="resume-download">
              <DownloadResume />
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Diamond Pathfinder</h3>
            <p>
              Description of the Diamond Pathfinder project.
            </p>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/your_video_id"
                title="Diamond Pathfinder"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
