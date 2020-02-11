import React from 'react';
import s from './Header.module.scss';
import { useHistory } from 'react-router-dom';
import { routes } from '../../scenes/routes';

const Header = () => {
  const history = useHistory();

  const navigateToLogin = () => {
    console.log(history)
    history.push(routes.login);
  }


  return (
    <header className={s.container}>
      <div className={s.left}>
        Marketplace
      </div>
      <div className={s.right}>
        <button type='button' onClick={navigateToLogin}>
          Login
        </button>
      </div>
    </header>
  )
}

export default Header;
