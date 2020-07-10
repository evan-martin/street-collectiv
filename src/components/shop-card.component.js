import React from "react";
import {Route, withRouter} from "react-router-dom";
import Header from "./header.component";

const ShopCard = ({id, title, items, history, match, linkUrl}) => {
  return (
    <div>
      <h1 onClick={() => history.push(`${match.url}${linkUrl}`)}> {title} </h1>
      {items.map(item => (
        <p key={id}> {item.name} </p>
      ))}
      <Route path={`${match.path}/:collectionId`} component={Header} />
    </div>
  );
};
export default withRouter(ShopCard);
