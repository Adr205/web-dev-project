import React from 'react';
import '../assets/styles/Comment.css';

const Comment = (/*{ user, title, date, comment }*/) => {

    return (
        <>
            <div className="review-container">
                <div className="review-header">
                    <h3 className="review-title">Game very boring</h3>
                    <h4 className="review-user"> Usuario1 <span className="review-date">29 July 2021</span> </h4>
                </div>
                <div className="review-body">
                    <p className="review-body-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus aliquid minima sed exercitationem eius aliquam temporibus, obcaecati repellendus, corrupti impedit voluptates quia saepe voluptatibus. Quaerat similique harum corporis quam! ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat aliquid fugiat eveniet aperiam. Ea hic unde magnam, temporibus accusamus vitae ad sit culpa quasi facilis tenetur ex quam.</p>
                </div>
            </div>

            <div className="review-container">
                <div className="review-header">
                    <h3 className="review-title">Game very boring</h3>
                    <h4 className="review-user"> Usuario2 <span className="review-date">29 June 2021</span> </h4>
                </div>
                <div className="review-body">
                    <p className="review-body-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat aliquid fugiat eveniet aperiam. Ea hic unde magnam, temporibus accusamus vitae ad sit culpa quasi facilis tenetur ex quam.</p>
                </div>
            </div>

            <div className="review-container">
                <div className="review-header">
                    <h3 className="review-title">Game very boring</h3>
                    <h4 className="review-user"> Usuario3 <span className="review-date">29 December 2021</span> </h4>
                </div>
                <div className="review-body">
                    <p className="review-body-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus mollitia voluptate quas laborum, pariatur deleniti facilis, eaque sed architecto harum porro soluta nulla aspernatur molestias accusamus qui atque, itaque quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores, quaerat minima excepturi laborum a nam ducimus esse at nisi, incidunt itaque omnis temporibus consequuntur sunt accusantium ratione quod maiores! ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat aliquid fugiat eveniet aperiam. Ea hic unde magnam, temporibus accusamus vitae ad sit culpa quasi facilis tenetur ex quam.</p>
                </div>
            </div>
        </>
    )
}

export default Comment;