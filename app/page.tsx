import Image from "next/image";
import GlobeComponent from "./components/GlobeComponent"
import profilePic from "./../images/Filip.jpg"
import Keypoints from "./components/Keypoints";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="main-render">
        <section className="intro">
          
          <GlobeComponent />
        </section>

        <section className="portfolio p-3 lg:p-8">
          <div className="profile-picture flex justify-center items-center">
          <Image
            src={profilePic} // Path to your image
            alt="Filip Najdovski Picture"
            width={150} // Desired width
            height={150} // Desired height
            className="rounded-full border-4 drop-shadow-xl "
          />
          </div>
          <div className="title flex flex-col justify-center gap-2 items-center">
            <h2 className="lg:text-2xl lg:text-left text-xl text-center font-bold text-[#e5bb89] ">Filip Najdovski</h2>
            <br />
            <h3 className="text-white text-xl font-bold text-center">Front End Developer</h3>
          </div>
          <div className="summary">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">About me</h3>
            <p className="lg:text-sm text-white text-xs">
              My passion and expertise honed over the years have made me highly skilled in crafting exceptional digital experiences. I specialize in designing and developing a wide range of projects, from simple yet elegant websites to complex, feature-rich web and mobile applications. Whether working independently or as part of a team, I take pride in delivering tailored solutions that combine functionality, aesthetics, and seamless performance.
            </p>
          </div>
          <div className="experience">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">Experience</h3>
            <ul className="lg:text-sm text-white text-xs">
              <li>Web Developer - Freelance</li>
              <li>Front End Developer - Kimicom</li>
              <li>Quality Control / Project Coordinator - Taskforce LLC</li>
              <li>International Project Coordinator / Business Analyst - Media Plus Consulting</li>
              <li>Marketing Development - Rothstein International</li>
            </ul>
          </div>
          <div className="certificates">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">Certificates</h3>
            <ul className="lg:text-sm text-white text-xs">
              <li>Udemy - React Front to Back</li>
              <li>Udemy - Modern JavaScript From The Beginning (2024)</li>
              <li>Udemy - 20 Web Projects with Vanilla JavaScript</li>
              <li>Codecademy - Full Web Development Path</li>
              <li>Codecademy - Object Oriented Programming/PHP</li>
            </ul>
          </div>
          <div className="education">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">Education</h3>
            <ul className="lg:text-sm text-white text-xs">
              <li>UKLO Computer Science and Communications Engineering - Bachelor&apos;s Degree</li>
              <li>SOTU Gjorgji Naumov - Technician for Computer Science and Automatics</li>
            </ul>
          </div>
        </section>

        <section className="keypoints">
          <Keypoints />
          
        </section>

        <section className="clients p-3 lg:p-8">
          <Testimonials />
          <Projects />
        </section>
    </main>
  );
}
