import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import locationFilter from './location-filter/location.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  locationFilter: locationFilter,
});

export default persistReducer(persistConfig, rootReducer);
