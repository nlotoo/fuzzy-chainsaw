import React from 'react';
import './createRecord.css';


import { gql } from 'graphql-tag';
import { useMutation,useLazyQuery } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const CreateRecord = () => {

    let userEmail = localStorage.getItem('email');
    let userToken = localStorage.getItem('userToken')

    const CREATE_POST = gql`
    mutation createPost($body: String, $dataImages: [Upload]) {
        createPost(body: $body,dataImages: $dataImages) {
            id
            createAt
            description
            owner
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

        // console.log(input.file)

        let dataImages = input.file


        createPost({
            variables: {
                body: input.desc,
                dataImages: dataImages
            }
        })


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

                    handCreatePost(values)

                    setSubmitting(false);
                    // console.log(values)

                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form encType="multipart/form-data" className='create-record-container '>
                        <label htmlFor='desc' className='login-label'>create post</label>
                        <Field placeholder='text something...' type="text" name="desc" />
                        <ErrorMessage className='error-msg-login' name="desc" component="textarea" />

                        <label htmlFor='file'>Upload File:</label>
                        <input
                            id='file'
                            name='file'
                            type='file'
                            onChange={(event) => {
                                setFieldValue('file', event.currentTarget.files[0]);
                            }}
                            multiple />

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