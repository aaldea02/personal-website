import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <header>
        <h1>Arsen Aldea</h1>
      </header>
      <main>
        <section>
          <h2>Contact Information</h2>
          <ul>
            <li>(561)-630-8035</li>
            <li>arsena0202@gmail.com</li>
            <li><a href="https://aaldea02.github.io/">aaldea02.github.io</a></li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>University of Florida</p>
          <p>Bachelor’s in Liberal Arts and Sciences, Computer Science</p>
          <p>Expected Graduation: Spring 2024</p>
          <ul>
            <li>Clubs: Filipino Student Association</li>
          </ul>
          <p>University of Central Florida</p>
          <p>Bachelor’s in Engineering and Computer Science, Computer Science</p>
          <p>Graduation: Spring 2022(AA)</p>
          <ul>
            <li>Awards: President’s Honor Roll | Dean’s List</li>
            <li>Clubs: Hack UCF</li>
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
          <p>PerfectServe</p>
          <p>Software Developer Intern</p>
          <p>October 2021 - November 2022</p>
          <ul>
            <li>Built back-end API utilizing C# and .NET. API that tracks push notifications. Created a relational database for the API using SQL server and load-tested with k6.</li>
            <li>Developed front end components utilizing React, Typescript, and Javascript. Learned how to optimize components for a smoother user experience.</li>
            <li>Automated accounting work with Python. Created an executable program that filtered and merged excel files, for billing data and revenue.</li>
            <li>Utilized Git to collaborate with other developers to create repositories, perform pull-requests, and handle merge conflicts.</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>Notification Tracking API</li>
            <li>Custom Textbox with Dragdrop and Dropdown</li>
            <li>Excel Merge and Filter Program</li>
            <li>Compiler for PL/0</li>
            <li>Highschool Senior Project - Drunk Driving Prevention</li>
          </ul>
        </section>
        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Coding Languages: JavaScript, TypeScript, Java, C#, C++, HTML, CSS, Python, MIPS, SQL</li>
            <li>Libraries and Frameworks: React, Angular, .NET, Pandas, Selenium</li>
            <li>Certifications: Autodesk Inventor, Microsoft Word, Excel, Powerpoint, Google Ads Search</li>
            <li>Creative Outlets: Origami, Video Editing</li>
          </ul>
        </section>
        </main>
</div>
);
}

export default App;