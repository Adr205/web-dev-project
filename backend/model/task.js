const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TaskSchema = Schema ({
    id: String,
    date: Date,
    autor: String,
    message: String,
    edit: {
        Type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);