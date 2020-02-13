import React from 'react';
import s from './App.module.scss';
import Router from './scenes/routes'

function App () {
  return (
    <main className={s.app}>
      <Router />
    </main>
  );
}

export default App;
