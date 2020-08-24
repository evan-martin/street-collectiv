import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import DirectoryGallery from '../directory-item-gallery/directory-item-gallery.component'

import "./directory-item.styles.scss";
import { ImageGroup } from "semantic-ui-react";

const DirectoryItem = ({
  title,
  bio,
  imageUrl,
  ownerPicUrl,
  reverse,
  history,
  linkUrl,
  owner,
  quote,
}) => (
  <div className="directory-item">
    <div className="entrepreneur">
      <div className='owner-avatar'>
        <img className='owner-image' src={ownerPicUrl} alt={owner} />
      </div>
      <div className="quote">
        
        <p className='quote-text'> "{quote}" - {owner}
        </p>
        
      </div>
    </div>
    <div className="directory-gallery">
      <DirectoryGallery imageUrl={imageUrl}/>
    </div>
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
