import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component'
import PaymentSuccess from './pages/payment-success/payment-success.component'
import AboutPage from './pages/about/about.component'



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
          <Route exact path='/success' component={PaymentSuccess} />
          <Route exach path='/about' component={AboutPage} />
        </Switch>

      </div>
    );
  }
}

export default connect()(App);
