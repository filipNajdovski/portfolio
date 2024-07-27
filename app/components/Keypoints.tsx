import Card from "./Card"
import TabComponent from "./TabComponent"


const Keypoints = () => {

  return (
    <div>
      <div className="tech-header">
        <h2>Technologies</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi aspernatur quis illo voluptas! Incidunt quidem consequatur voluptatibus deleniti vitae tempora unde asperiores mollitia laborum expedita rerum maiores beatae, enim sint.</p>
      </div>
      
      <TabComponent />
      {/* <div className="tech-icons gap-2 grid">
        <Card 
          text='Apple'
          icon={AppleIcon}
          altText='Apple Icon'
        />

        <Card 
          text='HTML'
          icon={HtmlIcon}
          altText='HTML Icon'
        />

        <Card 
          text='CSS'
          icon={CssIcon}
          altText='CSS Icon'
        />

        <Card 
          text='JavaScript'
          icon={JavaScriptIcon}
          altText='JavaScript Icon'
        />

        <Card 
          text='GraphQL'
          icon={GraphqlIcon}
          altText='GraphQL Icon'
        />

        
      </div> */}
    </div>
  )
}
export default Keypoints