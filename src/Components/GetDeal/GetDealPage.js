import React, { useEffect, useState } from 'react'

import './getDealpage.css'
import { gql, useLazyQuery } from '@apollo/client';

// import '../../public/uploads'

import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import AboutPanel from './AboutPanel/AboutPanel';
import CommentPanel from './CommentPanel/CommentPanel';


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


  const [getPostbyID, { loading, data, error }] = useLazyQuery(GET_POST);

  // console.log(window.location.pathname.split('/')[2])
  console.log(data?.getPost)



  const targetDate = new Date(data?.getPost.createAt);

  const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0 });

  const timeCalculate = (targetDate) => {
    console.log(targetDate)
    const currentTime = new Date();
    const timeDifference = currentTime - targetDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    setTimePassed({ days, hours, minutes });
  }



  useEffect(() => {
    getPostbyID({ variables: { getPostId: window.location.pathname.split('/')[2] } })

    if (data) {
      timeCalculate(targetDate);

    }


  }, [data]);

  return (
    <div className='get-deal-page-container'>
      {loading == true
        ? <Spinner animation="border" className='spinner' />
        : <div className='get-deal-container'>
          <div className='get-deal-image-container'>
            {data !== undefined ?
              <img src={require(`../../public/uploads/${data?.getPost.images[0].path.split('/')[6]}`)} alt='get-details' className='image-get-details' />
              :
              <Spinner animation="grow" />

            }
          </div>



          <div className='get-deal-detail'>

            <h1>{data?.getPost.offertDetails.title}</h1>

            <h2 className='price-heading-get-deails' >£<s>{data?.getPost.offertDetails.normalPrice}</s> | £ {data?.getPost.offertDetails.curentPrice}</h2>


            <button onClick={() => window.location.replace(`${data?.getPost.link}`)} className='get-deal-btn ' >Get deal</button>

            <div className='deal-info-container'>
              <div>
                <span className='grey'><b ><i className="fa-regular fa-clock"></i> <i>Posted  {timePassed.days > 0 ? `${timePassed.days} days,` : ''}  {timePassed.hours > 0 ? `${timePassed.hours}h,` : ''} {timePassed.minutes}m ago </i>  </b> &nbsp; &nbsp;</span>
              </div>
              <div className='deal-info-container-last-child'> <b><i className='grey'>Shared by: </i></b>
                {data?.getPost.owner}
              </div>


            </div>
          </div>




        </div>}


      <AboutPanel></AboutPanel>

      <CommentPanel></CommentPanel>




    </div>
  )
}

export default GetDealPage