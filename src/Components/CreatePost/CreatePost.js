import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';

// import { Formik } from 'formik';
import * as yup from 'yup';


import './create-post.css'
// import { useStateContext } from '../../context/StateContext';

function CreatePost() {

    // let { postMasiveObject, setPostMasiveObject } = useStateContext()

    const [switcherButton, setWitcherButton] = useState(false);

    let switcher = () => {
        setWitcherButton(!switcherButton)
    }


    const { Formik } = formik;



    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        link: yup.string().required('Link is required'),
        desc: yup.string().required('Description is required'),
        curentPrice: yup.string().required('Curent price is required'),
        // productImage: yup.mixed().required('Image is required'),

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
                newPrice:'',
                startDate:'',
                endDate:'',

            }}

            // onSubmit={console.log}
            onSubmit={(values, { setSubmitting, }) => {




                // setSubmitting(false);
                console.log(values)
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
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

                            isInvalid={!!errors.desc}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.desc}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

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

                            isInvalid={!!errors.file}

                        />





                        <Form.Control.Feedback type="invalid">
                            {errors.file}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


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



                    <Button onClick={switcher} type="button">Previus step</Button>

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