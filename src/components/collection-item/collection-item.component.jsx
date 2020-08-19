import React from "react";
import { connect } from "react-redux";

import CollectionItemModal from "../collection-item-modal/collection-item-modal.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CollectionItemModal item={item} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(CollectionItem);
