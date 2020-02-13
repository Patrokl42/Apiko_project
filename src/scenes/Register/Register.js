import React from 'react';
import s from './Register.module.scss';

import eye from './components/eye.svg';
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  const onSubmit = () => {
    console.log(123);
  };

  return (
    <RegisterForm onSubmit={onSubmit}/>
  )
};

export default Register;
