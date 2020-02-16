import React, { useEffect } from 'react'
import s from './App.module.scss';
import Router from './scenes/routes';
import { createStore, Provider } from './stores/createStore'

const store = createStore();

function App () {
  useEffect(() => {
    store.bootstrap();
  }, [])
  return (
    <main className={s.app}>
      <Provider value={store}>
        <Router />
      </Provider>
    </main>
  );
}

export default App;
