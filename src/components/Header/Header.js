import React from 'react'
import s from './Header.module.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { routes } from '../../scenes/routes'
import logo from '../../assets/img/Logo.svg'
import IconHeart from '../../assets/img/heart.svg'
import { observer } from 'mobx-react'
import { useStore } from '../../stores/createStore'
import HeaderLogged from './HeaderLogged/HeaderLogged'
import HeaderAuth from './HeaderAuth/HeaderAuth'

const UserInfo = observer(() => {
  const store = useStore()

  return (
    <div>
      {store.viewer.user.fullName}{' '}
      <button type='button' onClick={store.auth.logout}>
        Logout
      </button>
    </div>
  )
})

const Header = () => {
  const history = useHistory()
  const store = useStore()

  const navigateToLogin = () => {
    history.push(routes.login)
  }

  return !store.auth.isLoggedIn
    ?
    <HeaderAuth navigateToLogin={navigateToLogin}/>
    :
    <HeaderLogged/>
}

export default observer(Header)
