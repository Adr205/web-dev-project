'use strict';

const firebase = require('../db');
const Comment = require('../models/comment');
const firestore = firebase.firestore();

const addComment = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('comments').doc().set(data);
        res.send('Record saved succesfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllComments = async (req, res, next) => {
    try {
        const comments = await firestore.collection('comments');
        const data = await comments.get();
        const commentsArray = [];

        if (data.empty) {
            res.status(404).send("This game doesn't have comments, be the first to comment!");
        } else {
            data.forEach(doc => {
                const comment = new Comment(
                    doc.id,
                    doc.data().date,
                    doc.data().author,
                    doc.data().text,
                    doc.data().edit
                );
                commentsArray.push(comment);
            });
            res.send(commentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addComment,
    getAllComments
}