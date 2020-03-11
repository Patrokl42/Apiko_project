import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import Auth from './Auth/Auth';
import { observer } from 'mobx-react'
import { useStore } from '../stores/createStore'
import Main from './Main/Main'

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  product: '/products/:productId'
};

export const PrivateRoute = observer(({ component: Component, ...props }) => {
  const store = useStore();

  return (
    <Route { ...props } render={ (...renderProps) =>
      store.auth.isLoggedIn ? (
        <Redirect to={routes.home} />
      ) : (
        <Component {...renderProps} />
      )
    }/>
  )
});

function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={routes.auth} component={Auth} />
        <Route component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
