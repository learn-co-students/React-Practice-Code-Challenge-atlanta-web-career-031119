import React from 'react'

class Sushi extends React.Component {
  

  
  render() {
  return (
    <div className="sushi" id={this.props.single.id}>
      <div className="plate" 
           onClick={() => this.props.eatSushi(this.props.single)}> 
           {this.props.single.eaten ? null : <img src={this.props.single.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {this.props.single.name} - ${this.props.single.price}
      </h4>
    </div>
  )}
}

export default Sushi