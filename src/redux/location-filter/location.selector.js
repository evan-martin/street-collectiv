import { LOCATION_FILTERS } from "./location.constants";
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

export const getShopByLocationFilter = (store, locationFilter) => {
  const allShops = selectDirectorySections(store);
  switch (locationFilter) {
    case LOCATION_FILTERS.DC:
      return allShops.filter(sections => sections.dc);
    case LOCATION_FILTERS.MD:
      return allShops.filter(sections => sections.md);
    case LOCATION_FILTERS.VA:
      return allShops.filter(sections => sections.va);
    case LOCATION_FILTERS.ALL:
    default:
      return allShops;
  }
};
