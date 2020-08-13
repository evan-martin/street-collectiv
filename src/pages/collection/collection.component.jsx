import React from "react";
import {connect} from "react-redux";

import {Tab, Container} from "semantic-ui-react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {selectCollection} from "../../redux/shop/shop.selectors";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import {red} from "@material-ui/core/colors";

import "./collection.styles.scss";

const CollectionPage = ({collection}) => {
  const {title, imageUrl, bio, items} = collection;

  const panes = [
    {
      menuItem: "Our Story",
      render: () => (
        <Container maxWidth="sm">
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
              <div className="bio">
              <p>{bio}</p>
              </div>
            </div>
          </div>
        </Tab.Pane>
        </Container>
      )
    },
    {
      menuItem: "Shop",
      render: () => (
        <Container maxWidth="sm">
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
        </Container>
      )
    },
    {
      menuItem: "Find Us",
      render: () => (
        <Container maxWidth="sm">
        <Tab.Pane>
          <div id="map-container">map is hard :(</div>
        </Tab.Pane>
        </Container>
      )
    },
    {
      menuItem: "Connect",
      render: () => (
        <Container maxWidth="sm">
        <Tab.Pane>
        <h2>Get in touch with {title}!</h2>
          <div id="social-media">
            <div className="social-icon">
              <InstagramIcon color="secondary" fontSize="large" />
            </div>
            <div className="social-icon">
              <TwitterIcon color="primary" fontSize="large" />
            </div>
            <div className="social-icon">
              <FacebookIcon color="primary" fontSize="large" />
            </div>
            <div className="social-icon">
              <MailIcon style={{color: red[500]}} fontSize="large" />
            </div>
          </div>
        </Tab.Pane>
        </Container>
      )
    }
  ];

  return <Tab panes={panes} />;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
