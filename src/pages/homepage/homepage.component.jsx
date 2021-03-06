import React from 'react';
import { Route } from 'react-router-dom';

import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';
import StoreFront from '../../pages/storefront/storefront.component'
import CheckoutPage from '../../pages/checkout/checkout.component'

import './homepage.styles.scss';

const HomePage = ({ match }) => (
  <div>
  <div className='homepage'>
    <Banner />
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={Directory} />
      <Route path={`${match.path}/:collectionId`} component={StoreFront} /> 
    </div>
  </div>
  </div>
);

export default HomePage;
