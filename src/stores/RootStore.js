import { types } from 'mobx-state-tree';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './ViewerStore';
import Api from '../api';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {})
  })
  .actions((store) => ({
    async bootstrap() {
      // try {
      //   const token = window.localStorage.getItem('___token');
      //
      //   //TODO: Check token undefiend
      //
      //   Api.Auth.setToken(token)
      //   // const res = await Api.Account.getUser();
      //   store.viewer.serViewer(res.data);
      // } catch (err) {
      //   // re
      // }
    },
  }));
