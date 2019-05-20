import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushiList: [],
      displayList: [],
      eatenSushi: [],
      wallet: 100
    }
  }

  
  

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({
      sushiList: sushi,
      displayList: [sushi[0], sushi[1], sushi[2], sushi[3]]
    }))
  }

  

  handleMore= () => {
    let newList =[]
    for (let i = 0; i < 4; i++) {
    newList.push(this.state.sushiList.shift())
    }
    console.log('test', this.state.sushiList)
    this.setState({
      displayList: newList
    })

  }

  emptyWallet = () => {
    let wallet = this.state.wallet
    if (this.state.eatenSushi != []) {
      let amounts = this.state.eatenSushi.map(dish => parseInt(dish.price))
      let total = amounts.reduce((a, b) => a + b, 0)
      return wallet - total
    } else {
      return wallet
    }
  }

  eatSushi = (dish) => {
    console.log('eatsushi', dish)
    if (dish.price > this.emptyWallet) {
      alert('not enough funds bro')
    } else {
    let newDisplay = this.state.displayList.map(meal => {
      if (meal.id == dish.id) {
        meal.eaten = true;
        return meal
      } else {
        return meal
      }
    })
    
    this.setState({
      displayList: newDisplay,
      eatenSushi: [...this.state.eatenSushi, dish],
      
    })}
  }

  emptyWallet = () => {
  let wallet = this.state.wallet
  if (this.state.eatenSushi != []) {
    let amounts = this.state.eatenSushi.map(dish => parseInt(dish.price))
    let total = amounts.reduce((a, b) => a + b, 0)
    return wallet - total
  } else {
    return wallet
  }
}
  render() {
    
    return (
      <div className="app">
        <SushiContainer sushiDisplay={this.state.displayList} handleMore={this.handleMore} eatSushi={this.eatSushi} />
        <Table emptyPlate={this.state.eatenSushi} emptyWallet={this.emptyWallet}/>
      </div>
    );
  }
}

export default App;