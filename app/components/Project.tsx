import Image from "next/image"
import styles from './Project.module.css'
import type { Project as ProjectData } from '../data/projects'

/**
 * A project card.
 *
 * The screenshots have differing intrinsic aspect ratios, so the image is
 * constrained to a fixed-ratio frame with object-fit: cover. Previously the
 * wrapper claimed `aspect-video` while the <Image> kept its own ratio, so the
 * taller screenshots overflowed and were clipped by `section { overflow: hidden }`.
 */
const Project = ({ image, altText, link, title, description }: ProjectData) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} glass group`}
    >
      <span className={styles.frame}>
        <Image src={image} alt={altText} fill sizes="(max-width: 768px) 90vw, 30vw" className={styles.image} />
      </span>

      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <span className={styles.cta}>Visit site&nbsp;↗</span>
      </span>
    </a>
  )
}

export default Project
