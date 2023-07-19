import React from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import TypingText from './components/TypingText';
import MineSweeperEscape from './components/MineSweeperEscape';
import MomsBookClub from './components/MomsBookClub.js';

function App() {
  return (
    <div className="App">
      
      <Header />
      <main>
        <section id="about-me">
     
          <h2>About Me</h2> 
   
          <div className="about-me-content">
            <img src="https://drive.google.com/uc?export=download&id=1U4Inr_HO-0hBzfYjjxtD-bXeZRYi7P2_" alt="Your portrait" className="portrait" />
            <div className="about-me-text">
              <div>
                <TypingText/>
              </div>
              <div>
                <Resume />
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
          
          </div>
        </section>

        <section id="projects">
          <h2>Personal Projects</h2>
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
        <MineSweeperEscape/>
        <MomsBookClub/>
        </section>
      </main>
      <div className="space"></div>
    </div>
  );
}

export default App;
