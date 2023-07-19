// Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1a7Ej2kGbIfddAJ9WO23X368WJgfeXBsT';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <button className="resume-button" onClick={handleClick}>
        Download Resume
      </button>
      <div className="resume-preview-container">
        <div className="resume-preview">
          <iframe
            src="https://drive.google.com/file/d/1a7Ej2kGbIfddAJ9WO23X368WJgfeXBsT/preview"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;