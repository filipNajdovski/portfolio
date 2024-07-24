"use client"
import { useState } from "react"
import styles from './Card.module.css'

const Card = () => {

    const [flipped, setFlipped] = useState(false);

    const onClick = () => {
        setFlipped(!flipped);
    }

    
  return (
    <div className={`w-20 h-20 relative ${styles.cardContainer}`} onClick={onClick}>
        <div className={`w-full h-full absolute ${styles.card} ${flipped ? styles.flipped : ''}`}>
            <div className={`w-full h-full absolute ${styles.frontCard}`}>Front</div>
            <div className={`w-full h-full absolute ${styles.backCard}`}>Back</div>
        </div>
    </div>
)
}
export default Card