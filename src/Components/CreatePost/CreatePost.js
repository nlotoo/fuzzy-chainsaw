import React, { useEffect, useState } from 'react';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';

import Categories from './Components/Categories'

// import { Formik } from 'formik';
import * as yup from 'yup';


import './create-post.css'
import { useStateContext } from '../../context/StateContext';
// import { useStateContext } from '../../context/StateContext';

function CreatePost() {

    // let { postMasiveObject, setPostMasiveObject } = useStateContext()

    const [switcherButton, setWitcherButton] = useState(false);

    let switcher = () => {
        setWitcherButton(!switcherButton)
    }


    const { Formik } = formik;

    // let { categories } = useStateContext();

    const [categories, setCategorries] = useState([]);


    const categoryGetter = (event) => {
        event.preventDefault()

        if (categories.find((element) => element == event.target.value)) {


            setCategorries(categories.filter(a => a !== event.target.value))
        } else {

            categories.push(event.target.value)

        }

        console.log(categories)


    }


    useEffect(() => {

    }, [categories])


    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        link: yup.string().required('Link is required'),
        desc: yup.string().required('Description is required'),
        curentPrice: yup.string().required('Curent price is required'),
        newPrice: yup.string().required('New price is required'),
        file: yup.mixed().required('Image is required'),
        startDate: yup.mixed().required('Start date is required'),
        endDate: yup.mixed().required('End date is required'),


    });

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                title: '',
                link: '',
                desc: '',
                file: null,
                curentPrice: '',
                newPrice: '',
                startDate: '',
                endDate: '',


                homeAndLivings: '',
                familyAndKids: '',
                gardeDoItYourself: '',
                groceries: '',

                Atag: [categories],
            }}

            // onSubmit={console.log}
            onSubmit={(values, { setSubmitting, }) => {




                setSubmitting(false);
                console.log(values, categories)
                // console.log(categories)
                // console.log(Formik)
            }}



        >
            {({ handleSubmit, handleChange, values, touched, errors, setFieldValue, }) => (



                < div className='create-post-container'>
                    <Form clasName='create-post-form-container2' noValidate onSubmit={handleSubmit}>
                        <h3 id="detailsOfUser">Details of product</h3>
                        {!switcherButton && <Col className="mb-3">
                            <Form.Group md="4" controlId="validationFormik01">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}

                                    isInvalid={!!errors.title}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>

                            </Form.Group>

                            <Form.Group md="4" controlId="validationFormik02">
                                <Form.Label>Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="link"


                                    value={values.link}
                                    onChange={handleChange}
                                    isValid={touched.link && !errors.link}
                                    isInvalid={!!errors.link}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.link}
                                </Form.Control.Feedback>


                            </Form.Group>

                            <Form.Group md="4" controlId="validationFormik03">
                                <Form.Label>Description</Form.Label>

                                <Form.Control
                                    className='text-area-ofert-details'
                                    as="textarea"
                                    type="text"
                                    placeholder="Describe the product here..."
                                    aria-describedby="inputGroupPrepend"
                                    name="desc"
                                    value={values.desc}
                                    onChange={handleChange}
                                    isValid={touched.desc && !errors.desc}
                                    isInvalid={!!errors.desc}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.desc}
                                </Form.Control.Feedback>



                            </Form.Group>



                            <Form.Group md="4" controlId='validationFormik04'>

                                <Form.Label>Insert Image</Form.Label>

                                <Form.Control
                                    type="file"
                                    as="input"
                                    name='file'
                                    onChange={(event) => {
                                        setFieldValue('file', event.currentTarget.files[0]);
                                    }}
                                    isValid={touched.file && !errors.file}
                                    isInvalid={!!errors.file}

                                />





                                <Form.Control.Feedback type="invalid">
                                    {errors.file}
                                </Form.Control.Feedback>



                            </Form.Group>

                            <Button onClick={switcher} type="button">Next step</Button>

                        </Col>}

                        {switcherButton && <Col className='second-col'>

                            <Form.Group md="4" controlId="validationFormik05">
                                <Form.Label>Old Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="curentPrice"
                                    value={values.curentPrice}
                                    onChange={handleChange}
                                    isValid={touched.curentPrice && !errors.curentPrice}

                                    isInvalid={!!errors.curentPrice}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.curentPrice}
                                </Form.Control.Feedback>

                            </Form.Group>

                            <Form.Group md="4" controlId="validationFormik06">
                                <Form.Label>New Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="newPrice"
                                    value={values.newPrice}
                                    onChange={handleChange}
                                    isValid={touched.newPrice && !errors.newPrice}

                                    isInvalid={!!errors.newPrice}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.newPrice}
                                </Form.Control.Feedback>

                            </Form.Group>



                            <Form.Group md="4" controlId="validationFormik07">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    value={values.startDate}
                                    onChange={handleChange}
                                    isValid={touched.startDate && !errors.startDate}

                                    isInvalid={!!errors.startDate}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.startDate}
                                </Form.Control.Feedback>

                            </Form.Group>


                            <Form.Group md="4" controlId="validationFormik08">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={values.endDate}
                                    onChange={handleChange}
                                    isValid={touched.endDate && !errors.endDate}

                                    isInvalid={!!errors.endDate}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.endDate}
                                </Form.Control.Feedback>

                            </Form.Group>



                            <Form.Group md="4" controlId="validationFormik09">

                                <Form.Label>Categories</Form.Label>

                                <Row>
                                    <Col md="auto">
                                        <div>
                                            <Form.Check.Input
                                                label="Home & Livings"
                                                name="homeAndLivings"
                                                value="homeAndLivings"
                                                type="checkbox"
                                                onClick={categoryGetter}
                                             

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Home & Livings</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="familyAndKids"
                                                value="familyAndKids"
                                                type="checkbox"
                                                onClick={categoryGetter}
                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Family & Kids</Form.Label>
                                        </div>


                                        <div>
                                            <Form.Check.Input
                                                name="gardeDoItYourself"
                                                value="gardeDoItYourself"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Garden & Do it Yourself</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="groceries"
                                                value="groceries"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Groceries</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="travel"
                                                value="travel"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Travel</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="travel"
                                                value="travel"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Travel</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="sportAndOutdoors"
                                                value="sportAndOutdoors"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Sports & Outdors</Form.Label>
                                        </div>


                                        <div>
                                            <Form.Check.Input
                                                name="electronics"
                                                value="electronics"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Electronics</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="broadBandPhoneConrtacts"
                                                value="broadBandPhoneConrtacts"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>BroadBand & Phone Contracts</Form.Label>
                                        </div>


                                    </Col>



                                    <Col>

                                        <div>
                                            <Form.Check.Input
                                                name="finance"
                                                value="finance"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Finance & Insurance</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="fashion"
                                                value="fashion"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Fashion & Accessories</Form.Label>
                                        </div>


                                        <div>
                                            <Form.Check.Input
                                                name="cultureAndLeisure"
                                                value="cultureAndLeisure"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Culture & Leisure</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="servicesAndContacts"
                                                value="servicesAndContacts"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Services & Contracts</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="healtBeaty"
                                                value="healtBeaty"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Healt & Beaty</Form.Label>
                                        </div>


                                        <div>
                                            <Form.Check.Input
                                                name="gaming"
                                                value="gaming"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Gaming</Form.Label>
                                        </div>

                                        <div>
                                            <Form.Check.Input
                                                name="carMotorcycle"
                                                value="carMotorcycle"
                                                type="checkbox"
                                                onClick={categoryGetter}

                                            >
                                            </Form.Check.Input>
                                            <Form.Label>Car 7 Motorcycle</Form.Label>
                                        </div>
                                    </Col>
                                </Row>


                                {/* <Categories></Categories> */}


                            </Form.Group>


                            <Button onClick={switcher} id='previous-btn' type="button">Previous  step</Button>

                        </Col>}

                        <Button type="submit">Submit</Button>



                    </Form>
                </div>
            )
            }
        </Formik >

    );
}

export default CreatePost;