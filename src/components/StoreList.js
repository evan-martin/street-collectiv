import React, {Component} from "react";
import axios from "axios";
import StoreCard from "./StoreCard";
import "./styles/cardstyles.css";
import "./styles/avatar.scss";
import SHOP_DATA from './shop.data.js'

class StoreList extends Component {
  constructor() {
    super();
  }


  render() {
    const {collections} = this.state;
    return (
      <div>
          {collections.map(({ id, otherCollectionProps}) => (
                <StoreList key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default StoreList;
