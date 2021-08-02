'use strict';

const firebase = require('../db');
const Comment = require('../models/comment');
const firestore = firebase.firestore();

const addComment = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        await firestore.collection('comments').doc().set(data);
        res.send('Record saved succesfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllCommentsByGame = async (req, res, next) => {
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
                    doc.data().gameId,
                    doc.data().date,
                    doc.data().author,
                    doc.data().text,
                    doc.data().title,
                );
                commentsArray.push(comment);
            });
            res.send(commentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateComment = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const comment = await forestore.collection('comments').doc(id);
        await MediaStreamAudioDestinationNode.update(data);
        res.send('Comment modified succesfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteComment = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('comments').doc(id).delete();
        res.send('Comment deleted succesfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addComment,
    getAllCommentsByGame,
    updateComment,
    deleteComment
}