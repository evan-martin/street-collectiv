import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component'
import StoreFront from './pages/storefront/storefront.component'



class App extends React.Component {

  render() {
    return (
      <div>
       <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/shop" />
          </Route>
          <Route path="/shop" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>

      </div>
    );
  }
}

export default connect()(App);
