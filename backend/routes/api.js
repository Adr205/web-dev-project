const express = require('express');

const api = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.get('/hello-world', async (req, res, next) => {
        try {
            res.status(200).json({
                hello: "hello to the app"
            })
        } catch (err) {
            next(err);
        }
    })
}

module.exports = api;