import { SET_FILTER } from "./location.types";
import { LOCATION_FILTERS } from "./location.constants";

const initialState = LOCATION_FILTERS.ALL;

const locationFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default locationFilter;
