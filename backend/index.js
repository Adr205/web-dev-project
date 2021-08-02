'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json()); 
app.use(morgan('dev'));

app.use('/api', commentRoutes.routes);

app.get('/', (req, res) => {
    res.send('FUNCIONAAAA');
});

app.listen(config.port), () => {
    console.log(`Listening http://localhost:${config.port}`);
}