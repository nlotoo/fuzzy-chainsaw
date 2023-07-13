import React from 'react';
import './createRecord.css';


import { gql } from 'graphql-tag';
import { useMutation, useLazyQuery } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const CreateRecord = () => {

    let userEmail = localStorage.getItem('email');
    let userToken = localStorage.getItem('userToken')

    const CREATE_POST = gql`
    mutation createPost($desc: String, $link: String,$dataImages: [Upload], $offertDetails: OffertDetails) {
        createPost(desc: $desc, link:$link ,dataImages: $dataImages, offertDetails: $offertDetails) {
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

        let dataImages = input.file
        // console.log(input)


        createPost({
            variables: {
                desc: input.desc,
                link: input.link,
                dataImages: dataImages,
                offertDetails: {
                    title: 'first title',
                    normalPrice: '200',
                    curentPrice: '2',
                    voucherCode: 'none',
                }
            }
        })


    }




    return (
        <div className='main-container-create-post'>


            <Formik
                initialValues={{ desc: '', link: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.desc) {
                        errors.desc = 'Required';
                    }
                    else if (!values.link) {
                        errors.link = 'Link is required'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    // console.log(values)

                    handCreatePost(values)

                    setSubmitting(false);
                    // console.log(values)

                }}
            >
                {({ isSubmitting, setFieldValue }) => (


                    <Form encType="multipart/form-data" className='create-record-container '>
                        <h1 className='create-post-heading'>Create Deal</h1>

                        <label htmlFor='desc' className='login-label'>create post</label>
                        <Field placeholder='text something...' type="text" name="desc" />
                        <ErrorMessage className='error-msg-login' name="desc" component="div" />

                        <label htmlFor='file'>Upload File:</label>
                        <input
                            id='file'
                            name='file'
                            type='file'
                            onChange={(event) => {
                                setFieldValue('file', event.currentTarget.files[0]);
                            }}
                            multiple />

                        <label>LINK</label>
                        <Field type='text' name='link' placeholder='add link here..' ></Field>
                        <ErrorMessage className='error-msg-login' name="link" component="div" />


                        <h3>Offer Details</h3>
                        <label>Title</label>
                        <Field type='text' name='title' placeholder='add title here..' ></Field>
                        <ErrorMessage className='error-msg-login' name="link" component="div" />


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