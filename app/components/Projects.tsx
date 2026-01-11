"use client"
import Project from './Project';
import styles from './Projects.module.css';
import nurReinigung from './../../images/projects/nur-reinigung.png';
import nedvizniniOnline from './../../images/projects/nedviznini.online.screen.png';
import githubFinder from './../../images/projects/github-finder.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Example: Navigation module styles
import 'swiper/css/pagination'; // Example: Pagination module styles


const Projects = () => {
  return (
    <div className="projects">
        <h3 className=" text-[#e5bb89] text-lg font-bold py-1 lg:py-3">Projects</h3>
        <p className="text-white text-xs lg:text-sm bg-slate-900/[0.6] shadow-md p-1 mb-5 rounded-md">I am determined to respect my clients privacy, only my own projects are advertised on this website. Unless a previous agreement is made your page <strong>WILL NOT</strong> be shown here.</p>

        <div className={styles.projectsScroll}>
          <Swiper 
            spaceBetween={50}
            breakpoints={{
              0: {          // mobile
                slidesPerView: 1,
              },
              768: {        // tablet
                slidesPerView: 2,
              },
              1024: {       // desktop
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
             <Project image={nurReinigung} altText='Nur Reinigung' link='https://nur-reinigung.ch/'/>
            </SwiperSlide>

            <SwiperSlide>
              <Project image={nedvizniniOnline} altText='Nedviznini Online' link='https://real-estate-marketplace-git-main-filip-najdovskis-projects.vercel.app/' />
            </SwiperSlide>

            <SwiperSlide>
              <Project image={githubFinder} altText='Nur Reinigung' link='https://github-finder-xv5g.vercel.app/' />
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}
export default Projects