import Project from './Project'
import styles from './Projects.module.css'
import nurReinigung from './../../images/projects/nur-reinigung.png'
import nedvizniniOnline from './../../images/projects/nedviznini.online.screen.png'
import githubFinder from './../../images/projects/github-finder.png'


const Projects = () => {
  return (
    <div className="projects">
        <h3 className=" text-[#e5bb89] text-lg font-bold py-1 lg:py-3">Projects</h3>
        <div className={styles.projectsScroll}>
          <Project image={nurReinigung} altText='Nur Reinigung' link='https://nur-reinigung.ch/'/>
          <Project image={nedvizniniOnline} altText='Nedviznini Online' link='https://www.nedviznini.online/' />
          <Project image={githubFinder} altText='Nur Reinigung' link='https://github-finder-xv5g.vercel.app/' />
        </div>
    </div>
  )
}
export default Projects