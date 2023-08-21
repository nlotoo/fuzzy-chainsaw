import React from 'react'

import './comment-panel.css'

const CommentPanel = ({ comments }) => {

    // console.log(...comments)



    return (
        <div className='comment-panel-container'>
            <span>{comments?.length} Comments</span>


            <div>
                username
            </div>
            <div className='comment-bubble-container'>
                <textarea className='comment-bubble'> What`s on your mind</textarea>
                <div className='send-button-container'>
                    <button className='send-button-comment-bubble'>Send</button>
                </div>
            </div>

            <hr></hr>


            {comments?.length !== -1 ?

                comments?.map((comment, index) => {

                    console.log(comment)
                    let dateObject = new Date(comment.createAt).toLocaleString()
                    return <div className='comment-list-container'>
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



        </div>
    )
}

export default CommentPanel