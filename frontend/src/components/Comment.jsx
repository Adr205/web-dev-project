import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../assets/styles/Comment.css';

const Comment = ({ gameId }) => {
    const API_GET = 'http://localhost:5000/api/comments';
    const API = 'http://localhost:5000/api/comment';
    const [comments, setComments] = useState([]);
    const [edit, setEdit] = useState(false);
    const { currentUser } = useAuth();
    const textEdited = useRef();


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

    const editComment = async ( id ) => {
        const data = {
            text: textEdited.current.value
        }

        console.log(data);
        
        const response = await fetch(`http://localhost:5000/api/comment/${id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        await response.json();
    }

    const deleteComment = async (id) => {
        const response = await fetch(`http://localhost:5000/api/comment/${id}`,  {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
        })
        const comment = await response.json();
    }

    const handleEdit = (id) => {
        if (edit === false) {
            setEdit(true)
        } else {
            setEdit(false)
        }

    }

    const handleDelete = (id) => {
        deleteComment(id)
    }

    return (
        <>
            {
                comments.map((comment) => {
                    if (comment.gameId === gameId) {
                        return (
                            <div className="review-container" key={comment.id}>
                                {console.log(edit)}
                                <div className="review-header">
                                    <h3 className="review-title">{comment.title}</h3>
                                    <h4 className="review-user"> {comment.author} <span className="review-date">29 July 2021</span> </h4>
                                </div>
                                <div className="review-body">
                                    {
                                        edit === true ?
                                            <>
                                                <textarea ref={textEdited}>{comment.text}</textarea>
                                                <button onClick={() => editComment(comment.id)} className="options">Done</button>
                                                <button onClick={() => handleEdit(comment.id)} className="options">Cancel</button>
                                            </> :
                                            <p className="review-body-text">{comment.text}</p>
                                    }
                                </div>
                                {/* {console.log(comment.author)}
                                {console.log(currentUser.email)} */}
                                {
                                    comment.author === currentUser.email && edit === false ?
                                        <button onClick={() => handleEdit()} className="options">
                                            <h3>Edit</h3>
                                        </button>:
                                        null
                                }
                                {
                                    comment.author === currentUser.email ?
                                        <button onClick={() => handleDelete(comment.id)} className="options">
                                            <h3>Delete</h3>
                                        </button>:
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