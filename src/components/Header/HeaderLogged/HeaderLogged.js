import React from 'react'
import s from './HeaderLogged.module.scss'
import logo from '../../../assets/img/LogoLoggined.svg'
import IconHeart from '../../../assets/img/heart.svg'
import IconInbox from '../../../assets/img/inbox.svg'
import Avatar from '../../Avatar/Avatar'
import { useStore } from '../../../stores/createStore'

const HeaderLogged = () => {
  const store = useStore()
  return (
    <header className={s.header_container}>
      <div className={s.header_inner}>
        <img src={logo} alt={'Logo'}/>
        <div className={s.right}>
          <button className={s.inbox}>
            <img src={IconInbox}/>
          </button>
          <button type='button' className={s.navigation_button__sell}>
            SELL
          </button>
          <Avatar userName={'II'}/>
          {store.viewer.user.fullName}
          <button type='button' className={s.navigation_button__heart_icon}>
            <img src={IconHeart} alt={'heart'}/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderLogged
