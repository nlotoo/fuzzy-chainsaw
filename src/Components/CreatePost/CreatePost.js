import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';


import './create-post.css'

function CreatePost() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        link: yup.string().required('Link is required'),
        desc: yup.string().required('Description is required'),
        // file: yup.mixed().required('Image is required'),

    });

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                title: '',
                link: '',
                desc: '',
                file: null,


            }}

            // onSubmit={console.log}
            onSubmit={(values, { setSubmitting }) => {

                console.log(values);



                setSubmitting(false);
                // console.log(values)

            }}



        >
            {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (

                <div className='create-post-container'>
                    <h3 id="detailsOfUser">Details of product</h3>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Col className="mb-3">
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

                            </Form.Group>



                            <Form.Group md="4" controlId='validationFormik04'>

                                <Form.Label>Insert Image</Form.Label>

                                <Form.Control
                                    type="file"
                                    as="input"
                                    name='file'
                                    value={values.file}
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
                            {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel> */}
                        </Col>

                        {/* <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
           */}
                        <Button type="submit">next step</Button>
                    </Form>
                </div>
            )}
        </Formik>

    );
}

export default CreatePost;