import React from "react";
import s from "../Register.module.scss";
import eye from "./eye.svg";

import { Formik } from "formik";
import Input from "../../../components/Form/Input/Input";


const RegisterForm = ({onSubmit}) => {
  const formikProps = {
    initialValues: {
      email: '',
      fillName: '',
      password: '',
      passwordAgain: '',
    },
    onSubmit
  };


  return(
    <div className={s.register_wrapper}>
      <Formik { ...formikProps }>
        <form className={s.form}>
          <div className={s.form_inner}>
            <h2 className={s.title}>Register</h2>
            <Input label={'Name'} name='name'/>
            <Input label={'Full Name'} name='fullName'/>
            <Input label={'Email'} name='email'/>
            <Input label={'Password'} name='password'/>
            <Input label={'Password again'} name='passwordAgain'/>
            <button className={s.button_submit} type='submit'>Register</button>
          </div>
        </form>
      </Formik>
    </div>
  )
}

export default RegisterForm;
