import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import Banner from './Banner'
import StoreCard from './StoreCard'
import './styles/cardstyles.css'

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
      <div>
        {this.state.stores.map(store =>(
          <StoreCard key = {store.id} store = {store} />
        ))}
      </div>

    </div>
  )
}


}

export default StoreList
