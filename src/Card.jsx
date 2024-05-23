 import './Card.css'
import profilepic from './assets/yuvan.png'
function Card(props){
 
    
    return (
        <div className="card">
            
            <img src={profilepic} alt="yuvan" className='pic' />
            <h2>{props.name}</h2>
            <p>Master of Computer Applications</p>
        </div>
    )
}

Card.prototype = {
    name : "string"
}

Card.defaultProps = {
    name : "guest"
}

export default Card;