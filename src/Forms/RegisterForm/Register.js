import toast, { Toaster } from 'react-hot-toast';
import React from 'react'
import './register.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterUser } from '../services';
import { useState } from 'react';

const Register = () => {

    let [fetchJsonMsg, setfetchJsonMsg] = useState(false);








    return (
        <div className='register-form-container'>
            <h2 className='heading-register'>Sing up</h2>

            <Formik
                initialValues={{ email: '', password: '', rePassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {


                    RegisterUser(values).then((data) => {
                        setfetchJsonMsg(data.message)
                        toast.success(data.message)
                    })
                    setSubmitting(false);


                }}
            >
                {({ isSubmitting }) => (
                    <Form className='login-form'>

                        <label htmlFor='email' className='login-label'>Username or Email</label>
                        <Field placeholder='Jon_Dawn' className='input-field-login' type="email" name="email" />
                        <ErrorMessage className='error-msg-login' name="email" component="div" />

                        <label className='login-label'>Password </label>
                        <Field placeholder='password' className='input-field-login' type="password" name="password" />
                        <ErrorMessage className='error-msg-login' name="password" component="div" />

                        <label className='login-label'>Repeat password</label>
                        <Field placeholder='Repeat password' className='input-field-login' type="password" name="rePassword" />
                        <ErrorMessage className='error-msg-login' name="password" component="div" />


                        {/* {fetchJsonMsg} */}
                        {fetchJsonMsg && <span className='error-msg-login'>  {fetchJsonMsg}</span>}
                        <div className='checkbox-container'>
                            <Field className='chekbox-login-form' type="checkbox" id='0' value='in' name='keepLogIn' />
                            <p className='checkbox-login-text-register'>I agree to and have read Rules & Regulations and Privacy Policy</p>
                        </div>

                        <button className='login-btn' type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
            <Toaster />


        </div>
    )
}

export default Register