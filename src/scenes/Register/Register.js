import React from 'react';
import RegisterForm from "./components/RegisterForm";
import { useStore } from '../../stores/createStore'
import { useHistory } from 'react-router'
import { routes } from '../routes'

const Register = () => {
  const store = useStore();
  const history = useHistory();

  const onSubmit = async ({ email, password, fullName }) => {
    await store.auth.registerFlow.run({ email, password, fullName });

    history.push(routes.home);
  };

  return (
    <RegisterForm onSubmit={onSubmit}/>
  )
};

export default Register;
