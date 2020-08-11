import React from "react";
import {connect} from "react-redux";

import {Tab} from "semantic-ui-react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {selectCollection} from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({collection}) => {
  const {title, imageUrl, bio, items} = collection;

  const panes = [
    {
      menuItem: "Our Story",
      render: () => (
        <Tab.Pane>
          <div className="our-story">
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl})`
              }}
            />
            <div className="shop-info">
              <div className="title">
                <h1>{title}</h1>
              </div>
              <div className="bio">{bio}</div>
            </div>
          </div>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Shop",
      render: () => (
        <Tab.Pane>
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map(item => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          ,
        </Tab.Pane>
      )
    },
    {
      menuItem: "Find Us",
      render: () => (
        <Tab.Pane>
          <div id="map-container">
          map is hard :(
          </div>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Connect",
      render: () => (
        <Tab.Pane>
          <div id="map-container"></div>
        </Tab.Pane>
      )
    }
  ];

  return <Tab panes={panes} />;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
