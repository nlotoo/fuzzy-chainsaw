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

    let [commentOnPage, setCommentOnPage] = useState([])






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
        }).then((result) => {
            // console.log(result.data.createComment)
            toast.success('You create comment')
            let newComent = result.data.createComment



            setCommentOnPage(state => [newComent, ...state])

            setComentBody('')

        }).catch((error) => {

            toast.error('Comment is not created')
            console.log('error e tuk', error)

        })



    }

    const deleteComment = async (event) => {
        event.preventDefault();

        // console.log(event.target.id)



        deleteCommenta({
            variables: {
                postId: postID,
                commentId: event.target.id
            }
        }).then((result) => {


            setCommentOnPage((state) => { return state.filter((comment) => comment.id !== event.target.id) });


        }).catch((error) => {

            toast.error('Comment is not deleted');
            if (error.message === 'Invalid/Expired token') {
                toast.error(`${error.message}: Login again please`);
                window.scrollTo(0, 0);
                switchOffAuthMenu();
            }
            // console.log('error e tuk', error)
        })




    }



    useEffect(() => {

        getPostbyID({ variables: { getPostId: postIDTo } });



        // console.log(commnetData.getPost.comments)

        setCommentOnPage(commnetData?.getPost.comments);







    }, [commnetData])


    return (
        <div className='comment-panel-container'>
            <Toaster />
            <span>{commentOnPage?.length} Comments</span>


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


            {commentOnPage?.length !== -1 ?

                commentOnPage?.map((comment, index) => {
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