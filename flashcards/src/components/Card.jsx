const Card = (props) => {    
    return(
        <div className={`'Card ' + ${props.categColor}`}>
            <h1>{props.cardText}</h1>
            <img className="food-img" src={`${props.img}.png`} />            
        </div>
    )
}
export default Card