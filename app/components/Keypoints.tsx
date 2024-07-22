import Card from "./Card"

const Keypoints = () => {

  return (
    <div>
      <div className="tech-header">
        <h2>Technologies</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi aspernatur quis illo voluptas! Incidunt quidem consequatur voluptatibus deleniti vitae tempora unde asperiores mollitia laborum expedita rerum maiores beatae, enim sint.</p>
      </div>
      

      <div className="tech-menu">
        <ul>
          <li><h3>Front End Technologies</h3></li>
          <li><h3>Back End Technologies</h3></li>
          <li><h3>Web Degin UI/UX</h3></li>
          <li><h3>Testing Automation/Manual</h3></li>
        </ul>
      </div>
      <div className="tech-icons gap-2 grid">
        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        
      </div>
    </div>
  )
}
export default Keypoints