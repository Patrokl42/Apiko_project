import React from 'react';
import s from './HeaderAuth.module.scss'
import logo from '../../../assets/img/Logo.svg'
import IconHeart from '../../../assets/img/heart.svg'

const HeaderAuth = ({navigateToLogin}) => {
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

export default HeaderAuth;
