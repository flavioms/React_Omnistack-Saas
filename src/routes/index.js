import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from '~/pages/Main';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

const Routes = () => (
  <Switch>
    <Route path="/" exact isPrivate component={Main} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Switch>
);

export default Routes;
