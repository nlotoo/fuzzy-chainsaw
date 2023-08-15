import React, { useState, useEffect } from 'react'
import './post.css'



const Post = (props) => {

    console.log(props.props.images[0].path)


    const targetDate = new Date(props.props.createAt);
    const [timePassed, setTimePassed] = useState({ days: 0, hours: 0, minutes: 0 });

    const timeCalculate = () => {
        const currentTime = new Date();
        const timeDifference = currentTime - targetDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setTimePassed({ days, hours, minutes });
    }

    useEffect(() => {
        timeCalculate();
    }, []);




    return (
        <div className='post-container'>
            {/* <img src='https://exxpozed-image.de/exxpozed-res.cloudinary.com/image/upload/q_auto:eco,w_300,h_300,c_pad,b_white,d_ph.gif,e_sharpen/v20230109110422/catalog/rab-m-electron-pro-jacket-20b-rab-qdn-85-marmalade-1.jpg' className='grid-item1 post-image' /> */}
            <img src={require(`/uploads/9a6ebd3f-d1ff-4e14-823b-71ad8a2ba853-cliare duck.png`)} className='grid-item1 post-image' />
                


            <div className='post-details-row-one grey' >
                <span><b ><i className="fa-regular fa-clock"></i> <i>Posted {timePassed.days}days, {timePassed.hours}h, {timePassed.minutes}m ago </i>  </b> &nbsp; &nbsp;</span>

            </div>


            <div className='post-details-row-two'>
                <h3>John Lewis Zip Pocket Fleece (Navy or Khaki) C&C // heading {props.props.offertDetails.title}</h3>
                <div>
                    <span className='price-post'>£{props.props.offertDetails.curentPrice}</span> | <span> <b>Amazon</b> | Deals</span>
                </div>
            </div>

            <div className='post-details-row-three' >
                <div > <b><i className='grey'>Created by: </i></b>
                        {props.props.owner}
                </div>

                <div>
                    <button className='post-comment-btn'>
                        <i className="fa-regular fa-comments"></i>
                    </button>
                    <button className='get-deal-btn'>Get deal </button>
                </div>

            </div>



        </div>
    )
}

export default Post