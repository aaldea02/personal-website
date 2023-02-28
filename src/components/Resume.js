import React from 'react';

function Resume() {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1ROdVJC2M4fxPw66eEU5JPWaG1IriGEij/view?usp=sharing', '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default Resume;
