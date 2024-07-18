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
          <div className="summary"></div>
          <div className="experience"></div>
          <div className="education"></div>
        </section>

        <section className="keypoints">
          
        </section>

        <section className="projects">
            
        </section>
    </main>
  );
}
