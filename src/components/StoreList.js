import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import Banner from './Banner'
import StoreCard from './StoreCard'

class StoreList extends Component {
  constructor(){
    super();

    this.state = {
      stores: [] 
    }
  }

componentDidMount(){
  axios.get('/stores').then(res => {
        this.setState({stores: res.data});
  })
}

render(){

  return(
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Banner />
      </div>
    <StoreCard>
      {this.state.stores.map(stores => (
        <div>
          <h1 key={stores.id}> {stores.name} </h1>
          <p> {stores.owner} </p>
        </div>
      ))}
    </StoreCard>
    </div>
  )
}


}

export default StoreList
