import React, {Component} from "react";
import ShopCard from "./shop-card.component";

class ShopList extends Component {
  render() {
    return (
      <div>
        {this.props.collections.map(({id, title, items}) => (
          <ShopCard key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopList;
