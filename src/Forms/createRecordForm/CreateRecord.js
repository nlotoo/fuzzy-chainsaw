import React from 'react';
import './createRecord.css';


import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CreateRecord = () => {

    let userEmail = localStorage.getItem('email');
    let userToken = localStorage.getItem('userToken')

    const CREATE_POST = gql`
    mutation createPost($body: String) {
        createPost(body: $body) {
            id
            createAt
            description
            owner
            user
              likes {
                 id
             }
        }
    }
    `

    const [createPost, { loading, data, error }] = useMutation(CREATE_POST, {
        context: {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        },
    });





    const handCreatePost = (input) => {

        // console.log(input)

        createPost({ variables: { body: input.desc } })
    }




    return (
        <div>


            <Formik
                initialValues={{ desc: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.desc) {
                        errors.desc = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }, 400);
                    handCreatePost(values)

                    setSubmitting(false);
                    console.log(values)

                }}
            >
                {({ isSubmitting }) => (
                    <Form className='create-record-container '>
                        <label htmlFor='desc' className='login-label'>create post</label>
                        <Field placeholder='text something...' type="text" name="desc" />
                        <ErrorMessage className='error-msg-login' name="desc" component="textarea" />

                        <button className='login-btn' type="submit" disabled={isSubmitting}>
                            create
                        </button>
                    </Form>
                )}
            </Formik>



        </div >
    )
}

export default CreateRecord