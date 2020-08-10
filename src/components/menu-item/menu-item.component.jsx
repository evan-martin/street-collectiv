import React from "react";
import {withRouter} from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

import "./menu-item.styles.scss";

const MenuItem = ({title, bio, imageUrl, reverse, history, linkUrl, match}) => (
  <div
    className={`${reverse} menu-item`}
  >
    <div
      className={`${reverse} background-image`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <p> {bio} </p>
      <div className='button-bar'>
        <button className='shop-button'
          onClick={() => history.push(`${linkUrl}`)}>
          Shop
        </button>
        <button className='love-button'> sHoW SoMe lOvE </button>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
