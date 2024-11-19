import Card from "./Card"
import TabComponent from "./TabComponent"


const Keypoints = () => {

  return (
    <div>
      <div className="tech-header p-3">
        <h2 className="lg:py-3 py-1 text-[#E5BB89] font-bold text-xl">Technologies</h2>
        <p className="lg:text-sm text-xs text-white">My experience has gained me expertise in many technologies and frameworks, by <b>clicking</b> on the icons you can check my progress.</p>
      </div>
      
      <TabComponent />
      
    </div>
  )
}
export default Keypoints