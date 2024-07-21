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
        <div className="card-container w-20 h-20 relative">
          <div className="card w-full h-full absolute">
            <div className="front-card w-full h-full absolute bg-slate-700">Front</div>
            <div className="back-card w-full h-full absolute bg-cyan-300">Back</div>
          </div>
        </div>

        <div className="card-container w-20 h-20 relative">
          <div className="card w-full h-full absolute">
            <div className="front-card w-full h-full absolute bg-slate-700">Front</div>
            <div className="back-card w-full h-full absolute bg-cyan-300">Back</div>
          </div>
        </div>

        <div className="card-container w-20 h-20 relative">
          <div className="card w-full h-full absolute">
            <div className="front-card w-full h-full absolute bg-slate-700">Front</div>
            <div className="back-card w-full h-full absolute bg-cyan-300">Back</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Keypoints