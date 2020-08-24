import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import ImageGallery from "react-image-gallery";

import "./directory-item-gallery.styles.scss";

const DirectoryGallery = ({ imageUrl }) => {


  const images = [
    {
      original: `${imageUrl}`,
      thumbnail: `${imageUrl}`,
    },
    {
      original: `${imageUrl}`,
      thumbnail: `${imageUrl}`,
    },
  ];

  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={true}
      showBullets={true}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(DirectoryGallery);
