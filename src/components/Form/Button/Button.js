import React from "react";
import s from './Button.module.scss';

const Button = ({ title }) => (
  <button className={s.button}>
    {title}
  </button>
)

export default Button;
