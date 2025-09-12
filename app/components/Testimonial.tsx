import styles from './Testimonial.module.css';
import Image from "next/image";
import star from "./../../images/icons/star.svg";
import { db } from '@/firebaseConfig';
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { useEffect, useState } from 'react';

type TestimonialData = {
  name: string
  company: string
  companyPhoto: string
  feedback: string
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<(TestimonialData & { id: string })[]>([]);

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
      {testimonials.map((t) => {
        // Determine image path: use companyPhoto if valid, else fallback
        const photoSrc = t.companyPhoto
          ? `/images/${t.companyPhoto}` // for local testing
          : "/default-review.png";

        return (
          <div key={t.id} className="card-wrapper swiper-wrapper">
            <div className="card-slider swiper-slide">
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
                <div className="stars inline-flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      <Image src={star} width={15} height={15} alt={"star"} />
                    </span>
                  ))}
                </div>
                <p className={styles.description}>{t.feedback}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Testimonial;
