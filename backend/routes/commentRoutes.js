const express = require('express');
const { addComment,
        getAllCommentsByGame,
        updateComment,
        deleteComment
    } = require('../controllers/commentController');

const router = express.Router();

router.post('/comment', addComment);
router.get('/comments', getAllCommentsByGame);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

module.exports = {
    routes: router
};