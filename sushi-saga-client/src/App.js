import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Search from './components/Search'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushi: [],
      query: "",
      wallet: 200,
      index: 0,
      eatenSushi: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiInfo => {
      let addEatenSushi = sushiInfo.map( sushi => {
        return { ...sushi, eaten: false }
      })
      this.setState({
        sushi: addEatenSushi
      })
    })
  }

  sushiFilter =(e)=> {
    this.setState({
      query: e.target.value
    })
  }

  filteredSushi =()=> {
    return this.state.sushi.filter( sushi => {
      if (sushi.name.toLowerCase().includes(this.state.query.toLowerCase()) || sushi.price === parseInt(this.state.query, 10))
      return true
    })
  }

  displaySushi =()=> {
    return this.filteredSushi().slice(this.state.index, this.state.index + 4)
  }

  moreSushi =()=> {
    if (this.state.index != 96) {
      this.setState({
        index: this.state.index + 4
      })
    }
  }

  prevSushi =()=> {
    if (this.state.index != 0) {
      this.setState({
        index: this.state.index - 4
      })
    }
  }

  eatSushi =(eatSushi)=> {
    let nomNomSushi = this.state.sushi.map( sushi => {
      if (sushi.id === eatSushi.id && eatSushi.price <= this.state.wallet) {
        sushi.eaten = true
        this.setState({
          wallet: this.state.wallet -= eatSushi.price
        })
        this.state.eatenSushi.push(sushi.id)
        return sushi
      } else {
        return sushi
      }
    })
    this.setState({
      sushi: nomNomSushi
    })
  }

  render() {
    return (
      <div className="app">
        <Search sushiFilter={this.sushiFilter} />
        <SushiContainer  sushi={this.displaySushi()} moreSushi={this.moreSushi} prevSushi={this.prevSushi} eatSushi={this.eatSushi}/>
        <Table wallet={this.state.wallet} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;