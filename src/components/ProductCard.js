import React from "react";
import {Link} from "react-router-dom";
import "./styles/cardstyles.css";

export const StoreCard = props => {
  return (
    <div className="storecard">
      <h1>{props.store.name} </h1>
      <p>{props.store.owner}</p>
    </div>
  );
};
export default StoreCard;
