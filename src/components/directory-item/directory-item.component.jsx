import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import DirectoryGallery from '../directory-item-gallery/directory-item-gallery.component'

import "./directory-item.styles.scss";

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
        
        <p className='quote-text'> "{quote}"<br></br> <h4>-{owner}</h4>
        </p>
        
      </div>
    </div>
    <div className="directory-gallery">
      
      <DirectoryGallery imageUrl={imageUrl}/>

    </div>
    
    <div className="button-bar">
      <h1 className="title"> {title.toUpperCase()} </h1>
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
