const Card = () => {
    
  return (
    <div className="card-container w-20 h-20 relative">
        <div className="card w-full h-full absolute">
            <div className="front-card w-full h-full absolute ">Front</div>
            <div className="back-card w-full h-full absolute">Back</div>
        </div>
    </div>
)
}
export default Card