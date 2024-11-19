import Image, { StaticImageData } from "next/image"

interface ProjectProps {
  image: StaticImageData,
  altText: string
}


const Project = ({image, altText}: ProjectProps) => {
  return (
    <div className="project aspect-video min-w-80">
        <Image 
            src={image}
            alt={altText}
        />
    </div>
  )
}
export default Project