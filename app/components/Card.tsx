"use client"
import { useState } from "react"
import styles from './Card.module.css'
import Image, { StaticImageData } from "next/image"
import Stars from './Stars'

interface CardProps {
    text: string,
    icon: StaticImageData,
    altText: string,
    /** Proficiency 0-100, shown as a 5-star rating (100 = 5 stars). */
    progress: number
}

const STARS_PER_PERCENT = 1 / 20

const Card = ({icon, text, altText, progress}: CardProps) => {

    const [flipped, setFlipped] = useState(false);

    const onClick = () => {
        setFlipped(!flipped);
    }

    
  return (
    {/* size comes from .cardContainer (100px, 75px on mobile) */}
    <div className={`relative ${styles.cardContainer}`} onClick={onClick}>
        <div className={`w-full h-full absolute ${styles.card} ${flipped ? styles.flipped : ''}`}>
            
            <div className={`w-full h-full absolute ${styles.frontCard}`}>
                <Image src={icon}
                    width={100}
                    height={100}
                    alt={altText}
                />               
            </div>

            <div className={`w-full h-full absolute ${styles.backCard}`}>
                <h3 className="text-xs lg:text-sm font-semibold text-white">{text}</h3>
                <Stars
                    value={progress * STARS_PER_PERCENT}
                    size={12}
                    className={styles.techStars}
                    label={`${text}: ${progress * STARS_PER_PERCENT} out of 5`}
                />
            </div>

        </div>
    </div>
)
}
export default Card