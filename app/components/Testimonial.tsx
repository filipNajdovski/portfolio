import styles from './Testimonial.module.css';
import Image from "next/image";
import star from "./../../images/icons/star.svg";
import { db } from '@/firebaseConfig';
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Example: Navigation module styles
import 'swiper/css/pagination'; // Example: Pagination module styles

type TestimonialData = {
  name: string
  company: string
  companyPhoto?: string
  feedback: string
  rating: number
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<(TestimonialData & { id: string })[]>([]);
  // const DEFAULT_PHOTO = "/images/default-reviw.png";

  useEffect(() => {
    const fetchData = async () => {
      console.count("fetchData Called")
    const querySnapshot = await getDocs(collection(db, "testimonials"));

    const data = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
    const docData = doc.data() as TestimonialData; // cast safely here
    return {
        id: doc.id,
        ...docData
    };
    });

    console.log("Fetched testimonials:", data);
    setTestimonials(data);
  };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={50}
        loop={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonials.map((t) => {
          const photoSrc = t.companyPhoto?.startsWith("/images/")
            ? t.companyPhoto // already a valid path from Firestore
            : t.companyPhoto
              ? `/images/${t.companyPhoto}` // handle case where you only stored filename
              : "/images/default-review.png"; 

          return (
            <SwiperSlide key={t.id}>
              <div className="card-slider">
                <div className={styles.imageContent}>
                  <span className={styles.overlay}></span>

                  <div className={styles.cardImage}>
                    <Image
                      src={photoSrc}
                      alt={"Testimonial Company Photo Filip Najdovski Web development"}
                      width={150}
                      height={150}
                      className="rounded-full border-4 drop-shadow-xl"
                    />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.contentOverlay}></span>
                  <h2 className={styles.name}>{t.name}</h2>
                  <h3 className={styles.company}>{t.company}</h3>
                  <div className="stars inline-flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>
                        <Image src={star} width={15} height={15} alt={"star"} />
                      </span>
                    ))}
                  </div>
                  <p className={styles.description}>{t.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Testimonial;
