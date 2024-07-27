"use client"
import { useState } from "react"
import styles from './Card.module.css'
import Image, { StaticImageData } from "next/image"

interface CardProps {
    text: string,
    icon: StaticImageData,
    altText: string
}

const Card = ({icon, text, altText}: CardProps) => {

    const [flipped, setFlipped] = useState(false);

    const onClick = () => {
        setFlipped(!flipped);
    }

    
  return (
    <div className={`w-20 h-20 relative ${styles.cardContainer}`} onClick={onClick}>
        <div className={`w-full h-full absolute ${styles.card} ${flipped ? styles.flipped : ''}`}>
            
            <div className={`w-full h-full absolute ${styles.frontCard}`}>
                <Image src={icon}
                    width={100}
                    height={100}
                    alt={altText}
                />               
            </div>

            <div className={`w-full h-full absolute ${styles.backCard}`}>
                {text}
            </div>

        </div>
    </div>
)
}
export default Card