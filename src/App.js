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
            <img src="/images/portrait.jpg" alt="Your portrait" className="portrait" />
            <div className="about-me-text">
              <p>
                I am a computer science student at the University of Florida, currently pursuing a Bachelor's degree in Liberal Arts and Sciences. I am passionate about software development and have hands-on experience in the field, having worked as a software developer intern at PerfectServe. During my internship, I have honed my skills in various programming languages, front-end technologies, and back-end systems while working on several real-world projects.
              </p>
              <div className="about-me-links">
                <a href="#contact" className="scroll-link">Contact</a>
                <a href="#projects" className="scroll-link">Projects</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <ContactForm />
            <div className="contact-links">
              <a href="mailto:arsena0202@gmail.com" className="contact-link">Email</a>
              <a href="https://github.com/aaldea02" className="contact-link">GitHub</a>
              <a href="https://www.linkedin.com/in/your_username/" className="contact-link">LinkedIn</a>
            </div>
            <div className="resume-download">
              <DownloadResume />
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>PersonalProjects</h2>
          <div className="project">
            <h3>Diamond Pathfinder</h3>
            <p>
            The Diamond Pathfinder project is a pathfinding optimization study for the popular game Minecraft, specifically focusing on its Baritone mod. I built and compared two classic pathfinding algorithms, Bellman-Ford and Dijkstra's, implemented in Java to analyze their efficiency in the game environment. By logging the results using Java and MySQL, I was able to identify the optimal choice for pathfinding in Minecraft's Baritone mod, improving in-game navigation and resource gathering. Through this project, I developed skills in Java programming, algorithm design, and data analysis using MySQL.
            </p>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lS4vblYZpMA"
                title="Diamond Pathfinder"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <div className="space"></div>
    </div>
  );
}

export default App;

