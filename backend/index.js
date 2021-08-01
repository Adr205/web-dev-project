const express = require('express');
const api = require('./routes/api');
const morgan = require('morgan');
const config = require('./config/index');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');


// connection to Mongo db
mongoose.connect(config.db.connectionUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));


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