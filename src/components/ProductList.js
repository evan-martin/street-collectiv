import React, {Component} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import "./styles/cardstyles.css";

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      stores: []
    };
  }

  componentDidMount() {
    axios.get("/stores").then(res => {
      this.setState({stores: res.data});
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>

        <div>
          {this.state.stores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
