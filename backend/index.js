const express = require('express');
const app = express();

const { config } = require('./config/index');
const api = require('./routes/api.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 

api(app);

app.listen(config.port), () => {
    console.log(`Listening http://localhost:${config.port}`);
}