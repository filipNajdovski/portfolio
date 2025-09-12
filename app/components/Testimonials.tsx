"use client"
import Testimonial from "./Testimonial"


const Testimonials = () => {
  return (
    <div className="testimonials py-1 lg:py-3">
        <h3 className=" text-[#e5bb89] text-lg font-bold">Testimonials</h3>
        <p className="text-white text-xs lg:text-sm bg-slate-900/[0.6] shadow-md p-1 rounded-md">Over the years, I have had the privilege of working on a diverse range of projects, each one presenting unique challenges and opportunities for growth. My journey as a web developer has been shaped by these experiences, and I am proud to showcase some of the projects that have defined my career. The following testimonials from my clients and collaborators provide insight into the quality of my work, my dedication to excellence, and the positive impact I strive to make through my contributions.</p>
        <div className="testimonial">
            <Testimonial />
        </div>
    </div>
  )
}
export default Testimonials