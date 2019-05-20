import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiStage.map(sushi => <Sushi clickEatSushi={props.clickEatSushi} sushiData={sushi}/>)}
        <MoreButton clickMoreSushi={props.clickMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer