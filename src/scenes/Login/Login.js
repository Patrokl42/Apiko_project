import React from 'react';

import LoginForm from "./components/LoginForm";

const Login = () => {
  const onSubmit = () => {
    console.log(123);
  };

  return (
    <main>
      <div>
        <LoginForm onSubmit={onSubmit}/>
      </div>
    </main>
  )
};

export default Login;
