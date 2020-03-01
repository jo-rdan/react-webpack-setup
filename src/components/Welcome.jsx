import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavLinks from './Nav';
import SignupComponent from './SignupComponent.jsx';
import SigninComponent from './SigninComponent.jsx';
import Home from './Home';

const Welcome = () => {
  return (
    <Router>
      <NavLinks />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignupComponent} />
        <Route path="/signin" component={SigninComponent} exact />
      </Switch>

    </Router>
  );
};

export default Welcome;
