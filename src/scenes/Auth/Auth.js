import React from 'react';
import s from './Auth.module.scss';
import Header from '../../components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute, routes } from '../routes'
import Register from "../Register/Register";
import Login from "../Login/Login";

const Auth = () => {
  return (
    <>
    <Header />
    <Switch>
      <PrivateRoute path={routes.login} component={Login}/>
      <PrivateRoute path={routes.register} component={Register}/>
    </Switch>
    </>
  )
}

export default Auth
