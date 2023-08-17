import React from 'react'

import AsidePost from '../AsidePost/AsidePost';
import './getDealpage.css'

// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const GetDealPage = () => {




    return (
        <div className='get-deal-page-container'>
            <div className='get-deal-container'>
                <Card className='card-get-deal'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go to deal</Button>
                    </Card.Body>
                </Card>

              
            </div>
            <div className='aside-section'>
                <h3 className='aside-heading grey'>Hottest deal</h3>
                <AsidePost></AsidePost>
                <AsidePost></AsidePost>
                <AsidePost></AsidePost>



            </div>
        </div>
    )
}

export default GetDealPage