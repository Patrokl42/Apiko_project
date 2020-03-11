import React from 'react';
import s from './Avatar.module.scss';

const Avatar = ({userName, userAvatar}) => {
  return (
    <div className={s.avatar_wrapper}>
      <span className={s.user_initials}>{userName}</span>
    </div>
  )
}

export default Avatar;
