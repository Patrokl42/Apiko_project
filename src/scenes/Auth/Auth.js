import React from 'react';
import s from './Auth.module.scss';
import Header from '../../components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes'

const Auth = () => {
  return (
    <>
    <Header />
      <div>Hello Auth</div>
    <Switch>
      <Route
        path={routes.login}
        component={() => <div>Login</div>}
      />
      <Route
        path={routes.register}
        component={() => <div>Register</div>}
      />
    </Switch>
    </>
  )
}

export default Auth
