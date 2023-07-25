import React from 'react';
import './create-record.css';


import { gql } from 'graphql-tag';
import { useMutation, useLazyQuery } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useStateContext } from '../../context/StateContext';

// Да изпратя целият обек към базата данни.


const CreateRecord = () => {

    let userEmail = localStorage.getItem('email');
    let userToken = localStorage.getItem('userToken');

    let { openCloseCreateRecord, categoriesHolder, setCategoriesHolder } = useStateContext()

    // desc is heading of post
    const CREATE_POST = gql`
    mutation CreatePost($desc: String, $link: String, $dataImages: [Upload], $offertDetails: OffertDetails, $categories: [String]) {
  createPost(desc: $desc, link: $link, dataImages: $dataImages, offertDetails: $offertDetails, categories: $categories) {
    categories {
        categories
    }
    comments {
      body
      createAt
      id
      owner
      ownerEmail
    }
    createAt
    description
    id
    images {
      id
      filename
      mimetype
      path
      _id
    }
    likes {
      id
      owner
      createAt
      ownerEmail
    }
    link
    owner
    user
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
    const notify = () => {
        // console.log(loading);
        console.log(data);
        // console.log(error);

        if (error) {
            toast.error(`Post is not created: ${error.message} `)

        }
        if (data) {
            toast.success('Post created')
        }

    };



    //  da izprtq categorite na backenda


    const handCreatePost = (input) => {

        let dataImages = input.file
        // console.log(input.startDate)
        // console.log(input.endDate)

        // console.log(categoriesHolder)
        // categoriesHolder

        console.log("categoriesHolder:", categoriesHolder);

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
                    periodOfPost: [input.startDate, input.endDate]
                },
                categories: categoriesHolder
            }
        })


    }




    return (


        <>



            <div className='main-container-create-post'>
                <Toaster />

                <Formik
                    initialValues={{
                        desc: '',
                        link: '',
                        price: '',
                        title: '',
                        newPrice: '',
                        body: '',
                        file: null,
                        ofertTitle: '',
                        startDate: '',
                        endDate: '',

                        homeAndLivings: '',
                        familyAndKids: '',
                        gardeDoItYourself: '',
                        groceries: '',
                        travel: '',
                        sportsAndOutdors: '',
                        broadBandAndPhoneContracts: '',
                        financeInsurance: '',
                        electronics: '',
                        fashionAccessories: '',
                        cultureLeisure: '',
                        servicesContracts: '',
                        healtBeat: '',
                        gaming: '',
                        carMotorcycle: '',




                    }}
                    validate={values => {
                        const errors = {};
                        // console.log(values);
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
                            errors.file = 'Image is required';
                        }
                        if (!values.ofertTitle) {
                            errors.ofertTitle = 'Ofert title  is required'
                        }

                        if (!values.startDate) {
                            errors.startDate = 'Start date is required';
                        }

                        if (!values.endDate) {
                            errors.endDate = 'End date is required'
                        }

                        if (values.startDate > values.endDate) {
                            console.log('start date is biger / wrong ')
                            errors.endDate = 'End date need to after start date'
                        } else if (values.startDate < values.endDate) {
                            console.log('end date is bigger /true way')
                        } else {
                            console.log('there are same')
                        }
                        // console.log(values.endDate)
                        // console.log(values.startDate)

                        let categories = {
                            home: values.homeAndLivings[0],
                            family: values.familyAndKids[0],
                            garden: values.gardeDoItYourself[0],
                            groceries: values.groceries[0],
                            travel: values.travel[0],
                            sports: values.sportsAndOutdors[0],
                            phones: values.broadBandAndPhoneContracts[0],
                            finance: values.financeInsurance[0],
                            electronics: values.electronics[0],
                            fashion: values.fashionAccessories[0],
                            cuture: values.cultureLeisure[0],
                            services: values.servicesContracts[0],
                            healt: values.healtBeat[0],
                            gaming: values.gaming[0],
                            car: values.carMotorcycle[0],
                        }



                        function categoriesChek(c) {
                            let chosedCategories = [];
                            let arr = Object.values(c)


                            arr.forEach((category, index) => {

                                if (category !== undefined) {
                                    chosedCategories.push(category)
                                }
                            })



                            if (chosedCategories.length === 0) {
                                return 'Category is required';
                            } else {
                                return chosedCategories
                            }

                        }

                        let result = categoriesChek(categories)

                        
                        if (result.length === 20) {
                            errors.homeAndLivings = result
                        } else {
                            console.log("result:", result);
                            // console.log(result)
                            setCategoriesHolder(result)
                        }







                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {

                        // console.log(values);

                        handCreatePost(values);

                        setSubmitting(false);
                        // console.log(values)

                    }}
                >


                    {({ isSubmitting, setFieldValue }) => (


                        <Form className='create-record-containera'>

                            <div className='grid-container'>

                                <div className='grid-section first-section-border'>
                                    <h3>Details </h3>
                                    {/* да бъде махнат този фиелд desc
                         */}
                                    <Field className='input-field-create-records' type='text' name='desc' placeholder='add desc here...' ></Field>

                                    <label>Title</label>
                                    <div className='input-section-create-record'>
                                        <Field className='input-field-create-records' type='text' name='title' placeholder='add title here...' ></Field>
                                        <ErrorMessage className='input-create-error-msg' name="title" component="div" />
                                    </div>


                                    <label>Link</label>
                                    <div className='input-section-create-record' >
                                        <Field className='input-field-create-records' type='text' name='link' placeholder='add link here...' ></Field>
                                        <ErrorMessage className='input-create-error-msg' name="link" component="div" />
                                    </div>

                                    <label className='upload-file-button' htmlFor='file'>upload image click here:</label>
                                    <div className='input-section-create-record'>
                                        <input
                                            className='hidden'
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

                                <div className='grid-section second-section-border'>
                                    <h3>Offert Details</h3>
                                    <label htmlFor='desc' className='login-label'>Heading  post</label>
                                    <div className='input-section-create-record'>
                                        <Field className='input-field-create-records ' placeholder='add heading here...' type="text" name="ofertTitle" />
                                        <ErrorMessage className='input-create-error-msg' name="ofertTitle" component="div" />
                                    </div>

                                    <label>Description body</label>
                                    <div className='input-section-create-record' >
                                        <Field className='input-field-create-records description-field' type='text' name='body' component="textarea" placeholder='add description here...' ></Field>
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



                                    <button onClick={notify} className='login-btn' type="submit" disabled={isSubmitting}>
                                        Create deal
                                    </button>
                                </div>

                                <div className='grid-section third-section-border'>
                                    <label>Start/end data</label>

                                    <div>
                                        <span>Start</span> <Field name='startDate' type="date" id="date"></Field>
                                        <ErrorMessage className='input-create-error-msg' name="startDate" component="div" />

                                    </div>

                                    <div>
                                        <span>End</span> <Field name='endDate' type="date" id="date"></Field>
                                        <ErrorMessage className='input-create-error-msg' name="endDate" component="div" />

                                    </div>

                                    <label>Categories</label>

                                    <div className='create-container-categories'>
                                        <div className='create-container-categories-sub-component'>
                                            <span>
                                                <Field className='asd' type="checkbox" id="homeAndLivings" name="homeAndLivings" value="homeAndLivings" />
                                                <label for="homeAndLivings">Home & Livings</label>
                                            </span>
                                            <span>

                                                <Field type="checkbox" id="familyAndKids" name="familyAndKids" value="familyAndKids" />
                                                <label for="familyAndKids">Family & Kids</label>
                                            </span>
                                            <span>
                                                <Field type="checkbox" id="gardeDoItYourself" name="gardeDoItYourself" value="gardeDoItYourself" />
                                                <label for="gardeDoItYourself">Garden & Do it Yourself</label>
                                            </span>
                                            <span>

                                                <Field type="checkbox" id="groceries" name="groceries" value="groceries" />
                                                <label for="groceries">Groceries</label>
                                            </span>
                                            <span>

                                                <Field type="checkbox" id="travel" name="travel" value="travel" />
                                                <label for="travel">Travel</label>
                                            </span>
                                            <span>

                                                <Field type="checkbox" id="sportsAndOutdors" name="sportsAndOutdors" value="sportsAndOutdors" />
                                                <label for="sportsAndOutdors">Sports & Outdors</label>
                                            </span>
                                            <span>

                                                <Field type="checkbox" id="broadBandAndPhoneContracts" name="broadBandAndPhoneContracts" value="broadBandAndPhoneContracts" />
                                                <label for="broadBandAndPhoneContracts">BroadBand & Phone Contracts</label>
                                            </span>
                                            <span>

                                                <Field type="checkbox" id="financeInsurance" name="financeInsurance" value="financeInsurance" />
                                                <label for="financeInsurance">Finance & Insurance</label>
                                            </span>

                                        </div>

                                        <div className='create-container-categories-sub-component'>
                                            <span>
                                                <Field type="checkbox" id="electronics" name="electronics" value="electronics" />
                                                <label for="electronics">Electronics</label>
                                            </span>
                                            <span>
                                                <Field type="checkbox" id="fashionAccessories" name="fashionAccessories" value="fashionAccessories" />
                                                <label for="fashionAccessories">Fashion & Accessories</label>
                                            </span>
                                            <span>
                                                <Field type="checkbox" id="cultureLeisure" name="cultureLeisure" value="cultureLeisure" />
                                                <label for="cultureLeisure">Culture & Leisure</label>
                                            </span>

                                            <span>
                                                <Field type="checkbox" id="servicesContracts" name="servicesContracts" value="servicesContracts" />
                                                <label for="servicesContracts">Services & Contracts</label>
                                            </span>

                                            <span>
                                                <Field type="checkbox" id="healtBeaty" name="healtBeaty" value="healtBeaty" />
                                                <label for="healtBeaty">Healt & Beaty</label>
                                            </span>


                                            <span>
                                                <Field type="checkbox" id="gaming" name="gaming" value="gaming" />
                                                <label for="gaming">Gaming</label>
                                            </span>
                                            <span>
                                                <Field type="checkbox" id="carMotorcycle" name="carMotorcycle" value="carMotorcycle" />
                                                <label for="carMotorcycle">Car 7 Motorcycle</label>
                                            </span>
                                            <ErrorMessage className='input-create-error-msg' name="homeAndLivings" component="div" />


                                        </div>

                                    </div>
                                </div>

                            </div>

                        </Form>
                    )}
                </Formik>




            </div >
        </>
    )
}

export default CreateRecord