import React from "react";
import { Formik, Form} from 'formik';

import s from "../Login.module.scss";
import Input from '../../../components/Form/Input/Input'
import Button from '../../../components/Form/Button/Button'

const LoginForm = ({ onSubmit }) => {
  const formikProps = {
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit
  }
  return (
    <div className={s.login_wrapper}>
      <Formik {...formikProps}>
        <Form className={s.form}>
          <div className={s.form_inner}>
            <h2 className={s.title}>Login</h2>
            <Input label={'email'} name='email'/>
            <Input label={'password'} name='password'/>
            <div className={s.recover_password}>
              Don’t remember password?
            </div>
            <Button title={'Continue'} />
          </div>
        </Form>
      </Formik>
    </div>
  )
};

export default LoginForm;
