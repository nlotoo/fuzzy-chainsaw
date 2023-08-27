import React, { useState, useEffect, useContext } from 'react'
import { gql, useMutation, useLazyQuery } from '@apollo/client';

import './comment-panel.css'
import { Toaster, toast } from 'react-hot-toast';
import { useStateContext } from '../../../context/StateContext';
const CommentPanel = ({ postIDTo }) => {


    let { switchOffAuthMenu, CreateAccForm } = useStateContext()

    let userToken = localStorage.getItem('userToken');

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

    const [getPostbyID, { loading: commentLoading, data: commnetData, error: commnetError }] = useLazyQuery(GET_POST);

    let [commentOnPage, setCommentOnPage] = useState();



    useEffect(() => {
        getPostbyID({ variables: { getPostId: postIDTo } });


        if (commnetData) {
            setCommentOnPage(commnetData);
        }
    }, [])


    console.log(commentOnPage)
    console.log(commnetData)

    const CREATE_COMMENT = gql`
              mutation Mutation($postId: String, $body: String) {
                  createComment(postID: $postId, body: $body) {
                    id
                    owner
                    body
                    createAt
                    ownerEmail
        }
      }`

    const [createComment, { loading, data, error }] = useMutation(CREATE_COMMENT, {
        context: {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        },
    });


    const DELETE_COMMENT = gql`
    mutation DeleteComment($commentId: ID!, $postId: String) {
            deleteComment(commentId: $commentId, postID: $postId) {
                id
            }
        }`

    const [deleteCommenta, { loading: deleteLoading, data: deleteData, error: errorData }] = useMutation(DELETE_COMMENT, {
        context: {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        },
    });






    const [commentBody, setComentBody] = useState("");
    const [postID, setPostID] = useState(window.location.pathname.split('/')[2]);

    const sendComment = (event) => {
        event.preventDefault();


        createComment({
            variables: {
                postId: postID,
                body: commentBody
            }
        })



        if (error) {
            toast.error('Empty comment')
            if (error.message === 'Invalid/Expired token') {
                toast.error('You need to login again');
                window.scrollTo(0, 0);
                switchOffAuthMenu()
            }
        }

        if (data) {
            toast.success('Comment is send')
            window.location.reload();
        }

    }

    const deleteComment = (event) => {
        event.preventDefault();

        deleteCommenta({
            variables: {
                postId: postID,
                commentId: event.target.id
            }
        })




        if (errorData) {

            toast.error('Comment is not deleted');
            if (errorData.message === 'Invalid/Expired token') {
                toast.error(`${errorData.message}: Login again please`);
                window.scrollTo(0, 0);
                switchOffAuthMenu();
            }
        }

        if (deleteData) {
            toast.success('Comment is deleted')
            window.location.reload();
        }



    }



    return (
        <div className='comment-panel-container'>
            <Toaster />
            <span>{commnetData?.getPost.comments?.length} Comments</span>


            <div>
                {localStorage.getItem('email')}
            </div>
            <div className='comment-bubble-container'>
                <form onSubmit={sendComment}>
                    <textarea className='comment-bubble' type="text"
                        value={commentBody}
                        onChange={(e) => setComentBody(e.target.value)}
                    > What`s on your mind</textarea>
                    <div className='send-button-container'>
                    </div>
                    <input type="submit" className='send-button-comment-bubble' value={'Send'} />
                </form>
            </div>

            <hr></hr>


            {commnetData?.getPost.comments?.length !== -1 ?

                commnetData?.getPost.comments?.map((comment, index) => {
                    // console.log(comment)
                    let dateObject = new Date(comment.createAt).toLocaleString()
                    return <div className='comment-list-container'>
                        {comment.ownerEmail === localStorage.getItem('email') &&
                            <div id={`${comment.id}`} onClick={deleteComment} className='x-delete-comment'>X</div>
                        }
                        <span>{comment.ownerEmail}</span>
                        <span>{dateObject}</span>

                        <p>
                            {comment.body}
                        </p>
                        <hr></hr>
                    </div>
                })
                : ''


            }



        </div >
    )
}

export default CommentPanel