import React from 'react';
import s from './Header.module.scss';
import { useHistory } from 'react-router-dom';
import { routes } from '../../scenes/routes';
import logo from './Logofull.svg';
import IconHeart from './heart.svg';

const Header = () => {
  const history = useHistory();

  const navigateToLogin = () => {
    console.log(history)
    history.push(routes.login);
  }


  return (
    <header className={s.header_container}>
      <div className={s.header_inner}>
        <img src={logo} alt={'Logo'} />
        <div>
          <button type='button' className={s.navigation_button__sell} onClick={navigateToLogin}>
            SELL
          </button>
          <button type='button' className={s.navigation_button__login} onClick={navigateToLogin}>
            LOGIN
          </button>
          <button type='button' className={s.navigation_button__heart_icon} onClick={navigateToLogin}>
            <img src={IconHeart} alt={'heart'} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
