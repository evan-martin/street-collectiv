import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./directory-item.styles.scss";

const DirectoryItem = ({
  title,
  bio,
  imageUrl,
  reverse,
  history,
  linkUrl,
  owner,
  quote,
}) => (
  <div className="directory-item">
    <div className="entrepreneur">
      <div className="quote">
        <p>
          "{quote}" - {owner}
        </p>
      </div>
    </div>
    <div className="directory-gallery"></div>
    <div className="button-bar">
      <h3 className="title"> {title.toUpperCase()} </h3>
      <CustomButton 
        onClick={() => history.push(`shop${linkUrl}`)}
      >
        Shop
      </CustomButton>
      <CustomButton> sHoW SoMe lOvE </CustomButton>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
