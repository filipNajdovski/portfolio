"use client"
import Testimonial from "./Testimonial"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Example: Navigation module styles
import 'swiper/css/pagination'; // Example: Pagination module styles

const Testimonials = () => {
  return (
    <div className="testimonials py-1 lg:py-3">
        <h3 className=" text-[#e5bb89] text-lg font-bold">Testimonials</h3>
        <p className="text-white text-xs lg:text-sm bg-slate-900/[0.6] shadow-md p-1 rounded-md">Over the years, I have had the privilege of working on a diverse range of projects, each one presenting unique challenges and opportunities for growth. My journey as a web developer has been shaped by these experiences, and I am proud to showcase some of the projects that have defined my career. The following testimonials from my clients and collaborators provide insight into the quality of my work, my dedication to excellence, and the positive impact I strive to make through my contributions.</p>
        <div className="testimonial">
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
              <Testimonial />
            </SwiperSlide>

            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>

            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>

            <SwiperSlide>
              <Testimonial />
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}
export default Testimonials