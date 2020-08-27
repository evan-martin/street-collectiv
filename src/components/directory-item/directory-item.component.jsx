import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import DirectoryGallery from '../directory-item-gallery/directory-item-gallery.component'
import DirectoryCarousel from '../directory-item-carousel/directory-item-carousel.component'

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
      <div className="button-bar">
      
      <CustomButton 
        onClick={() => history.push(`shop${linkUrl}`)}
      >
        Shop
      </CustomButton>
      <CustomButton> sHoW SoMe lOvE </CustomButton>
    </div>
    </div>
    <div className="directory-gallery">
      
      <DirectoryCarousel imageUrl={imageUrl}/>
  
      </div>
    
    
  </div>
  
);

export default withRouter(DirectoryItem);
