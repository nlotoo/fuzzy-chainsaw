import React from 'react'
import './post.css'
const Post = () => {
    return (
        <div className='post-container'>
            <img src='https://exxpozed-image.de/exxpozed-res.cloudinary.com/image/upload/q_auto:eco,w_300,h_300,c_pad,b_white,d_ph.gif,e_sharpen/v20230109110422/catalog/rab-m-electron-pro-jacket-20b-rab-qdn-85-marmalade-1.jpg' className='grid-item1 post-image' />


            <div className='post-details-row-one grey' >
                <span><b ><i className="fa-regular fa-clock"></i> <i>Posted 12h,11m ago</i>  </b> &nbsp; &nbsp;</span>

            </div>


            <div className='post-details-row-two'>
                <h3>John Lewis Zip Pocket Fleece (Navy or Khaki) C&C</h3>
                <div>
                    <span className='price-post'>£14.99</span> | <span> <b>Amazon</b> | Deals</span>
                </div>
            </div>

            <div className='post-details-row-three' >
                <div > <b><i className='grey'>Created by: </i></b>
                    nlotoo93
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