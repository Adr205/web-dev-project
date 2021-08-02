import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Comment.css';

const NewComment = ({ author, gameId, id }) => {
    const API = 'http://localhost:5000/api/comment';
    const titleRef = useRef();
    const commentRef = useRef();
    const [error, setError] = useState([]);

    const postComment = async (API, title, text, author, gameId) => {
        const data = {
            title: title, 
            text: text,
            author: author,
            gameId: gameId
        }
        console.log(data);
        
        const response = await fetch(API, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const comment = await response.json();
        console.log(comment)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            await postComment(API, titleRef.current.value, commentRef.current.value, author, gameId);
        } catch {
            setError('Failed to post comment');
        }
    }

    return (
        <div className="newComment">
            {/* {error && alert(error)} */}
            <form className="form" method="post" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Your Review</legend>
                    <div className="form-title">
                        <label htmlFor="title">Title:</label>
                        <input type="text" placeholder="Review Title" name="title" id="title" ref={titleRef} />
                    </div>
                    <div className="rate">
                        <label htmlFor="rate">Rate:</label>
                        <select name="rate" id="rate">
                            <option value="" selected disabled>Your Rate:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-review">
                        <label htmlFor="comment">Comment:</label>
                        <textarea name="comment" id="comment" placeholder="Your Comment" ref={commentRef}></textarea>
                    </div>
                    <input className="btn" type="submit" value="Publish" />
                </fieldset>
            </form>
        </div>
    )
}

export default NewComment;