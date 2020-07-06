import React, {Component} from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import StoreList from "./StoreList";

class Homepage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <StoreList />
        </div>
      </div>
    );
  }
}

export default Homepage;
