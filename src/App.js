import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import DisplayStores from './components/DisplayStores'
import DisplayProducts from './components/DisplayProducts'

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Route exact path = '/' component = { DisplayStores } />
        <Route exact path = '/products' component = { DisplayProducts } />
      </BrowserRouter>
    );
  }
}

export default App;
