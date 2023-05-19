import React from 'react'
import './login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
    return (
        <div className='login-form-container'>
            <h2 className='heading-login'>Login</h2>

            <Formik
                initialValues={{ email: '', password: '' }}
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

                    console.log(values)
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='login-form'>
                        <label for='email' className='login-label'>Username or Email</label>
                        <Field placeholder='Jon_Dawn' className='input-field-login' type="email" name="email" />
                        <ErrorMessage className='error-msg-login' name="email" component="div" />
                        <label className='login-label'>Password <span className='span-forgot'>Forgot?</span></label>
                        <Field placeholder='password' className='input-field-login' type="password" name="password" />
                        <ErrorMessage className='error-msg-login' name="password" component="div" />
                        <div className='checkbox-container'>
                            <Field className='chekbox-login-form' type="checkbox" id='0' value='in' name='keepLogIn' />
                            <p className='checkbox-login-text'>Keep me logged in this device</p>
                        </div>
                        <button className='login-btn' type="submit" disabled={isSubmitting}>
                            Log in
                        </button>
                    </Form>
                )}
            </Formik>


        </div>
    )
}

export default Login