import React from 'react';
import Post from '../Post/Post';
import './allpost.css';
import AsidePost from '../AsidePost/AsidePost';


const AllPost = () => {
    return (
        <div className='all-post-page-frame'>
            <div className='post-collum'>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
            <div className='aside-section'>
                <h3 className='aside-heading grey'>Hottest deal</h3> 
               <AsidePost></AsidePost>
               <AsidePost></AsidePost>
               <AsidePost></AsidePost>
               <AsidePost></AsidePost>



            </div>
            

        </div>
    )
}

export default AllPost