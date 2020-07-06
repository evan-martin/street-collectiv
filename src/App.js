import React, {Component} from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import AltaclassicProducts from "./components/AltaclassicProducts";
import LashaeProducts from "./components/LashaeProducts";
import SunstoneProducts from "./components/SunstoneProducts";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/altaclassic" component={AltaclassicProducts} />
        <Route exact path="/lashae" component={LashaeProducts} />
        <Route exact path="/sunstone" component={SunstoneProducts} />
      </BrowserRouter>
    );
  }
}

export default App;
