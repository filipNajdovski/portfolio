import Image from "next/image";
import GlobeComponent from "./components/GlobeComponent"
import profilePic from "./../images/Filip.jpg"
import Keypoints from "./components/Keypoints";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import DownloadButton from "./components/DownloadButton";
import AddTestimonial from "./components/AddTestimonial";
import ContactForm from "./components/ContactForm";
import ContactIcons from "./components/ContactIcons";
import GlassNav from "./components/GlassNav";

export default function Home() {
  return (
    <>
      <GlassNav />
      <main className="main-render">
        <section id="intro" className="intro">          
          <GlobeComponent />
        </section>

        <section id="about" className="portfolio">
          {/* Profile card: identity + summary + CV */}
          <div className="about-card about-profile glass-panel">
            <div className="about-identity">
              <Image
                src={profilePic}
                alt="Filip Najdovski Picture"
                width={112}
                height={112}
                className="about-photo"
              />
              <div>
                <h1 className="about-name">Filip Najdovski</h1>
                <h2 className="about-role">Full Stack Developer & Web Consultant</h2>
              </div>
            </div>

            <div className="about-summary">
              <h3 className="about-label">About Me</h3>
              <p>
                Full-Stack JavaScript Developer with 6+ years of experience building
                scalable web applications using React, Next.js, Vue.js, Node.js, and modern
                databases SQL & NoSQL. Skilled in designing, developing, testing, and
                deploying applications with a strong focus on clean code and performance
                optimization. Experienced in API development/integration and automation
                testing. Passionate about continuous learning and delivering high-quality
                solutions.
              </p>
              <DownloadButton />
            </div>
          </div>

          {/* Experience — newest first, drawn as a timeline */}
          <div className="about-card experience glass-panel">
            <h3 className="about-label">Experience</h3>
            <ol className="about-timeline">
              <li><span className="about-item-title">Senior Fullstack Developer</span><span className="about-item-sub">Prime Entertainment Group, Malta</span></li>
              <li><span className="about-item-title">Full Stack Developer</span><span className="about-item-sub">Innovio Web Consulting</span></li>
              <li><span className="about-item-title">Web Developer</span><span className="about-item-sub">Freelance</span></li>
              <li><span className="about-item-title">Front End Developer</span><span className="about-item-sub">Kimicom</span></li>
              <li><span className="about-item-title">Quality Control / Project Coordinator</span><span className="about-item-sub">Taskforce LLC</span></li>
              {/* <li><span className="about-item-title">International Project Coordinator / Business Analyst</span><span className="about-item-sub">Media Plus Consulting</span></li> */}
              {/* <li><span className="about-item-title">Marketing Development</span><span className="about-item-sub">Rothstein International</span></li> */}
            </ol>
          </div>

          {/* Education */}
          <div className="about-card education glass-panel">
            <h3 className="about-label">Education</h3>
            <ul className="about-list">
              <li>
                <span className="about-item-title">UKLO Computer Science and Communications Engineering</span>
                <span className="about-item-sub">Bachelor&apos;s Degree</span>
              </li>
              <li>
                <span className="about-item-title">SOTU Gjorgji Naumov</span>
                <span className="about-item-sub">Technician for Computer Science and Automatics</span>
              </li>
            </ul>
          </div>

          {/* Certificates — course name with the provider as a pill */}
          <div className="about-card certificates glass-panel">
            <h3 className="about-label">Certificates</h3>
            <ul className="about-certs">
              <li><span>React Front to Back</span><span className="about-pill">Udemy</span></li>
              <li><span>Modern JavaScript From The Beginning (2024)</span><span className="about-pill">Udemy</span></li>
              <li><span>20 Web Projects with Vanilla JavaScript</span><span className="about-pill">Udemy</span></li>
              <li><span>Full Web Development Path</span><span className="about-pill">Codecademy</span></li>
              <li><span>Object Oriented Programming/PHP</span><span className="about-pill">Codecademy</span></li>
            </ul>
          </div>
        </section>

        <section id="keypoints" className="keypoints">
          <Keypoints />
        </section>

        <section id="projects" className="projects">          
          <Projects />
        </section>

        <section id="clients" className="clients">
          <Testimonials />
        </section>

        <section id="reviews" className="reviews">
           <div className="testimonials py-1 lg:py-3">
              <h3 className=" text-[#e5bb89] text-lg font-bold">Write your review</h3>
              <p className="text-white text-xs lg:text-sm glass-panel p-2 mb-5">Know Filip? If you have collaborated with Filip please leave a descriptive review. All reviews are appreciated, transparency in the work is the best approach!</p>
              <div className="testimonial">
                <AddTestimonial />
              </div>
            </div>
          
        </section>

        <section id="contact" className="contact">
           <div className="contact-me py-1 lg:py-3">
              <h3 className=" text-[#e5bb89] text-lg font-bold">Contact me!</h3>
              <p className="text-white text-xs lg:text-sm glass-panel p-2 mb-5">Have a question or want to work together? Feel free to reach out using the form below.</p>
              <div className="contact-components">
                <ContactForm />
                <h3 className=" text-[#e5bb89] text-lg font-bold">Reach out individually</h3>
                <p className="text-white text-xs lg:text-sm glass-panel p-2 mb-5">Feel free to give me a call 9am-7pm(CET) any working day if you have any questions or would like to discuss options, you can get in touch by different methods</p>
                <ContactIcons />
              </div>
            </div>
          
        </section>
      </main>
    </>
    
  );
}
