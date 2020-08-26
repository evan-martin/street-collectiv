import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import ImageGallery from "react-image-gallery";

import "./collection-item-gallery.styles.scss";

const MyGallery = ({ item, addItem }) => {
  const { name, price, imageUrl, description, size } = item;

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
      thumbnailPosition="left"
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(MyGallery);
