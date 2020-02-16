import React from "react";
import s from "../Register.module.scss";
import eye from "./eye.svg";

import { Formik, Form } from "formik";
import Input from "../../../components/Form/Input/Input";
import Button from '../../../components/Form/Button/Button'


const RegisterForm = ({onSubmit}) => {
  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: '',
    },
    onSubmit
  };


  return(
    <div className={s.register_wrapper}>
      <Formik { ...formikProps }>
        <Form className={s.form}>
          <div className={s.form_inner}>
            <h2 className={s.title}>Register</h2>
            <Input label={'Email'} name='email'/>
            <Input label={'Full Name'} name='fullName'/>
            <Input label={'Password'} name='password'/>
            <Input label={'Password again'} name='passwordAgain'/>
            <Button title={'Register'}/>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm;
