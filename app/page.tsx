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
          {/* Profile Picture */}
          <div className="profile-picture flex justify-center items-center">
            <Image
              src={profilePic} // Path to your image
              alt="Filip Najdovski Picture"
              width={150} // Desired width
              height={150} // Desired height
              className="rounded-full border-4 drop-shadow-xl"
            />
          </div>

          {/* Title Section */}
          <div className="title flex flex-col justify-center gap-2 items-center">
            <h1 className="lg:text-3xl text-2xl font-bold text-[#e5bb89] text-center">
              Filip Najdovski
            </h1>
            <h2 className="text-xl text-white font-semibold text-center">
              Front End Developer & Web Consultant
            </h2>
          </div>

          {/* About Me Section */}
          <div className="summary">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">About Me</h3>
            <p className="lg:text-base text-xs text-gray-300">
              I specialize in crafting modern web apps and websites that combine
              functionality, aesthetics, and seamless performance. Whether you need an
              elegant portfolio or a feature-rich business application, I bring a
              user-centered approach and cutting-edge technologies to deliver tailored
              solutions.
            </p>
          </div>

          {/* Experience Section */}
          <div className="experience">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">Experience</h3>
            <ul className="lg:text-base text-xs text-gray-300 space-y-2">
              <li><strong>Web Developer</strong> – Freelance</li>
              <li><strong>Front End Developer</strong> – Kimicom</li>
              <li><strong>Quality Control / Project Coordinator</strong> – Taskforce LLC</li>
              <li><strong>International Project Coordinator / Business Analyst</strong> – Media Plus Consulting</li>
              <li><strong>Marketing Development</strong> – Rothstein International</li>
            </ul>
          </div>

          {/* Certificates Section */}
          <div className="certificates">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">Certificates</h3>
            <ul className="lg:text-base text-xs text-gray-300 space-y-2">
              <li>React Front to Back – Udemy</li>
              <li>Modern JavaScript From The Beginning (2024) – Udemy</li>
              <li>20 Web Projects with Vanilla JavaScript – Udemy</li>
              <li>Full Web Development Path – Codecademy</li>
              <li>Object Oriented Programming/PHP – Codecademy</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="education">
            <h3 className="text-[#e5bb89] text-lg font-bold lg:py-3 py-1">Education</h3>
            <ul className="lg:text-base text-xs text-gray-300 space-y-2">
              <li>
                <strong>UKLO Computer Science and Communications Engineering</strong> – Bachelor&apos;s Degree
              </li>
              <li>
                <strong>SOTU Gjorgji Naumov</strong> – Technician for Computer Science and Automatics
              </li>
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
