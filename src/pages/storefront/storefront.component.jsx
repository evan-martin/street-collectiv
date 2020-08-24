import React from "react";
import { connect } from "react-redux";

import Collection from "../../components/collection/collection.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./storefront.styles.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const StoreFront = ({ collection }) => {
  const { title, imageUrl, bio, items } = collection;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        <Tab label="Our Story" {...a11yProps(0)} />
        <Tab label="Our Products" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0} collection={collection}>
        <div className="our-story">
          <div
            className="image"
            style={{
              backgroundImage: `url(${imageUrl})`,
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
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Collection collection = {collection} />
      </TabPanel>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(StoreFront);
