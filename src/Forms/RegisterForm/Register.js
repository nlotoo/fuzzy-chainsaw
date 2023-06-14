import toast, { Toaster } from 'react-hot-toast';
import React from 'react'
import './register.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterUser } from '../services';
import { useState } from 'react';
import { useMutation } from '@apollo/client'
import { gql } from 'graphql-tag'

const Register = () => {

    const [userValues, setValues] = useState();

    // console.log(userValues)

    const [addUser, { loading, data, error }] = useMutation(REGISTER_USER)
    // {
    //     update(proxy, result) {
    //         console.log(result)
    //     },
    //     variables: userValues
    // }

    console.log(data)


    // const registerUser = () => {
    //     console.log('inside func')
    //     addUser(userValues);
    // }




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
                    // console.log(values)
                    if (values.password !== values.rePassword) {
                        errors.rePassword = 'Password doesnt match'
                        // console.log(!/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z]).{6,}$/.test(values.password))
                    }
                    // else if(!/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z]).{6,}$/.test(values.password)){
                    //     errors.rePassword='To weak passsword password need to containes '
                    // }
                    // console.log(values)  

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {


                    setValues(values)

                    setSubmitting(false);



                    // Toaster for logged user
                    // if (data.message.includes('This')) {
                    //     toast.error(data.message)
                    // } else {
                    //     toast.success(data.message)
                    // }

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
                        <ErrorMessage className='error-msg-login' name="rePassword" component="div" />



                        <div className='checkbox-container'>
                            <Field className='chekbox-login-form' type="checkbox" id='0' value='in' name='keepLogIn' />
                            <p className='checkbox-login-text-register'>I agree to and have read Rules & Regulations and Privacy Policy</p>
                        </div>
                        {/* onClick={() => concreteMagazine({ variables: { id: inputValue } })} */}
                        <button onClick={() => addUser({ variables: { email: 'asd', password: '123' } })} className='login-btn' type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
            <Toaster />

        </div>
    )
}

const REGISTER_USER = gql`

mutation Register($input: CreateUserInput) {
  register(input: $input) {
    createAt
    email
    id
    token
    password
  }
}

`

export default Register