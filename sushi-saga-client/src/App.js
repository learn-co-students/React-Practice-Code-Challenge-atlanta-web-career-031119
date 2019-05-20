import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      sushiDisplay: 0,
      budget: 100
    }
  }

  componentDidMount() {
      fetch(API)
      .then(resp => resp.json())
      .then(data => this.updateSushi(data))
  }

  updateSushi= (data)=> {
    let updatedSushi = data.map(sushi => {
      sushi.eaten= false;
      return sushi
    })
      this.setState({allSushi: updatedSushi})
  }

  stageSushi= ()=>{
    return this.state.allSushi.slice(this.state.sushiDisplay, this.state.sushiDisplay+4)
  }

  clickMoreSushi= ()=>{
    return this.setState({sushiDisplay: (this.state.sushiDisplay+4)})
  }

  clickEatSushi= (targetSushi)=> {
    let wallet = this.state.budget
    const eatenSushi = this.state.allSushi.map(sushi => {
      if (sushi.id === targetSushi.id && this.state.budget >= targetSushi.price) {
        sushi.eaten = true
        wallet = wallet-targetSushi.price
        return sushi
      }
      else {
        return sushi
      }
    })
    this.setState({allSushi: eatenSushi, budget: wallet})
  }

  filterEatenSushi= ()=>{
    return this.state.allSushi.filter(sushi=> sushi.eaten)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiStage={this.stageSushi()}
          clickMoreSushi={this.clickMoreSushi}
          clickEatSushi={this.clickEatSushi}
        />
        <Table filterEatenSushi={this.filterEatenSushi} wallet={this.state.budget}/>
      </div>
    );
  }
}

export default App;