import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';
import PrevButton from '../components/PrevButton'

const SushiContainer = (props) => {
  return (
    <Fragment>

      <div className="belt">
        <PrevButton prevSushi={props.prevSushi}/>
          {props.sushi.map( sushi => {
            return <Sushi sushi={sushi} eatSushi={props.eatSushi}/>
          })}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer