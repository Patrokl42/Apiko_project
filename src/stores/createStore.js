import { RootStore } from './RootStore';
import { createContext, useContext } from 'react'
import { createPetsist } from './utils'

export const createStore = () => {
  const root = RootStore.create();

  const persistor = createPetsist(root);

  persistor.rehydrate();

  return root;
}

const MSTContext = createContext(null);

export const Provider = MSTContext.Provider;

export const useStore = (mapStateToProps) => {
  const store = useContext(MSTContext);

  if (typeof mapStateToProps === 'function') {
    return mapStateToProps(store);
  }

  return store;
}
