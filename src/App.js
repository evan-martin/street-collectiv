import React, {Component} from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
      </BrowserRouter>
    );
  }
}

export default App;
