import Image from "next/image"
import nurReinigung from './../../images/projects/nur-reinigung.png'

const Project = () => {
  return (
    <div className="project aspect-video min-w-80">
        <Image 
            src={nurReinigung}
            alt='NUR Reinigung'
        />
    </div>
  )
}
export default Project