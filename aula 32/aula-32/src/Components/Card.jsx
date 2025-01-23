function Card(props) {

    return (
      <>
      <div id={props.id}>
        <div>
            <img src={props.imageURL} alt="" />
        </div>
            <div>
                <p>{props.category}</p>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
      </div>
      </>
    )
  }
  
  export default Card