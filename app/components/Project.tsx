import Image, { StaticImageData } from "next/image"

interface ProjectProps {
  image: StaticImageData,
  altText: string,
  link: string
}


const Project = ({image, altText, link}: ProjectProps) => {
  return (
    <div className="project aspect-video min-w-80">
        <a href={link} target="_blank">
          <Image 
              src={image}
              alt={altText}
          />
        </a>
    </div>
  )
}
export default Project