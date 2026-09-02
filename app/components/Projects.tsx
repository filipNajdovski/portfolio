"use client"
import Project from './Project';
import { PROJECTS } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="text-[#e5bb89] text-lg font-bold py-1 lg:py-3">Projects</h3>
      <p className="text-white text-xs lg:text-sm glass-panel p-2 mb-5">
        I am determined to respect my clients privacy, only my own projects are advertised on this
        website. Unless a previous agreement is made your page <strong>WILL NOT</strong> be shown here.
      </p>

      <Swiper
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-2"
      >
        {PROJECTS.map((project) => (
          <SwiperSlide key={project.link} className="!h-auto">
            <Project {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Projects
