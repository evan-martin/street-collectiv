import React from "react";
import cx from "classnames";
import {connect} from "react-redux";
import {setFilter} from "../../redux/location-filter/location.actions";
import {LOCATION_FILTERS} from "../../redux/location-filter/location.constants";

import "./location-filter.styles.scss";

const LocationFilter = ({activeFilter, setFilter}) => {
  return (
    <div className="location-filters">
      <div className="explore">
        <h1> EXPLORE </h1>
      </div>
      <div className='filter-list'>
      {Object.keys(LOCATION_FILTERS).map(filterKey => {
        const currentFilter = LOCATION_FILTERS[filterKey];
        return (
          <h1
            key={`location-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </h1>

        );
      })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {activeFilter: state.locationFilter};
};

export default connect(mapStateToProps, {setFilter})(LocationFilter);
