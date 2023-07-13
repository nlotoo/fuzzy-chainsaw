import React from 'react';
import './createRecord.css';


import { gql } from 'graphql-tag';
import { useMutation, useLazyQuery } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';





const CreateRecord = () => {

    let userEmail = localStorage.getItem('email');
    let userToken = localStorage.getItem('userToken')



    // desc is heading of post
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
                desc: input.desc, //heading of post
                link: input.link,
                dataImages: dataImages,
                offertDetails: {
                    title: input.title,
                    normalPrice: input.price.toString(),
                    curentPrice: input.newPrice.toString(),
                    body: input.body,
                }
            }
        })


    }




    return (
        <div className='main-container-create-post'>


            <Formik
                initialValues={{ desc: '', link: '', price: '', title: '', newPrice: '', body: '', file: null, }}
                validate={values => {
                    const errors = {};
                    console.log(values)
                    if (!values.desc) {
                        errors.desc = 'Deal heading required';
                    }
                    if (!values.link) {
                        errors.link = 'Link is required';
                    }
                    if (!values.title) {
                        errors.title = 'Title is required';
                    }

                    if (!values.body) {
                        errors.body = 'Description is required';
                    }

                    if (!values.price) {
                        errors.price = 'Price is required';
                    }
                    if (!values.newPrice) {
                        errors.newPrice = 'Price is required';
                    }

                    if (!values.file) {
                        errors.file = 'File is required';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    console.log(values);

                    handCreatePost(values)

                    setSubmitting(false);
                    // console.log(values)

                }}
            >


                {({ isSubmitting, setFieldValue }) => (


                    <Form className='create-record-container slide-in-top'>
                        <h1 className='create-post-heading'>Create Deal</h1>
                        <div className='grid-container'>

                            <div className='grid-section left-section-border'>

                                <h3>Details </h3>
                                <label htmlFor='desc' className='login-label'>Heading of post</label>
                                <div className='input-section-create-record'>
                                    <Field className='input-field-create-records' placeholder='add heading here...' type="text" name="desc" />
                                    <ErrorMessage className='input-create-error-msg' name="desc" component="div" />
                                </div>


                                <label>Link</label>
                                <div className='input-section-create-record' >
                                    <Field className='input-field-create-records' type='text' name='link' placeholder='add link here...' ></Field>
                                    <ErrorMessage className='input-create-error-msg' name="link" component="div" />
                                </div>

                                <label htmlFor='file'>Upload File:</label>
                                <div className='input-section-create-record'>
                                    <input
                                        
                                        id='file'
                                        name='file'
                                        type='file'
                                        accept="image/x-png,image/gif,image/jpeg"
                                        onChange={(event) => {
                                            setFieldValue('file', event.currentTarget.files[0]);
                                        }}
                                    />
                                    <ErrorMessage className='input-create-error-msg' name="file" component="div" />

                                </div>

                            </div>

                            <div className='grid-section right-section-border'>
                                <h3>Offert Details</h3>
                                <label>Title</label>
                                <div className='input-section-create-record'>
                                    <Field className='input-field-create-records' type='text' name='title' placeholder='add title here...' ></Field>
                                    <ErrorMessage className='input-create-error-msg' name="title" component="div" />
                                </div>

                                <label>Description body</label>
                                <div className='input-section-create-record' >
                                    <Field className='input-field-create-records' type='text' name='body' placeholder='add description here...' ></Field>
                                    <ErrorMessage className='input-create-error-msg' name="body" component="div" />
                                </div>

                                <label>Price</label>
                                <div className='input-section-create-record' >
                                    <Field className='input-field-create-records' type='number' name='price' placeholder='add price here...' ></Field>
                                    <ErrorMessage className='input-create-error-msg' name="price" component="div" />
                                </div>
                                <label>New price</label>
                                <div className='input-section-create-record' >
                                    <Field className='input-field-create-records' type='number' name='newPrice' placeholder='add new price here...' ></Field>
                                    <ErrorMessage className='input-create-error-msg' name="newPrice" component="div" />
                                </div>

                                <button className='login-btn' type="submit" disabled={isSubmitting}>
                                    create
                                </button>
                            </div>

                        </div>

                    </Form>
                )}
            </Formik>




        </div >
    )
}

export default CreateRecord