import React from "react";
import {Link} from "react-router-dom";
import "./styles/cardstyles.css";

const ProductCard = ({ title, items}) => {
  return (
    <div>
    <h1> {title} </h1>
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          </div>
      ))}
    </div>
    </div>
  );
};
export default ProductCard;
