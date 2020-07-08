import React, {Component} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import "./styles/cardstyles.css";
import SHOP_DATA from './shop.data.js'

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      store: 'default'
    };

    console.log(SHOP_DATA);
  }

  render() {
    const {collections} = this.state;
    return (
        <div>
          {collections.map(({id, ...otherCollectionProps }) => (
            <ProductCard key={id} {...otherCollectionProps} />
          ))}
        </div>

    );
  }
}

export default ProductList;
