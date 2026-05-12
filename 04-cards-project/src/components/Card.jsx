
import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
         <img src={props.logo} alt="" />
         <button>
           Save <Bookmark  size={10}/> 
         </button>
        </div>
        <div className="center">
          <h2>{props.company} <span>{props.posted}</span></h2>
          <h3>{props.role}</h3>
          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
           <div>
            <h2>{props.sal}</h2>
            <p>{props.loc}</p>
           </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
