import { applySnapshot, getParent, onSnapshot, getRoot, types } from 'mobx-state-tree'
import Api from '../api'
import { normalize } from 'normalizr'

export function asyncModel (thunk, auto = true) {
  const model = types.model('AsyncModel', {
    isLoading: false,
    isError: false,
  })
    .actions(store => ({
      start() {
        store.isLoading = true;
        store.isError = false;
      },

      success() {
        store.isLoading = false;
      },

      error(err) {
        store.isLoading = false;
        store.isError = true;
      },


      run(...args) {
        const promise = thunk(...args)(
          store,
          getParent(store),
          getRoot(store)
        );

        if(auto) {
          return  store._auto(promise);
        }

        return promise;
      },

      merge(data, schema) {
        const { entities, result } = normalize(data, schema);

        getRoot(store).entities.merge(entities);

        return result;
      },

      async _auto(promise) {
        try {
          store.start();

          await promise;

          store.success();
        } catch (err) {
          store.error(err);
        }
      }
    }));

  // return model.create({});
  return types.optional(model,{});
}

export function createPetsist (store) {
  onSnapshot(store, (snapshot) => {
    window.localStorage.setItem(
      '__persist',
      JSON.stringify({
        auth: {
          isLoggedIn: snapshot.auth.isLoggedIn,
        },
        viewer: {
          user: snapshot.viewer.user,
        },
      }),
    );
  });

  function rehydrate () {
    const snapshot = window.localStorage.getItem('__persist');

    if(snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  }

  return {
    rehydrate,
  };
}

export function createCollection (ofModel, asyncModels = {}) {
  const collection = types.model('CollectionModel', {
    collection: types.map(ofModel),
    ...asyncModels
  })
    .views((store) => ({
      get(key) {
        return store.collection.get(String(key));
      }
    }))
    .actions(store => ({
      add(key, value) {
        store.collection.set(String(key), value);
      },
    }));

  return types.optional(collection, {})
}
