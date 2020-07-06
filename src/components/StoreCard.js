import React, {useState} from "react";
import {Link} from "react-router-dom";

const StoreCard = props => {
  return (
    <div>
      <span> {props.children} </span>
    </div>
  );
};
export default StoreCard;
