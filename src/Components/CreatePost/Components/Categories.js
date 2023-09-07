import React, { useState } from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useStateContext } from '../../../context/StateContext';

const Categories = () => {


    let { categoryGetter } = useStateContext()

    return (
        <Form.Group>
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



        </Form.Group>
    )
}

export default Categories