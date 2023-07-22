import React from 'react';
import Post from '../Post/Post';
import './allpost.css';
import AsidePost from '../AsidePost/AsidePost';
import { gql } from 'graphql-tag';

import { useQuery } from '@apollo/client'

const AllPost = () => {

    const GET_POSTS_QUERY = gql`
         query {
           getPosts {
             createAt
             description
             id
             images {
               filename
               mimetype
             }
             likes {
               createAt
               id
               owner
               ownerEmail
             }
             link
             owner
             user
             comments {
               body
               createAt
               id
               owner
               ownerEmail
             }
           }
         }
`;

    const { loading, error, data } = useQuery(GET_POSTS_QUERY);

    console.log(loading);
    console.log(data);
    console.log(error);

    return (
        <div className='all-post-page-frame'>

            {loading && <p>Loading...</p>}
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