import Project from './Project'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className="projects">
        <h3 className=" text-[#e5bb89] text-lg font-bold py-1 lg:py-3">Projects</h3>
        <div className={styles.projectsScroll}>
          <Project />
          <Project />
          <Project />
        </div>
    </div>
  )
}
export default Projects