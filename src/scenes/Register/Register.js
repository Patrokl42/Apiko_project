import React from 'react';
import s from './Register.module.scss';

import eye from'./eye.svg';

const Register = () => {
  {console.log(s)}
  return (
    <div className={s.register_wrapper}>
      <form className={s.form}>
        <div className={s.form_inner}>
          <h2 className={s.title}>Register</h2>
          <div className={s.input_wrapper}>
            <label className={s.label}>Email</label>
            <input className={s.input} placeholder='Example@gmail.com'/>
          </div>
          <div className={s.input_wrapper}>
            <label className={s.label}>Full Name</label>
            <input className={s.input} placeholder='Tony Stark'/>
          </div>
          <div className={s.input_wrapper}>
            <label className={s.label}>Password</label>
            <div className={s.input_field}>
              <input className={s.input}/>
              <button className={s.button_input} type='button'>
                <img src={eye}/>
              </button>
            </div>
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
          <button className={s.button_submit} type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
};

export default Register;
