import React from 'react'
import './login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
    return (
        <div className='login-form-container'>
            <h2>Login</h2>

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
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='login-form'>
                        <label>Username or Email</label>
                        <Field className='input-field-login' type="email" name="email" />
                        <ErrorMessage className='error-msg-login' name="email" component="div" />
                        <label>Password</label>
                        <Field className='input-field-login' type="password" name="password" />
                        <ErrorMessage className='error-msg-login' name="password" component="div" />
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