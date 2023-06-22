import React from 'react'
import './login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';


import { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    let { setUserToken, switchOffAuthMenu } = useStateContext()

    let navigate = useNavigate();

    const LOGIN_USER = gql`
            mutation Login($email: String, $password: String) {
              login(email: $email, password: $password) {
                createAt
                email
                password
                token
               }
            }
            `

    const [Login, { loading, data, error }] = useMutation(LOGIN_USER);

    const handleLogin = (input) => {
        console.log(input)

        Login({ variables: input });
    };

    if (error) {
        localStorage.setItem('userToken', null)
        toast.error(error.message)
    }

    if (data) {
        console.log(data);
        toast.success('User is loged');
        setUserToken(data.login.token);
        localStorage.setItem('userToken', data.login.token);
        localStorage.setItem('email', data.login.email);
        window.location.reload(false);
        
        switchOffAuthMenu();
        
    }
    




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

                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }, 400);
                    handleLogin(values)
                    setSubmitting(false);
                    console.log(values)

                }}
            >
                {({ isSubmitting }) => (
                    <Form className='login-form'>
                        <label htmlFor='email' className='login-label'>Username or Email</label>
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
            <Toaster />


        </div >
    )
}

export default Login

 