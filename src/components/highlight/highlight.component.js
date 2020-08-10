import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectHighlightSections} from "../../redux/highlight/highlight.selectors";

import HighlightItem from "../../components/highlight-item/highlight-item.component";
import "./highlight.styles.scss";

const Highlight = ({sections}) => (
  <div className='highlight'>
    <div className="title">
      <h1> Featured Entrepreneurs </h1>
    </div>
    <div className="highlight-menu">
      {sections.map(({id, ...otherSectionProps}) => (
        <HighlightItem key={id} {...otherSectionProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectHighlightSections
});

export default connect(mapStateToProps)(Highlight);
