import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ListLists from '../ListLists';

const Routes = withRouter(({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={ListLists} />
  </Switch>
));

export default Routes;
