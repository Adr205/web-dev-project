import React, { useEffect, useState } from 'react';
import '../assets/styles/Comment.css';

const Comment = ({ id }) => {
    const API = 'http://localhost:5000/api/comments';
    const [comments, setComments] = useState([]);

    const getComments = async (API) => {
        const response = await fetch(API);
        const comments = await response.json();
        setComments(comments)
        // console.log(gameInfo)
    }

    useEffect(() => {
        // getPhotos(lPhotos);
        getComments(API);
    }, []);

    return (
        <>
            {
                comments.map((comment) => {
                    return (
                        <div className="review-container">
                            <div className="review-header">
                                <h3 className="review-title">{comment.title}</h3>
                                <h4 className="review-user"> {comment.author} <span className="review-date">29 July 2021</span> </h4>
                            </div>
                            <div className="review-body">
                                <p className="review-body-text">{comment.text}</p>
                            </div>
                        </div>
                    )
                    // console.log(comment.text);
                })
            }
            {console.log(comments)}
        </>
    )
}

export default Comment;