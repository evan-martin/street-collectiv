import React from 'react';
import Banner from '../../components/banner/banner.component';
import Highlight from '../../components/highlight/highlight.component';
import LocationFilter from '../../components/location-filter/location-filter.component'


import './splash.styles.scss';

const SplashPage = () => (
  <div className='splashpage'>
    <Banner />
    <Highlight />
  </div>
);

export default SplashPage;
