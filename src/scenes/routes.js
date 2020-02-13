import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Auth from './Auth/Auth';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
};

function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routes.home}
          component={() => <div>Hello</div> }
        />
        <Route path={routes.auth} component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
