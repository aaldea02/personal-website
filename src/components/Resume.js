import React from 'react';

const Resume = () => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Km_UmHutRh9tKEg2RSI32ZVjiM0ogkT-';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleClick}>
      Download Resume
    </button>
  );
};

export default Resume;
