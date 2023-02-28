import React from 'react';
import './index.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import DownloadResume from './components/Resume';



function App() {
  return (
    <div>
      <Header />
    
       
      
      
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
          <h2>Contact Me</h2>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </section>
        <section>
          <h2>Resume</h2>
          <div className="download-resume-container">
            <DownloadResume />
          </div>
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
    <li>
      <p>
        Notification Tracking API - Constructed a back-end API that tracks push notifications being sent to an app and records if the app received the notification or not. Created with .NET 6 and C#, the API sends HTTP POST requests to a database to track the push notifications. API authenticates with an access token and logs each request.
      </p>
    </li>
    <li>
      <p>
        Custom Textbox with Dragdrop and Dropdown - Designed a textbox that the user can dynamically interact with. When the user hits the @ sign, a dropdown pops up with a search menu. Once an option has been chosen, the component becomes a draggable object that can be dropped in between words inside the textbox.
      </p>
    </li>
    <li>
      <p>
        Excel Merge and Filter Program - Automated manual accounting work in Excel with Python Pandas. Given the proper input, the program parses through the Excel sheets and filters the appropriate cells. Then merges the data to a single Excel file, which is uploaded to the company drive.
      </p>
    </li>
    <li>
      <p>
        Compiler for PL/0 - Simulated a compiler coded in C and reads a PL/0 program. A scanner reads the program, generating tokens for a recursive descent parser to check for grammar. An intermediate code generator then creates the assembly code for the P-machine, a virtual machine, to read. The P-machine then executes 2 cycles, Fetch and Execute, the first allocating memory for the instruction in the stack and the other executes said instruction.
      </p>
    </li>
    <li>
      <p>
        Highschool Senior Project - Drunk Driving Prevention - Implemented a blood alcohol estimating app made by the University of Washington to a drunk driving prevention model. The app tested for cognitive behavior and made users do simple phone tasks like a pattern unlock or color reaction-time test. Won 1st place engineering, regional Science Fair.
      </p>
    </li>
  </ul>
</section>

        
      </main>
 
    </div>
  );
}

export default App;
