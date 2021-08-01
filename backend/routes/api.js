const express = require('express');
const task = require('../model/task');

const api = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.get('/comments', async (req, res, next) => {
        var tasks = await task.find();
        try {
            res.status(200).json(tasks)
        } catch (err) {
            next(err);
        }
    })

    router.post('/add_comment', async (req, res, next) => {
        var Task = new task(req.body);
        try {
            await Task.save();
            res.redirect('/');
        } catch (err) {
            next(err);
        }
    })

    router.patch('/edit_comment/:id', async(req, res, next) => {
        var id = req.params.id;
        await task.updateOne({_id: id}, req.body);
        res.redirect('/');
    })

    app.delete('/delete_comment/:id',  async (req,res) =>{

        var id = req.params.id;
        await task.remove({_id: id});
        res.redirect('/');
    })
}

module.exports = api;