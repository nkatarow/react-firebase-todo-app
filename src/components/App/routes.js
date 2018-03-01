import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import BaseApp from './App';

const Routes = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={BaseApp} />
  </Switch>
));

export default Routes;
