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

module.exports = {
    addComment
}