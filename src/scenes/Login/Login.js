import React from 'react';
import { useStore } from '../../stores/createStore'
import LoginForm from "./components/LoginForm";
import { observer } from 'mobx-react';
import { useHistory } from 'react-router'
import { routes } from '../routes'

const Login = () => {
  const store = useStore();
  const history = useHistory();

  const onSubmit = async ({ email, password }) => {
    // await store.auth.login.run({ email, password });
    await store.auth.loginFlow.run({ email, password });

    history.push(routes.home);
  };

  return (
    <main>
      <div>
        {store.auth.loginFlow.isLoading ? (
          <div>Loading ...</div>
        ):(
          <LoginForm onSubmit={onSubmit}/>
        )}
      </div>
    </main>
  )
};

export default observer(Login);
