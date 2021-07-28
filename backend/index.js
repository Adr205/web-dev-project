const express = require('express');
const api = require('./routes/api');
const morgan = require('morgan');
const config = require('./config/index');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use(morgan('dev'));
api(app);

app.get('/', (req, res) => {
    res.send('FUNCIONAAAA');
});

app.listen(config.port), () => {
    console.log(`Listening http://localhost:${config.port}`);
}