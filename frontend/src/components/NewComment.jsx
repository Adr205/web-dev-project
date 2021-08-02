import React from 'react';
import '../assets/styles/Comment.css';

const NewComment = () => {

    return (
        <div className="newComment">
            <form className="form" action="" method="post">
                <fieldset>
                    <legend>Your Review</legend>
                    <div className="form-title">
                        <label htmlFor="title">Title:</label>
                        <input type="text" placeholder="Review Title" name="title" id="title" />
                    </div>
                    <div className="rate">
                        <label htmlFor="rate">Rate:</label>
                        <select name="rate" id="rate">
                            <option value=""  selected disabled>Your Rate:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-review">
                        <label htmlFor="comment">Comment:</label>
                        <textarea name="comment" id="comment" placeholder="Your Comment"></textarea>
                    </div>
                    <input className="btn" type="submit" value="Publish" />
                </fieldset>
            </form>
        </div>
    )
}

export default NewComment;