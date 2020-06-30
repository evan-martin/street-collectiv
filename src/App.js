import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import DisplayStores from './components/DisplayStores'
import AltaclassicProducts from './components/AltaclassicProducts'
import LashaeProducts from './components/LashaeProducts'
import SunstoneProducts from './components/SunstoneProducts'

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Route exact path = '/' component = { DisplayStores } />
        <Route exact path = '/altaclassic' component = { AltaclassicProducts } />
        <Route exact path = '/lashae' component = { LashaeProducts } />
        <Route exact path = '/sunstone' component = { SunstoneProducts } />
      </BrowserRouter>
    );
  }
}

export default App;
