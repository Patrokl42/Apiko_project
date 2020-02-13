import React from "react";
import { useField } from "formik";
import s from './Input.module.scss';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={s.input_wrapper}>
        <label className={s.label}>label</label>
        <input {...field} {...meta} className={s.input} placeholder='input'/>
      </div>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  )
}

export default Input;
