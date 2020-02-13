import React from 'react';
import s from './Login.module.scss';

import eye from'./eye.svg';

const Login = () => {
  {console.log(s)}
  return (
    <div className={s.login_wrapper}>
      <form className={s.form}>
        <div className={s.form_inner}>
          <h2 className={s.title}>Login</h2>
          <div className={s.input_wrapper}>
            <label className={s.label}>Email</label>
            <input className={s.input} placeholder='Example@gmail.com'/>
          </div>
          <div className={s.input_wrapper}>
            <label className={s.label}>Password again</label>
            <div className={s.input_field}>
              <input className={s.input}/>
              <button className={s.button_input} type='button'>
                <img src={eye}/>
              </button>
            </div>
          </div>
          <div className={s.recover_password}>
            Don’t remember password?
          </div>
          <button className={s.button_submit} type='submit'>Continue</button>
        </div>
      </form>
    </div>
  )
};

export default Login;
