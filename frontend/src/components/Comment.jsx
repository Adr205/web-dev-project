import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../assets/styles/Comment.css';

const Comment = ({ gameId }) => {
    const API_GET = 'http://localhost:5000/api/comments';
    const API = 'http://localhost:5000/api/comment';
    const [comments, setComments] = useState([]);
    const [edit, setEdit] = useState(false);
    const { currentUser } = useAuth();

    const getComments = async (API_GET) => {
        const response = await fetch(API_GET);
        const comments = await response.json();
        setComments(comments)
        // console.log(gameInfo)
    }

    useEffect(() => {
        // getPhotos(lPhotos);
        getComments(API_GET);
    }, []);

    const deleteComment = async (API, id) => {
        const response = await fetch(`${API}/${id}`,  {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
        })
        const comment = await response.json();
    }

    const handleEdit = (id) => {
        // alert(id) 
    }

    const handleDelete = (id) => {
        deleteComment(API, id)
    }

    return (
        <>
            {
                comments.map((comment) => {
                    if (comment.gameId === gameId) {
                        return (
                            <div className="review-container" key={comment.id}>
                                {/* {console.log(comment)} */}
                                <div className="review-header">
                                    <h3 className="review-title">{comment.title}</h3>
                                    <h4 className="review-user"> {comment.author} <span className="review-date">29 July 2021</span> </h4>
                                </div>
                                <div className="review-body">
                                    <p className="review-body-text">{comment.text}</p>
                                </div>
                                {/* {console.log(comment.author)}
                                {console.log(currentUser.email)} */}
                                {
                                    comment.author === currentUser.email ?
                                        <a onClick={handleEdit(comment.id)} href="" className="options">
                                            <h3>Edit</h3>
                                        </a>:
                                        null
                                }
                                {
                                    comment.author === currentUser.email ?
                                        <a onClick={handleDelete(comment.id)} href="" className="options">
                                            <h3>Delete</h3>
                                        </a>:
                                        null
                                }
                            </div>
                        )
                    }
                    // console.log(comment.text);
                })
            }

            {/* {console.log(comments.length)} */}

            {/* {
                comments.length < 1 ?
                    <div className="review-container">
                        <h2>Be the first to post a review for this game!</h2>
                    </div> :
                    null
            } */}
        </>
    )
}

export default Comment;