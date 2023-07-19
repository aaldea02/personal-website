import React, { useState, useEffect } from 'react';
import './TypingText.css'
const TypingText = () => {
  const message =
    "I am a computer science student at the University of Florida, pursuing a Bachelor's degree in Liberal Arts and Sciences. I am passionate about software development and have gained hands-on experience working as a software developer intern at PerfectServe. My internship allowed me to refine my skills in various programming languages, front-end technologies, and back-end systems while working on real-world projects.";

  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    let isCancelled = false;

    const type = async (text) => {
      for (let char of text) {
        if (!isCancelled) {
          await new Promise((resolve) =>
            setTimeout(() => {
              setDisplayedMessage((prev) => prev + char);
              resolve();
            }, 50)
          );
        }
      }
    };

    const backspace = async (text, speed) => {
      for (let i = 0; i < text.length; i++) {
        if (!isCancelled) {
          await new Promise((resolve) =>
            setTimeout(() => {
              setDisplayedMessage((prev) => prev.slice(0, -1));
              resolve();
            }, speed)
          );
        }
      }
    };

    const misspell = (word) => {
      const index = Math.floor(Math.random() * word.length);
      const char = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      ).toLowerCase();
      return word.slice(0, index) + char + word.slice(index + 1);
    };

    const animate = async () => {
      const words = message.split(' ');
      for (let word of words) {
        if (Math.random() < 0.1) {
          const misspelledWord = misspell(word);
          await type(misspelledWord);
          await backspace(misspelledWord, 100);
        }
        await type(word + ' ');
      }
      
      setTimeout(async () => {
        await backspace(message + ' .', 25);
        if (!isCancelled) {
          animate();
        }
      }, 5000);
    };

    animate();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="typing-text-container">
      <div className="typing-text">{displayedMessage}<span className="typing-text-cursor">|</span></div>
    </div>
  );

};

export default TypingText;
