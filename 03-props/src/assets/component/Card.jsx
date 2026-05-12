

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
        <img src={props.img} alt="" srcset="" />
        <h1>{props.user},{props.age}</h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <button>View Profile</button>
    </div>
  )
}

export default Card
