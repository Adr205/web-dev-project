const express = require('express');
const {addComment, getAllComments} = require('../controllers/commentController');

const router = express.Router();

router.post('/comment', addComment);
router.get('/comments', getAllComments);
// router.get('/comments', async (req, res, next) => {
//     var tasks = await task.find();
//     try {
//         res.status(200).json(tasks)
//     } catch (err) {
//         next(err);
//     }
// })


// router.patch('/edit_comment/:id', async(req, res, next) => {
//     var id = req.params.id;
//     await task.updateOne({_id: id}, req.body);
//     res.redirect('/');
// })

// app.delete('/delete_comment/:id',  async (req,res) =>{

//     var id = req.params.id;
//     await task.remove({_id: id});
//     res.redirect('/');
// })


module.exports = {
    routes: router
};