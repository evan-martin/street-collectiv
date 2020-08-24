import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { getShopByLocationFilter } from '../../redux/location-filter/location.selector';

import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ shops }) => (
  <div className='directory-menu'>
    {shops.map(({ id, ...otherSectionProps }) => (
      <DirectoryItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = state => {
  const { locationFilter } = state;
  const shops = getShopByLocationFilter(state, locationFilter);
  return { shops };

};

export default connect(mapStateToProps)(Directory);
