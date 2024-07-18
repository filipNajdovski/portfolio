import Image from "next/image";
import HyperGlobe from "./components/HyperGlobe"
import profilePic from "./../images/filip.jpg"

export default function Home() {
  return (
    <main className="main-render">
        <section className="intro">
          <p className="line-1 anim-typewriter">Filip Najdovski</p>
          <HyperGlobe />
        </section>

        <section className="portfolio p-8">
          <div className="profile-picture">
          <Image
            src={profilePic} // Path to your image
            alt="Filip Najdovski"
            width={150} // Desired width
            height={150} // Desired height
          />
          </div>
          <div className="title">
            <h2>Filip Najdovski</h2>
            <br />
            <h3>Front End Developer</h3>
          </div>
          <div className="summary">
            <h3>About me</h3>
            <p>
            Passionate and dedicated web developer with two years of professional 
            experience in front-end development, specializing in React.js, with 
            additional proficiency in Angular and Vue.js. Strong background in both 
            software and hardware, continually updating my skills with the latest 
            technologies and development principles. Experienced in backend technol
            ogies including PHP and Node.js. Eager to contribute to and grow with a 
            forward-thinking company that embraces cutting-edge coding practices 
            and technologies.
            </p>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <ul>
              <li>Web Developer - Freelance</li>
              <li>Front End Developer - Kimicom</li>
              <li>Quality Control - Taskforce LLC</li>
              <li>International Project Coordinator - Media Plus Consulting</li>
              <li>Marketing Development - Rothstein International</li>
            </ul>
          </div>
          <div className="certificates">
            <h3>Certificates</h3>
            <ul>
              <li>Udemy - React Front to Back</li>
              <li>Udemy - Modern JavaScript From The Beginning (2024)</li>
              <li>Udemy - 20 Web Projects with Vanilla JavaScript</li>
              <li>Codecademy - Full Web Development Path</li>
              <li>Codecademy - Object Oriented Programming/PHP</li>
            </ul>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>Computer Science and Communications Engineering - Bachelor's Degree</li>
              <li>SOTU Gjorgji Naumov - Technician for Computer Science and Automatics</li>
            </ul>
          </div>
        </section>

        <section className="keypoints">
          
        </section>

        <section className="projects">
            
        </section>
    </main>
  );
}
