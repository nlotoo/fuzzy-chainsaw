import React from 'react'

import './comment-panel.css'

const CommentPanel = () => {
    return (
        <div className='comment-panel-container'>
            <span>123 Comments</span>


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
            <div className='comment-list-container'>
                <span>owner</span>
                <span>time ago posted</span>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi officiis, beatae minima nam quidem inventore omnis temporibus sunt id porro.
                </p>
                <hr></hr>
            </div>


        </div>
    )
}

export default CommentPanel