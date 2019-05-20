import React, { Fragment } from 'react'

const Sushi = (props) => {

  const checkEaten = ()=>{if (!props.sushiData.eaten) {
    return <img src={props.sushiData.img_url} width="100%" alt=''/>
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={(e)=> {props.clickEatSushi(props.sushiData)}}>
        {checkEaten()}
      </div>
      <h4 className="sushi-details">
        {props.sushiData.name} - ${props.sushiData.price}
      </h4>
    </div>
  )
}

export default Sushi