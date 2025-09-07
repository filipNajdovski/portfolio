import styles from './Testimonial.module.css';
import Image from "next/image";
import profilePic from "./../../images/Filip.jpg"
import star from "./../../images/icons/star.svg"

function Testimonial() {
  return (
    <div className="card-wrapper swiper-wrapper">

        <div className="card-slider swiper-slide">
            <div className={styles.imageContent}>
                <span className={styles.overlay}></span>

                <div className={styles.cardImage}>
                    <Image
                    src={profilePic} // Path to your image
                    alt="Filip Najdovski Picture"
                    width={150} // Desired width
                    height={150} // Desired height
                    className="rounded-full border-4 drop-shadow-xl"
                    />
                </div>
            </div>

            <div className={styles.cardContent}>
                <span className={styles.contentOverlay}></span>
                <h2 className={styles.name}>Angela</h2>
                <div className="stars inline-flex">
                    <span>
                        <Image src={star}
                            width={15}
                            height={15}
                            alt={"star"}
                        /> 
                    </span>
                    <span>
                        <Image src={star}
                            width={15}
                            height={15}
                            alt={"star"}
                        /> 
                    </span>
                    <span>
                        <Image src={star}
                            width={15}
                            height={15}
                            alt={"star"}
                        /> 
                    </span>
                    <span>
                        <Image src={star}
                            width={15}
                            height={15}
                            alt={"star"}
                        /> 
                    </span>
                    <span>
                        <Image src={star}
                            width={15}
                            height={15}
                            alt={"star"}
                        /> 
                    </span>
                    </div>
                <p className={styles.description}>Doctor, a week ago our little Snezana was born. After 10 years of fighting, we still can not believe that this little angel is ours. We truly thank you and your team for not giving up on us and fulfilling our greatest wish to become parents. May God grant you beauties and make many future parents happy. See you in the fall when we come to get our frozen embryo 🥰</p>
            </div>
        </div>

    </div>
  )
}
export default Testimonial