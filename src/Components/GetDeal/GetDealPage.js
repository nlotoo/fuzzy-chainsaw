import React, { useEffect, useState } from 'react'

import AsidePost from '../AsidePost/AsidePost';
import './getDealpage.css'
import { gql, useLazyQuery } from '@apollo/client';
import { useStateContext } from '../../context/StateContext';

import Spinner from 'react-bootstrap/Spinner';


const GetDealPage = () => {


    const GET_POST = gql`
query GetPost($getPostId: ID) {
  getPost(id: $getPostId) {
    id
    link
    owner
    description
    user
    createAt
    comments {
      id
      owner
      body
      createAt
      ownerEmail
    }
    likes {
      id
      owner
      createAt
      ownerEmail
    }
    images {
      id
      filename
      mimetype
      path
      _id
    }
    categories {
      categories
    }
    offertDetails {
      title
      normalPrice
      curentPrice
      body
      periodOfPost
    }
  }
}
`

    // const { loading, error, data } = useLazyQuery(GET_POST);
    const [getPostbyID, { loading, data, error }] = useLazyQuery(GET_POST);

    console.log(data)
    // console.log(error)

    const targetDate = new Date(data?.getPost.createAt);
   
    const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0 });

    const timeCalculate = (targetDate) => {
        const currentTime = new Date();
        const timeDifference = currentTime - targetDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setTimePassed({ days, hours, minutes });
    }
    
    
    
    useEffect(() => {
        getPostbyID({ variables: { getPostId: '64dd43fa7113c9c7b4d22350' } })
      
        if(data){
            timeCalculate(targetDate);

        }



        
    }, [targetDate]);

    return (
        <div className='get-deal-page-container'>
            {loading == true
                ? <Spinner animation="border" className='spinner' />
                : <div className='get-deal-container'>
                    <div className='get-deal-image-container'>
                        here image
                    </div>
                    <div>

                        <div className='post-details-row-one grey' >
                            <span><b ><i className="fa-regular fa-clock"></i> <i>Posted {timePassed.days > 0 ? `${timePassed.days} days,` : ''}  {timePassed.hours > 0 ? `${timePassed.hours}h,` : ''} {timePassed.minutes}m ago </i>  </b> &nbsp; &nbsp;</span>

                        </div>
                    </div>

                </div>}

        </div>
    )
}

export default GetDealPage