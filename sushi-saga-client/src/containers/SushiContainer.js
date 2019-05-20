import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
    
  return (
    <Fragment>

      <div className="belt">
  {props.sushiDisplay.map(nagiri => <Sushi single={nagiri} eatSushi={props.eatSushi}/>)}       
        <MoreButton handleMore={props.handleMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer