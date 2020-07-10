import React, {Component} from "react";
import Header from "./header.component";
import Banner from "./banner.component";
import ShopList from "./shop-list.component";

import SHOP_DATA from "./shop.data";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <ShopList collections={this.state.collections} />
        </div>
      </div>
    );
  }
}

export default Homepage;
