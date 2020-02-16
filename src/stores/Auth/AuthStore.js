import { types } from 'mobx-state-tree';
import Api from '../../api'
import { asyncModel } from '../utils';

export const AuthStore = types.model('AuthStore', {
  loginFlow: asyncModel(loginFlow),
  registerFlow: asyncModel(registerFlow)
});

function loginFlow ({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login(email, password );
    console.log(res.data);

    Api.Auth.setToken(res.data.token);

    // getRoot(flow).viewer.serViewer(res.data.user);
  };
}


function registerFlow ({ password, email, fullName }) {
  return async (flow) => {
    const res = await Api.Auth.register(email, password, fullName );
    console.log(res.data);

    Api.Auth.setToken(res.data.token);

    // getRoot(flow).viewer.serViewer(res.data.user);
  };
}
